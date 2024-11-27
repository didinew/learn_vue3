<script setup lang="ts">
import _ from 'lodash'
import 'animate.css'

const list = reactive<number[]>([1,2,4,5,6,7,8,9])

const addItem = () => {
  list.push(33)
}

const removeItem = () => {
  list.pop()
}

// v-move
const shuffle = () => {
  items.value  =_.shuffle(items.value)
}
const items = ref(Array.apply(null, {length: 81} as number[]).map((_, index) => {
  return {
    id: index,
    number: (index%9) +1
  }
}))
</script>

<template>
  <div class="container">
    <el-button type="primary" @click="addItem"> 点击添加</el-button>  
    <el-button type="primary" @click="removeItem">点击remove</el-button>
    <transition-group name="list">
      <div style="margin: 10px" :key="item" v-for="item in list"> 
        {{ item }}
      </div>
    </transition-group>
    <div class="wrap">
      <el-button type="primary" @click="shuffle">shuffle</el-button>
      <transition-group class="wraps" name="mm" tag="ul">
          <li class="cell" v-for="item in items" :key="item.id">
            {{ item.number }}
          </li>
      </transition-group>
    </div>

  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
}
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 10 + 9px);
  .cell {
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.mm-move {
  transition: transform 0.8s ease;
}


.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
