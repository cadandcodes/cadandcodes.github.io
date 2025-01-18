<template>
  <div>
    <!-- Include the Header component -->
    <Header/>
    <div class="container mx-auto p-4">
      <!-- Page Title -->
      <h1>About Us</h1>
      <!-- Brief description about the company -->
      <p>
        We are a team of experienced designers and developers who are passionate about creating
        innovative and effective solutions for our clients. Our team has a proven track record of
        delivering high-quality results on time and on budget. We take pride in our work and are
        committed to providing exceptional service to our clients.
      </p>
    </div>
    <!-- Include the Footer component -->
    <Footer/>
  </div>
</template>

<script>
// Import the Header and Footer components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

// Export the About page component
export default {
  components: {
    Header,
    Footer
  }
}
</script>

