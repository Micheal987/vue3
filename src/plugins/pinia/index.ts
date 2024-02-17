import { createPinia } from 'pinia'
import { App } from 'vue'
const BootPinia = (app: App) => {
    const pinia = createPinia()
    app.use(pinia)
}
export { BootPinia }