<template>
    <div>
      <Navbar />
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold">Welcome to My Nuxt 3 Website</h1>
        <p>This is the home page.</p>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style scoped>
  /* Add your styles here */

  </style>