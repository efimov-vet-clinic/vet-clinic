<script setup lang="ts">
const { isMenuOpen } = defineProps<{
  isMenuOpen: boolean;
  nav: {
    link: string;
    text: string;
  }[];
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const handleClose = () => {
  emit("close");
};
</script>
<template>
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bg-[--light-blue] z-40 flex flex-col items-end justify-between md:hidden animate-fade-in px-[3.2rem] pt-[18rem] pb-[1.6rem]"
  >
    <nav class="">
      <ul class="text-[1.8rem] flex flex-col items-end gap-[3.2rem]">
        <li v-for="item in nav" :key="item.link">
          <a
            @click="handleClose"
            :href="item.link"
            class="block hover:text-[--accent] cursor-pointer font-medium"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>

    <Button @click="handleClose" class="w-full"> Записаться на приём </Button>
  </div>
</template>
