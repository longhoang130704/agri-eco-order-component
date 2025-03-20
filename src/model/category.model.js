import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Category = new Schema({
    categoryName: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
}, {
    timestamps: true, 
});

Category.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

export default mongoose.model('Category', Category);
