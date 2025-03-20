import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Product = new Schema({
    supplierId: { type: String },
    inventoryId: { type: String },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },

    productName: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    // imageFile: { type: Buffer },  // Lưu file dạng buffer, hoặc dùng GridFS riêng nếu file lớn
    brand: { type: String },

    quantityPerUnit: { type: Number, required: true },
    buyPrice: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    rating: { type: Number },
    numberReviews: { type: Number },

    isFeature: { type: Boolean }

}, {
    timestamps: true, // tự động thêm createdAt và updatedAt
});

Product.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

export default mongoose.model('Product', Product);
