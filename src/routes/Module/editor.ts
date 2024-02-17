import { RouteRecordRaw } from "vue-router"
export default <RouteRecordRaw>{
    path: '/editor', name: 'edtior', component: () => import('@/views/Layout/editor.vue'),
    children: [
        { path: 'markdown', name: "markdown", component: () => import('@/views/Home/editor/markdown.vue') }
    ]
}