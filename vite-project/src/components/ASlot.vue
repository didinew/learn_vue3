
<script setup lang="ts">

</script>

<template>
  <div class="container">
    我是插槽
    <slot></slot>
  </div>
</template>

<style scoped>
/* 修改插槽里面的样式 */
:slotted(.a-slot) {
  color: red;
}

:global(.a-slot1) {
    color: blue;
}

</style>
