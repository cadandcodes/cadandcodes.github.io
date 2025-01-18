import { postcss } from "tailwindcss";
import plugins from "./tailwind.config";

export default {
  // Specify the deployment target as static site generation
  target: "static",

  // Set base URL for the router
  router: {
    base: "/cadandcodes.github.io/",
  },

  // Global page headers configuration
  head: {
    title: "cadandcodes.com",
    htmlAttrs: {
      lang: "en", // Set the language attribute for the HTML tag
    },
    meta: [
      { charset: "utf-8" }, // Character encoding for the HTML document
      { name: "viewport", content: "width=device-width, initial-scale=1" }, // Responsive design settings
      { hid: "description", name: "description", content: "" }, // Meta description for SEO
      { name: "format-detection", content: "telephone=no" }, // Disable automatic detection of phone numbers
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, // Link to favicon
      {
        rel: "stylesheet",
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap', // Import Poppins font
      },
    ],
  },

  // Vite configuration options
  vite: {
    resolve: {
      alias: {
        '#app-manifest': '/node_modules/nuxt/dist/app/composables/manifest.js', // Verify this path
      },
    },
  },

  // Nitro configuration for prerendering routes
  nitro: {
    prerender: {
      route: ["/", "/about", "/contact", "/services", "/blog"], // Add routes to prerender
    },
    preset: 'static', // Set the Nitro preset to static
  },

  // Global CSS files to include
  css: [
    "@/assets/css/main.css",
    "@/assets/css/normalize.css",
  ],

  // Plugins to run before rendering the page
  plugins: [
    '~/plugins/smooth-scroll.js',
    '~/plugins/mdi.js',
  ],

  // Automatic components import
  components: true,

  // Build modules
  buildModules: [
    '@nuxtjs/eslint-module', // ESLint module for code linting
  ],

  // Modules for development and build
  modules: [],

  // Build configuration
  build: {
    postcss: {
      plugins: {
        tailwindcss: {}, // Tailwind CSS integration
        autoprefixer: {}, // Autoprefixer for CSS
      },
    },
    transpile: []
  },

  // Compatibility date for future changes
  compatibilityDate: "2025-01-18",
};
