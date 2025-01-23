<template>
  <header class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block text-teal-600 dark:text-teal-300" href="/">
            <span class="sr-only">Home</span>
            <div>
              <a
                href="/"
                class="font-sans flex text-3xl justify-center sm:justify-start items-center gap-2 font-black leading-none text-gray-400 hover:text-indigo-600 select-none logo"
              >
                CAD & CODES<span class="text-teal-600"></span>
              </a>
            </div>
          </a>
        </div>

        <!-- Hamburger Icon for Mobile and Tablet -->
        <div class="lg:hidden md:hidden">
          <button
            @click="toggleMenu"
            class="text-gray-700 dark:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Navigation Menu -->
        <div
          class="hidden md:flex md:items-center md:gap-12"
          :class="{ 'hidden': !isMenuClosed, 'block': isMenuOpen }"
        >
          <nav aria-label="Global">
            <ul class="flex flex-col md:flex-row items-center gap-6 text-sm">
              <li>
                <a
                  class="hover:font-bold text-gray-700 transition hover:text-gray-900 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  class="hover:font-bold text-gray-700 transition hover:text-gray-900 dark:text-white dark:hover:text-white/75"
                  href="/about"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  class="hover:font-bold text-gray-700 transition hover:text-gray-900 dark:text-white dark:hover:text-white/75"
                  href="/service"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  class="hover:font-bold text-gray-700 transition hover:text-gray-900 dark:text-white dark:hover:text-white/75"
                  href="/project"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  class="hover:font-bold text-gray-700 transition hover:text-gray-900 dark:text-white dark:hover:text-white/75"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  class="hover:font-bold text-gray-700 transition hover:text-gray-900 dark:text-white dark:hover:text-white/75"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <span class="relative flex justify-center">
      <div
        class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
      ></div>

      <span class="relative z-10 bg-white px-6"></span>
    </span>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none !important;
}
.block {
  display: block !important;
}
@media (min-width: 768px) {
  .hidden {
    display: none !important;
  }
  .md\:flex {
    display: flex !important;
  }
}
</style>
