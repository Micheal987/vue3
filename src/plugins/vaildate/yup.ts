import * as yup from "yup"
yup.setLocale({
    mixed:{
        required:`必须输入项`
    },
    string:{
        email:'邮箱格式错误'
    }
})
export{
    yup
}