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
let canvas = document.querySelector('#canvas') as HTMLCanvasElement
console.log(canvas)
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D
canvas.height = screen.availHeight
canvas.width = screen.width

let str: string[] = "XMZSWSSBXMZSWSSBXMZSWSSBXMZSWSSBXMZSWSSB".split('')

// 获取宽度
let arr = Array(Math.ceil(canvas.width / 10)).fill(0)


const rain = () => {
    ctx.fillStyle = 'rgb(0,0,0, .5)'
    ctx.fillRect(0, 0 , canvas.width, canvas.height)
    ctx.fillStyle = '#0f0'
    arr.forEach((item, index) => {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10)
        arr[index] = item >= canvas.height || item > 10000 *  Math.random() ? 0 : item + 10; //添加随机数让字符随机出现不至于那么平整
    })
}

setInterval(rain, 40)   
