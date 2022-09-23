import User from '../models/base/user.model.js';
import { hashPassword } from '../utils/hashPassword.js';
import mongoose from 'mongoose';

const UserService = {
    async getAll() {
        const users = await User.find();
        return users ? new ResponseModel(200, [], users) :
            new ResponseModel(500, ['Lỗi lưu khách hàng'], null);
    }
    ,
    async getById(id) {
        const user = await User.findOne({ _id: id });

        return user ? new ResponseModel(200, [], user) :
            new ResponseModel(500, ['Lỗi lấy dữ liệu khách hàng'], null);
    }
    ,
    async createUser(user) {
        user.password = await hashPassword(user.password);

        const userSchema = new User({
            _id: new mongoose.Types.ObjectId(),
            ...user,
        });

        const result = await userSchema.save();

        return result ? new ResponseModel(200, [], result) :
            new ResponseModel(500, ['Lỗi lấy dữ liệu khách hàng'], null);
    }
    ,
    async updateUser(user) {
        user.password = await hashPassword(user.password);

        const userSchema = new User({
            _id: user.id,
            ...user,
        });

        const result = await userSchema.save();

        return result ? new ResponseModel(200, [], result) :
            new ResponseModel(500, ['Lỗi lưu khách hàng'], null);
    }

    ,
    async deleteUser(userId) {

        const result = await User.findByIdAndDelete(userId);
        return result ? new ResponseModel(200, [], result) :
            new ResponseModel(500, ['Lỗi xóa khách hàng'], null);
    },


};

export default UserService;
