<template>
  <header class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block text-teal-600 dark:text-teal-300" href="/">
            <span class="sr-only">Home</span>

            <a
              href="/"
              class="font-sans flex text-3xl justyfy-center sm:justify-start items-center gap-2 font-black leading-none text-gray-400 hover:text-teal-900 select-none logo"
              >CAD & CODES<span class="text-indigo-600"></span
            ></a>
          </a>
        </div>

        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
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
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
