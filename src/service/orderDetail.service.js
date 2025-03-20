import OrderDetail from '../model/orderDetail.model.js';

class OrderDetailService {
    async create(data) {
        return await OrderDetail.create(data);
    }

    async getAll() {
        return await OrderDetail.find().populate('productId');
    }

    async getById(id) {
        return await OrderDetail.findById(id).populate('productId');
    }

    async update(id, data) {
        return await OrderDetail.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await OrderDetail.delete({ _id: id });
    }
}

export default new OrderDetailService();
