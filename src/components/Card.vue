<script setup lang="ts">
type Props = {
    content: string
}
defineProps<Props>()

</script>

<template>
  <div class="card">
    <div class="card-header">
        <div>
            标题
        </div>
        <div>
            副标题
        </div>
    </div>
    <div class="card-content">
        {{  content }}
    </div>
  </div>
</template>


<style scoped lang="less">
@border: #ccc;
.card {
    width: 300px;
    border: 1px solid @border;
    border-radius: 4px;
    &:hover {
        box-shadow:0 0 10px @border;
    }
    &-header{
        padding: 10px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid @border;
    }
    &-content {
        padding: 10px;
    }
}
</style>
