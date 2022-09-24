import User from '../models/base/user.model.js';
import { hashPassword } from '../utils/hashPassword.js';
import mongoose from 'mongoose';
import ResponseModel from '../models/response/ResponseModel.js';

const UserService = {
    async getAll() {
        const users = await User.find();
        return users;
    }
    ,
    async getById(id) {
        const user = await User.findOne({ _id: id });
        return user;
    }
    ,
    async createUser(user) {
        user.password = await hashPassword(user.password);

        const userSchema = new User({
            _id: new mongoose.Types.ObjectId(),
            ...user,
        });

        const result = await userSchema.save();

        return result;
    }
    ,
    async updateUser(user) {
        user.password = await hashPassword(user.password);

        const userSchema = new User({
            _id: user.id,
            ...user,
        });

        const result = await userSchema.save();

        return result;
    }

    ,
    async deleteUser(userId) {

        const result = await User.findByIdAndDelete(userId);
        return result ;
    },


};

export default UserService;
