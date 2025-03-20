import InventoryService from "../service/inventory.service.js";
import ProductService from "../service/product.service.js";

class InventoryController {
    async create(req, res) {
        try {
            const validProduct = await ProductService.getById(req.body.productId);
            if (!validProduct) {
                return res.status(400).json({
                    message: "productId không tồn tại, vui lòng kiểm tra lại!"
                });
            }
            const inventory = await InventoryService.create(req.body);
            res.status(201).json(inventory);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
        
    }

    async getAll(req, res) {
        try {
            const inventories = await InventoryService.getAll();
            res.status(200).json(inventories);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const inventory = await InventoryService.getById(req.params.id);
            if (!inventory) return res.status(404).json({ message: 'Inventory not found' });
            res.status(200).json(inventory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await InventoryService.update(req.params.id, req.body);
            res.status(200).json(updated);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await InventoryService.delete(req.params.id);
            res.status(200).json({ message: 'Inventory deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

};

export default new InventoryController();