import { Router } from 'express';
import { authToken } from '../middleware/authToken.js';
import { addToCart, getUserCart, removeCartItem, updateCartItem } from '../controllers/cart.controller.js';

const router = Router();

router.use(authToken);

router.post('/', addToCart);
router.get('/', getUserCart);
router.patch('/', updateCartItem);
router.delete('/:productId', removeCartItem);

export default router;
