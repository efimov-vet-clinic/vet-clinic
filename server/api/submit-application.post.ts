// server/api/submit-application.post.js
import TelegramBot from "node-telegram-bot-api";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
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

function formatTelegramMessage(data: any) {
  const petType = data.petType === "cat" ? "🐱 Кот" : "🐕 Собака";
  const date = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `📋 НОВАЯ ЗАЯВКА НА ПРИЕМ
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
