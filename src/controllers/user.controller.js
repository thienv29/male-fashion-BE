import { MessageVN } from '../common/constant/message-vn.js';
import UserService from '../services/user.service.js';
import ResponseModel from '../models/response/ResponseModel.js';

const UserController = {

    async getAll(req, res, next) {
        try {
            const result = await UserService.getAll();
            res.json(result);
        } catch (e) {
            res.status(500).json(ResponseModel(500, [MessageVN.ERROR_500], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await UserService.getById(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json(ResponseModel(500, [MessageVN.ERROR_500], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await UserService.createUser(req.body);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(ResponseModel(500, [MessageVN.ERROR_500], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await UserService.updateUser(req.body);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(ResponseModel(500, [MessageVN.ERROR_500], null));
        }
    },

    async delete(req, res, next) {
        const userId = req.params.userId;
        try {
            const result = await UserService.deleteUser(userId);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(ResponseModel(500, [MessageVN.ERROR_500], null));
        }
    },
};

export default UserController;
