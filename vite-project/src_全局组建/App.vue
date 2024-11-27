<script setup lang="ts">
import {reactive} from 'vue'
interface TreeList {
  name: string;
  icon?: string;
  children?: TreeList[] | []
}
const data = reactive<TreeList[]>([
  {
    name: 'no.1',
    children: [
      {
        name: 'no.1-1'
      },
      {
        name: 'no.1-2'
      },
    ]
  },
  {
    name: 'no.2',
    children: [
      {
        name: 'no.2-1',
        children: [
          {
            name: 'no.2-1-1'
            
          },
          {
            name: 'no.2-1-2'
          },
        ]
      },
      {
        name: 'no.2-2'
      },
    ]
  },
]) 
</script>
<template>
  <div>
    <Tree :data="data"/>
  </div>
</template>

<style lang="scss">

</style>
