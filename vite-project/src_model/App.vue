<script setup lang="ts">
import Child from './components/Child.vue'

const show = ref(false)

</script>

<template>
  <div class="container">
    <el-button @click="show = !show">开关{{ show }}</el-button>
    <Child v-model="show" />
  </div>
</template>

<style lang="less">

</style>
