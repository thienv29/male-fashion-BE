import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const SaleOrderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    address:  { type: String, required: true, trim: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
    voucher: { type: mongoose.Schema.Types.ObjectId, ref: 'Voucher' },
    paymentMethod: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true },
},
    {
        timestamps: true,
        versionKey: false,
    },
);

export default mongoose.model('SaleOrder', SaleOrderSchema);
