<script setup lang="ts">
// import { useRouter } from 'vue-router';
// const router = useRouter()
// const goToPage = (url: string) => {
//   router.push(url)
// }


// const goToPage = (url: string) => {
//   router.replace(url)
// }
</script>

<template>
  <div class="container">
    
    this is app
    <router-view></router-view>
    <!-- <router-view name="header"> </router-view>
    <router-view name="content"></router-view> -->
  </div>
</template>

<style scoped lang="less">

html,
body,
#app {
  height: 100%;
  font-size: 14px;
}
.container {
  height: inherit;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.header {
  justify-content: space-around;
  background-color: aquamarine;
  height: 40px;
  align-items: center;
  width: 100%;
  div:nth-child(1) {
    width: 40px;
  }
  div:nth-child(3) {
    text-align: center;
  }
  div:nth-child(3) {
    width: 40px;
    text-align: right;
  }
}

.main {
  flex: 1;
  overflow: auto;
  &-item {
    display: flex;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    padding: 5px;
  }
  &-port {
    background-color: black;
    width: 30px;
    height: 30px;
    border-radius: 20px;
  }
  &-desc {
    margin-left: 10px;
    div:last-child {
      font-size: 14px;
      color: #333;
      margin-top: 5px;
    }
  }
}
.footer {
  border-top: 1px solid #333;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
