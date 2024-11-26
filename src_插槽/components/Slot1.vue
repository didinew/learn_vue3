<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.container {
    padding: 10px;
    border: 1px solid #ccc;
    width: 300px;
    height: 400px;
}
</style>
