import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'uno.css'
import 'animate.css'
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)

// router.hasRoute() 检查路由是否存在
// router.getRoutes() 获取一个包含所有路由记录的数组


app.mount('#app')