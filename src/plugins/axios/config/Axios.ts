import axios, { AxiosRequestConfig } from "axios"
import "../../../../types/axios/ResponseResult"
import { BaseURL } from "../URL/baseurl"
class Axios {
    private instance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.intercptors()
    }
    public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.instance.request<D>(config)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    private intercptors() {
        this.intercptorsRequest()
        this.intercptorsResponse()
    }
    private intercptorsRequest() {
        // 添加请求拦截器
        this.instance.interceptors.request.use(
            (config) => {
                // 在发送请求之前做些什么
                return config;
            },
            (error) => {
                // 对请求错误做些什么
                return Promise.reject(error);
            });

    }
    private intercptorsResponse() {
        // 添加响应拦截器
        this.instance.interceptors.response.use(
            (response) => {
                // 2xx 范围内的状态码都会触发该函数。
                // 对响应数据做点什么
                return response;
            },
            (error) => {
                // 超出 2xx 范围的状态码都会触发该函数。
                // 对响应错误做点什么
                return Promise.reject(error);
            });

    }
}
export {
    Axios
}