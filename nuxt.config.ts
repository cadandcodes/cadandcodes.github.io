export default {
  target: 'static', // default is 'server'
  router: {
    base: '/cadandcodes.github.io/'
  },
  // other configurations
  head: {
    title: 'cadandcodes.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    // Global CSS
  ],
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
  }
}