<template>
  <section
    id="form"
    class="w-full px-[1.6rem] md:px-[3.2rem] h-full py-[10rem] max-[767px]:pt-0"
  >
    <div class="flex gap-[1.2rem] max-[980px]:flex-col">
      <div
        class="w-full p-[1.6rem] bg-[--light-blue] rounded-[1.2rem] relative overflow-hidden"
      >
        <Heading level="h4" align="start" class="text-[--accent]"
          >Запись на прием</Heading
        >

        <p
          class="text-[1.6rem]/[130%] text-[--primary] w-[44rem] max-[540px]:w-full mt-[3.2rem]"
        >
          Администратор перезвонит для подтверждения в течение 15 минут
          в рабочее время.
        </p>
        <NuxtImg
          src="/images/generations/clinic.webp"
          alt="клиника"
          class="absolute bottom-[-4rem] max-[980px]:bottom-[-2rem] right-[-7rem] max-[980px]:right-[4rem] rounded-br-[1.2rem] w-[40rem] max-[980px]:w-[18rem] max-[650px]:hidden"
        />
      </div>

      <Form />
    </div>
  </section>
</template>
