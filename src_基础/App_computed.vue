<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
// computed 是当依赖的值发生变化的时候才会触发他的改变，如果依赖属性不发生变化，便是缓存中的属性
// 购物车案例
interface Data {
  name: string,
  price: number,
  num: number
}
const keyword = ref<string>('')
const total = computed<number>(() => {
  return searchData.value?.reduce((prev: number, next: Data) => {
      return prev + next.num * next.price
  }, 0)
})

const searchData = computed<Data[]>(() =>{
  return data.filter((item: Data) => item.name.includes(keyword.value))
})
const data = reactive<Data[]>(
  [
    {
      name: '物品1',
      price: 200,
      num: 2,
    },
    {
      name: '物品2',
      price: 100,
      num: 3,
    },
    {
      name: '物品3',
      price: 180,
      num: 10,
    },
  ]
)

const del = (index: number) => {
  data.splice(index, 1)
}
</script>

<template>
  <div>
      <input type="text" placeholder="请输入名称" v-model="keyword" /> 
      <table style="margin-top: 100px;" width="500" cellspacing="0" cellpadding="0" border>
          <thead>
            <tr>
              <td>物品</td>
              <td>单价</td>
              <td>数量</td>
              <td>总价</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="(item,index) in searchData" :key="item.name">
              <td  align="center">{{ item.name }}</td>
              <td  align="center">{{ item.price }}</td>
              <td  align="center">
                <button @click="item.num > 1 ? item.num -- : null">-</button>
                {{ item.num }}
                <button @click="item.num< 99 ? item.num ++ : null">+</button>
              </td>
              <td  align="center">{{ item.num * item.price }}</td>
              <td  align="center">
                <button @click="del(index)">
                  删除
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr colspan="5" align="right">
              <span>总价： {{ total }}</span>
            </tr>
          </tfoot>
      </table>
  </div>
</template>

<style scoped>

</style>
