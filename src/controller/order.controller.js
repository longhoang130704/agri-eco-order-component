import OrderService from "../service/order.service.js";
import OrderDetailService from "../service/orderDetail.service.js";

class OrderController {
    async create(req, res) {
        const productList = req.body.productList

        const orderDetailIds = [];

        try {
            // creat all orderDetail
            for (const product of productList) {
                const newOrder = {
                    productId: product.productId,
                    quantity: product.quantity,
                    discount: product.discount || 0
                }
                const orderDetail = await OrderDetailService.create(newOrder)

                orderDetailIds.push(orderDetail._id);

            }
            const data = {
                userId: req.body.userId,
                orderDetailId: orderDetailIds,
                inventoryId: req.body.inventoryId,
                totalAmount: req.body.totalAmount,
                totalPrice: req.body.totalPrice,
                shippingId: req.body.shippingId
            }

            const order = await OrderService.create(data)

            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    }

    async getAll(req, res) {
        try {
            const orders = await OrderService.getAll();
            res.status(200).json(orders);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const order = await OrderService.getById(req.params.id);
            if (!order) return res.status(404).json({ message: "Order not found" });
            res.status(200).json(order);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const order = await OrderService.update(req.params.id, req.body);
            if (!order) return res.status(404).json({ message: "Order not found" });
            res.status(200).json(order);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await OrderService.delete(req.params.id);
            res.status(200).json({ message: "Order deleted successfully" });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

export default new OrderController();
