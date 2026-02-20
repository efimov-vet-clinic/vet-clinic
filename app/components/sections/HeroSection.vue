<script setup lang="ts">
const items = ref([
  { text: "терапия" },
  { text: "дмагностика" },
  { text: "хирургия" },
  { text: "ортопедия" },
  { text: "дерматология" },
  { text: "вакцинация" },
  { text: "стоматология" },
]);
</script>

<template>
  <section
    class="w-full px-[1.6rem] md:px-[3.2rem] pb-[1.6rem] h-[calc(100vh-10rem)] pt-[1.2rem]"
  >
    <div
      class="bg-[--accent] h-full p-[1.6rem] rounded-[1.2rem] flex flex-col items-start justify-between overflow-hidden relative"
    >
      <div
        class="flex items-start flex-col md:flex-row gap-[1.2rem] relative z-2"
      >
        <div
          class="p-[1.6rem] md:p-[2.4rem] bg-[--base] rounded-[0.4rem] w-full text-[--accent] flex flex-col gap-[1.6rem]"
        >
          <h1
            class="text-[3.2rem]/[90%] md:text-[5.6rem]/[90%] font-semibold tracking-tight"
          >
            Ваш питомец в&nbsp;надёжных руках
          </h1>
          <p class="text-[1.6rem]/[120%] md:text-[2rem]/[120%] md:w-[35rem]">
            Профессиональная ветеринарная помощь с&nbsp;заботой
            и&nbsp;вниманием.
          </p>
        </div>

        <div class="flex flex-wrap justify-end gap-[0.8rem] w-full">
          <Bullet v-for="item in items">
            {{ item.text }}
          </Bullet>
        </div>
      </div>
      <NuxtImg
        src="/images/dog.webp"
        alt="Собака"
        class="absolute w-[27rem] min-[380px]:w-full min-[390px]:w-[29rem] min-[414px]:w-[36rem] min-[767px]:w-[60rem] min-[979px]:w-[40rem] min-[1212px]:w-[50rem] min-[1280px]:w-[50rem] min-[1380px]:w-[40rem] h-auto bottom-[-5rem] z-0 md:bottom-[-10rem] left-1/2 -translate-x-1/2"
      />
      <Button color="base" class="relative z-10 w-full md:w-fit"
        >Записаться на приём</Button
      >
    </div>
  </section>
</template>
