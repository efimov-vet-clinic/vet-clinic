<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
  error: NuxtError;
}>();
</script>
<template>
  <div>
    <Header />
    <div
      class="flex flex-col justify-center items-center gap-[6.4rem] py-[12rem] px-[1.2rem]"
    >
      <h1
        class="text-[20rem]/[90%] font-semibold tracking-tight text-[--accent]"
      >
        {{ error.status }}
      </h1>
      <Button>Вернуться на главную</Button>
    </div>

    <Footer />
  </div>
</template>
