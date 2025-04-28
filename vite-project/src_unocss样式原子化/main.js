"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const App_vue_1 = __importDefault(require("./App.vue"));
// import ElementPlus from 'element-plus'
require("element-plus/dist/index.css");
require("uno.css");
require("./index.css");
const app = (0, vue_1.createApp)(App_vue_1.default);
// app.use(ElementPlus)
app.mount('#app');
