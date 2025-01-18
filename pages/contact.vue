<template>
  <div>
    <!-- Include the Header component -->
    <Header/>
    <div class="container mx-auto p-4">
      <!-- Page Title -->
      <h1 class="text-3xl font-bold">Contact Us</h1>
      <!-- Brief description -->
      <p class="mt-4">
        Get in touch with us to discuss your project or learn more about our services.
      </p>
      <!-- Contact Form -->
      <form class="mt-8 space-y-4" @submit.prevent="handleSubmit">
        <!-- Name Input Field -->
        <div>
          <label for="name" class="block text-lg font-bold">Name</label>
          <input type="text" id="name" v-model="formData.name" class="block w-full px-4 py-2 border border-gray-300 rounded-md" />
        </div>
        <!-- Email Input Field -->
        <div>
          <label for="email" class="block text-lg font-bold">Email</label>
          <input type="email" id="email" v-model="formData.email" class="block w-full px-4 py-2 border border-gray-300 rounded-md" />
        </div>
        <!-- Message Textarea Field -->
        <div>
          <label for="message" class="block text-lg font-bold">Message</label>
          <textarea id="message" v-model="formData.message" class="block w-full px-4 py-2 border border-gray-300 rounded-md" rows="5"></textarea>
        </div>
        <!-- Submit Button -->
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </form>
    </div>
    <!-- Include the Footer component -->
    <Footer/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle the form submission here
      console.log(this.formData)
    }
  }
}
</script>

<style scoped>
/* Style for the container to set a maximum width */
.container {
  max-width: 600px;
}
</style>