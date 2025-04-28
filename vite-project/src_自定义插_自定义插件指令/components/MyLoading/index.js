"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const index_vue_1 = __importDefault(require("./index.vue"));
exports.default = {
    install(app) {
        // createVNode vue 提供底层的方法 可以给组建创建一个虚拟DOM. 也就是Vnode
        const vnode = (0, vue_1.createVNode)(index_vue_1.default);
        (0, vue_1.render)(vnode, document.body);
        app.config.globalProperties.$myloading = {
            show: () => { var _a, _b; return (_b = (_a = vnode.component) === null || _a === void 0 ? void 0 : _a.exposed) === null || _b === void 0 ? void 0 : _b.show(); },
            hide: () => { var _a, _b; return (_b = (_a = vnode.component) === null || _a === void 0 ? void 0 : _a.exposed) === null || _b === void 0 ? void 0 : _b.hide(); }
        };
        // app.config.globalProperties.$loading.show()
        // console.log(app.config.globalProperties.$loading.show())
        app.directive('my-loading', {
            mounted(el, binding) {
                el.addEventListener('click', () => {
                    var _a, _b;
                    (_b = (_a = vnode.component) === null || _a === void 0 ? void 0 : _a.exposed) === null || _b === void 0 ? void 0 : _b.show();
                    console.log(new Date());
                    setTimeout(() => {
                        var _a, _b;
                        console.log(new Date());
                        (_b = (_a = vnode.component) === null || _a === void 0 ? void 0 : _a.exposed) === null || _b === void 0 ? void 0 : _b.hide();
                    }, (binding === null || binding === void 0 ? void 0 : binding.value) || 3000);
                });
            }
        });
    }
};
