import { Router } from 'express';
import { Details } from '../controllers/user.controller.js';
import { authToken } from '../middleware/authToken.js';

const router = Router();

router.get('/details', authToken, Details);

export default router;
