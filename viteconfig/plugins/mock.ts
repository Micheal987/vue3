import { viteMockServe } from 'vite-plugin-mock'
const SetupMockPlugin = (isBuild: boolean) => {
    return viteMockServe({
        mockPath: 'mock',
        // !isBuild //开发环境   //commad === 'serve' 非开发环境
        enable:!isBuild //true
    })
}
export {
    SetupMockPlugin
}