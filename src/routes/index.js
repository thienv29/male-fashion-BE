import { Router } from 'express';
import user from './user.routes.js';
import auth from './auth.routes.js';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.get('/', (req, res) => {
    res.send('Home');
});

export default routes;
