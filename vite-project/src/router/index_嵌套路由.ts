import {createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/footer',
        component: () => import('../components/Footer.vue'),
        children: [
            {
                path: 'reg',
                name: 'Reg',
                component: () => import('../components/Reg.vue')
            },
            {
                path: 'detail',
                name: 'Detail',
                component: () => import('../components/Detail.vue')
            },
            {
                path: 'detail1',
                name: 'detail1',
                component: () => import('../components/Detail1.vue')
            }
        ]
    }, 
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router