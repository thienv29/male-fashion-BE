import { Router } from 'express';
import SizeController from '../controllers/size.js';
import { AuthMiddleware } from '../middlewares/auth.js';
import { ROLE } from '../common/constant/role.js';

const route = Router();

route.post('/create',AuthMiddleware.authorize(ROLE.ADMIN), SizeController.create);

route.patch('/update', AuthMiddleware.authorize(ROLE.ADMIN), SizeController.update);

route.delete('/delete', AuthMiddleware.authorize(ROLE.ADMIN), SizeController.delete);

route.get('/get-all', AuthMiddleware.authorize(ROLE.ADMIN), SizeController.getAll);

route.get('/get/:id', AuthMiddleware.authorize(ROLE.ADMIN), SizeController.getById);

export default route;
