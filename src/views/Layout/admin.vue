<script setup lang="ts">
import leftMenu from "./admin/menu.vue"
import homevue from "./admin/home.vue"
</script>
<template>
    <main class="admin">
        <div class="menu">
            <leftMenu />
            <div class="log">
            </div>
        </div>
        <div class="content">
            <homevue />
            <RouterView />
        </div>
    </main>
</template>
<script lang="ts">
export default {
    route: { meta: { auth: true } }
}
</script>
<style lang="scss" scoped>
.admin {
    @apply h-screen w-screen grid md:grid-cols-[auto_1fr];

    .menu {
        @apply bg-gray-100 grid grid-rows-[auto_1fr] overflow-hidden;
    }

    .log {}

    .content {
        @apply overflow-y-auto pb-32;
    }
}
</style>

<!-- <script setup lang="ts">
import HistoryMenu from './admin/histroyLink.vue'
import leftMenu from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import homevue from "./admin/home.vue"
</script>

<template>
    <main class="admin h-screen w-screen grid md:grid-cols-[auto_1fr]">
        <leftMenu />
        <section class="content bg-gray-100 grid grid-rows-[auto_1fr] overflow-hidden">
            <div>
                <homevue />
            </div>
            <div class="overflow-y-auto pb-32">
                <router-view #default="{ Component, route }">
                    <component :is="Component" class="m-5" :key="route.fullPath" />
                </router-view>
            </div>
        </section>
    </main>
</template> -->
