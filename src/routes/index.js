import { Router } from 'express';
import user from './user.js';
import auth from './auth.js';
import customer from './customer.js';
import color from './color.js';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/customer', customer);
routes.use('/staff', customer);
routes.use('/color', color);
routes.get('/', (req, res) => {
    res.send('Home');
});

export default routes;
