<script setup lang="ts">
import type { ContactInfo } from "~/interfaces/ContactInfo.interface";

const contactsInfo = ref<ContactInfo[]>([
  {
    adressTilte: "ул. Циолковского, 10-А",
    contacts: [
      { link: "tel:+78124956569", phone: "+7 812 495-65-69" },
      { link: "tel:+78129312195", phone: "+7 812 931-21-95" },
    ],
  },
  {
    adressTilte: "Ленинский пр 84 к2",
    contacts: [{ link: "tel:+78126983403", phone: "+7 812 698-34-03" }],
  },
]);
</script>

<template>
  <section
    class="w-full px-[1.6rem] md:px-[3.2rem] h-full py-[10rem] max-[767px]:pt-0"
  >
    <div class="flex flex-col gap-[6.4rem] max-[980px]:gap-[3.2rem]">
      <div
        class="flex justify-between gap-[1.6rem] max-[980px]:flex-col max-[980px]:gap-[3.2rem]"
      >
        <HeadingH3 class="text-[--accent] text-start w-full"
          >Контакты</HeadingH3
        >

        <div class="flex flex-col gap-[3.2rem] w-full">
          <div
            v-for="contact in contactsInfo"
            :key="contact.adressTilte"
            class="flex flex-col gap-[1.2rem]"
          >
            <p
              class="text-[3.2rem]/[90%] max-[767px]:text-[2.4rem] tracking-tight font-semibold text-[--accent]"
            >
              {{ contact.adressTilte }}
            </p>

            <div
              class="flex gap-[2rem] max-[767px]:flex-col max-[767px]:gap-[1.2rem]"
            >
              <NuxtLink
                v-for="phone in contact.contacts"
                :key="phone.phone"
                :to="phone.link"
                class="text-[3.2rem]/[90%] max-[767px]:text-[2.4rem] tracking-tight font-semibold hover:text-[--accent] hover:shadow-[0_0.15rem_0px_0_var(--accent)]"
                >{{ phone.phone }}</NuxtLink
              >
            </div>
          </div>

          <NuxtLink
            to="mailto:vetclinica-efimova@yandex.ru"
            class="text-[3.2rem]/[90%] max-[767px]:text-[2.4rem] tracking-tight w-fit font-semibold text-[--accent] hover:shadow-[0_0.15rem_0px_0_var(--accent)]"
            >vetclinica-efimova@yandex.ru</NuxtLink
          >
        </div>
      </div>

      <Map />
    </div>
  </section>
</template>
