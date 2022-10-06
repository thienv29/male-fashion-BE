import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const SaleOrderDetailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    quantity: {type: Number, required: true},
    amount: {type: Number, required: true},
    price: {type: Number, required: true},
    productDetail: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductDetail' }
},
    {
        timestamps: true,
        versionKey: false,
    },
);

export default mongoose.model('SaleOrderDetail', SaleOrderDetailSchema);
