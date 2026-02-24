<script setup lang="ts">
import type { Adress } from "~/interfaces/Adress.interface";
import type { PetFormData } from "~/interfaces/PetFormData.interface";
import type { PetType } from "~/interfaces/PetType.interface";

const formData = ref<PetFormData>({
  adress: "",
  ownerName: "",
  petName: "",
  petType: "",
  phone: "",
  email: "",
  comment: "",
  privacyAccepted: false,
});

const isSubmitting = ref<boolean>(false);
const submitMessage = ref("");
const submitStatus = ref<"success" | "error" | null>(null);
const formId = ref<string>("");

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
  if (!formData.value.privacyAccepted) {
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
        ...formData.value,
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
        adress: "",
        ownerName: "",
        petName: "",
        petType: "",
        phone: "",
        email: "",
        privacyAccepted: false,
      });
    }
  } catch (error: any) {
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

const adress = ref<Adress[]>([
  { metro: "Ленинский проспект", adress: "Ленинский пр 84 к2" },
  { metro: "Балтийская", adress: "ул. Циолковского 10-А" },
]);
const petType = ref<PetType[]>([
  { image: "Ленинский проспект", title: "Собака" },
  { image: "Балтийская", title: "Кошка" },
]);
</script>

<template>
  <div class="w-full p-[1.6rem] bg-[--accent] rounded-[1.2rem] text-[--base]">
    <form @submit.prevent="handleSubmit" class="space-y-[1.2rem]">
      <div
        class="flex flex-col gap-[1.2rem] p-[1.2rem] bg-[--light-blue] rounded-[0.4rem]"
      >
        <label class="text-[1.6rem]/[120%] text-[--accent]"
          >Выберите адрес*</label
        >
        <div class="flex gap-[1.2rem]">
          <RadioButton
            v-for="item in adress"
            v-model="formData.adress"
            :name="item.adress"
          >
            <div class="ml-2 text-[--primary] flex flex-col gap-[1.2rem]">
              <p class="text-[1.8rem]/[90%] font-semibold">{{ item.adress }}</p>
              <div class="text-[1.6rem]/[90%] flex items-center gap-[1.2rem]">
                <div
                  class="flex gap-[0.4rem] items-end text-white py-[0.4rem] px-[0.8rem] rounded-[0.8rem] bg-red-600"
                >
                  <IconMetro class="w-[1.6rem] h-[1.6rem]" />
                  <p>1</p>
                </div>

                {{ item.metro }}
              </div>
            </div>
          </RadioButton>
        </div>
      </div>

      <!-- Тип питомца -->
      <div
        class="flex flex-col gap-[1.2rem] p-[1.2rem] bg-[--light-blue] rounded-[0.4rem]"
      >
        <label class="text-[1.6rem]/[120%] text-[--accent]">Тип питомца*</label>
        <div class="flex flex-col gap-[1.2rem]">
          <div class="flex gap-[1.2rem]">
            <RadioButton
              v-for="item in petType"
              v-model="formData.petType"
              :name="item.title"
            >
              <div class="ml-2 text-[--primary] flex flex-col gap-[1.2rem]">
                <p class="text-[1.8rem]/[90%] font-semibold">
                  {{ item.title }}
                </p>
              </div>
            </RadioButton>
          </div>

          <Input
            v-model="formData.petName"
            placeholder="Введите имя питомца"
            id="petName"
          />
        </div>
      </div>

      <Input
        v-model="formData.ownerName"
        placeholder="Введите ваше имя"
        id="ownerName"
        required
      />

      <Input
        v-model="formData.phone"
        placeholder="+7 (999) 123-45-67"
        type="tel"
        id="phone"
        required
      />

      <Input
        v-model="formData.email"
        placeholder="example@mail.com"
        type="email"
        id="email"
      />
      <Input
        v-model="formData.comment"
        placeholder="Комментарий"
        type="textarea"
        id="comment"
      />

      <!-- Чекбокс согласия -->
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="privacy"
            v-model="formData.privacyAccepted"
            type="checkbox"
            required
            class="w-[1.6rem] h-[1.6rem] mt-[0.8rem] text-[--base] border-gray-300"
          />
        </div>
        <label for="privacy" class="ml-2 text-[1.6rem]">
          Я согласен на обработку персональных данных и принимаю
          <NuxtLink
            to="/privacy"
            class="text-[--light-blue] hover:shadow-[0_0.15rem_0px_0_var(--base)]"
          >
            политику конфиденциальности*
          </NuxtLink>
        </label>
      </div>

      <Button
        color="base"
        type="submit"
        :disabled="isSubmitting"
        class="w-full"
      >
        {{ isSubmitting ? "Отправка..." : "Отправить заявку" }}
      </Button>

      <StatusBlock v-if="submitMessage" :submitStatus="submitStatus">
        {{ submitMessage }}
      </StatusBlock>
    </form>
  </div>
</template>
