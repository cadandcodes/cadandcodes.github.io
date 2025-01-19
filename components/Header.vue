<template>
    <header class="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div class="text-2xl font-bold">
        My Website
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="/app.vue" class="hover:underline">Home</a></li>
          <li><a href="/pages/about.vue" class="hover:underline">About</a></li>
          <li><a href="/pages/contact.vue" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
  /* Add any additional styles for your header component here */
  </style>