<script setup lang="ts">

</script>

<template>
  <div class="container">
   <div v-for="item in 10">
        <slot :data="item"></slot>
   </div>
  </div>
</template>



<style scoped></style>
