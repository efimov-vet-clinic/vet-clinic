<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  color?: "base" | "accent";
}>();

const variants = {
  base: {
    bg: "bg-[--base]",
    text: "text-[--accent]",
    hover: "hover:bg-[--light-blue]",
  },
  accent: {
    bg: "bg-[--accent]",
    text: "text-[--base]",
    hover: "hover:bg-[--accent-hover]",
  },
};

const classes = computed(() => {
  const variant = variants[props.color || "accent"];
  return `${variant.bg} ${variant.text} ${variant.hover}`;
});
</script>

<template>
  <button
    class="px-[2.4rem] py-[1.2rem] rounded-[0.4rem] text-[1.6rem] font-medium transition-colors duration-200"
    :class="classes"
  >
    <slot />
  </button>
</template>
