<template>
    <div class="contact-container p-4 max-w-md mx-auto">
      <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" v-model="name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" v-model="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" required>
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" v-model="message" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" rows="4" required></textarea>
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted:', {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        // Reset form fields
        this.name = '';
        this.email = '';
        this.message = '';
      },
    },
  }
  </script>
  
  <style scoped>
  /* Add any additional styles for your contact form here */
  .contact-container {
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
    padding: 20px;
    border-radius: 8px;
  }
  </style>