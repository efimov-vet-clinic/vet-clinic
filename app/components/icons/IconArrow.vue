<script setup lang="ts">
const { orientation } = defineProps<{
  orientation: "right" | "left";
}>();
</script>

<template>
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-if="orientation === 'right'"
      d="M32 24L20 12L17.18 14.82L26.34 24L17.18 33.18L20 36L32 24Z"
      fill="#235CC6"
    />
    <path
      v-else
      d="M16 24L28 36L30.82 33.18L21.66 24L30.82 14.82L28 12L16 24Z"
      fill="#235CC6"
    />
  </svg>
</template>
