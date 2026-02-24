// server/api/submit-application.post.js
import TelegramBot from "node-telegram-bot-api";

export default defineEventHandler(async (event) => {
  try {
    const body: FormData = await readBody(event);
    const config = useRuntimeConfig();
    const bot = new TelegramBot(config.telegramBotToken);
    const message = formatTelegramMessage(body);

    await bot.sendMessage(config.telegramChatId, message, {
      parse_mode: "HTML",
    });

    return {
      success: true,
      message: "Заявка успешно отправлена!",
    };
  } catch (error: any) {
    console.error("Telegram error:", error);

    throw createError({
      statusCode: 500,
      message: error.message || "Ошибка при отправке в Telegram",
    });
  }
});

interface FormData {
  adress: string;
  ownerName: string;
  petName: string;
  petType: string;
  phone: string;
  email: string;
  comment: string;
  privacyAccepted: boolean;
  _formId: string;
  _timestamp: number;
}

enum Adress {
  adress_1 = "Ленинский пр 84 к2",
  adress_2 = "ул. Циолковского 10-А",
}

function formatTelegramMessage(data: FormData) {
  const petType = data.petType === "Кошка" ? "🐈 Кошка" : "🐕 Собака";
  const adress =
    data.adress === Adress.adress_1 ? Adress.adress_1 : Adress.adress_2;
  const date = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
  📋 Новая заявка на ${adress}
  ════════════════════════
  📅 Дата: ${date}

  👤 Владелец: ${data.ownerName}
  🐾 Питомец: ${data.petName}
  📋 Тип: ${petType}

  📞 Телефон: ${data.phone}
  ✉️ Email: ${data.email}

  ════════════════════════
  ✅ Согласие с политикой конфиденциальности`;
}
