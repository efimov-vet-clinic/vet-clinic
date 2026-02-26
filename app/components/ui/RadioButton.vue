<script setup lang="ts">
const { name } = defineProps<{
  name: string;
}>();
const model = defineModel<string>();
</script>

<template>
  <label
    class="flex items-center w-full bg-[--base] hover:bg-[--light-blue-hover] p-[1.2rem] rounded-[0.4rem] cursor-pointer"
    :class="[model === name ? 'bg-[--light-blue-hover]' : 'bg-[--base]']"
  >
    <input v-model="model" type="radio" :value="name" required class="hidden" />
    <slot />
  </label>
</template>
