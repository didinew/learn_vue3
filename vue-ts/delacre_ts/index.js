"use strict";
// 生命文件 declare
// 当使用第三方库时， 我们需要引用他的声明文件，才能获得对应的代码不全，接口提示等功能
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 声明全局变量
// declare var
// 声明全局方法
// declare function
// 声明全局类
// declare class
// 声明全局枚举类型
// declare enum
// 声明（含有子属性）全局对象
// declare namespace
// 声明全局类型
// interface 和 type
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use('/api', router);
router.get('/list', (req, res) => {
    res.json({
        code: 200
    });
});
app.listen(9001, () => {
    console.log(9001);
});
