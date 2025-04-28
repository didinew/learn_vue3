"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const LoadingBar_vue_1 = __importDefault(require("./LoadingBar.vue"));
exports.default = {
    install(app) {
        // 创建节点
        const vnode = (0, vue_1.createVNode)(LoadingBar_vue_1.default);
        // 挂载在body 上
        (0, vue_1.render)(vnode, document.body);
        app.config.globalProperties.$loadingBar = {
            startLoading: () => { var _a, _b; return (_b = (_a = vnode.component) === null || _a === void 0 ? void 0 : _a.exposed) === null || _b === void 0 ? void 0 : _b.startLoading(); },
            endLoading: () => { var _a, _b; return (_b = (_a = vnode.component) === null || _a === void 0 ? void 0 : _a.exposed) === null || _b === void 0 ? void 0 : _b.endLoading(); }
        };
    }
};
