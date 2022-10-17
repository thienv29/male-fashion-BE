import { Router } from 'express';
import CategoryController from '../controllers/category.js';
import { AuthMiddleware } from '../middlewares/auth.js';
import { ROLE } from '../common/constant/role.js';

const route = Router();

route.post('/create', CategoryController.create);

route.patch('/update', CategoryController.update);

route.delete('/delete', CategoryController.delete);

route.post('/delete-all', CategoryController.deleteAll);

route.get('/get-all', AuthMiddleware.authorize(ROLE.ADMIN), CategoryController.getAll);

route.get('/get/:id', CategoryController.getById);

export default route;
