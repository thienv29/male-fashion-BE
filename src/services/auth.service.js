import User from '../models/base/user.model.js';
import bcrypt from 'bcrypt';
import ResponseModel from '../models/response/ResponseModel.js';
import jwt from 'jsonwebtoken';
import { REFRESH_KEY, SECRECT_KEY } from '../config/index.js';
import { TIME_TOKEN } from '../common/constant/time-token.js';

const AuthService = {
    async checkLogin(body, res) {
        const listError = [];
        const { email, password, remember } = body;
        const user = await User.findOne({ email: email });

        if (!user) {
            listError.push('Tài khoản hoặc mật khẩu không đúng !!!');
        } else {
            const isValidAccount = await bcrypt.compare(password, user.password);
            const ava = user.avatar;
            user.avatar = '';
            if (isValidAccount) {
                listError.push('Đăng nhập thành công');
                const accessToken = AuthService.generateToken(user, SECRECT_KEY, TIME_TOKEN.ACCESS);
                const refreshToken = AuthService.generateToken(
                    user,
                    REFRESH_KEY,
                    TIME_TOKEN.REFRESH,
                );
                return new ResponseModel(200, listError, {
                    user,
                    accessToken,
                    refreshToken,
                });
            } else {
                listError.push('Tài khoản hoặc mật khẩu không đúng !!!');
            }
        }
        return new ResponseModel(404, listError, null);
    }
    ,
    async refreshToken(req, res) {
        let newAccessToken = '';
        let newRefreshToken = '';
        const refreshToken = req.body.refreshToken;

        if (!refreshToken) return res.status(401).json(new ResponseModel(401));

        jwt.verify(refreshToken, REFRESH_KEY, (err, { user }) => {
            if (err) {
                console.log('err', err);
            }
            newAccessToken = AuthService.generateToken(user, SECRECT_KEY, TIME_TOKEN.ACCESS);
            newRefreshToken = AuthService.generateToken(user, REFRESH_KEY, TIME_TOKEN.REFRESH);

            return new ResponseModel(200, ['success'], {
                newAccessToken,
                newRefreshToken,
            });
        });

        return new ResponseModel(200, ['success'], {
            newAccessToken,
            newRefreshToken,
        });
    }
    ,
    async logout(req, res) {
        res.clearCookie('refreshToken');
        return new ResponseModel(200, ['logout success']);
    },

    generateToken(data, key, timeString) {
        return jwt.sign(
            {
                user: data,
            },
            key,
            {
                expiresIn: timeString,
            },
        );
    },
};
export default AuthService;
