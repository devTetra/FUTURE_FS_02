import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
	{
		name: { type: String, required: true, unique: true },
		description: { type: String, required: true },
		category: { type: String, required: true },
		image: { type: String, required: true },
		price: { type: Number, required: true, min: [0, 'Price cannot be negative'] },
		rating: { type: Number, required: true },
		stock: { type: Number, required: true },
		warrantyInformation: { type: String, required: true },
		shippingInformation: { type: String, required: true },
	},
	{ timestamps: true }
);
const productModel = mongoose.model('Product', productSchema);
export default productModel;
