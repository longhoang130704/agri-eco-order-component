import Inventory from '../model/inventory.model.js';

class InventoryService {
    async create(data) {
        return await Inventory.create(data);
    }

    async getAll() {
        return await Inventory.find().populate('productId');
    }

    async getById(id) {
        return await Inventory.findById(id).populate('productId');
    }

    async update(id, data) {
        return await Inventory.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await Inventory.deleteById(id); 
    }
};

export default new InventoryService();
