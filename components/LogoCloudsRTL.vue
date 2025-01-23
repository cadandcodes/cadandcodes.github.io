<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg/8 font-semibold text-gray-900">Trusted by the world’s most innovative teams</h2>
      <div class="scrolling-container-wrapper mx-auto mt-10" :dir="direction">
        <div class="scrolling-container mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img class="logo" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
          <img class="logo" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
          <img class="logo" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
          <img class="logo" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
          <img class="logo" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Set the direction dynamically (can be changed to 'rtl' or 'ltr')
const direction = ref('rtl');
</script>

<style scoped>
.scrolling-container-wrapper {
  width: 100%; /* Adjust based on the desired navbar width */
  overflow: hidden;
}

.scrolling-container {
  display: flex;
  gap: 2rem;
  animation: scroll 30s linear infinite; /* Slowed down the animation */
}

.logo {
  max-height: 200px;
  object-fit: contain;
  transition: transform 0.3s ease, opacity 0.3s ease; /* Smooth transition for hover effect */
}

.logo:hover {
  transform: scale(1.2); /* Enlarge logo on hover */
  opacity: 0.8; /* Dim the logo slightly for hover effect */
}

@keyframes scroll {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* RTL version adjustment */
[dir="rtl"] .scrolling-container {
  animation: scroll-rtl 40s linear infinite;
}

@keyframes scroll-rtl {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
