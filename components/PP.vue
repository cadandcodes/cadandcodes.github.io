<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 class="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
      <div class="space-y-8">
        <section v-for="(section, index) in privacyPolicy" :key="index">
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
      privacyPolicy: [
        {
          title: "1. Introduction",
          content: [
            "Your privacy is important to us. This Privacy Policy outlines how [Your Company Name] collects, uses, and protects your personal information.",
            "By using our website or services, you consent to the data practices described in this policy.",
          ],
        },
        {
          title: "2. Information We Collect",
          content: [
            "We may collect personal information such as your name, email address, and usage data.",
            "We also collect non-personal information like browser type, IP address, and site usage data.",
          ],
        },
        {
          title: "3. How We Use Your Information",
          content: [
            "We use your information to provide, improve, and communicate about our services.",
            "We may also use your data to comply with legal obligations and enhance user experience.",
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
