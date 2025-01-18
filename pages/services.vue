<template>
  <!--
    This is the Services page template for the Nuxt 3 website.
    It includes the Header and Footer components and a main section
    where you can add more content specific to the services offered.
  -->
  <div class="w-full">
    <!-- The Header component is imported from '~/components/Header.vue' -->
    <Header />
    <!-- The main content of the page -->
    <main class="p-4">
      <h1 class="text-xl font-semibold">Service Page</h1>
      <!-- Add more content for the services here -->
    </main>
    <!-- The Footer component is imported from '~/components/Footer.vue' -->
    <Footer />
  </div>
</template>

<script setup>
// Import the Header and Footer components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<!--
  Add your styles here
  If you want to customize the styles of the Services page,
  you can add your CSS code in this section.
-->
<style scoped>
</style>

