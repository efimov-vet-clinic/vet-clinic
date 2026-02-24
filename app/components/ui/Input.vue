<script setup lang="ts">
const model = defineModel<string>();
</script>

<template>
  <input
    v-model="model"
    type="text"
    class="w-full text-[--primary] text-[1.6rem]/[120%] p-[1.2rem] rounded-[0.4rem] bg-[--base]"
  />
</template>
