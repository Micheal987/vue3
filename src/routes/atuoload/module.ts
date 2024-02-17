import { RouteRecordRaw } from 'vue-router'
const module = import.meta.glob('../Module/**/*.ts', { eager: true })
export const atuoLoadMOduleRoute = () => {
    let router: RouteRecordRaw[] = []
    Object.keys(module).forEach((key: string) => {
        router.push({ ...(module as any)[key].default })
    })
    return router
}