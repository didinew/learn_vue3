// 内置对象
// Boolean Number String RegExp Date Error
// const bInner: Boolean = new Boolean(1)
// console.log(bInner)
// const nInner: Number = new Number(1)
// console.log(nInner)
// const sInner: String =  new String('111')
// console.log(sInner)
// const dInner: Date = new Date()
// console.log(dInner)
// Document HTMLElemen Event NodeList
// let body: HTMLElement = document.body
// console.log(body)
// 代码雨
var canvas = document.querySelector('#canvas');
console.log(canvas);
var ctx = canvas.getContext('2d');
canvas.height = screen.availHeight;
canvas.width = screen.width;
var str = "XMZSWSSBXMZSWSSBXMZSWSSBXMZSWSSBXMZSWSSB".split('');
// 获取宽度
var arr = Array(Math.ceil(canvas.width / 10)).fill(0);
var rain = function () {
    ctx.fillStyle = 'rgb(0,0,0, .5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    arr.forEach(function (item, index) {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
        arr[index] = item >= canvas.height || item > 10000 * Math.random() ? 0 : item + 10; //添加随机数让字符随机出现不至于那么平整
    });
};
setInterval(rain, 40);
