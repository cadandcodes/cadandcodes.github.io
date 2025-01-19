<template>
    <aside class="sidebar bg-gray-200 p-4 w-64">
      <nav>
        <ul class="space-y-2">
          <li><a href="/app.vue" class="hover:underline">Home</a></li>
          <li><a href="/pages/about.vue" class="hover:underline">About</a></li>
          <li><a href="/pages/contact.vue" class="hover:underline">Contact</a></li>
          <!-- Add more navigation links as needed -->
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  }
  </script>
  
  <style scoped>
  /* Add any additional styles for your sidebar component here */
  </style>