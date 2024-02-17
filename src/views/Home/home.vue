<script setup lang="ts">
</script>
<template>
    <div class="container">
        <img src="/images/home.png" class="userurl">
        <div class="mt-5">
            <router-link :to="{ name: 'admin' }" class="hd-button">后台管理</router-link>
            <router-link :to="{ name: 'login' }" class="hd-button hd-danger ml-5">用户登录</router-link>
        </div>
        <div class=" text-white text-xs mt-3"> 每晚八点直播,欢迎来直播间学习</div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/style/global.scss';
.container {
    max-width: 100vw;
    @apply w-screen h-screen bg-gray-800 flex flex-col justify-center items-center
}

.userurl {
    @apply w-36 h-36 object-cover rounded-full border-4 border-white mt-5
}
</style>
<srcipt lang="ts">
export default {
    route: { name: 'home' }
}
</srcipt>
