import Product from '../model/product.model.js';

class ProductService {
    async create(productData) {
        return await Product.create(productData);
    }

    async getAll() {
        return await Product.find()
            .populate('categoryId') 
            .lean();
    }

    async getById(productId) {
        return await Product.findById(productId)
            .populate('categoryId')
            .lean();
    }

    async update(productId, productData) {
        return await Product.findByIdAndUpdate(productId, productData, { new: true });
    }

    async delete(productId) {
        return await Product.delete({ _id: productId }); 
    }
}

export default new ProductService();
