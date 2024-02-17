import { RouteRecordRaw } from 'vue-router'

const rootroutes: RouteRecordRaw[] = [
    { path: '/', name: '/', component: () => import('@/views/Layout/admin.vue') },
    {
        path: '/login', name: 'login', component: () => import('@/views/Layout/Login/Login-ba.vue'),
        meta: { guest: true }
    },
    { path: '/home', name: 'home', component: () => import('@/views/Home/home.vue'), },
    { path: '/register', component: () => import('@/views/Layout/Login/register.vue') }
]
export {
    rootroutes
}