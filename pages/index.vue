<template>
  <div class="home-container p-4">
    <Header />
    <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
    <p class="mb-4">
      This is the home page of our website. We provide various resources and information to help you succeed.
    </p>
    <div class="features">
      <h2 class="text-2xl font-bold mb-2">Features</h2>
      <ul class="list-disc pl-5">
        <li class="mb-2">Comprehensive tutorials and guides</li>
        <li class="mb-2">Up-to-date news and updates</li>
        <li class="mb-2">Community support and forums</li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  name: 'Home',
}
</script>

<style scoped>
/* Add any additional styles for your home page here */
.home-container {
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 8px;
}
</style>

