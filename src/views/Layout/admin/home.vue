<script setup lang="ts">
import navbarCompnent from "./navbar.vue"
import histroyLink from "./histroyLink.vue"
import homecom from '../home.vue'
import { useRoute } from "vue-router";
const routerserver = useRoute()
</script>
<template>
   <div>
      <navbarCompnent />
      <histroyLink />
      <homecom v-if="routerserver.path=='/admin/'" />
   </div>
</template>
<srcipt lang="ts">
export default {
   route: { name: 'home' }
}
</srcipt>