import { Router } from 'express';
import UsersController from './controllers/user.controller';

import errorHandler from './middleware/error-handler';
import { validateTransactions, validateSingleTransaction } from './middleware/validator';

const routes = new Router();

routes.get('/api/users/transactions', [validateTransactions], UsersController.transactions)
routes.get('/api/users/transaction/:id', UsersController.transaction)
routes.patch('/api/users/transaction', [validateSingleTransaction], UsersController.updateTransaction)

routes.use(errorHandler);

export default routes;
