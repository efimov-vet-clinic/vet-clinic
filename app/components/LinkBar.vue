<script setup lang="ts">
import type { LinkBar } from "~/interfaces/LinkBar";

const { link } = defineProps<{
  link: LinkBar;
}>();
</script>

<template>
  <div class="flex justify-between text-[1.6rem] text-[--accent]">
    <p>{{ link.title }}</p>

    <NuxtLink
      class="flex items-center gap-[0.4rem] hover:text-[--accent-hover] hover:shadow-[0_0.15rem_0px_0_var(--accent-hover)]"
      :to="link.link"
      >Подробнее <Icon name="ic:outline-arrow-right-alt" size="2rem""
      /></NuxtLink
    >
  </div>
</template>
