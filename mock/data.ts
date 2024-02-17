import { MockMethod, MockConfig } from 'vite-plugin-mock'
export default [
    {
        url: '/api/get',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: "ok",
                type: "succes",
                data: {
                    result: {
                        name: 'vben',
                        age: 18,
                        sex: "man",
                        UserPicurl: ""
                    }
                }
            }
        },
    },
    {
        url: '/api/post',
        method: 'post',
        timeout: 2000,
        response: {
            code: 0,
            data: {
                result: {
                    token: Math.random().toString(10)
                }
            },
        },
    },
    {
        url: '/api/login',
        method: 'post',
        response: () => {
            return {
                code: 200,
                message: "ok",
                type: "succes",
                data: {
                    result: {
                        name: 'vben',
                        token: Math.random().toString(36).slice(-6),
                        age: 18,
                        sex: "man",
                        UserPicurl: ""
                    }
                }
            }
        },
    },
] as MockMethod[]

