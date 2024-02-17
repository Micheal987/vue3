<script setup lang="ts">
import { RouteRecordNormalized, useRouter, RouteRecordRaw } from "vue-router"
// import '@/style/fontawesome .css'
/* import the fontawesome core */
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHouse, faLaptop, faChevronDown } from '@fortawesome/free-solid-svg-icons'
// <font-awesome-icon :icon="['fab', 'app-store-ios']" />
// vue component
// import { ref } from "vue"
/* add icons to the library */
library.add(faUserSecret, faHouse, faLaptop, faChevronDown)
// interface IMenuItem {
//     title: string
//     icon?: string[]
//     active?: boolean
// }
// interface IMenu extends IMenuItem {
//     chlidren?: IMenuItem[]
// }
// const menus = ref<IMenu[]>([
//     {
//         title: '错误页面', icon: ['fa', 'house'], active: true, chlidren: [
//             { title: '404页面', active: true },
//             { title: '401页面', active: false },
//             { title: '402页面', active: false }
//         ]
//     },
//     {
//         title: '编辑器', icon: ['fa', 'house'], active: false, chlidren: [
//             { title: 'mrkdown编辑器', active: false },
//             { title: '富文本编辑器', active: false }
//         ]
//     }
// ])
import { useStoreConfig } from "@/store/useStroeConfig"
const routerserver = useRouter()
const usestore = useStoreConfig()
const reset = () => {
    usestore.routes.forEach(route => {
        route.meta.menu.isClick = false
        console.log('reset', route.meta.menu.isClick)
        route.children.forEach((route) => {
            if (route.meta) {
                route.meta.menu.isClick = false
            }
        })

    })
}
const handle = (pRoute: RouteRecordNormalized, cRoute?: RouteRecordRaw) => {
    reset()
    pRoute.meta.menu.isClick = true
    console.log(pRoute.meta.menu.isClick)
    if (cRoute && cRoute.meta) {
        console.log(cRoute)
        cRoute.meta.menu.isClick = true
        routerserver.push(cRoute)
    }
}
</script>
<template>
    <div>
        <div class="menu">
            <div class="logo">
                <font-awesome-icon :icon="['fas', 'house']" class=" text-fuchsia-400 mr-2 text-[20px]" />
                <span class=" text-sm">每晚八点直播</span>
            </div>
            <!-- 菜单 -->
            <div class="left-container">
                <dl v-for="(router, index) in usestore.routes" :key="index">
                    <dt @click="handle(router)">
                        <section>
                            <!-- <font-awesome-icon :icon="router.meta.menu?.icon as string | object | string[] | IconDefinition" /> -->
                            <span>{{ router.meta.menu?.title }}</span>
                        </section>
                        <section>
                            <font-awesome-icon :icon="['fas', 'chevron-down']"
                                :class="{ 'rotate-180': router.meta.menu?.isClick }" />
                        </section>
                    </dt>
                    <dd v-show="router.meta.menu?.isClick" :class="{ active: childrenrouter.meta?.menu?.isClick }"
                        v-for="(childrenrouter, key) in router.children" :key="key" @click="handle(router, childrenrouter)">
                        {{
                            childrenrouter.meta?.menu?.title }}
                    </dd>
                </dl>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.menu {
    @apply w-[200px] bg-gray-800 p-4 min-h-screen;

    .logo {
        @apply text-gray-400
    }
}

.left-container {
    dl {
        @apply text-gray-400 text-sm;

        dt {
            @apply text-sm mt-6 flex justify-between items-center cursor-pointer;

            section {
                @apply flex items-center;

                font-awesome-icon {
                    @apply mr-2 text-sm
                }
            }
        }

        dd {
            @apply py-2 pl-2 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500;

            &.active {
                @apply bg-violet-700
            }
        }
    }
}
</style>