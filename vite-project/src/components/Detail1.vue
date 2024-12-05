<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div>品牌： {{ $route.params.id }}</div>
    <div>价格： {{ $route.params?.price }}</div>
    <div>ID： {{ $route.params?.id }}</div>
  </div>
</template>


<style scoped></style>
