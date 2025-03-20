import CategoryService from '../service/category.service.js';
import ProductService from '../service/product.service.js';

class ProductController {
    async create(req, res) {
        try {
            const validCategory = await CategoryService.getById(req.body.categoryId);
            if (!validCategory) {
                return res.status(400).json({
                    message: "categoryId không tồn tại, vui lòng kiểm tra lại!"
                });
            }
    
            const product = await ProductService.create(req.body);
            res.status(201).json(product);
            
        } catch (error) {
            console.error("Lỗi:", error.message);
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const products = await ProductService.getAll();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const product = await ProductService.getById(req.params.id);
            if (!product) return res.status(404).json({ message: 'Product not found' });
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const product = await ProductService.update(req.params.id, req.body);
            res.status(200).json(product);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await ProductService.delete(req.params.id);
            res.status(200).json({ message: 'Product deleted' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default new ProductController();
