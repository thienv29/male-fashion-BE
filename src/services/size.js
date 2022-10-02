import Size from '../models/base/size.js';
import mongoose from 'mongoose';

const SizeService = {
    async getAll() {
        const sizes = await Size.find();
        return sizes;
    }
    ,
    async getById(id) {
        const size = await Size.findOne({ _id: id });
        return size;
    }
    ,
    async createSize(size) {
        const sizeSchema = new Size({
            _id: new mongoose.Types.ObjectId(),
            ...size,
        });
        const result = await sizeSchema.save();
        return result;
    }
    ,
    async updateSize(size) {
        const sizeSchema = new Size({
            _id: size.id,
            ...size,
        });
        const result = await sizeSchema.save();
        return result;
    }

    ,
    async deleteSize(sizeId) {
        const result = await Size.findByIdAndDelete(sizeId);
        return result;
    },


};

export default SizeService;
