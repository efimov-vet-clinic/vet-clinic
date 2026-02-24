<script setup lang="ts">
const { name } = defineProps<{
  name: string;
}>();
const model = defineModel<string>();
</script>

<template>
  <label
    class="flex items-center w-full h-[10rem] bg-[--base] p-[1.2rem] rounded-[0.4rem]"
    :class="[model === name ? 'bg-[--light-blue-hover]' : 'bg-[--base]']"
  >
    <input v-model="model" type="radio" :value="name" required class="hidden" />
    <slot />
  </label>
</template>
