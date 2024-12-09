<script setup lang="ts">

</script>

<template>
  <router-view #default="{route, Component}">
    <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style scoped lang="less">
html,
body,
#app {
  height: 100%;
  font-size: 14px;
}
</style>
