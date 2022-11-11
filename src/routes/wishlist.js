import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.js';
import { ROLE } from '../common/constant/role.js';
import WishlistController from '../controllers/wishlist.js';

const route = Router();

route.post('/create',AuthMiddleware.authorize(ROLE.CUSTOMER), WishlistController.create);

route.patch('/update', WishlistController.update);

route.delete('/delete', WishlistController.delete);

route.post('/delete-all', WishlistController.deleteAll);

route.get('/get-all',  WishlistController.getAll);

route.get('/get/:id', WishlistController.getById);

export default route;
