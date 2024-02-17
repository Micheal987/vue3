import { createRouter, createWebHashHistory } from "vue-router"
import { rootroutes } from "../Module/routes"
import { GetRoutes } from "../AtuoRoad/index"
import { GetRoutesMods, RrouteMods } from "../AtuoRoad/auto"
import registerouter from '../atuoload/index'
import { App } from "vue"
import guard from "../guard/guard"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [...rootroutes, ...registerouter]
})
const SetupRouter = (app: App) => {
    guard(router)
    app.use(router)
}
export { router, SetupRouter }