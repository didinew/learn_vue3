<script setup lang="ts">
import { useRoute} from 'vue-router'
const route = useRoute()
console.log(route.query)
</script>

<template>
  <div class="container">
    <div>品牌： {{ route.query?.name }}</div>
    <div>价格： {{ route.query?.price }}</div>
    <div>ID： {{ route.query?.id }}</div>
  </div>
</template>


<style scoped></style>
