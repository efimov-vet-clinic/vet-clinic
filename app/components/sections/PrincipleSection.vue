<script setup lang="ts">
interface TextCard {
  id: number;
  title: string;
  text: string;
}

const cards = ref<TextCard[]>([
  {
    id: 1,
    title: "Оперативность",
    text: "Мы ценим ваше время и здоровье животного, поэтому стремимся оказать помощь в кратчайшие сроки",
  },
  {
    id: 2,
    title: "Уважение и такт",
    text: "Мы бережно относимся к каждому пациенту и понимаем эмоциональное состояние владельцев в любых ситуациях",
  },
  {
    id: 3,
    title: "Комфорт",
    text: "Предупредительность административного персонала и уютная атмосфера сделают визит в клинику менее стрессовым",
  },
  {
    id: 4,
    title: "Комплексный подход",
    text: "Мы объединяем усилия врачей, лаборантов и администраторов ради одного результата — выздоровления вашего любимца",
  },
]);
</script>

<template>
  <section class="w-full py-[10rem] max-[767px]:pt-0">
    <div class="flex flex-col items-center px-[1.6rem] md:px-[3.2rem]">
      <Heading level="h3" align="center"> Наши принципы работы </Heading>

      <div
        class="h-[22rem] flex gap-[1.2rem] mt-[6.4rem] max-[650px]:mt-[4.8rem] max-[980px]:flex-wrap max-[980px]:w-[61.2rem] max-[980px]:h-auto max-[650px]:w-full"
      >
        <TextCard
          v-for="card in cards"
          :key="card.id"
          class="max-[980px]:w-[30rem] max-[980px]:h-[28rem] max-[650px]:w-full max-[650px]:h-[22rem]"
        >
          <template #title>{{ card.title }}</template>
          <template #text>{{ card.text }}</template>
        </TextCard>
      </div>

      <NuxtLink to="#form" class="max-[540px]:w-full mt-[3.2rem]"
        ><Button color="accent" class="max-[540px]:w-full"
          >Записаться на прием</Button
        >
      </NuxtLink>
    </div>
  </section>
</template>
