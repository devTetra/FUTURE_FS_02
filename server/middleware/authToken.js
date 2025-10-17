import jwt from 'jsonwebtoken';

export const authToken = (req, res, next) => {
	try {
		const token = req.cookies?.token;
		console.log(token);

		if (!token) {
			return res
				.status(401)
				.json({ message: 'Authentication required, please log in!', succcess: false, error: true });
		}
		jwt.verify(token, process.env.SECRET, (err, decoded) => {
			if (err) console.log(`Authentication error: ${err}`);
			req.user = decoded._id;
			next();
		});
	} catch (err) {
		res.status(400).json({ message: err.message || err, data: [], succcess: false, error: true });
	}
};
