<script setup lang="ts">
type TreeList = {
    name: string;
    icon?: string;
    children?: TreeList[] | []
  }
type Props<T> = {
    data?: T[] | []
}

defineProps<Props<TreeList>>()
</script>

<template>
    <div style="margin-left: 10px">
        <div class="tree"  v-for="item in data" style="margin-left: 30px">
            <input type="checkbox" >{{ item?.name }}</input>
            <Tree v-if="item?.children?.length" :data="item.children" />
        </div>
    </div>
  
</template>


<style scoped></style>
