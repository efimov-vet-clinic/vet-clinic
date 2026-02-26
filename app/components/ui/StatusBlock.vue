<script setup lang="ts">
const { submitStatus } = defineProps<{
  submitStatus: "success" | "error" | null;
}>();
</script>
<template>
  <div
    :class="[
      'p-4 rounded-md',
      submitStatus === 'success'
        ? 'bg-green-100 text-green-700'
        : 'bg-red-100 text-red-700',
    ]"
  >
    <slot />
  </div>
</template>
