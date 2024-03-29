// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        // 是可选的
        auth?: boolean
        isAdmin?: boolean
        guest?: boolean
        // 每个路由都必须声明
        requiresAuth?: boolean
        //
        menu?: {
            show?: boolean
            title?: string
            icon?: string
            isClick?: boolean
            Permissions?: string[]
        }
    }
}