import BuyOrder from '../models/base/BuyOrder.js';
import mongoose from 'mongoose';
import ResponseModel from '../models/response/ResponseModel.js';

const BuyOrderService = {
    async getAll() {
        const buyOrders = await BuyOrder.find();
        return buyOrders;
    }
    ,
    async getById(id) {
        const buyOrder = await BuyOrder.findOne({ _id: id });
        return buyOrder;
    }
    ,
    async createBuyOrder(buyOrder) {
        const buyOrderSchema = new BuyOrder({
            _id: new mongoose.Types.ObjectId(),
            ...buyOrder,
        });

        const result = await buyOrderSchema.save();
        return result;
    }
    ,
    async updateBuyOrder(buyOrder) {
        const result = await BuyOrder.findByIdAndUpdate(buyOrder._id, buyOrder);
        return result;
    }

    ,
    async deleteBuyOrder(buyOrderId) {
        const result = await BuyOrder.findByIdAndDelete(buyOrderId);
        return result;
    },

    async deleteAllBuyOrder(buyOrderIds) {
        console.log(buyOrderIds);
        const result = await BuyOrder.deleteMany({ _id: { $in: buyOrderIds } });
        return result;
    },


};

export default BuyOrderService;
