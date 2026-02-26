<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import type { Photo } from "~/interfaces/Photo.interface";

const { slides } = defineProps<{
  slides: Photo[];
}>();

const defaultOptions = {
  loop: true,

  centeredSlides: true,
  spaceBetween: 12,
  grabCursor: true,
  modules: [Navigation, Autoplay],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 12 },
    640: { slidesPerView: 2, spaceBetween: 12 },
    1024: { slidesPerView: 2.2, spaceBetween: 12 },
  },
};
</script>

<template>
  <ClientOnly>
    <Swiper v-bind="defaultOptions">
      <SwiperSlide v-for="(slide, index) in slides" :key="slide.id">
        <NuxtImg
          :src="slide.link"
          format="webp"
          quality="85"
          width="900"
          height="600"
          :preload="index < 3"
          :loading="index < 3 ? 'eager' : 'lazy'"
          sizes="320px:100vw 640px:50vw 1024px:33vw"
          class="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>
