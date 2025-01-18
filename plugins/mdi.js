// Import Vuetify for UI components and its associated styles
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Ensure Vuetify styles are included

// Import Material Design Icons (MDI) to use with Vuetify components
import '@mdi/font/css/materialdesignicons.css'

// Export a Nuxt plugin to integrate Vuetify with the Nuxt application
export default defineNuxtPlugin((nuxtApp) => {
  // Create the Vuetify instance and configure it
  const vuetify = createVuetify({
    // Configure the default icon set for Vuetify components
    icons: {
      defaultSet: 'mdi', // Use Material Design Icons (MDI)
    },
    // Optional: Define the default theme for the application
    theme: {
      defaultTheme: 'light', // Set the default theme to 'light'
    },
  })

  // Integrate the Vuetify instance with the Nuxt application's Vue instance
  nuxtApp.vueApp.use(vuetify)
})

