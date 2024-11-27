<script setup lang="ts">

</script>

<template>
  <div class="xm-wraps">
      <div>
        menu
      </div>
      <div class="xm-wraps__right">
        <div>header</div>
        <div>content</div>
      </div>
  </div>
</template>

<style lang="scss">
@include b('wraps') {
  @include bfc;
  @include flex;
  @include e(right) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
