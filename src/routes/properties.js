import { Router } from 'express';
import SizeController from '../controllers/size.js';
import { AuthMiddleware } from '../middlewares/auth.js';
import { ROLE } from '../common/constant/role.js';
import PropertiesController from '../controllers/properties.js';

const route = Router();

route.get('/get-all', PropertiesController.getAll);

export default route;
