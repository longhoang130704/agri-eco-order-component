import Order from "../model/order.model.js";

class OrderService {
    async create(data) {
        return await Order.create(data);
    }

    async getAll() {
        return await Order.find()
            .populate('orderDetailId')
            .populate('inventoryId');
    }

    async getById(id) {
        return await Order.findById(id)
            .populate('orderDetailId')
            .populate('inventoryId');
    }

    async update(id, data) {
        return await Order.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await Order.delete({ _id: id });
    }
}

export default new OrderService();
