import { env } from '@/utils'
import { GetRoutesMods, GetRouterModule } from './views'
import { atuoLoadMOduleRoute } from './module'
import { RouteRecordRaw } from 'vue-router'
let router: RouteRecordRaw[] = []
if (env.VITE_ROUTER_ATUOLODA) {
    router = GetRoutesMods()
}
else {
    router = atuoLoadMOduleRoute()
}
export default router
// const RrouteMods = env.VITE_ROUTER_ATUOLODA ? GetRoutesMods() : (<RouteRecordRaw[]>[])