import { Router } from 'express';
import BuyOrderController from '../controllers/buyOrder.js';
import { AuthMiddleware } from '../middlewares/auth.js';
import { ROLE } from '../common/constant/role.js';

const route = Router();

route.post('/create', BuyOrderController.create);

route.patch('/update', BuyOrderController.update);

route.delete('/delete', BuyOrderController.delete);

route.post('/delete-all', BuyOrderController.deleteAll);

route.get('/get-all', BuyOrderController.getAll);

route.get('/get/:id', BuyOrderController.getById);

export default route;
