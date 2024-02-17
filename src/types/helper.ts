import _ from "lodash"
class Helper {
    public env = {} as ImportMetaEnv
    constructor() {
        this.env = this.GetEnvs()
    }
    private GetEnvs(): ImportMetaEnv {
        const envs: any = _.cloneDeep(import.meta.env)
        Object.entries(import.meta.env as Record<string, any>).forEach(([key, vaule]) => {
            if (vaule == 'true' || vaule == false) {
                envs[key] = vaule == "true" ? true : false
            }
            else if (/^\d+$/.test(vaule)) envs[key] = Number(vaule) //parseint
            else if (vaule == "null") envs[key] = null
            else if (vaule == 'undefind') envs[key] = undefined
            else envs[key] = vaule
        })
        return envs
    }
}
const helper = new Helper()
const env = helper.env
export { helper,env }