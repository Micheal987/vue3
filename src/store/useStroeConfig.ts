import { defineStore } from 'pinia'
import { useRouter, RouteMeta } from "vue-router"
export const useStoreConfig = defineStore('stroeConfi', {
    // 为了完整类型推理，推荐使用箭头函数
    state: () => ({
        routes: GetRoutes()
    })
})
const GetRoutes = () => {
    const router = useRouter()
    const routes = router
        .getRoutes()
        .filter((route) => { return route.children.length > 0 && route.meta.menu?.show != undefined })
        .map((route) => {
            route.children = route.children.filter((route) => route.meta?.menu?.show)
            return route
        })
    return routes
}