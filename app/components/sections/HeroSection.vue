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
  <section class="w-full px-[1.6rem] md:px-[3.2rem] h-full pb-[1.6rem]">
    <div
      class="bg-[--accent] h-full p-[1.6rem] md:p-[2.4rem] rounded-[1.2rem] flex flex-col items-start justify-between"
    >
      <div class="flex items-start flex-col md:flex-row gap-[1.2rem]">
        <div
          class="p-[1.6rem] md:p-[2.4rem] bg-[--base] rounded-[0.4rem] w-full text-[--accent] flex flex-col gap-[1.6rem]"
        >
          <h1
            class="text-[3.2rem]/[90%] md:text-[5.6rem]/[90%] font-medium tracking-[-4%]"
          >
            Ваш питомец в&nbsp;надёжных руках
          </h1>
          <p class="text-[1.6rem]/[120%] md:text-[2rem]/[120%] md:w-[35rem]">
            Профессиональная ветеринарная помощь с&nbsp;заботой
            и&nbsp;вниманием.
          </p>
        </div>

        <div class="flex flex-wrap justify-end gap-[1.2rem] w-full">
          <Bullet v-for="item in items">
            {{ item.text }}
          </Bullet>
        </div>
      </div>

      <Button color="base" class="w-full md:w-fit">Записаться на приём</Button>
    </div>
  </section>
</template>
