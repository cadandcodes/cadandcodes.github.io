// Import Vuetify and its styles
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

// Import Material Design Icons (MDI)
import '@mdi/font/css/materialdesignicons.css'

// Export the Nuxt plugin
export default defineNuxtPlugin((nuxtApp) => {
  // Create the Vuetify instance with MDI icons
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi', // Specify MDI as the default icon set
    },
    theme: {
      defaultTheme: 'light', // Optional: Configure the default theme
    },
  })

  // Use Vuetify in the Nuxt app
  nuxtApp.vueApp.use(vuetify)
})
