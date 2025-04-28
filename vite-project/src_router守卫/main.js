"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const App_vue_1 = __importDefault(require("./App.vue"));
const element_plus_1 = __importDefault(require("element-plus"));
require("element-plus/dist/index.css");
require("uno.css");
// import './index.css'
const router_1 = __importDefault(require("./router"));
const LoadingBar_1 = __importDefault(require("./components/LoadingBar"));
const app = (0, vue_1.createApp)(App_vue_1.default);
app.use(element_plus_1.default);
app.use(router_1.default);
app.use(LoadingBar_1.default);
// 前置守卫
router_1.default.beforeEach((to, from, next) => {
    var _a, _b;
    (_b = (_a = app.config) === null || _a === void 0 ? void 0 : _a.globalProperties) === null || _b === void 0 ? void 0 : _b.$loadingBar.startLoading();
    next();
});
// 后置守卫
router_1.default.afterEach((to, from) => {
    var _a, _b;
    (_b = (_a = app.config) === null || _a === void 0 ? void 0 : _a.globalProperties) === null || _b === void 0 ? void 0 : _b.$loadingBar.endLoading();
});
app.mount('#app');
