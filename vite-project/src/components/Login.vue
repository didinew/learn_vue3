<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
type List = {
    id: number,
    name: string,
    price: number
}
const list = ref<List[]>([
    {
        id: 1,
        name: '品牌1',
        price: 200
    },
    {
        id: 2,
        name: '品牌222222',
        price: 250
    },
    {
        id: 3,
        name: '品牌333333',
        price: 400
    }
])
 
const goToDetail = (item: List) => {
    // router.push({
    //     path: '/detail',
    //     query: item
    // })

    router.push({
        name: 'detail1',
        params: item
    })
}
</script>
 
 <template>
   <div class="container">
    login
    <div class="list">
        <div class="items" v-for="item in list" @click="goToDetail(item)"> 
            <div>品牌名称： {{ item.name }}</div>
        </div>
    </div>
   </div>
 </template>
 
 <style scoped lang="less">
  .container {
    width: 500px;
    height: 200px;
  }
  .list {
    background-color: #ccc;
    color: #890889;
    .items {
        padding: 5px;
        border-bottom: 1px solid #fff;
    }
  }
</style>
 