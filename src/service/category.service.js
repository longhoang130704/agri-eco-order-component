import Category from "../model/category.model.js";

class CategoryService {
    async create(categoryData) {
        return await Category.create(categoryData);
    }

    async getAll() {
        return await Category.find().lean();
    }

    async getById(categoryId) {
        return await Category.findById(categoryId).lean();
    }

    async update(categoryId, categoryData) {
        return await Category.findByIdAndUpdate(categoryId, categoryData, { new: true });
    }

    async delete(categoryId) {
        return await Category.delete({ _id: categoryId }); // Soft delete
    }
}

export default new CategoryService();