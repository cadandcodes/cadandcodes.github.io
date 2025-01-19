// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true
  },
  pages: true,  // Enable to use the pages/ directory

  vite: {
    // Comment out any custom configuration
  }
})

