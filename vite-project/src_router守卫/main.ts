import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'uno.css'
// import './index.css'
import router from './router'
import LoadingBar from './components/LoadingBar'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(LoadingBar)

// 前置守卫
router.beforeEach((to, from, next) => {
     app.config?.globalProperties?.$loadingBar.startLoading()
     next()
})

// 后置守卫
router.afterEach((to, from) => {
     app.config?.globalProperties?.$loadingBar.endLoading()
})


app.mount('#app')