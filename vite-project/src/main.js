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
require("animate.css");
const router_1 = __importDefault(require("./router"));
const app = (0, vue_1.createApp)(App_vue_1.default);
app.use(element_plus_1.default);
app.use(router_1.default);
// router.hasRoute() 检查路由是否存在
// router.getRoutes() 获取一个包含所有路由记录的数组
app.mount('#app');
