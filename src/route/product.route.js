import express from 'express';

import ProductController from '../controller/product.controller.js';

const productRouter = express.Router();

// productRouter.get('/', (req, res) => {
//     res.status(200).json({
//         message: "ordedr is still runnung"
//     })
// });

productRouter.post('/', ProductController.create);
productRouter.get('/', ProductController.getAll);
productRouter.get('/:id', ProductController.getById);
productRouter.put('/:id', ProductController.update);
productRouter.delete('/:id', ProductController.delete);

export default productRouter;