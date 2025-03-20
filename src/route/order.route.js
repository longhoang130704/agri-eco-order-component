import express from 'express';

import OrderController from '../controller/order.controller.js';

const OrderRouter = express.Router();

OrderRouter.post('/', OrderController.create);
OrderRouter.get('/', OrderController.getAll);
OrderRouter.get('/:id', OrderController.getById);
OrderRouter.put('/:id', OrderController.update);
OrderRouter.delete('/:id', OrderController.delete);

export default OrderRouter;