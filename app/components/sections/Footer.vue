<script setup lang="ts">
import type { FooterInfoBlock } from "~/interfaces/FooterLink";

const services = ref<FooterInfoBlock>({
  title: "Услуги",
  links: [
    { link: "#", text: "Дерматология" },
    { link: "#", text: "Хирургия" },
    { link: "#", text: "Ортопедия" },
    { link: "#", text: "Диагностика" },
    { link: "#", text: "Терапия" },
    { link: "#", text: "Стоматология" },
  ],
});
const clinic = ref<FooterInfoBlock>({
  title: "Клиника",
  links: [
    { link: "#", text: "О нас" },
    { link: "#", text: "Команда" },
    { link: "#", text: "Услуги" },
    { link: "#", text: "Контакты" },
    { link: "#", text: "Вопросы" },
    { link: "#", text: "Цены" },
    { link: "#", text: "Политика конфиденциальности" },
    { link: "#", text: "Пользовательское соглашение" },
  ],
});
</script>

<template>
  <footer
    class="w-full px-[1.6rem] md:px-[3.2rem] pb-[1.6rem] pt-[1.2rem] text-[--base]"
  >
    <div
      class="bg-[--accent] rounded-[1.2rem] p-[1.6rem] h-fit flex flex-col xl:flex-row gap-[6.4rem] xl:gap-[2rem]"
    >
      <div
        class="flex flex-col w-full items-between gap-[6.4rem] xl:gap-[18rem]"
      >
        <div
          class="text-[6rem]/[90%] min-[380px]:text-[7rem]/[90%] md:text-[12rem]/[90%] font-bold tracking-tight"
        >
          Efimov.vet
        </div>
        <Button color="base" class="w-full sm:w-fit"
          >Записаться на приём</Button
        >
      </div>

      <div class="flex flex-col gap-[6.4rem]">
        <div class="flex w-full xl:justify-between">
          <FooterInfo :info="services" />
          <FooterInfo :info="clinic" />
        </div>
        <p class="xl:text-end text-[1.6rem]">
          © 2026 Ветклиника доктора Ефимова А.Н. Все права защищены.
        </p>
      </div>
    </div>
  </footer>
</template>
