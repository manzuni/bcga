// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  image: {
    dir: "images",
  },
  css: ["assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: "./tailwind.config.js",
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "@nuxt/image"],
});
