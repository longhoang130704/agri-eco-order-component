import OrderDetailService from '../service/orderDetail.service.js';
import ProductService from '../service/product.service.js';

class OrderDetailController {
    async create(req, res) {
        try {
            const validProduct = await ProductService.getById(req.body.productId);
            if (!validProduct) {
                return res.status(400).json({
                    message: "productId không tồn tại, vui lòng kiểm tra lại!"
                });
            }
            const orderDetail = await OrderDetailService.create(req.body);
            res.status(201).json(orderDetail);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const orderDetails = await OrderDetailService.getAll();
            res.status(200).json(orderDetails);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const orderDetail = await OrderDetailService.getById(req.params.id);
            if (!orderDetail) {
                return res.status(404).json({ message: "OrderDetail not found" });
            }
            res.status(200).json(orderDetail);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await OrderDetailService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ message: "OrderDetail not found" });
            }
            res.status(200).json(updated);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await OrderDetailService.delete(req.params.id);
            res.status(200).json({ message: "OrderDetail deleted successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default new OrderDetailController();
