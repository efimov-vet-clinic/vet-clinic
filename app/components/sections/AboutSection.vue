<script setup lang="ts">
import type { LinkBar } from "~/interfaces/LinkBar";

const link = ref<LinkBar>({
  title: "О нас",
  link: "/about",
});
</script>
<template>
  <section class="w-full px-[1.6rem] md:px-[3.2rem] h-full py-[10rem]">
    <div class="flex flex-col gap-[3.2rem]">
      <LinkBar :link="link" />
      <div
        class="flex flex-col gap-[1.6rem] text-[3.2rem]/[90%] md:text-[5.6rem]/[90%] text-center font-semibold tracking-tight text-[--primary]"
      >
        <p>
          За&nbsp;<span class="text-[--accent]">8&nbsp;лет работы</span> нам
          доверили заботу о&nbsp;своих хвостатых членах семьи
          <span class="text-[--accent]">более 15&nbsp;000 владельцев</span>
        </p>
        <p>
          Мы&nbsp;гордимся, что к&nbsp;нам возвращаются снова и&nbsp;рекомендуют
          друзьям
        </p>
      </div>
    </div>
  </section>
</template>
