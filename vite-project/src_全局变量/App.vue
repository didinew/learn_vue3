<script setup lang="ts">
// import { getCurrentInstance, ComponentInternalInstance } from 'vue';
 
// const { appContext } = <ComponentInternalInstance>getCurrentInstance()
 
// console.log(appContext.config.globalProperties.$env);
 
// 推荐第二种方式
import { getCurrentInstance} from 'vue'
const app = getCurrentInstance()
console.log(app?.proxy?.$filters.format('js'))


</script>

<template>
  <div class="box">
    {{ $env }}
    {{ $filters.format('dddddd') }}
  </div>
</template>

<style lang="less"> 

</style>
