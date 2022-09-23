import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

const route = Router();

route.post('/create', UserController.create);

route.patch('/update', UserController.update);

route.delete('/delete', UserController.delete);

route.get('/get-all', UserController.getAll);

route.get('/get/:id', UserController.getById);

export default route;
