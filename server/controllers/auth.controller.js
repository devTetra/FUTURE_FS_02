import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { compare, genSalt, hash } from 'bcrypt';

// Sign up controller
export const signUp = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		if (!name) throw new Error('Please provide name!');
		if (!email) throw new Error('Please provide email!');
		if (!password) throw new Error('Please provide password!');

		const exists = await userModel.findOne({ email });
		if (exists) throw new Error('Account already exists!');
		const salt = await genSalt(10);
		const hashedPassword = await hash(password, salt);
		if (!hashedPassword) throw new Error('Something is wrong!');
		const payload = { ...req.body, password: hashedPassword };
		const userData = await userModel.create(payload);
		res.status(201).json({
			data: userData,
			message: 'Account created successfully!',
			success: true,
			error: false,
		});
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};

// Log in controller
export const logIn = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email) throw new Error('Please provide email!');
		if (!password) throw new Error('Please provide password!');

		const user = await userModel.findOne({ email });
		if (!user) throw new Error('User not found');

		const checkedPassword = await compare(password, user.password);
		if (checkedPassword) {
			const tokenData = {
				_id: user._id,
				email: user.email,
			};
			const token = jwt.sign(tokenData, process.env.SECRET, { expiresIn: '8h' });
			const tokenOption = {
				httpOnly: true,
				secure: true,
			};

			res
				.cookie('token', token, tokenOption)
				.status(200)
				.json({ data: token, message: 'Logged in succesfully!', success: true, error: false });
		} else throw new Error('Incorrect credentials!');
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};

// Log out controller
export const logOut = async (req, res) => {
	try {
		res.clearCookie('token', {
			httpOnly: true,
			secure: true,
		});
		res.status(200).json({ message: 'Logged out successfully!', success: true, error: false });
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};
