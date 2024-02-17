<script setup lang="ts">
</script>
<template>
    <div>
        <div class=" flex items-center justify-between mt-5">
            <router-link class="hd-textlink" to="/">网站首页</router-link>
            <router-link class="hd-textlink" to="/">会员注册</router-link>
            <router-link class="hd-textlink" to="/">找回密码</router-link>
            <router-link class="hd-textlink" to="/">联系我们</router-link>
        </div>
    </div>
</template>
<style lang="scss">
.hd-textlink {
    @apply text-xs text-gray-700 hover:text-red-800
}
</style>