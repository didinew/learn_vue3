<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const form = reactive({
  username: '',
  password: ''
})

const onSubmit = () => {
  // console.log('onSubmit', form)
  localStorage.setItem('token', '1')
  router.push('/')
}
</script>

<template>
  <div class="container">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <!-- <router-view name="header"> </router-view>
    <router-view name="content"></router-view> -->
  </div>
</template>

<style scoped lang="less">
html,
body,
#app {
  height: 100%;
  font-size: 14px;
}

.container {
  height: 500px;
}
</style>
