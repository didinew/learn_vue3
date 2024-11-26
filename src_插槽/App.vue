<script setup lang="ts">
import Slot1 from './components/Slot1.vue'
import SlotName from './components/SlotName.vue'
import SlotProxy from './components/SlotProxy.vue'


</script>

<template>
  <SlotName>
    <template v-slot:header>
      <div>
        这是具名插槽
      </div>
    </template>
  </SlotName>
  <SlotName>
    <template #header>
      <div>
        这是具名插槽#header
      </div>
    </template>
  </SlotName>
  <SlotProxy #default="{ data }">
    <div>{{ data }}</div>
  </SlotProxy>
  <Slot1>
    <template v-slot>
      <div>this is 匿名插槽</div>
    </template>
  </Slot1>
</template>

<style lang="scss">

</style>
