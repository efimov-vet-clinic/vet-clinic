// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

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

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/fonts", "@nuxt/icon"],
});
