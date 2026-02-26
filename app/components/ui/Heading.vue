<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    level: "h1" | "h2" | "h3" | "h4" | "h5";
    align: "start" | "center" | "end";
  }>(),
  { level: "h3", align: "start" }
);
const tag = computed(() => props.level);

const variants = {
  h1: "text-[5.6rem]/[90%] max-[650px]:text-[3.8rem]/[90%]",
  h2: "text-[2.8rem]/[90%] max-[650px]:text-[4.6rem]/[90%]",
  h3: "text-[5.6rem]/[90%] max-[650px]:text-[3.2rem]/[90%]",
  h4: "text-[3.2rem]/[90%] max-[650px]:text-[2.4rem]/[90%]",
  h5: "text-[2.8rem]/[90%] max-[650px]:text-[2.4rem]/[90%]",
} as const;

const baseClasses = "font-semibold tracking-tight";

const classes = computed(() => [
  baseClasses,
  variants[props.level],
  `text-${props.align}`,
]);
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>
