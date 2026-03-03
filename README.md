# 🐾 Vet Clinic — Сайт ветеринарной клиники

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://vet-clinic-djb2.vercel.app)

> Современный веб-сайт ветеринарной клиники с возможностью онлайн-записи, каталогом услуг и интеграцией уведомлений через Telegram.

🔗 **Live Demo:** [vet-clinic-djb2.vercel.app](https://vet-clinic-djb2.vercel.app)

---

## 📋 О проекте

**Vet Clinic** — это SPA/SSR приложение, разработанное для автоматизации записи клиентов и предоставления информации об услугах клиники. Проект демонстрирует навыки работы с современным стеком Nuxt 3, типизацией и серверной логикой.

### 🔑 Ключевые возможности
- 🏠 **Главная страница**: Адаптивная верстка с презентацией преимуществ клиники.
- 🩺 **Каталог услуг**: Динамическая отрисовка карточек услуг с фильтрацией.
- 📝 **Онлайн-запись**: Форма валидации данных клиента и отправка заявки.
- 🤖 **Telegram Integration**: Автоматическая отправка уведомлений о новых заявках в Telegram-бот (через Server Routes).
- 📱 **Mobile First**: Полная адаптивность под все устройства с использованием Tailwind CSS.

---

## 🛠 Технологический стек

| Категория | Технологии |
|-----------|------------|
| **Framework** | Nuxt 3 (Vue 3, Composition API) |
| **Language** | TypeScript |
| **State Management** | Pinia |
| **Styling** | Tailwind CSS, PostCSS |
| **Icons / Images** | @nuxt/icon, @nuxt/image |
| **Backend / API** | Nitro Server Routes (`server/api`) |
| **Integrations** | Telegram Bot API, PapaParse (CSV import) |
| **DevOps** | GitHub Actions, Vercel |
| **Quality** | ESLint (@nuxt/eslint), Prettier |

---

## 🚀 Быстрый старт

### Предварительные требования
- Node.js версии 18+
- Менеджер пакетов: `npm`

### Установка и запуск

1.  **Клонируйте репозиторий:**
    ```bash
    git clone https://github.com/efimov-vet-clinic/vet-clinic.git
    cd vet-clinic
    ```

2.  **Установите зависимости:**
    ```bash
    npm install
    # или
    pnpm install
    ```

3.  **Настройте переменные окружения:**
    Создайте файл `.env` в корне проекта на основе `.env.example` (если есть) и добавьте необходимые ключи:
    ```env
    # Пример переменных
    TELEGRAM_BOT_TOKEN=your_bot_token
    TELEGRAM_CHAT_ID=your_chat_id
    ```

4.  **Запустите сервер разработки:**
    ```bash
    npm run dev
    ```
    Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)

5.  **Сборка для продакшена:**
    ```bash
    npm run build
    # Предварительный просмотр продакшн-сборки
    npm run preview
    ```

---

