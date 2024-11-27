<script setup lang="ts">
import { Directive } from 'vue'
import Child from './components/Child.vue'
// Directive 自定义指令
/**
 * created 元素初始化的时候
beforeMount 指令绑定到元素后调用 只调用一次
mounted 元素插入父级dom调用
beforeUpdate 元素被更新之前调用
update 这个周期方法被移除 改用updated
beforeUnmount 在元素被移除前调用
unmounted 指令被移除后调用 只调用一次
*/

// 自定义指令
const show = ref(true)

// const vMoveDetective: Directive = {
//   created: () => {
//     console.log('created')
//   },
//   beforeMount(...args: Array<any>) {
//     // 在元素上做些操作
//     console.log("初始化一次=======>");
//   },
//   mounted(el: any, dir: DirectiveBinding<Value>) {
//     el.style.background = dir.value.background;
//     console.log("初始化========>");
//   },
//   beforeUpdate() {
//     console.log("更新之前");
//   },
//   updated() {
//     console.log("更新结束");
//   },
//   beforeUnmount(...args: Array<any>) {
//     console.log(args);
//     console.log("======>卸载之前");
//   },
//   unmounted(...args: Array<any>) {
//     console.log(args);
//     console.log("======>卸载完成");
//   }
// }
type Dir = {
  background: string
}
const vMove: Directive = (el, binding: DirectiveBinding<Dir>) => {
  el.style.background = binding.value.background
}

</script>

<template>
  <div class="container">
    <el-button @click="show = !show">开关{{ show }}</el-button>
    <Child v-move ="{background: 'red', flag: show}" v-model="show"></Child>
  </div>
</template>

<style lang="less"> 

</style>
