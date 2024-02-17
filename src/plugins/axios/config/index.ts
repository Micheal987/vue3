import { Axios } from "./Axios"
const http = new Axios({
    baseURL:'/api',
    timeout: 9000,
    headers: {},
    params:{}
})
export { http }