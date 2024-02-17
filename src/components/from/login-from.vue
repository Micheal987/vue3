<script setup lang="ts">
interface Props {
  modelValue: string
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: ""
})
</script>
<template>
  <input type="text" class="hd-input" :value="props.modelValue"
    @input="$emit('update:modelValue', (<Event | null | any>$event.target as HTMLInputElement).value)" />
</template>
<style lang="scss">
.hd-input {
  @apply border w-full rounded-md py-2 px-4 outline-none border-gray-300 placeholder:text-sm focus:ring-2 ring-offset-2 ring-violet-500 duration-200 focus:border-none
}
</style>