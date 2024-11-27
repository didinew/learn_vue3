<script setup lang="ts">
import type { Directive } from 'vue'
// 获取图片
const images: Record<string, {default: string}> = import.meta.glob('./assets/images/*.*', { eager: true })
console.log(images)
let arr = Object.values(images).map(v => v.default)

const vLazy: Directive<HTMLImageElement, string> = async(el, binding) => {
  let url  = await import('./assets/vue.svg')
  el.src = url.default
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0 && entries[0].isIntersecting) {
      setTimeout(() => {
        el.src = binding.value
        observer.unobserve(el)
      }, 200)
    }
  })
  observer.observe(el)
}

</script>

<template>
  <div class="box">
    <div v-for="(item, index) in arr" :key="index">
        <img v-lazy="item" alt="" :data-index="item">
    </div>
  </div>
</template>

<style lang="less"> 
.box {
 img {
  width: 200px;
  height: 400px;
}
}
</style>
