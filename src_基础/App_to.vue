<script setup lang="ts">
import { reactive, toRef, toRefs } from 'vue';
// to
const obj = {
  bar: 1,
  foo: 1
}
const state = toRef(obj, 'foo')
const changeState = () => {
  state.value += 1 // 不更新视图但是数据会变
  console.log(state.value)
}

const  obj1 = reactive({
  bar: 1,
  foo: 1
})
const { bar, foo } = toRefs(obj1)  //// 更新视图且数据会变化
const changebar = () => {
  bar.value += 1 //// 更新视图且数据会变化
  console.log(bar.value)
}

const changefoo = () => {
  foo.value += 1 // 更新视图且数据会变化
  console.log(foo.value)
}
</script>

<template>
  <div>
      <button @click="changeState">按钮</button>  
      <button @click="changebar">按钮1</button>  
      <button @click="changefoo">按钮2</button>  

      state--{{ state }}
      bar--{{ bar }}
      foo--{{ foo }}
  </div>
</template>

<style scoped>

</style>
