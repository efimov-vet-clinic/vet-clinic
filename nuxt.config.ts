// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  routeRules: {
    // "/services": {
    //   swr: 300, // Stale-While-Revalidate: кэш на 300 сек (5 мин)
    //   prerender: true, // Создать статический файл при сборке
    // },
    // "/api/prices": {
    //   swr: 300, // Кэшировать и сам ответ API
    // },
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    telegramBotToken: "",
    telegramChatId: "",
  },

  css: ["swiper/css"],
  build: {
    transpile: ["swiper"],
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@pinia/nuxt",
  ],
});
