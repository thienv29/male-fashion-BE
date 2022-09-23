import mongoose from 'mongoose';
import { hashPassword } from '../utils/hashPassword.js';
import ResponseModel from '../models/response/ResponseModel.js';
import { MessageVN } from '../common/constant/message-vn.js';
import AuthService from '../services/auth.service.js';
import User from '../models/base/user.model.js';

const AuthController = {

    async login(req, res, next) {
        try {
            const result = await AuthService.checkLogin(req.body, res);
            res.json(result);
        } catch (e) {
            res.status(500).json(new ResponseModel(500, [MessageVN.ERROR_500], null));
        }
    },

    async logout(req, res, next) {
        try {
            const result = await AuthService.logout(req, res);
            res.json(result);
        } catch (e) {
            res.status(500).json(new ResponseModel(500, [MessageVN.ERROR_500], null));
        }
    },

    async refreshToken(req, res, next) {
        try {
            const result = await AuthService.refreshToken(req, res);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, [MessageVN.ERROR_500], null));
        }
    },

    async register(req, res, next) {
        req.body.password = await hashPassword(req.body.password);

        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            ...req.body,
        });

        return user
            .save()
            .then((user) => res.status(201).json({ user }))
            .catch((error) => res.status(500).json({ error }));
    },
};

export default AuthController;
