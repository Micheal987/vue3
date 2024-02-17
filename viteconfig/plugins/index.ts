import { ConfigEnv, Plugin } from "vite"
import vue from "@vitejs/plugin-vue"
const { SetupMockPlugin } = require('./mock')
const { requireTransforms } = require('../../require/index')
const SetupPlugins = (isBuild: boolean, env: ViteEnv) => {
    const plugins: Plugin[] = [vue(), requireTransforms]
    console.log(env.VITE_METHODS)
    plugins.push(SetupMockPlugin(isBuild))
    return plugins
}
export {
    SetupPlugins
}