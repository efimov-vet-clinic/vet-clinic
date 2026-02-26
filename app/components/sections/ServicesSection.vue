<script setup lang="ts">
import type { LinkBar } from "~/interfaces/LinkBar.interface";
import type { ServiceCard } from "~/interfaces/ServiceCard.interface";

const services = ref<ServiceCard[]>([
  {
    id: 1,
    title: "Ортопедия",
    description:
      "Остеосинтез, коррекция деформаций костей, операции на суставах и связках. Восстанавливаем подвижность и качество жизни после травм. Индивидуальный подход к каждому случаю",
    color: "--light-blue",
    gridClass: "col-start-1 col-end-3",
    textColor: "--accent",
    height: "h-[26rem]",
    image: "/images/generations/blue-dog.webp",
    imageWidth: "w-[32rem] xl:w-[32rem]",
    imageAlt: "Синяя Собака",
    textWidth: "w-[28rem] xl:w-[35rem]",
  },
  {
    id: 2,
    title: "Диагностика",
    description:
      "УЗИ, рентген, лабораторные анализы крови, мочи и кала. Современное оборудование и быстрые результаты позволяют точно поставить диагноз и своевременно начать лечение",
    color: "--accent",
    gridClass: "col-start-3 col-end-4",
    textColor: "--base",
    height: "h-[26rem]",
  },
  {
    id: 3,
    title: "Вакцинация",
    description:
      "Подбираем индивидуальные схемы прививок с учётом возраста, породы и образа жизни животного. Консультация врача перед вакцинацией",
    color: "--light-blue",
    gridClass: "col-start-4 col-end-5 row-start-1 row-end-4",
    textColor: "--accent",
    height: "h-full",
    image: "/images/generations/syringe.webp",
    imageWidth: "w-[30rem] ",
    imageAlt: "Шприц",
  },
  {
    id: 4,
    title: "Хирургия",
    description:
      "Проводим полостные, пластические и онкологические операции. От удаления новообразований до сложных вмешательств на органах брюшной и грудной полости",
    color: "--accent",
    gridClass: "col-start-1 col-end-2 row-start-2 row-end-4",
    textColor: "--base",
    height: "h-full",
  },
  {
    id: 5,
    title: "Стоматология",
    description:
      "Удаление зубов любой сложности, ультразвуковая чистка от камня, лечение заболеваний полости рта. Избавляем от боли и дискомфорта, сохраняем красоту улыбки вашего питомца",
    color: "--accent",
    gridClass: "col-start-2 col-end-3 row-start-2 row-end-3",
    textColor: "--base",
    height: "h-[26rem]",
  },
  {
    id: 6,
    title: "Стерилизация и кастрация",
    description:
      "Плановые операции по стерилизации кошек и собак с использованием щадящих методик. Внутривенный наркоз, косметические швы, быстрое восстановление",
    color: "--accent",
    gridClass: "col-start-3 col-end-4 row-start-2 row-end-3",
    textColor: "--base",
    height: "h-[26rem]",
  },
  {
    id: 7,
    title: "Офтальмология",
    description:
      "Диагностика и лечение заболеваний глаз: от конъюнктивита до сложных операций на сетчатке и роговице. Сохраняем зрение и комфорт ваших питомцев с помощью современных методик",
    color: "--accent",
    gridClass: "col-start-2 col-end-4 row-start-3 row-end-4",
    textColor: "--base",
    height: "h-[26rem]",
    textWidth: "w-[45rem]",
  },
]);

const isDesktop = ref<boolean>(false);

const checkScreenWidth = () => {
  isDesktop.value = window.innerWidth > 1023;
};

onMounted(() => {
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenWidth);
});
</script>

<template>
  <section class="w-full pb-[10rem]">
    <div class="flex flex-col gap-[3.2rem] min-[1023px]:gap-[6.4rem]">
      <div class="px-[1.6rem] md:px-[3.2rem]">
        <LinkBar link="/services" text="Услуги" />
      </div>
      <div
        class="flex flex-col items-center gap-[3.2rem] min-[1023px]:gap-[6.4rem]"
      >
        <Heading level="h3" align="center">
          Лечение, которому <br />можно доверять
        </Heading>

        <div
          v-if="isDesktop"
          class="flex flex-col gap-[3.2rem] max-[1023px]:items-center w-full px-[1.6rem] md:px-[3.2rem]"
        >
          <div class="grid grid-cols-4 grid-rows-3 gap-[1.2rem] w-full">
            <ServiceCard
              v-for="service in services"
              :key="service.id"
              :service="service"
            />
          </div>
        </div>

        <ServiceSlider v-if="!isDesktop" :services="services" />

        <div
          class="flex flex-col gap-[3.2rem] max-[1023px]:items-center w-full px-[1.6rem] md:px-[3.2rem]"
        >
          <Button color="accent" class="w-full">Узнать цены</Button>
        </div>
      </div>
    </div>
  </section>
</template>
