import { createVNode, render, VNode, App, DirectiveBinding } from "vue"
import MyLoading from './index.vue'


export default {
    install(app: App) {
        // createVNode vue 提供底层的方法 可以给组建创建一个虚拟DOM. 也就是Vnode
        const vnode: VNode = createVNode(MyLoading)
        render(vnode, document.body)

        app.config.globalProperties.$myloading = {
            show: () => vnode.component?.exposed?.show(),
            hide: () => vnode.component?.exposed?.hide()
        }
        // app.config.globalProperties.$loading.show()
        // console.log(app.config.globalProperties.$loading.show())

        app.directive('my-loading', {
            mounted(el: any, binding) {
                el.addEventListener('click', () => {
                    vnode.component?.exposed?.show()
                    console.log(new Date())
                    setTimeout(() => {
                        console.log(new Date())
                     vnode.component?.exposed?.hide()
                    }, binding?.value || 3000)
                })
            }  
        })
    }



}
