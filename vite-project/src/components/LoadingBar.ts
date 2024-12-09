import { createVNode, render, VNode, App } from "vue"
import LoadingBar from './LoadingBar.vue'

export default {
    install(app: App) {
        // 创建节点
        const vnode: VNode = createVNode(LoadingBar)
        // 挂载在body 上
        render(vnode, document.body)

        app.config.globalProperties.$loadingBar = {
            startLoading: () => vnode.component?.exposed?.startLoading(),
            endLoading: () => vnode.component?.exposed?.endLoading()
        }
    }
}