<script setup lang="ts">

const text = ref<string>('this is nextClick')

const testclick = ref<HTMLElement>()

const changeClick = async() => {
  text.value = 'this is change nextClick'
  console.log(testclick.value?.innerHTML)
  await nextTick()
  console.log(testclick.value?.innerHTML)
}
</script>

<template>
 <div ref="testclick" @click="changeClick">
    {{ text }}
 </div>
</template>
<style lang="less"> 

</style>

