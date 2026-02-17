// server/api/yandex-form-webhook.ts

import { User } from "../interfaces/user.interface";

export default defineEventHandler(async (event) => {
  try {
    // Получаем данные из формы (они приходят в JSON-RPC формате)
    const body = await readBody(event);

    console.log(
      "Получен запрос от Яндекс Формы:",
      JSON.stringify(body, null, 2)
    );

    // Извлекаем данные ответа из правильной структуры
    const answerData = body.answer?.data;

    if (!answerData) {
      throw new Error("Некорректный формат данных от Яндекс Формы");
    }

    // Форматируем данные для Telegram
    const formData: User = {
      // Извлекаем значения из сложной структуры
      pet_name:
        answerData.pet_name?.value ||
        answerData.user_name?.value ||
        "Не указано",

      pet_type:
        answerData.pet_type?.value?.[0]?.text ||
        answerData.pet_type?.text ||
        "Не указан",

      phone_number: answerData.phone?.value || "Не указан",

      email: answerData.email?.value || "Не указан",
      user_name: answerData.user_name?.value || "Не указано",
    };

    const config = useRuntimeConfig();

    const message = formatTelegramMessage(formData);

    const telegramUrl = `https://api.telegram.org/bot${config.telegrambottoken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: config.telegramchatid,
        text: message,
        parse_mode: "HTML",
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      throw new Error(result.description);
    }

    return {
      jsonrpc: "2.0",
      result: {
        success: true,
        message: "Уведомление отправлено",
      },
      id: body.id || null,
    };
  } catch (error: any) {
    console.error("Ошибка обработки:", error);

    // Возвращаем ошибку в формате JSON-RPC
    return {
      jsonrpc: "2.0",
      error: {
        code: -32603,
        message: error.message,
      },
      id: null,
    };
  }
});

function formatTelegramMessage(data: User) {
  return `
🐾 <b>НОВАЯ ЗАПИСЬ В КЛИНИКУ</b> 🐾

📋 <b>Информация о клиенте:</b>
• Имя: ${data.pet_name}
• Email: ${data.email}

🐕 <b>Питомец:</b> ${data.pet_type}

📞 <b>Телефон:</b> ${data.phone_number}

⏰ <b>Время заявки:</b> ${new Date().toLocaleString("ru-RU")}

━━━━━━━━━━━━━━━━━━━━━
❗️ Свяжитесь с клиентом для подтверждения
  `.trim();
}
