import express from 'express';

import InventoryController from '../controller/inventory.controller.js';

const InventoryRouter = express.Router();

InventoryRouter.post('/', InventoryController.create);
InventoryRouter.get('/', InventoryController.getAll);
InventoryRouter.get('/:id', InventoryController.getById);
InventoryRouter.put('/:id', InventoryController.update);
InventoryRouter.delete('/:id', InventoryController.delete);

export default InventoryRouter;