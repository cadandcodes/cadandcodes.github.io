// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },


  // Deployment configuration for GitHub Pages
  app: {
    baseURL: '/', // Replace with your GitHub Pages repository name

    // Global page headers
    head: {
    title: 'cad-and-codes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    },
  },
  // Global CSS
  css: [
    '~/assets/styles/main.css'
  ],
  // Plugins to run before rendering page
  plugins: [
    '~/plugins/axios.js'
  ],
  // Auto import components
  components: true,
  // Modules for dev and build (recommended)
  modules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/google-fonts',
  ],
  // Content module configuration
  // Build Configuration
  build: {
    // You can extend webpack config here
  }
})
function defineNuxtConfig(config: {
  compatibilityDate: string;
  devtools: { enabled: boolean };
  app: { baseURL: string; head: { title: string; meta: { charset?: string; name?: string; content?: string; hid?: string; }[]; link: { rel: string; type: string; href: string; }[]; }; };
  css: string[];
  plugins: string[];
  components: boolean;
  modules: (string | [string, { baseURL: string }])[];
  build: {};
}) {
  return config;
}

