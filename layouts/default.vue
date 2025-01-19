<template>
    <div>
      <Header />
      <main class="container mx-auto p-4">
        <Nuxt />
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer,
    },
  }
  </script>
  
  <style scoped>
  /* Add any additional styles for your layout component here */
  </style>