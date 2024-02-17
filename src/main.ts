import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { SetupPlugins } from "./plugins"
import { router, SetupRouter } from "./routes/Home/"
import "@/style/global.scss"
import { BootPinia } from "@/plugins/pinia"
import { setupElementPlus } from "./plugins/elementui"
// import LoginFrom from "@/components/from/login-from.vue"
const BootStrap = async () => {
    const app = createApp(App)
    SetupRouter(app)
    SetupPlugins(app)
    setupElementPlus(app)
    BootPinia(app)
    // app.component('loginFrom', LoginFrom)
    await router.isReady()
    app.mount('#app')
    // app.use(router)
}
BootStrap()
