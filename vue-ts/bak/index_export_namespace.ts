// namespace

// 无法避免 全局类型 造成的污染，typescript 提供了namespace 
// 1.内部模块，主要用于组织代码，避免命名冲突
// 2. 命名空间内的类默认私有
// 3. 通过export暴露
// 4. 通过namespace
// import {aNamespace} from './indexA'
// console.log(aNamespace)

import  a, {addExport} from './index_export'


console.log(a)
console.log(addExport(8, 9))

