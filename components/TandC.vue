<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 class="text-3xl font-bold text-center mb-8">Terms and Conditions</h1>
      <div class="space-y-8">
        <section v-for="(section, index) in terms" :key="index">
          <h2 class="text-xl font-semibold mb-4">{{ section.title }}</h2>
          <p v-for="(content, i) in section.content" :key="i" class="text-gray-700 mb-4">
            {{ content }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      terms: [
        {
          title: "1. Introduction",
          content: [
            "Welcome to [Your Company Name]. By accessing or using our website, you agree to these Terms and Conditions.",
            "Please read these terms carefully before using our services.",
          ],
        },
        {
          title: "2. Use of the Website",
          content: [
            "You agree to use this website in compliance with applicable laws and regulations.",
            "Unauthorized use of this website may result in legal action.",
          ],
        },
        {
          title: "3. Intellectual Property",
          content: [
            "All content on this website, including text, images, and graphics, is the property of [Your Company Name].",
            "You may not reproduce, distribute, or create derivative works without prior written consent.",
          ],
        },
        // Add more sections as needed
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  color: #1f2937;
}
h2 {
  color: #374151;
}
p {
  line-height: 1.6;
}
</style>
