<script setup lang="ts">
import {customRef} from 'vue'

// 自定义ref 用于防抖之类的
function myRef<T = any>(value: T) {
  let timer: any
  return customRef((track, trigger) => {
    return {
      get () {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          console.log('我被触发了')
          value = newVal
          trigger()
        }, 500)
      }
    }
  })
}

const name = myRef('this is test')
const changeName = () => {
  name.value = "this is a new test"
}
</script>

<template>
  <div>
      <!-- <div @click="changeMsg">changeMsg</div>
      <div>
        {{ message }}
      </div> -->

      <!-- customRef -->
       <div ref="div">
          测试customRef
       </div>
       <hr/>
       <div>
          {{ name }}
       </div>
       <div @click="changeName">
        changeName
       </div>
  </div>
</template>

<style scoped>

</style>
