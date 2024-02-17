import { http } from "../plugins/axios/config/index"
// class UserApi {
//     info() {
//         return http.request({
//             url: 'info',
//         })
//     }
//     login() {

//     }
// }
// export default new UserApi() 

export interface User {
    name: string
    age: number
    sex: string
    UserPicurl: null
}
const info = () => {
    return http.request<User>({
        url: '/get'
    })
}
interface LogAcc {
result: any
    token: string
}
interface acc {
    account: string
    password: string
}
const login = (params: acc, data: any = 0) => {
    console.log("参数", params)
    return http.request<LogAcc>({
        method: 'post',
        params: params,
        data,
        url: '/login'
    })
}
export {
    info, login
}