<template>
    <div>
      <Navbar />
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold">My Portfolio</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <!-- Add portfolio items here -->
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  </template>
  
  <script setup>
  import Navbar from '~/components/Navbar.vue'
  import Footer1 from '~/components/Footer1.vue'
  import Footer2 from '~/components/Footer2.vue'
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>