<script setup lang="ts">
import Dialog from './components/Dialog.vue'
</script>

<template>
  <div class="container">
    我是父组件
    <Dialog />
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  height: 800px;
  background-color: yellow;
}
</style>
