// server/api/yandex-form-webhook.post.js

import { User } from "../interfaces/user.interface";

export default defineEventHandler(async (event) => {
  try {
    const formData = await readBody(event);

    console.log("Получены данные из Яндекс Формы:", formData);

    const result = await sendToTelegram(formData);

    return {
      success: true,
      message: "Данные успешно отправлены в Telegram",
      data: result,
    };
  } catch (error: any) {
    console.error("Ошибка:", error);

    return {
      success: false,
      error: error.message,
    };
  }
});

async function sendToTelegram(data: User) {
  const config = useRuntimeConfig();
  const TELEGRAM_TOKEN = config.telegrambottoken;
  const TELEGRAM_CHAT_ID = config.telegramchatid;

  const message = formatTelegramMessage(data);

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    }
  );

  const result = await response.json();

  if (!result.ok) {
    throw new Error(result.description);
  }

  return result;
}

function formatTelegramMessage(data: User) {
  const petName = data.pet_name;
  const phone = data.phone_number;
  const petType = data.pet_type;
  const email = data.email;
  const userName = data.user_name;

  return `
  🐾 <b>НОВАЯ ЗАПИСЬ В КЛИНИКУ</b> 🐾

  📋 <b>Информация о владельце:</b>
  • Телефон: ${phone}
  • Имя: ${userName}
  • Почта: ${email}
  
  📋 <b>Информация о питомце:</b>
  • Имя: ${petName}
  • Вид: ${petType}
  
  ⏰ <b>Время заявки:</b> ${new Date().toLocaleString("ru-RU")}
  
  ━━━━━━━━━━━━━━━━━━━━━
  ❗️ Свяжитесь с клиентом для подтверждения
    `.trim();
}
