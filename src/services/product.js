import Product from '../models/base/Product.js';
import mongoose from 'mongoose';

const ProductService = {
    async getAll() {
        const products = await Product.find();
        return products;
    }
    ,
    async getById(id) {
        const product = await Product.findOne({ _id: id });
        return product;
    }
    ,
    async createProduct(product) {
        const productSchema = new Product({
            _id: new mongoose.Types.ObjectId(),
            ...product,
        });

        const result = await productSchema.save();
        return result;
    }
    ,
    async updateProduct(product) {
        const result = await Product.findByIdAndUpdate(product._id, product);
        return result;
    }

    ,
    async deleteProduct(productId) {
        const result = await Product.findByIdAndDelete(productId);
        return result;
    },

    async deleteAllProduct(productIds) {
        console.log(productIds);
        const result = await Product.deleteMany({ _id: { $in: productIds } });
        return result;
    },


};

export default ProductService;
