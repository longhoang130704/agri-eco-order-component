import express from 'express';

import OrderDetailController from '../controller/orderDetail.controller.js';

const orderDetailRouter = express.Router();

orderDetailRouter.post('/', OrderDetailController.create);
orderDetailRouter.get('/', OrderDetailController.getAll);
orderDetailRouter.get('/:id', OrderDetailController.getById);
orderDetailRouter.put('/:id', OrderDetailController.update);
orderDetailRouter.delete('/:id', OrderDetailController.delete);

export default orderDetailRouter;