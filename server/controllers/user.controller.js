import userModel from '../models/userModel.js';

export const Details = async (req, res) => {
	try {
		const user = await userModel.findById(req.user);

		res.status(200).json({ message: user, success: true, error: false });
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};
