import CategoryService from "../service/category.service.js";

class CategoryController {
    async create(req, res) {
        try {
            const category = await CategoryService.create(req.body);
            res.status(201).json(category);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const categories = await CategoryService.getAll();
            res.status(200).json(categories);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const category = await CategoryService.getById(req.params.id);
            if (!category) return res.status(404).json({ message: 'Category not found' });
            res.status(200).json(category);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const category = await CategoryService.update(req.params.id, req.body);
            res.status(200).json(category);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await CategoryService.delete(req.params.id);
            res.status(200).json({ message: 'Category deleted' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default new CategoryController();