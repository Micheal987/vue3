<script setup lang="ts">
// import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate"
import { ref } from "vue"
// import { required, min, max, confirmed, email } from "@vee-validate/rules"
// import { localize } from "@vee-validate/i18n"
// import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json"
const account = ref<string>('')
// // const emailRules = (value: any) => {
// //     return /@/.test(value) ? true : "邮箱各式错误"
// // }
// defineRule('email', email)
// defineRule('required', required)
// configure({
//     generateMessage: (context): string => {
//         return ` ${localize('zh_CN', zh_CN), context.field}不是有效的邮箱`;
//     },
// })



import v from "@/plugins/vaildate"
const {Form,Field}= v
const onSubmit = (value: any) => {
    console.log("验证通过", value)
    alert('验证通过')
}
</script>
<template>
    <Form class="From" @submit="onSubmit">
        <Field class="Field" name="account" v-model="account" label="账号" :rules="{ required: true, email: true }"
            :validate-on-input="true" #default="{ field, errorMessage }">

            <input v-bind="field" v-model="account" />
            <hr>
            <p>{{ errorMessage }}</p>
        </Field>
        <hr>
        <button class=" border bg-green-500 text-white">提交表单</button>
        <!-- <input type="text" placeholder="测试" /> -->
    </Form>
</template>
<style lang="scss" scoped>
.From {
    @apply flex w-screen h-screen justify-center items-center bg-slate-500;
}

.Field {
    @apply border-4 p-2 rounded-md border-violet-500 outline-none;
}
</style>