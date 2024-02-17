<script setup lang="ts">
// import '@/style/fontawesome .css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHouse, faLaptop, faChevronDown } from '@fortawesome/free-solid-svg-icons'
// <font-awesome-icon :icon="['fab', 'app-store-ios']" />
// vue component
/* add icons to the library */
library.add(faUserSecret, faHouse, faLaptop, faChevronDown)
</script>
<template>
    <div>
        <div class="bg-white p-4 flex justify-between items-center">
            <el-breadcrumb separator="|">
                <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
                <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
                <el-breadcrumb-item>更多</el-breadcrumb-item>
            </el-breadcrumb>
            <div class=" flex justify-center items-center relative group">
                <img src="/images/user.png" class=" w-8 h-8 rounded-full object-cover">
                <span class=" ml-1 mr-1 text-sm text-gray-600">向军大叔</span>
                <section class=" absolute group-hover:block top-10 hidden bg-white shadow-md px-3 whitespace-nowrap">
                    <div class="flex items-center cursor-pointer border-b py-3">
                        <font-awesome-icon :icon="['fas', 'house']" class=" text-slate-700 mr-2 text-[20px]" />
                        <span class=" text-sm text-slate-500 ml-2">网站首页</span>
                    </div>
                    <div class="flex items-center cursor-pointer border-b mb-3 py-3">
                        <font-awesome-icon :icon="['fas', 'house']" class=" text-slate-700 mr-2 text-[20px]" />
                        <span class=" text-sm text-slate-500 ml-2">网站首页</span>
                    </div>
                    <div class="flex items-center cursor-pointer border-b mb-3 py-3">
                        <font-awesome-icon :icon="['fas', 'house']" class=" text-slate-700 mr-2 text-[20px]" />
                        <span class=" text-sm text-slate-500 ml-2">网站首页</span>
                    </div>
                    <div class="flex items-center cursor-pointer border-b mb-3 py-3">
                        <font-awesome-icon :icon="['fas', 'house']" class=" text-slate-700 mr-2 text-[20px]" />
                        <span class=" text-sm text-slate-500 ml-2">网站首页</span>
                    </div>
                </section>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
section:hover {}
</style>