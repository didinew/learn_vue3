<script setup lang="ts">
const parent = () => {
  console.log('parent')
}

const child = () => {
  console.log('child')
}
const submit = () => {
  console.log('submit')
}

const flag: boolean = true

type Cls = {
  other: boolean,
  h: boolean
}

const flag1: Cls = {
  other: false,
  h: true
}

</script>

<template>
  <div>
      <div @click="parent">
        parent
        <!-- click.stop 冒泡 -->
        <div @click.stop="child">
          child
        </div>
      </div>
      <!-- 表单提交 -->
      <form action="/">
        <button @click.prevent="submit" type="submit">submit</button>
      </form>
      <!-- v-bind -->
      <div :class="[flag ? 'active' : 'other', 'h']">
        flag
      </div>
      <div :class="flag1">
        flag1
      </div>
  </div>
</template>

<style scoped>

.active {
  color: red;
}
.other {
  color: blue;
}
.h {
  height: 300px;
  border: 1px solid #ccc;
}
</style>
