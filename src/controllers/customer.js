import CustomerService from '../services/customer.js';
import ResponseModel from '../models/response/ResponseModel.js';

const CustomerController = {

    async getAll(req, res, next) {
        try {
            const result = await CustomerService.getAll();
            res.json(result);
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Lỗi lấy thông tin khách hàng'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await CustomerService.getById(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Lỗi lấy thông tin khách hàng'], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await CustomerService.createCustomer(req.body);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Lỗi thêm thông tin khách hàng'], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await CustomerService.updateCustomer(req.body);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Lỗi cập nhật thông tin khách hàng'], null));
        }
    },

    async deleteById(req, res, next) {
        const customerId = req.params.id;
        try {
            const result = await CustomerService.deleteCustomer(customerId);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Lỗi xóa khách hàng'], null));
        }
    },
};

export default CustomerController;
