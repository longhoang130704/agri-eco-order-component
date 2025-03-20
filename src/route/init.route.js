import categoryRouter from "./category.route.js";
import inventoryRouter from "./inventory.route.js";
import orderRouter from "./order.route.js";
import OrderDetailRouter from "./orderDetail.route.js";
import productRouter from "./product.route.js";

const initRouter = (app) => {
    
    app.use('/api/order', orderRouter);
    app.use('/api/product', productRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/inventory', inventoryRouter);
    app.use('/api/orderDetail', OrderDetailRouter);
    app.use('/api/order', orderRouter);

}

export default initRouter;