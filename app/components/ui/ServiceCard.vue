<script setup lang="ts">
import type { ServiceCard } from "~/interfaces/ServiceCard.interface";

const { service } = defineProps<{
  service: ServiceCard;
}>();
</script>

<template>
  <div
    class="p-[1.6rem] rounded-[1.2rem] w-full flex flex-col relative"
    :class="[
      `${service.gridClass} ${service.height}  bg-[${service.color}]`,
      service.height === 'h-full' ? 'gap-[9.4rem]' : 'justify-between',
    ]"
  >
    <HeadingH4 :color="service.textColor">{{ service.title }}</HeadingH4>

    <p
      class="text-[1.6rem]/[130%]"
      :class="[
        `text-[${service.textColor}]`,
        service.textWidth ? service.textWidth : 'w-full',
      ]"
    >
      {{ service.description }}
    </p>

    <NuxtImg
      v-if="service.image"
      :src="service.image"
      :alt="service.imageAlt"
      class="absolute bottom-0 right-0 rounded-br-[1.2rem]"
      :class="`${service.imageWidth}`"
    />
  </div>
</template>
