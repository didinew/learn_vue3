<script setup lang="ts">
import ASlot from './components/ASlot.vue'

const red = ref<string>('red')

</script>

<template>
  <div ></div>
  <div class="box">
    css Style完整新特性
    <!-- ASlot -->
     <ASlot>
        <div class="a-slot">我在插槽里</div>
        <div class="a-slot1">我在插槽里1111</div>

     </ASlot>
     <div class="bind-class">
      bind-classbind-classbind-class
     </div>

     <div :class="$style.blue">
      <!-- css module <style module> 标签会被编译为cssModule 并且将生成的css类作为$style 对象的键暴露给组件 -->
      css module
     </div>

     <div :class="[test.orange, test.line]">
      <!-- css module <style module> 标签会被编译为cssModule 并且将生成的css类作为$style 对象的键暴露给组件 -->
      css module 多个 
     </div>
  </div>
</template>
<style lang="less"> 
.bind-class {
  color: v-bind(red)
}
</style>
<style module> 
.blue {
  color: blue;
  font-size: 20px;
}
</style>

<style module="test"> 
.orange {
  color: orange;
  font-size: 20px;
}

.line {
  text-decoration-line: line-through;
}
</style>

