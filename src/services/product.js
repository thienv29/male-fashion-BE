import Product from '../models/base/Product.js';
import ProductDetail from '../models/base/ProductDetail.js';
import mongoose from 'mongoose';

const ProductService = {
    async getAll() {
        const products = await Product.find().populate('supplier', 'category');
        return products;
    }
    ,
    async getById(id) {
        const product = await Product.findOne({ _id: id })
        const detls = await ProductDetail.find({ product: mongoose.Types.ObjectId(id) }).populate('size').populate('color')
        product.set('listDetails', detls, { strict: false });
        return product;
    }
    ,
    async getFullById(id) {
        const product = await Product.findOne({ _id: id }).populate('category').populate('supplier')
        const detls = await ProductDetail.find({ product: mongoose.Types.ObjectId(id) }).populate('size').populate('color')
        product.set('listDetails', detls, { strict: false });
        return product;
    }
    ,
    async createProduct(productFull) {
        const listDetails = productFull.listDetails;
        const productDetail = [];
        const productSchema = new Product({
            _id: new mongoose.Types.ObjectId(),
            ...productFull,
        });
        const productResult = await productSchema.save();
        listDetails.forEach(detail => {
            detail.product = productResult;
            delete detail.id;
            productDetail.push(new ProductDetail({
                _id: new mongoose.Types.ObjectId(),
                ...detail,
                code: productResult.code + detail.color.name + detail.size.name
            }))
        });
        await ProductDetail.insertMany(productDetail);
        return productResult;
    }
    ,
    async updateProduct(product) {
        console.log(product._id);
        const result = await Product.findByIdAndUpdate(product._id, product);
        return result;
    }

    ,
    async deleteProduct(productId) {
        const result = await Product.findByIdAndDelete(productId);
        return result;
    },

    async deleteAllProduct(productIds) {
        const result = await Product.deleteMany({ _id: { $in: productIds } });
        const productIdObject = productIds.map((id) => {
            return mongoose.Types.ObjectId(id)
        })
        const detls = await ProductDetail.deleteMany({ product: { $in: productIdObject } })
        return true;
    },


};

export default ProductService;
