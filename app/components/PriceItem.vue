<script setup lang="ts">
import type { PriceItem } from "~/interfaces/PriceItem.interface";

const { price } = defineProps<{
  price: PriceItem;
}>();
</script>

<template>
  <div
    class="bg-[--light-blue] hover:bg-[--light-blue-hover] rounded-[1.2rem] p-[1.2rem] flex justify-between items-center"
  >
    <div class="flex flex-col gap-[0.4rem] max-[767px]:max-w-[24rem]">
      <span
        class="px-[0.6rem] py-[0.4rem] bg-[--accent] text-[--base] w-fit rounded-[0.4rem] text-[1.6rem]/[120%] max-[767px]:text-[1.4rem]/[120%]"
      >
        {{ price.category }}
      </span>
      <p class="text-[2rem]/[120%] max-[767px]:text-[1.8rem]/[120%]">
        {{ price.title }}
      </p>
    </div>

    <p
      class="text-[2.4rem]/[120%] text-[--accent] text-end max-[767px]:text-[1.6rem]/[120%]"
    >
      {{ price.price }}&nbsp;₽
    </p>
  </div>
</template>
