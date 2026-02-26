<template>
  <section
    class="w-full px-[1.6rem] md:px-[3.2rem] pb-[1.6rem] h-[calc(100vh-10rem)] pt-[1.2rem]"
  >
    <div
      class="bg-[--accent] h-full p-[1.6rem] rounded-[1.2rem] flex flex-col items-center justify-center max-[540px]:justify-start"
    >
      <div class="flex flex-col items-start w-full h-full justify-between">
        <div
          class="flex flex-col gap-[1.6rem] w-1/2 max-[980px]:w-4/5 max-[767px]:w-full"
        >
          <HeadingH1 class="text-[--base]"
            >Мы заботимся о тех, кого вы любите</HeadingH1
          >

          <p
            class="text-[1.6rem]/[120%] md:text-[2rem]/[120%] max-[540px]:text-start text-[--base] w-full max-[980px]:w-full"
          >
            Ветеринарная клиника доктора А.Н. Ефимова — это место, где здоровье
            вашего питомца является нашим главным приоритетом. Мы понимаем, что
            домашнее животное — это полноправный член семьи. Поэтому, как
            и людям, им требуется квалифицированная медицинская помощь:
            от простого осмотра до сложных операций.
          </p>
        </div>
        <NuxtLink to="#form" class="max-[540px]:w-full"
          ><Button color="base" class="max-[540px]:w-full"
            >Записаться на прием</Button
          >
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
