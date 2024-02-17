<script setup lang="ts">
// import { defineRule, configure, useField, useForm } from "vee-validate"
// import { ref } from "vue"
// import { required, email, min } from "@vee-validate/rules"
// import { localize } from "@vee-validate/i18n"
// import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json"
// import * as yup from "yup"
// defineRule('email', email)
// defineRule('required', required)
// defineRule('min', min)
// configure({
//     generateMessage: (context): string => {
//         return ` ${localize('zh_CN', zh_CN), context.field}不是有效`;
//     },
// })
import v from "@/plugins/vaildate"
const { handleSubmit, errors } = v.useForm({
    initialValues: {
        username: 'Hd',
        password: '1000'
    },
    validationSchema: {
        // username: { required: true, email: true },
        // password: { required: true, min: 10 }
        username: v.yup.string().required().email().label('账号'),
        password: v.yup.string().required("必填").min(8,"少")
    }
})
const { value: usernameValue } = v.useField('username', {}, { label: '用户名' })
const { value: passwordValue } = v.useField('password', {}, { label: '密码' })

const onSubimt = handleSubmit((value: any) => {
    alert("验证ok")
    console.log("验证", value)
})
</script>
<template>
    <form class="From" @submit="onSubimt">
        <section>
            <input class="Field" type="text" v-model="usernameValue" />
            <p class="error" v-if="errors.username">{{ errors.username }}</p>
        </section>
        <section>
            <input class="Field" type="text" v-model="passwordValue" />
            <p class="error" v-if="errors.password">{{ errors.password }}</p>
        </section>
        <button>提交</button>
    </form>
</template>
<style lang="scss" scoped>
.From {
    @apply w-screen h-screen bg-slate-500;

    .Field {
        @apply border-4 p-2 rounded-md border-violet-500 outline-none;
    }

    .error {
        @apply bg-red-800 border border-gray-300 p-2 text-white
    }
}
</style>