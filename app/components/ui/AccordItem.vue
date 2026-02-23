<script setup lang="ts">
import type { AccordItem } from "~/interfaces/AccordItem.interface";

const { accord } = defineProps<{
  accord: AccordItem;
}>();

const isOpen = ref<boolean>(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    class="cursor-pointer hover:bg-[--light-blue-hover] max-[767px]:hover:bg-[--light-blue] p-[1.6rem] rounded-[1.2rem]"
    :class="`${isOpen ? 'open' : 'hide'}`"
    @click="toggle"
  >
    <div class="flex justify-between items-center max-[767px]:items-start">
      <h5 class="text-[2.4rem]/[120%] text-[--primary] font-medium">
        {{ accord.title }}
      </h5>

      <Icon
        name="ic:baseline-add"
        class="text-[--accent] min-w-[3.2rem] min-h-[3.2rem] transition-transform duration-300"
        :class="isOpen ? 'rotate-45' : 'rotate-0'"
      />
    </div>

    <Transition name="accordion">
      <div v-if="isOpen" class="overflow-hidden">
        <p class="text-[1.6rem]/[130%] mt-[1.6rem]">
          {{ accord.description }}
        </p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}

.open {
  background: var(--light-blue-hover);
}

.hide {
  background: var(--light-blue);
}
</style>
