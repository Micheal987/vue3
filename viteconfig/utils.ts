import _ from "lodash"
import "../types/viteEnv.d.ts"
const parentEnv = (env: Record<string, any>): ViteEnv => {
    const envs: any = _.cloneDeep(env)
    Object.entries(env).forEach(([key, vaule]) => {
        if (vaule == 'true' || vaule == false) envs[key] = vaule == "true" ? true : false
        else if (/^\d+$/.test(vaule)) envs[key] = Number(vaule) //parseint
        else if (vaule == "null") envs[key] = null
        else if (vaule == 'undefind') envs[key] = undefined
    })
    return envs
}
export {
    parentEnv
}


// type RR<T extends keyof any, B> = {
//     [P in T]: B
// }