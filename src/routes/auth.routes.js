import express from 'express';
import controller from '../controllers/auth.controller.js';
import { AuthMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', controller.register);

router.post('/login', controller.login);

router.post('/refresh-token', controller.refreshToken);

router.post('/logout', AuthMiddleware.verifyToken, controller.logout);

export default router;
