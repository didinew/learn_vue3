"use strict";
// 装饰器
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 类装饰器 ClassDecorator
// 属性装饰器 PropertyDecorator
// 参数装饰器 ParamterDecorator
// 方法装饰器 MethodDecorator PropertyDescriptor
// 装饰工厂
const axios_1 = __importDefault(require("axios"));
require("reflect-metadata");
const Base = (base) => {
    const fn = (target) => {
        target.prototype.base = base;
    };
    return fn;
};
// 方法装饰器 MethodDecorator PropertyDescriptor
const Get = (url) => {
    const fn = (target, _, descriptor) => {
        axios_1.default.get(url).then(res => {
            // console.log(target, key, descriptor)
            // descriptor.value(res.data)
            const key = Reflect.getMetadata('key', target);
            descriptor.value(key ? res.data[key] : res.data);
        });
    };
    return fn;
};
// 属性装饰器 PropertyDecorator
const Result = () => {
    const fn = (target, _, index) => {
        Reflect.defineMetadata('key', 'result', target);
    };
    return fn;
};
let Http = (() => {
    let _classDecorators = [Base('/api')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getList_decorators;
    var Http = _classThis = class {
        getList(data) {
            console.log(data);
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    __setFunctionName(_classThis, "Http");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getList_decorators = [Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')];
        __esDecorate(_classThis, null, _getList_decorators, { kind: "method", name: "getList", static: false, private: false, access: { has: obj => "getList" in obj, get: obj => obj.getList }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Http = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Http = _classThis;
})();
const http = new Http();
