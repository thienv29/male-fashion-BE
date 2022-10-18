import { Router } from 'express';
import SizeController from '../controllers/size.js';
import { AuthMiddleware } from '../middlewares/auth.js';
import { ROLE } from '../common/constant/role.js';

const route = Router();

route.post('/create', SizeController.create);

route.patch('/update', SizeController.update);

route.delete('/delete', SizeController.delete);

route.post('/delete-all', SizeController.deleteAll);

route.get('/get-all', AuthMiddleware.verifyToken, SizeController.getAll);

route.get('/get/:id', SizeController.getById);

export default route;
