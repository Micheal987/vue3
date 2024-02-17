import { RouteRecordRaw } from "vue-router";

export default {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Layout/admin.vue'),
    children: [
        // { name: 'admin.home', path: 'home', component: () => import('@/views/Layout/home.vue') }
        { name: 'admin-home', path: 'home', component: () => import('@/views/Layout/admin/home.vue') }
    ],
    meta: { auth: true }
} as unknown as RouteRecordRaw