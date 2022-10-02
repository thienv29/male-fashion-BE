import SizeService from '../services/size.js';
import ResponseModel from '../models/response/ResponseModel.js';

const SizeController = {

    async getAll(req, res, next) {
        try {
            const result = await SizeService.getAll();
            res.json(result);
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Lỗi lấy thông tin màu'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await SizeService.getById(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Lỗi lấy thông tin màu'], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await SizeService.createSize(req.body);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Lỗi thêm thông tin màu'], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await SizeService.updateSize(req.body);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Lỗi cập nhật thông tin màu'], null));
        }
    },

    async delete(req, res, next) {
        const sizeId = req.params.sizeId;
        try {
            const result = await SizeService.deleteSize(sizeId);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Lỗi xóa màu'], null));
        }
    },
};

export default SizeController;
