import mongoose from 'mongoose';
import productModel from '../models/productModel.js';

export const createProduct = async (req, res) => {
	try {
		const {
			name,
			description,
			category,
			image,
			price,
			rating,
			stock,
			warrantyInformation,
			shippingInformation,
		} = req.body;

		if (!name) throw new Error('Please provide name!');
		if (!description) throw new Error('Please provide description!');
		if (!category) throw new Error('Please provide category!');
		if (!image) throw new Error('Please provide image!');
		if (!price) throw new Error('Please provide price!');
		if (!rating) throw new Error('Please provide rating!');
		if (!stock) throw new Error('Please provide stock!');
		if (!warrantyInformation) throw new Error('Please provide warranty information!');
		if (!shippingInformation) throw new Error('Please provide shipping information!');

		const exists = await productModel.findOne({ name });
		if (exists) throw new Error('Product already exists!');
		const product = {
			name,
			description,
			category,
			image,
			price,
			rating,
			stock,
			warrantyInformation,
			shippingInformation,
		};
		const productData = await productModel.create(product);
		res
			.status(201)
			.json({ data: productData, message: 'Product created successfully!', success: true, error: false });
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};

export const getProducts = async (req, res) => {
	try {
		const products = await productModel.find().sort({ createdAt: 'asc' });
		res
			.status(200)
			.json({ data: products, message: 'Products gotten successfully!', success: true, error: false });
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};

export const getProduct = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid) {
			return res.status(404).json({ message: "Product doesn't exist", success: false, error: true });
		}
		const product = await productModel.findById(id);
		if (!product) throw new Error("Product doesn't exist");
		res
			.status(200)
			.json({ data: product, message: 'Product detail gotten successfully!', success: true, error: false });
	} catch (err) {
		res.status(400).json({ message: err.message || err, success: false, error: true });
	}
};
