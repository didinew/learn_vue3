// any unknown 顶级类型
// any
// any 就失去了TS类型检测的作用
var anys = 33;
anys = '123234';
anys = true;
// unknown 比any 更安全，
var value;
value = true;
value = 113244;
value = 'wwwww';
value = Symbol('type');
// unknown 不能赋值给其他类型
// any 对象如果没有这个属性，如果还在获取是不会报错
// unknown 是不能调用属性和方法
var obj = { b: 1 };
obj.a; // 不报错
var obj1 = { b: 1, ccc: function () { return 2444; } };
// obj1.b // 会报错
///////////////////////////////////////////////
// object Object {}
// Object类型是所有Object类的实例类型
// Object 接口定义了Object.prototype原型对象上的属性
// ObjectConstructor 接口定义了Object类的属性，
// 值类型和引用类型 都指向 Object
var bigO = 122323;
console.log(bigO);
// 2. object 代表所有非值类型的类型， 数组 对象 函数，常用于泛型约束
var o = {};
var o1 = [1, 23, 4];
var o2 = function () { return 2433443; };
// let o3: object = '22222' // 错误
// 3. {} 和 Object 包含所有类型
