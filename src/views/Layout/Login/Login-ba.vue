<script setup lang="ts">
import v from "@/plugins/vaildate"
import { login } from "@/apis/user"
import { reactive } from "vue"
import { store } from "@/utils";
import { useRouter } from "vue-router"
const router = useRouter()
const account = reactive({
    account: '14117@qq.com',
    password: 'fengwei'
})
const { Form, Field, ErrorMessage } = v
// const schema = v.yup.object({
//     account: v.yup.string().email().required().label('账号'),
//     password: v.yup.string().min(10).required()
// })
// const schema ={
//     account: v.yup.string().email().required().label('账号'),
//     password: v.yup.string().min(10).required().label('密码')
// }
const schema = {
    // regex: `/.+@.+|\d{{11}/i}`
    account: { required: true },
    password: { required: true, min: 10 }
}
const logAcc = async () => {
    const { data: res } = await login(account)
    localStorage.getItem(res.result.token)
    const token = res.result.token
    console.log("登录的调用", res.result.token)
    store.set('token', {
        expire: 100,
        token
    })
    router.push({
        path: '/home',
        query: { user: res.result.token }
    })
}
const onSubimt = (values: any) => {
    console.log(values)
    logAcc()
    alert("验证程序")
}
</script>
<script lang="ts">
export default {
    route: { name: 'login', meta: { guest: true } }
}
</script>
<template>
    <h2>LOGIN</h2>
    <Form @submit="onSubimt" :validation-schema="schema" #default="{ errors }" class="hd-conatiner">
        <div class="hd-conatiner-mide">
            <div class="p-10">
                <h2 class="text-center">会员登陆</h2>
                <div class="mt-8">
                    <Field name="account" :value="account.account" :validate-on-input="true" label="账号"
                        placeholder="请输入账号\邮箱\手机号" class="hd-input" />
                    <p v-if="errors.account" class="hd-error">请输入账号\邮箱\手机号</p>
                    <!-- <ErrorMessage name="account" as="div" class="hd-error" /> -->
                    <Field name="password" :value="account.password" :validate-on-input="true" label="密码" type="password"
                        class="hd-input" />
                    <ErrorMessage name="password" as="div" class="hd-error" />
                    <!-- <loginFrom v-bind="Field" v-model="from.account" placeholder="请输入账号/用户名" />
                    <loginFrom v-bind="Field" v-model="from.password" placeholder="请输入密码" class="mt-5" /> -->
                    <loginButton />
                </div>
                <loginLink />
            </div>
            <div class="hidden md:block w-full">
                <img src="/images/login.png" class="h-96 w-full object-cover" />
            </div>
        </div>
    </Form>
</template>
<style lang="scss" scoped>
.hd-conatiner {
    @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5 md:p-0;
}

.hd-conatiner-mide {
    @apply w-[720px] bg-white translate-y-32 md:translate-y-0 grid md:grid-cols-2 rounded-md shadow-md overflow-hidden;
}
</style>
