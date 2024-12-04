<script setup lang="ts">
interface chartType {
  name: String
  message: String
}

/**
 * nextClick
 * 
 * 60FPS 1000/60 = 16.7ms
 * 1.处理用户的事件， click input change
 * 
 * 2. 执行定时器
 * 3. 执行 requestAnimationFrame
 * 4. 执行dom 的回流与重绘
 * 5. 计算更新图层的绘制指令
 * 6. 绘制指定并合并主线程，如果有空余时间会执行 requestidlecallback
 * **/

const chartList = ref<chartType[]>([
  {
    name: 'zhangsan',
    message: '我在发消息'
  }
])
const inputText = ref<string>('')
const box = ref<HTMLElement>()
const send = async() => {
  chartList.value.push({
    name: '我是测试',
    message: inputText.value
  })
  await nextTick()
  box.value!.scrollTop = 99999
}

</script>

<template>
 <div ref="box" class="box">
    <div>
      <div class="item" v-for="item in chartList">
          <div>
              {{ item.name }}
          </div>
          <div>
              {{ item.message }}
          </div>
      </div>
    </div>
  </div>
  <div class="input-text">
    <div>
      <textarea type="text" v-model="inputText"></textarea>
    </div>
    <div>
      <button @click="send">send</button>
    </div>
  </div>

</template>
<style lang="less"> 
.box {
  width: 500px;
  height: 400px;
  overflow: auto;
  overflow-x: hidden;
  border: 1px solid #ccc;
  .item {
    width: 100%;
    height: 50px;
    background-color: #ccc;
    display: flex;
    align-items:  center;
    padding: 0 10px;
    border-bottom: 1px solid #fff;
  }


}

.input-text {
   margin-top: 20px;
    width: 500px;
    height: 40px;
    background-color: #fff;
    textarea {
      margin: 10px auto;
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
    }
    button {
      width: 100px;
      margin: 10px 0;
      float: right;
      background-color: aquamarine;
    }
  }
</style>

