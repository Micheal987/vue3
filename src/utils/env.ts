import _ from "lodash"
const env: any = _.cloneDeep(import.meta.env)

// const envs: any = _.cloneDeep(import.meta.env)
Object.entries(import.meta.env as Record<string, any>).forEach(([key, vaule]) => {
    if (vaule == 'true' || vaule == false) {
        env[key] = vaule == "true" ? true : false
    }
    else if (/^\d+$/.test(vaule)) env[key] = Number(vaule) //parseint
    else if (vaule == "null") env[key] = null
    else if (vaule == 'undefind') env[key] = undefined
    else env[key] = vaule
})
export default env as ViteEnv