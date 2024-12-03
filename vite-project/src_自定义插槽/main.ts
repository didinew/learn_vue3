import { createApp } from 'vue'
import App from './App.vue'
import MyLoading from './components/MyLoading/index.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

type Lod = {
    show: () => void,
    hide: () => void
}

// 编写ts loading 声明文件放置报错和 智能提示
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties{
        $myloading: Lod
    }
}
app.use(MyLoading)
app.use(ElementPlus)

app.mount('#app')
