import * as veeVualidate from "vee-validate"
import { defineRule } from 'vee-validate';
import * as AllRules  from "@vee-validate/rules"
import { loadLocaleFromURL, localize } from "@vee-validate/i18n"
import { yup } from "./yup"
// import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json"
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json')
veeVualidate.configure({
    validateOnInput:true,
    generateMessage: localize('zh_CN')
})
Object.keys(AllRules).forEach((rule) => {
    // console.log("KEY", rule)
    defineRule(rule, AllRules[rule])
})
const modules = { yup, ...veeVualidate }
export default modules