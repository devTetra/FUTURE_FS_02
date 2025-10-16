import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import { connectDB } from './config/db.config.js';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.routes.js';
import user from './routes/user.routes.js';
import product from './routes/product.routes.js';
import cart from './routes/cart.routes.js';

const app = express();

configDotenv();

app.use(
	cors({
		origin: process.env.CLIENT_URL || 'http://localhost:5173',
		credentials: true,
	})
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/product', product);
app.use('/api/cart', cart);

// Listen for request
connectDB().then(() => {
	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () => {
		console.log(`Listening on port: ${PORT}`);
	});
});
