<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">
      Запись на прием в ветеринарную клинику
    </h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Имя владельца -->
      <div>
        <label
          for="ownerName"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Имя владельца *
        </label>
        <input
          id="ownerName"
          v-model="formData.ownerName"
          type="text"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Введите ваше имя"
        />
      </div>

      <!-- Имя питомца -->
      <div>
        <label
          for="petName"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Имя питомца *
        </label>
        <input
          id="petName"
          v-model="formData.petName"
          type="text"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Введите имя питомца"
        />
      </div>

      <!-- Тип питомца -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Тип питомца *
        </label>
        <div class="flex space-x-4">
          <label class="flex items-center">
            <input
              v-model="formData.petType"
              type="radio"
              value="cat"
              required
              class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span class="ml-2 text-gray-700">Кот</span>
          </label>
          <label class="flex items-center">
            <input
              v-model="formData.petType"
              type="radio"
              value="dog"
              required
              class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span class="ml-2 text-gray-700">Собака</span>
          </label>
        </div>
      </div>

      <!-- Номер телефона -->
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
          Номер телефона *
        </label>
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="+7 (999) 123-45-67"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          Электронная почта *
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="example@mail.com"
        />
      </div>

      <!-- Чекбокс согласия -->
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="privacy"
            v-model="formData.privacyAccepted"
            type="checkbox"
            required
            class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
        <label for="privacy" class="ml-2 text-sm text-gray-600">
          Я согласен на обработку персональных данных и принимаю
          <NuxtLink to="/privacy" class="text-blue-600 hover:underline">
            политику конфиденциальности
          </NuxtLink>
          *
        </label>
      </div>

      <!-- Кнопка отправки -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? "Отправка..." : "Отправить заявку" }}
      </button>

      <!-- Сообщение об успехе/ошибке -->
      <div
        v-if="submitMessage"
        :class="[
          'p-4 rounded-md',
          submitStatus === 'success'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700',
        ]"
      >
        {{ submitMessage }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

const formData = reactive({
  ownerName: "",
  petName: "",
  petType: "",
  phone: "",
  email: "",
  privacyAccepted: false,
});

const isSubmitting = ref(false);
const submitMessage = ref("");
const submitStatus = ref("");
const formId = ref(null);

// Генерируем уникальный ID формы при монтировании
onMounted(() => {
  formId.value = Math.random().toString(36).substring(7);
});

const handleSubmit = async () => {
  // Защита от множественной отправки
  if (isSubmitting.value) {
    console.log("Предотвращена множественная отправка");
    return;
  }

  // Валидация
  if (!formData.privacyAccepted) {
    submitStatus.value = "error";
    submitMessage.value =
      "Необходимо согласиться с политикой конфиденциальности";
    return;
  }

  isSubmitting.value = true;
  submitMessage.value = "";

  try {
    // Добавляем timestamp для уникальности запроса
    const response = await $fetch("/api/submit-application", {
      method: "POST",
      body: {
        ...formData,
        _formId: formId.value,
        _timestamp: Date.now(),
      },
      // Предотвращаем кэширование запроса
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });

    if (response.success) {
      submitStatus.value = "success";
      submitMessage.value = "✅ Заявка успешно отправлена!";

      // Очистка формы
      Object.assign(formData, {
        ownerName: "",
        petName: "",
        petType: "",
        phone: "",
        email: "",
        privacyAccepted: false,
      });
    }
  } catch (error) {
    submitStatus.value = "error";
    submitMessage.value = "❌ Ошибка при отправке";
    console.error("Error:", error);
  } finally {
    // Задержка перед снятием блокировки
    setTimeout(() => {
      isSubmitting.value = false;
    }, 1000);
  }
};
</script>
