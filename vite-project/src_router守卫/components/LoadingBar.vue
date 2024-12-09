<script setup lang="ts">
const speed = ref<number>(0)
const bar = ref<HTMLElement>()
const timer = ref<number>(0)
const startLoading = () => {
    const dom = bar.value as HTMLElement
    speed.value = 1
    timer.value = window.requestAnimationFrame(function fn() {
        if (speed.value < 90) {
           speed.value += 1
           dom.style.width = speed.value + '%'
           timer.value = window.requestAnimationFrame(fn) 
        } else {
            speed.value = 1
            window.cancelAnimationFrame(timer.value)
        }
    })
}

const endLoading = () => {
    let dom = bar.value as HTMLElement
    setTimeout(() => {
        window.requestAnimationFrame(() => {
            speed.value = 100
            dom.style.width = speed.value + '%'
        })
    }, 500)
}
defineExpose({
    startLoading,
    endLoading
})
</script>

<template>
  <div class="wraps">
    <div ref="bar" class="bar"></div>
  </div>
</template>
<style scoped lang="less">
.wraps {
    position: fixed;
    top: 0;
    width: 100%;
    height: 2px;
    .bar {
        height: inherit; // 继承
        width: 0;
        background-color: blue;
    }
}
</style>

