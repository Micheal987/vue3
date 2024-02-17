import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { aliasmodule } from "./viteconfig/alias"
import { parentEnv } from "./viteconfig/utils"
import { SetupPlugins } from "./viteconfig/plugins/"
import { serverproxy } from "./viteconfig/server/server"
// https://vitejs.dev/config/
// 默认
// export default defineConfig({
//   resolve: {
//     alias: aliasmodule,
//   },
//   plugins: [vue()],
//   server:serverproxy
// })
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build'
  const root = '.'
  const env = parentEnv(loadEnv(mode, root))
  console.log(env)
  const server = serverproxy
  return {
    plugins: [SetupPlugins(isBuild, env)],
    // plugins: [vue()],
    resolve: { alias: aliasmodule },
    server
  }
}