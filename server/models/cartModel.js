import mongoose, { Schema } from 'mongoose';

const cartItemSchema = new Schema(
	{
		productId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
			default: 1,
		},
	},
	{ _id: false }
);

const cartSchema = new Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
			unique: true,
		},
		items: [cartItemSchema],
	},
	{ timestamps: true }
);

const cartModel = mongoose.model('Cart', cartSchema);
export default cartModel;
