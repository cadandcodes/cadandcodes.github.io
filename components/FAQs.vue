<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 class="text-3xl font-bold text-center mb-8">Frequently Asked Questions (FAQs)</h1>
      <div class="space-y-4">
        <details
          v-for="(faq, index) in faqs"
          :key="index"
          :open="faq.open"
          @toggle="toggleFAQ(index)"
          class="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-medium">{{ faq.question }}</h2>
            <svg
              class="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "What is this website about?",
          answer: "This website is a hub for CAD and design-related resources, articles, and tools.",
          open: true, // The first FAQ is open by default
        },
        {
          question: "How can I participate in your competitions?",
          answer: "You can participate by registering through our Events page. Follow the instructions for upcoming competitions.",
          open: false,
        },
        {
          question: "How can I contact support?",
          answer: "You can contact support via our Contact Us page or email us at support@example.com.",
          open: false,
        },
        // Add more FAQs here
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
  },
};
</script>

<style scoped>
h1 {
  color: #1f2937;
}
details[open] summary {
  font-weight: bold;
}
details[open] p {
  color: #4b5563;
}
</style>
