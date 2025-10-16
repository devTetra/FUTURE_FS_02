import cartModel from '../models/cartModel.js';
import productModel from '../models/productModel.js';

export const addToCart = async (req, res) => {
	try {
		const userId = req.user;
		const { productId, quantity = 1 } = req.body;

		if (!productId || !quantity) throw new Error('Product ID and quantity are required.');

		const product = await productModel.findById(productId);
		if (!product) return res.status(404).json({ message: 'Product not found!', success: false, error: true });

		let cart = await cartModel.findOne({ userId });
		if (!cart) {
			cart = await cartModel.create({ userId, items: [{ productId, quantity }] });
		} else {
			const item = cart.items.find(item => item.productId.toString() === productId);
			if (item) item.quantity += quantity;
			else cart.items.push({ productId, quantity });
			await cart.save();
		}
		res
			.status(201)
			.json({ data: cart, message: 'Product added to cart successfully!', success: true, error: false });
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};

export const getUserCart = async (req, res) => {
	try {
		const userId = req.user;
		const cart = await cartModel.findOne({ userId }).populate('items.productId');
		if (!cart) return res.status(200).json({ message: 'Cart is empty!', success: true, error: false });
		res.status(200).json({ data: cart, message: 'Cart gotten successfully!', success: true, error: false });
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};

export const updateCartItem = async (req, res) => {
	try {
		const userId = req.user;
		const { productId, quantity } = req.body;
		if (!productId || !quantity) throw new Error('Product ID and quantity are required.');

		let cart = await cartModel.findOne({ userId });
		if (!cart) return res.status(404).json({ message: 'Cart not found!', success: false, error: true });

		const item = cart.items.find(item => item.productId.toString() === productId);
		if (!item)
			return res.status(404).json({ message: 'Item not found in cart!', success: false, error: true });
		if (quantity <= 0) cart.items = cart.items.filter(item => item.productId.toString() !== productId);
		else item.quantity = quantity;
		await cart.save();
		res
			.status(200)
			.json({ data: cart, message: 'Item quantity updated successfully!', success: true, error: false });
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};

export const removeCartItem = async (req, res) => {
	try {
		const userId = req.user;
		const { productId } = req.params;

		const cart = await cartModel.findOne({ userId });
		if (!cart) return res.status(404).json({ message: 'Cart not found!', success: false, error: true });

		cart.items = cart.items.filter(item => item.productId.toString() !== productId);

		await cart.save();
		res.status(200).json({ data: cart, message: 'Item removed from cart', success: true, error: false });
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};
