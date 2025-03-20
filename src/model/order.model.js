import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Order = new Schema({
    userId: { type: String, required: true },
    orderDetailId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetail' }],
    inventoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' }, 

    status: { 
        type: String, 
        enum: ['pending', 'confirmed', 'cancelled', 'shipped', 'completed'], 
        default: 'pending' 
    },

    totalAmount: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },

    shippingId: { type: String, required: true }
}, {
    timestamps: true,
});

Order.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

export default mongoose.model('Order', Order);
