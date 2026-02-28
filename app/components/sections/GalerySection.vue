<script setup lang="ts">
import type { Photo } from "~/interfaces/Photo.interface";

const photos = ref<Photo[]>(
  Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    link: `/images/photos/pic_${i + 1}.jpg`,
  }))
);
</script>
<template>
  <section class="w-full h-full py-[10rem] max-[767px]:pt-0">
    <div>
      <div class="flex flex-col items-center gap-[2.4rem]">
        <Heading level="h3" align="center" class="max-w-[80rem]"
          >Добро пожаловать в мир
          <span class="text-[--accent]">настоящей ветеринарии</span></Heading
        >

        <div class="w-fit flex gap-[1.2rem]">
          <button class="swiper-button-prev">
            <IconArrow orientation="left" class="w-[4.8rem] text-[--accent]" />
          </button>

          <button class="swiper-button-next">
            <IconArrow orientation="right" class="w-[4.8rem] text-[--accent]" />
          </button>
        </div>
      </div>

      <div class="w-full">
        <GalerySlider
          class="mt-[6.4rem] max-[650px]:mt-[3.2rem] w-full"
          :slides="photos"
        />
      </div>
    </div>
  </section>
</template>
