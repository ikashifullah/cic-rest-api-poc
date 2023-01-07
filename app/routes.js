import { Router } from 'express';
import UsersController from './controllers/user.controller';

import errorHandler from './middleware/error-handler';

const routes = new Router();

// Users
routes.post('/api/users/register', UsersController.register);
routes.post('/api/users/register', UsersController.login);
routes.get('/api/users/transactions', UsersController.transactions)

routes.use(errorHandler);

export default routes;
