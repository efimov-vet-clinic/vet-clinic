<template>
  <section class="form__section">
    <div class="form__wrapper">
      <iframe
        src="https://forms.yandex.ru/u/67bda7d3f47e732bb4eeeef9?iframe=1"
        frameborder="0"
        name="ya-form-67bda7d3f47e732bb4eeeef9"
        class="form"
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const formContainer = ref(null);

onMounted(() => {
  // Загружаем скрипт Яндекс Форм
  const script = document.createElement("script");
  script.src = "https://forms.yandex.ru/_static/embed.js";
  script.async = true;

  script.onload = () => {
    // После загрузки скрипта создаем форму
    if (window.YaForms && formContainer.value) {
      window.YaForms.create({
        element: formContainer.value,
        url: "https://forms.yandex.ru/u/67bda7d3f47e732bb4eeeef9/",
        width: "100%",
        height: "auto",
        theme: "light", // или 'dark'
      });
    }
  };

  document.head.appendChild(script);
});
</script>

<style scoped>
.form__wrapper {
  padding-top: 32px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: fit-content;
}
.form {
  height: fit-content;
  width: 500px;
  background: rgb(255, 255, 255);
}
.form__section {
  width: 100%;
}
</style>
