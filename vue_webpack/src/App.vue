<template>
  <div class="container">
    {{ aa }}
    <button @click="add" >add</button>
  </div>
 
</template>

<script setup lang="ts">
import { ref} from 'vue'
const aa = ref(1)

const add = () => {
    aa.value += 1
}
</script>

<style scoped lang="less">
.container {
    width: 120px;
    height: 120px;
    border: 1px solid #ccc;
    button {
        background-color: aquamarine;
        color: #fff;
    }
}
</style>
