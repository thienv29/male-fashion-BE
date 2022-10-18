import { Router } from 'express';
import ProductController from '../controllers/product.js';

const route = Router();

route.post('/create', ProductController.create);

route.patch('/update', ProductController.update);

route.delete('/delete', ProductController.delete);

route.post('/delete-all', ProductController.deleteAll);

route.get('/get-all', ProductController.getAll);

route.get('/get/:id', ProductController.getById);

export default route;