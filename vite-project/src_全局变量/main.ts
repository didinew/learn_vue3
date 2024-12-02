import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'


const app = createApp(App)

app.config.globalProperties.$env = 'dev'
app.config.globalProperties.$filters = {
    format<T extends any>(str: T): string {
        return `$${str}`
    }
}

type Filter = {
    format<T>(str: T): string
}
 
// 声明要扩充@vue/runtime-core包的声明.
// 这里扩充"ComponentCustomProperties"接口, 因为他是vue3中实例的属性的类型.
declare module 'vue' {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $env: string
    }
}
 
 
app.use(ElementPlus)
app.mount('#app')
