export default {
  // default is 'server'
  target: "static",

  router: {
    base: "/cadandcodes.github.io/",
  },

  // other configurations
  head: {
    title: "cadandcodes.github.io",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My Nuxt.js project",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [
    // Global CSS
    "@/assets/css/main.css",
  ],

  postcss: {
    plugins: {
      
      tailwindcss: {},          // Tailwind CSS plugin to use Tailwind CSS
      autoprefixer: {},         // Autoprefixer plugin to add vendor prefixes to CSS

      "postcss-nested": {},     // PostCSS Nested plugin to use nested rules in CSS

      // Example: PostCSS Preset Env plugin to use future CSS features today
      "postcss-preset-env": {
        stage: 1, // Specify the stage of CSS features you want to use
        features: {
          "nesting-rules": true, // Enable nesting rules
        },
      },  

      // Example: CSSNano plugin to minify the CSS for production
      cssnano: {
        preset: "default", // Use the default preset for CSSNano
      },
    },
  },

  plugins: [
    // Plugins
  ],

  components: true,

  buildModules: [
    // Build modules
  ],

  modules: [
    // Modules
  ],

  build: {
    // Build configuration
  },

  compatibilityDate: "2025-01-18",
};
