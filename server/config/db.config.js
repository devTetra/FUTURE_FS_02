import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';

configDotenv();
const dbURI = process.env.MONGODB_URI;
export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(dbURI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (err) {
		console.error(`${err.msg}\nDatabase connection failed!`);
	}
};
