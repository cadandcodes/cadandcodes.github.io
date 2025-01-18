import { postcss } from "tailwindcss";
import { plugins } from "./tailwind.config";

export default {
  target: "static",
  router: {base: "/cadandcodes.github.io/"},

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "cadandcodes.com",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {hid: "description",name: "description",content: "",},
      {name: "format-detection", content: "telephone=no"},
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { 
        rel: "stylesheet", 
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  // vite configurations
  vite: {
    resolve: {
      alias: {
        '#app-manifest': '/node_modules/nuxt/dist/app/composables/manifest.js', // Verify this path
      },
    },
  },

  nitro: {
    prerender: {
      route: ["/", "/about", "/contact", "/services", "/blog"],  // Add routes to prerender
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "@/assets/css/normalize.css"],

  // Plugins to run before rendering the page
  plugins: ['~/plugins/smooth-scroll.js', '~/plugins/mdi.js'],

  components: true,

  // Build modules
  buildModules: ['@nuxtjs/eslint-module'],

  // Modules for dev and build (recommended)
  modules: [],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },

}
  /**
    buildDir: 'nuxt-dist',
     */,

  compatibilityDate: "2025-01-18",
};