import { Router } from 'express';
import CustomerController from '../controllers/customer.js';
import { AuthMiddleware } from '../middlewares/auth.js';
import { ROLE } from '../common/constant/role.js';

const route = Router();

route.post('/create', CustomerController.create);

route.patch('/update', CustomerController.update);

route.delete('/delete/:id', CustomerController.deleteById);

route.get('/get-all', CustomerController.getAll);

route.get('/get/:id', CustomerController.getById);

export default route;
