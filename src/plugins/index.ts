import { App } from "vue"
import { SetupTailWindcss } from "./tailwindcss/index"
import _ from "lodash"
const SetupPlugins = (app: App) => {
    atuoRegisterComponent(app)
    SetupTailWindcss()

}
//自动注册全局组件
const atuoRegisterComponent = (app: App) => {
    const components = import.meta.glob(`../components/from/**/*.vue`, { eager: true })
    //Object.key
    Object.keys(components).forEach((key) => {
        const name = (key.split('/').pop()?.split('.').shift()) as string
        app.component(_.camelCase(name), (<any | unknown | string>components)[key].default)
        console.log(_.camelCase(name))
    })
}
export {
    SetupPlugins
}