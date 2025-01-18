<template>
  <!-- Footer container with max width and padding -->
  <footer class="max-w-screen-xl px-8 mx-auto">

    <div class="w-full border-y border-[#DDDDDD]">
      <!-- Flex container for footer sections -->
      <div class="w-full flex flex-wrap space-y-6">
        <!-- First section with logo and navigation links -->
        <div
          class="w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r border-[#DDDDDD]">
          <!-- Logo container, hidden on small screens -->
          <div class="sm:hidden xl:block mb-6 sm:mb-0">
            <a href="https://cadandcodes.com">
              <img :src="require('~/assets/img/logo/cadandcodes.svg')" class="w-24 -mt-2" alt="CAD & CODES Logo" />
            </a>
          </div>
          <!-- Navigation links list -->
          <ul class="space-y-4">
            <NavLink name="Portfolio" url="#" />
            <NavLink name="Products" url="#" />
            <NavLink name="Careers" url="#" />
          </ul>
        </div>
        <!-- Second section with additional navigation links -->
        <div
          class="w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 xl:border-r border-[#DDDDDD]">
          <ul class="space-y-4">
            <NavLink name="About Us" url="#" />
            <NavLink name="Blog" url="#" />
            <NavLink name="Security" url="#" />
          </ul>
        </div>
        <!-- Third section with support links -->
        <div
          class="w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r border-[#DDDDDD]">
          <ul class="space-y-4">
            <NavLink name="Help Center" url="#" />
            <NavLink name="Contact Us" url="#" />
            <NavLink name="Privacy Policy" url="#" />
          </ul>
        </div>
        <!-- Fourth section with newsletter subscription form -->
        <div
          class="sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 border-t sm:border-t-0 border-[#DDDDDD]">
          <h5 class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Newsletter</h5>
          <p class="text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            Stay connected and never miss a thing <br class="sm:hidden" />while you're on the go
          </p>
          <!-- Email input and submit button -->
          <div class="flex items-center space-x-2">
            <input type="text"
              class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Enter your email" />
            <button
              class="bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300">
              <ArrowRightIcon :size="20" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto text-center">
      <!-- Social Media Links -->
      <div class="mt-4">
        <a href="#" target="_blank" class="mx-2 hover:text-gray-400">Twitter</a>
        <a href="#" target="_blank" class="mx-2 hover:text-gray-400">Facebook</a>
        <a href="https://www.linkedin.com/company/cadandcodes" target="_blank" class="mx-2 hover:text-gray-400">LinkedIn</a>
      </div>
    </div>

    <!-- Copyright Information -->
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
      Copyright &copy; 2025 CAD & CODES. All rights reserved
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped></style>