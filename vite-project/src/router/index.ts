import {createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../components/Index.vue'),
        meta: {
            title: '首页',
            transition: 'animate__zoomInDown'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login.vue'),
        meta: {
            title: '登陆',
            transition: 'animate__rollIn'
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior: (to, from, savePosition) => {
        return {
            top: 0
        }
    },
    routes
})

export default router