import Customer from '../models/base/Customer.js';
import User from '../models/base/User.js';
import mongoose from 'mongoose';
import UserService from './user.js';
import { ROLE } from '../common/constant/role.js';

const CustomerService = {
    async getAll() {
        const customers = await Customer.find().populate('user');
        return customers;
    },
    async getById(id) {
        const customer = await Customer.findById(id).populate('user');
        return customer;
    },
    async createCustomer(user) {
        user.role = ROLE.CUSTOMER;
        const userCreacted = await UserService.createUser(user);
        const customerTmp = new Customer({
            _id: new mongoose.Types.ObjectId(),
            user: userCreacted._id
        });
        await customerTmp.save();
        return userCreacted;
    },
    async updateCustomer(user) {
        const customerSchema = new User({
            _id: user.id,
            ...user,
        });
        const result = await customerSchema.save();
        return result;
    },
    async deleteCustomer(customerId) {
        const customer = await Customer.findById(customerId);
        await Customer.findByIdAndDelete(customerId);
        await User.findByIdAndDelete(customer.user);
        return true;
    },


};

export default CustomerService;
