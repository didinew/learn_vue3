import {createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../components/Index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login.vue'),
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router