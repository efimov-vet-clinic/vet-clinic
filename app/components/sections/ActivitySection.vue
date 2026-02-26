<script setup lang="ts">
interface ServiceCard {
  title: string;
  description?: string;
  items?: string[];
  image?: string;
  gridClass?: string;
  contentClass?: string;
}

const services = ref<ServiceCard[]>([
  {
    title: "Диагностика и Лаборатория",
    description:
      "Собственная ветеринарная лаборатория и современное оборудование позволяют ставить точные диагнозы:",
    items: [
      "Анализы крови (общий, биохимия).",
      "Тесты на инфекции (панлейкопения, пироплазмоз, токсоплазмоз и др.).",
      "УЗИ, ЭКГ, Рентген.",
    ],
  },
  {
    title: "Терапия и Профилактика",
    items: [
      "Вакцинация и оформление ветеринарного паспорта",
      "Чипирование собак",
      "Дегельминтизация и обработка от блох/клещей (в том числе извлечение клещей)",
      "Уколы и капельницы",
      "Чистка зубов и удаление зубного камня",
    ],
  },
  {
    title: "Хирургия и Спец помощь",
    items: [
      "Плановые операции: кастрация, стерилизация, купирование ушей и хвоста",
      "Акушерство: проведение кесарева сечения",
      "Стоматология: удаление зубов",
      "Хирургические вмешательства: удаление паранальных желез и др",
      "Анестезиологическое сопровождение",
    ],
  },
  {
    title: "Прием узких специалистов",
    description: "В клинике ведут прием врачи различных профилей:",
    items: [
      "Терапевт и Диагност",
      "Хирург и Ортопед",
      "Кардиолог и Офтальмолог",
      "Дерматолог и Гинеколог",
      "Стоматолог",
    ],
  },
  {
    title: "Груминг",
    items: [
      "Стрижка когтей, чистка ушей",
      "Полный комплекс услуг по уходу за шерстью",
    ],
  },
  {
    title: "Мемориальные услуги",
    description:
      "Мы понимаем, насколько тяжелым может быть момент прощания с питомцем. Наши сотрудники тактично и оперативно помогут решить все вопросы, связанные с эвтаназией (по медицинским показаниям), кремацией и документальным оформлением захоронения, взяв на себя бюрократические сложности",
    image: "/images/generations/angel-cat.webp",
    gridClass:
      "col-start-2 col-end-5 max-[980px]:col-end-3 row-start-2 max-[980px]:row-start-3 row-end-3 max-[980px]:row-end-4 bg-gray-200 max-[650px]:col-start-1 max-[650px]:col-end-2 max-[650px]:row-start-6 max-[650px]:row-end-7",

    contentClass:
      "w-[60rem] max-[980px]:w-full max-[980px]:h-[34rem] max-[980px]:mt-[1.6rem] max-[650px]:h-[28rem]",
    items: [],
  },
]);
</script>
<template>
  <section class="w-full py-[10rem] max-[767px]:pt-0">
    <div class="flex flex-col items-center px-[1.6rem] md:px-[3.2rem]">
      <!-- Header -->
      <div
        class="flex flex-col items-center gap-[2.4rem] mb-[6.4rem] max-[650px]:mb-[4.8rem]"
      >
        <Heading level="h3" align="center"> Направления деятельности </Heading>

        <p
          class="text-[1.6rem]/[120%] text-center w-[80rem] max-[767px]:w-full"
        >
          Мы предлагаем полный спектр ветеринарных услуг, от профилактики до
          высокотехнологичной диагностики и лечения.
        </p>
      </div>

      <!-- Grid Container -->
      <div
        class="grid grid-cols-4 max-[980px]:grid-cols-2 gap-[1.2rem] grid-rows-[50rem_auto] max-[650px]:grid-rows-none max-[650px]:grid-cols-1"
      >
        <TextCard
          v-for="card in services"
          :key="card.title"
          :class="card.gridClass || ''"
        >
          <template #title>{{ card.title }}</template>

          <template #text>
            <p
              class="max-[650px]:mt-[3.2rem]"
              :class="card.contentClass || 'w-full'"
            >
              {{ card.description }}
            </p>
          </template>

          <template #items>
            <div
              class="flex flex-col gap-[0.8rem]"
              :class="card.image ? 'mt-0' : 'mt-[2.4rem]'"
            >
              <ul
                v-if="card.items && card.items.length"
                class="flex flex-col gap-[0.8rem]"
              >
                <li
                  v-for="item in card.items"
                  :key="item"
                  class="p-[1.2rem] text-[1.6rem]/[120%] bg-[--light-blue-hover] rounded-[0.4rem]"
                >
                  {{ item }}
                </li>
              </ul>

              <NuxtImg
                v-if="card.image"
                :src="card.image"
                alt="Мемориальные услуги для питомцев"
                class="absolute right-[-2rem] w-[20rem] bottom-[-1rem] max-[980px]:w-[17rem] max-[767px]:w-[13rem] max-[540px]:w-[11rem] z-10"
                width="240"
                height="320"
                preload
              />
            </div>
          </template>
        </TextCard>
      </div>
    </div>
  </section>
</template>
