import Inventory from '../model/inventory.model.js';

class InventoryService {
    async create(data) {
        console.log(data);
        return await Inventory.create(data);
    }

    async getAll() {
        return await Inventory.find().populate('products.productId');
    }

    async getById(id) {
        return await Inventory.findById(id).populate('products.productId');
    }

    async update(id, data) {
        return await Inventory.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await Inventory.deleteById(id); 
    }
};

export default new InventoryService();
