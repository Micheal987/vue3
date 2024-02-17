<script setup lang="ts">
// import '@/style/fontawesome .css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faXmark } from '@fortawesome/free-solid-svg-icons'
// <font-awesome-icon :icon="['fab', 'app-store-ios']" />
// vue component
/* add icons to the library */
library.add(faXmark)
import { ref } from "vue"
const RouterLinks = ref<{ title: string }[]>([
    { title: "编辑器" },
    { title: "订单列表" },
    { title: "用户管理" },
    { title: "销售总额" }
])
</script>
<template>
    <div class=" mt-3 grid grid-flow-col justify-start gap-2 px-2">
        <RouterLink to="/" v-for="(_item, index) in RouterLinks" :key="index"
            class=" bg-white rounded-md py-2 px-2 text-sm text-slate-500">{{_item.title}}
            <span>
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </span>
        </RouterLink>
    </div>
</template>