<template>
    <div>
      <Navbar />
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold">My Portfolio</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <!-- Add portfolio items here -->
        </div>
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