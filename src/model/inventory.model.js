import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Inventory = new Schema({
    
    capacity: { type: Number, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    stock_Quantity: { type: Number, required: true },
    location: { type: String, required: true },
    sold_Quantity: { type: Number, default: 0 },
    ReorderQuantity: { type: Number, default: 5 },

}, {
    timestamps: true, 
});

Inventory.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

export default mongoose.model('Inventory', Inventory);
