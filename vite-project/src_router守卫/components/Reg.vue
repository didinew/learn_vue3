 <template>
   <div class="container">
    reg
   </div>
 </template>
 
 <script setup lang="ts">
import { useRoute} from 'vue-router'
const route = useRoute()
console.log(route)
</script>
 
 <style scoped lang="less">
  .container {
    background-color: aqua;
    width: 500px;
    height: 200px;
    color: #fff;
  }
</style>
 