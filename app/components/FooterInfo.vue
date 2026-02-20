<script setup lang="ts">
import type { FooterInfoBlock } from "~/interfaces/FooterLink";

const { info } = defineProps<{
  info: FooterInfoBlock;
}>();
</script>

<template>
  <div class="flex flex-col gap-[2rem] w-[32rem]">
    <h5 class="text-[3.2rem] tracking-tight font-semibold">
      {{ info.title }}
    </h5>

    <ul class="flex flex-col gap-[1.2rem]">
      <li v-for="item in info.links" :key="item.text" class="text-[1.6rem]">
        <NuxtLink
          :to="item.link"
          class="hover:text-[--light-blue-hover] hover:shadow-[0_0.15rem_0_0_var(--light-blue-hover)]"
          >{{ item.text }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
