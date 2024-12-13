// 生命文件 declare
// 当使用第三方库时， 我们需要引用他的声明文件，才能获得对应的代码不全，接口提示等功能

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


import express from 'express'

const app = express()
const router = express.Router()

app.use('/api', router)

router.get('/list', (req, res) => {
    res.json({
        code: 200
    })
})

app.listen(9001, () => {
    console.log(9001)
})
