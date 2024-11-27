<script setup lang="ts">
import { Directive } from 'vue'

const vMove: Directive = {
  mounted(el: HTMLElement) {
    let moveEl = el.firstChild as HTMLElement
    const mouseDown = (e: MouseEvent) => {
       //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
       console.log(e.clientX, e.clientY, "-----起始", el.offsetLeft);
       let x = e.clientX - el.offsetLeft
       let y = e.clientY - el.offsetTop
       const move = (e: MouseEvent) => {
        el.style.left = e.clientX - x + 'px'
        el.style.top  = e.clientY - y+ 'px'
        console.log(e.clientX, e.clientY, '---改变')
       }
       document.addEventListener('mousemove',move )
       document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move)
       })
    }
    moveEl.addEventListener("mousedown", mouseDown)
  }
}
</script>

<template>
  <div class="box" v-move>
    <div class="header">
    </div>
    <div class="content">
      内容
    </div>
  </div>
</template>

<style lang="less"> 
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  .header {
    height: 20px;
    background: black;
    cursor: move;
  }
}
</style>
