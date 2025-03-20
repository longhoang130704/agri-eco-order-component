import express from 'express';

import CategoryController from '../controller/category.controller.js';

const categoryRouter = express.Router();

categoryRouter.post('/', CategoryController.create);
categoryRouter.get('/', CategoryController.getAll);
categoryRouter.get('/:id', CategoryController.getById);
categoryRouter.put('/:id', CategoryController.update);
categoryRouter.delete('/:id', CategoryController.delete);

export default categoryRouter;