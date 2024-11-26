<script setup lang="ts">

</script>

<template>
  <div class="dialog">
    <header class="header">
      <div>
        我是弹框
      </div>
      <el-coin>
        <CloseBold />
      </el-coin>
    </header>
    <main class="main">
      我的内容是123456
    </main>
    <footer class="footer">
      <el-button size="small">取消</el-button>
      <el-button size="small" type="primary">确定</el-button>
    </footer>
  </div>
</template>

<style lang="scss">
.dialog {
    width: 400px;
    height: 400px;
    position: absolute;
    top:    50%;
    left:   50%;
    background-color: #fff;
    
}
</style>
