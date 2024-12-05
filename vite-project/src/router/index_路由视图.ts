import {createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        components: {
            default: () => import('../components/Footer.vue'),
            header: () => import('../components/Reg.vue'),
            content: () => import('../components/Login.vue'),
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router