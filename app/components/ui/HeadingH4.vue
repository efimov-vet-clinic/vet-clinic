<script setup lang="ts">
const { color } = defineProps<{
  color: string;
}>();
</script>

<template>
  <h4
    class="text-[3.2rem]/[90%] font-semibold tracking-tight"
    :class="`text-[${color}]`"
  >
    <slot />
  </h4>
</template>
