import { Router } from 'express';
import UserController from '../controllers/user.controller.js';
import { AuthMiddleware } from '../middlewares/auth.middleware.js';
import { ROLE } from '../common/constant/role.js';

const route = Router();

route.post('/create', UserController.create);

route.patch('/update', UserController.update);

route.delete('/delete', AuthMiddleware.authorize(ROLE.ADMIN), UserController.delete);

route.get('/get-all', AuthMiddleware.authorize(ROLE.ADMIN), UserController.getAll);

route.get('/get-all-2', AuthMiddleware.authorize(ROLE.USER), UserController.getAll);

route.get('/get/:id', AuthMiddleware.authorize(ROLE.ADMIN), UserController.getById);

export default route;
