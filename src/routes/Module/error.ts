import { RouteRecordRaw, useRoute } from "vue-router"
export default <RouteRecordRaw | unknown>{
    path: '/error', name: "error", component: () => import('@/views/Layout/admin.vue'),
    meta: { menu: { title: '错误页面', icon: ['fas', 'chevron-down'], show: true } },
    children: [
        {
            path: "401",
            name: '401',
            component: () => import('@/views/Home/error/401.vue'),
            meta: { menu: { title: 'error401', icon: ['fas', 'chevron-down'], show: true } },
        },
        {
            path: "402",
            name: '402',
            component: () => import('@/views/Home/error/402.vue'),
            meta: { menu: { title: 'error402', icon: ['fas', 'chevron-down'], show: true } },
        },
        {
            path: "403",
            name: '403',
            component: () => import('@/views/Home/error/403.vue'),
            meta: { menu: { title: 'error403', icon: ['fas', 'chevron-down'], show: true } },
        },
        {
            path: "404",
            name: '404',
            component: () => import('@/views/Home/error/404.vue'),
            meta: { menu: { title: 'error404', icon: ['fas', 'chevron-down'], show: true } },
        },
        { path: "500", name: "500", component: () => import('@/views/Home/error/500.vue') }
    ]
}