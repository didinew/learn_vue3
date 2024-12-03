<script setup lang="ts">
import {ref } from 'vue'
const isShow = ref(false)
const show = () => {
    isShow.value = true
}

const hide = () => {
    isShow.value = false
}

defineExpose({
    isShow,
    show,
    hide 
})
</script>

<template>
  <div class="loading" v-show="isShow">
    <div class="loading-content" >
        Loading......
    </div>
  </div>
</template>


<style scoped lang="less">
.loading {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
        font-size: 30px;
        color: #fff;
    }
}
</style>
