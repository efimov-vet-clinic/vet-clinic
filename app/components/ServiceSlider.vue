<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import type { ServiceCard } from "~/interfaces/ServiceCard.interface";

const { services } = defineProps<{
  services: ServiceCard[];
}>();

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<template>
  <Swiper
    :slides-per-view="1.2"
    :space-between="12"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="w-full h-[40rem]"
    :breakpoints="{
      767: {
        slidesPerView: 2.5,
        spaceBetween: 12,
      },
    }"
  >
    <SwiperSlide v-for="service in services" :key="service.id" class="h-full">
      <div
        class="w-full h-full p-[1.6rem] flex flex-col gap-[3.2rem] rounded-[1.2rem]"
        :class="`bg-[${service.color}] text-[${service.textColor}]`"
      >
        <h5 class="text-[3.2rem]/[90%] font-semibold tracking-tight">
          {{ service.title }}
        </h5>

        <p class="text-[1.6rem]/[130%]">{{ service.description }}</p>

        <NuxtImg
          v-if="service.image"
          :src="service.image"
          :alt="service.imageAlt"
          class="absolute bottom-0 right-0 rounded-br-[1.2rem] w-[14rem]"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper {
  padding: 0 3.2rem;

  @media (max-width: 640px) {
    padding: 0 1.6rem;
  }
}
</style>
