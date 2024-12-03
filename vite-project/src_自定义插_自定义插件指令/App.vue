<script setup lang="ts">
// import { getCurrentInstance} from  'vue'
// const instance = getCurrentInstance()
// console.log(instance?.proxy?.$myloading)

// instance?.proxy?.$myloading?.show()
// setTimeout(() => {
//   instance?.proxy?.$myloading.hide()
// },5000)




</script>

<template>
  <div ></div>
  <div class="box" v-my-loading:time="2000">
    我点击出发自定义指令
  </div>
</template>

<style lang="less"> 

</style>
