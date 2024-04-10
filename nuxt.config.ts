// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  image: {
    dir: "images",
    format: ["webp"],
  },
  css: ["assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: "./tailwind.config.js",
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/google-fonts"],
  routeRules: {
    "/": { prerender: true, ssr: false },
  },
  googleFonts: {
    families: {
      "ADLaM Display": true,
    },
  },
});
