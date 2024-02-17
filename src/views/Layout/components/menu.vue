<script setup lang="ts">
// import '@/style/fontawesome .css'
/* import the fontawesome core */
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHouse, faLaptop, faChevronDown } from '@fortawesome/free-solid-svg-icons'
// <font-awesome-icon :icon="['fab', 'app-store-ios']" />
// vue component
import { ref } from "vue"
/* add icons to the library */
library.add(faUserSecret, faHouse, faLaptop, faChevronDown)
interface IMenuItem {
    title: string
    icon?: string[]
    active?: boolean
}
interface IMenu extends IMenuItem {
    chlidren?: IMenuItem[]
}
const menus = ref<IMenu[]>([
    {
        title: '错误页面', icon: ['fa', 'house'], active: true, chlidren: [
            { title: '404页面', active: true },
            { title: '401页面', active: false },
            { title: '402页面', active: false }
        ]
    },
    {
        title: '编辑器', icon: ['fa', 'house'], active: false, chlidren: [
            { title: 'mrkdown编辑器', active: false },
            { title: '富文本编辑器', active: false }
        ]
    }
])
const resrtMenus = () => {
    menus.value.forEach(pmenu => {
        pmenu.active = false,
            pmenu.chlidren?.forEach(m => m.active = false)
    })
}
const handle = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
    console.log(cmenu)
    resrtMenus()
    pmenu.active = true
}
</script>
<template>
    <div>
        <div class="menu ">
            <div class="logo">
                <font-awesome-icon :icon="['fas', 'house']" class=" text-fuchsia-400 mr-2 text-[20px]" />
                <span class=" text-sm">每晚八点直播</span>
            </div>
            <!-- 菜单 -->
            <div class="left-container">
                <dl v-for="(menu, index) of menus" :key="index">
                    <dt @click="handle(menu)">
                        <section>
                            <font-awesome-icon :icon="(menu.icon as string | object | string[] | IconDefinition)" />
                            <span>{{ menu.title }}</span>
                        </section>
                        <section>
                            <font-awesome-icon :icon="['fas', 'chevron-down']" />
                        </section>
                    </dt>
                    <dd v-show="menu.active" :class="{ active: cmenu.active }" v-for="(cmenu, key) in menu.chlidren"
                        :key="key">{{ cmenu.title }}
                    </dd>
                </dl>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.menu {
    @apply w-[200px] bg-gray-800 p-4 h-screen;

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