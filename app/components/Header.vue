<script setup lang="ts">
const nav = ref([
  { link: "#", text: "О нас" },
  { link: "#", text: "Команда" },
  { link: "#", text: "Услуги" },
  { link: "#", text: "Вопросы" },
  { link: "#", text: "Контакты" },
]);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="w-full pt-[1.6rem] px-[1.6rem] md:px-[3.2rem]">
    <div
      class="mx-auto w-full bg-[--light-blue] flex justify-between items-center py-[1.6rem] px-[1.6rem] rounded-[1.2rem]"
    >
      <Logo class="text-[3.2rem]/[90%]" />

      <nav class="hidden md:block">
        <ul class="text-[1.6rem] flex gap-[2.4rem]">
          <li v-for="item in nav" :key="item.link">
            <a :href="item.link" class="hover:text-[--accent] cursor-pointer">{{
              item.text
            }}</a>
          </li>
        </ul>
      </nav>

      <div>
        <Button color="accent" class="hidden md:block"
          >Записаться на приём</Button
        >
        <button
          @click="toggleMenu"
          class="flex flex-col justify-center items-center gap-[0.6rem] md:hidden w-[3.2rem] h-[3.2rem] relative z-50"
          aria-label="Меню"
        >
          <span
            class="block bg-[--accent] w-[3.2rem] h-[0.2rem] rounded-full transition-all duration-300 ease-in-out"
            :class="isMenuOpen ? 'rotate-45 translate-y-[0.8rem]' : ''"
          ></span>
          <span
            class="block bg-[--accent] w-[3.2rem] h-[0.2rem] rounded-full transition-all duration-300 ease-in-out"
            :class="isMenuOpen ? 'opacity-0' : ''"
          ></span>
          <span
            class="block bg-[--accent] w-[3.2rem] h-[0.2rem] rounded-full transition-all duration-300 ease-in-out"
            :class="isMenuOpen ? '-rotate-45 -translate-y-[0.8rem]' : ''"
          ></span>
        </button>
      </div>
    </div>

    <BurgerMenu @close="toggleMenu" :isMenuOpen="isMenuOpen" :nav="nav" />
  </header>
</template>
