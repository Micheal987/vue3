import { RouteRecordRaw } from "vue-router";
import {env} from "@/utils"
// 第一种方法
//layouts文件夹 导入
const layouts = import.meta.glob('@/views/Layout/*.vue', { eager: true })
//views文件 导入
const views = import.meta.glob("@/views/**/*.vue", { eager: true })
//GetRouterModule 获取所有路由的封装fn
const GetRouterModule = (file: string, module: unknown | any) => {
    //取得path .vue文件名称  
    // const name1 = file.split('/').pop()?.split('.')
    // const name2 = file.match(/\/Layout\/(?<name>.+?)\.vue/i)?.groups?.name
    // const name3 = file.replace(/.+Layout\/|\.vue/gi, "")
    const name = file.replace(/.+Layout\/|.+views\/|\.vue/gi, "")
    //currouter 当前
    const route = {
        name: name.replace('/', '-'),
        path: `/${name}`,
        component: module.default,
    } as RouteRecordRaw
    //自定义页面的路由
    console.log("自定义页面的路由", Object.assign(route, module.default?.route));
    //return
    return Object.assign(route, module.default?.route)
}
//获取布局子路由
const GetChildrenRouter = (layoutroute: RouteRecordRaw) => {
    console.log("GetChildrenRouter", layoutroute);
    const routes: RouteRecordRaw[] = []
    Object.entries(views).forEach(([file, module]) => {
        //if判断
        if (file.includes(`../views/${layoutroute.name as string}`)) {
            const route = GetRouterModule(file, module)
            console.log("子路由", route);
            routes.push(route)
        }
    })
    //
    return routes
}
const GetRoutes = (): any => {
    //layoutroutes
    const layoutroutes: Array<RouteRecordRaw> = []
    Object.entries(layouts).forEach(([file, module]) => {
        //GetRouterModule 父
        const route = GetRouterModule(file, module)
        //GetChildrenRouter 子
        route.children = GetChildrenRouter(route)
        layoutroutes.push(route)
    })
    return layoutroutes
}
console.log(typeof env.VITE_ROUTER_ATUOLODA)
const Rroutes = env.VITE_ROUTER_ATUOLODA ? GetRoutes() : (<RouteRecordRaw[]>[])
export {
    Rroutes,
    GetRoutes
}