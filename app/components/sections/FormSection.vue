<template>
  <section id="form" class="w-full px-[1.6rem] md:px-[3.2rem] h-full py-[10rem]">
    <div class="flex gap-[1.2rem]">
      <div class="w-full p-[1.6rem] bg-[--light-blue] rounded-[1.2rem] relative overflow-hidden">
        <HeadingH4 color="--accent">Запись на прием</HeadingH4 color="--accent">

        <p class="text-[1.6rem]/[130%] text-[--primary] w-[44rem] mt-[3.2rem]">Администратор перезвонит для подтверждения в течение 15 минут в рабочее время.</p>
        <NuxtImg
          src="/images/tablet.webp"
          alt="планшет"
          class="absolute bottom-[-4rem] right-[-7rem] rounded-br-[1.2rem] w-[60rem]"
        />
      </div>

      <Form />
    </div>
  </section>
</template>
