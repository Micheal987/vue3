<script setup lang="ts">
import { useStoreConfig } from "@/store/useStroeConfig"
const usestore = useStoreConfig()
console.log(usestore.router)
</script>
<template>
    <div>
        <RouterView />
    </div>
</template>
