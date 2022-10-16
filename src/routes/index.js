import { Router } from 'express';
import user from './user.js';
import auth from './auth.js';
import customer from './customer.js';
import color from './color.js';
import category from './category.js';
import size from './size.js';
import supplier from './supplier.js';
import product from './product.js';
import properties from './properties.js';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/customer', customer);
routes.use('/staff', customer);
routes.use('/color', color);
routes.use('/category', category);
routes.use('/size', size);
routes.use('/supplier', supplier);
routes.use('/product', product);
routes.use('/properties', properties);
routes.get('/', (req, res) => {
    res.send('Home');
});

export default routes;
