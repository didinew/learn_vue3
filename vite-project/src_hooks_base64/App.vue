<script setup lang="ts">
// hooks
import useBase64 from './hooks'
useBase64({
  el: '#img'
}).then(res => {
  console.log(res)
})

</script>

<template>
  <div class="box">
   <img src="./assets/images/1.png" id="img" alt="">
  </div>
</template>

<style lang="less"> 

</style>
