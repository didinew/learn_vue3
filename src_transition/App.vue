<script setup lang="ts">
import {ref} from 'vue'
import 'animate.css'

const flag = ref(true)
const changeFlag = () => {
  flag.value = !flag.value
}

</script>

<template>
  <div class="container">
    <el-button type="primary" @click="changeFlag">切换</el-button>
    <!-- fade周期 -->
    <!-- <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition> -->
    <!-- fade周期 -->
    <!-- fade周期自定义class -->
    <transition enter-active-class="animate__animated animate__bounce"  leave-active-class="animate__animated animate__zoomOut">
      <div v-if="flag" class="box"></div>
    </transition>
    <!-- fade周期 -->
  </div>
</template>

<style lang="scss">
.box {
  width: 200px;
  height: 200px;
  background: red;
}
.fade-enter-from {
  background-color: red;
  width: 0;
  height: 0;
  transform: rotate(360deg);
}
.fade-enter-active {
  transition: all 2.5s linear;
}
.fade-enter-to {
  width: 200px;
  height: 200px;
  background-color: aqua;
}
.fade-leave-from {
  width: 200px;
  height: 200px;
  transform: rotate(360deg);
}
.fade-leave-active {
  transition: all 2.5s linear;
}

.fade-leave-to {
  width: 0;
  height: 0;
}
</style>
