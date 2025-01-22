<template>
  <div>
    <Navbar />
    <div>
      <section
        class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
      >
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
              Empowering Your Business with Cutting-Edge Technology
            </h2>

            <p class="hidden text-gray-500 md:mt-4 md:block">
              Shaping the Future with Precision Design and Code Mastery
            </p>

            <div class="mt-4 md:mt-8">
              <a
                href="/contact"
                class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt=""
          src="/assets/images/Hero1.svg"
          class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
/* Add your styles here */
</style>
