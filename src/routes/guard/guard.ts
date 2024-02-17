import store, { IData } from "@/utils/store"
import { RouteLocationNormalized, Router } from "vue-router"

class Guard {
    constructor(private router: Router, private token?: string) {

    }
    public run() {
        this.router.beforeEach(this.beforeEach.bind(this))
    }
    private beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
        // let token = store.get('token')
        //login is false
        if (this.isAuthCheck(to) === false) return { name: 'login' }
        if (this.isGuest(to) === false) return { name: 'home' }
    }
    private gettoken = (): IData | null => {
        let token = store.get('token')
        return token
    }
    //游客
    private isGuest(route: RouteLocationNormalized) {
        return Boolean((!route.meta.guest) || (route.meta.guest && !this.gettoken()))
    }
    //登录
    private isAuthCheck(route: RouteLocationNormalized) {
        // if (route.name != 'login') return false
        return Boolean((!route.meta.auth) || (route.meta.auth && this.gettoken))
    }
}
export default (router: Router) => {
    new Guard(router).run()
}