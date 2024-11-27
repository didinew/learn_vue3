<script setup lang="ts">
    type Props =  {
        modelValue: boolean
    }
    const propsData = defineProps<Props>()
    const emit = defineEmits(['update:modelValue'])

    const close = () => {
        console.log('ssss')
        emit('update:modelValue',false)
    }
</script>

<template>
  <div class="child" v-if="propsData.modelValue">
        <div class="child-header">
            <div>标题</div>
            <div @click="close">x</div>
        </div>
        <div class="child-content">
            内容
        </div>
  </div>
</template>


<style scoped lang="less">

</style>
