<template>
  <section
    class="text-center relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
  >
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"
    />
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    />
    <div class="mx-auto max-w-2xl lg:max-w-4xl overflow-hidden relative">
      <!-- Testimonial Marquee Container -->
      <div
        class="testimonials flex gap-12"
        @mouseover="pauseAnimation"
        @mouseleave="resumeAnimation"
        :style="{
          animationDuration: `${testimonials.length * 5}s`,
          animationPlayState: animationState,
        }"
      >
        <!-- Testimonial Items -->
        <div
          v-for="(testimonial, index) in [...testimonials, ...testimonials]"
          :key="index"
          class="flex-shrink-0 w-[300px] sm:w-[400px] text-center"
        >
          <img
            class="mx-auto h-12"
            :src="testimonial.logo"
            :alt="`Logo of ${testimonial.name}`"
          />
          <figure>
            <blockquote
              class="mt-10 text-xl/8 font-semibold text-gray-900 sm:text-2xl/9"
            >
              <p>{{ testimonial.text }}</p>
            </blockquote>
            <figcaption class="mt-10">
              <img
                class="mx-auto size-10 rounded-full"
                :src="testimonial.image"
                :alt="`Picture of ${testimonial.name}`"
              />
              <div
                class="mt-4 flex items-center justify-center space-x-3 text-base"
              >
                <div class="font-semibold text-gray-900">
                  {{ testimonial.name }}
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  class="fill-gray-900"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="text-gray-600">{{ testimonial.position }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      animationState: "running", // Controls animation state
      testimonials: [
        {
          logo: "https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg",
          text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          name: "Judith Black",
          position: "CEO of Workcation",
        },
        {
          logo: "https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg",
          text: "“Tuple has transformed the way we collaborate. Amazing product!”",
          image:
            "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          name: "John Doe",
          position: "Founder of Tuple",
        },
        {
          logo: "https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg",
          text: "“Level is an essential tool for our team's productivity!”",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          name: "Jane Smith",
          position: "CTO of Level",
        },
      ],
    };
  },
  methods: {
    pauseAnimation() {
      this.animationState = "paused"; // Pauses animation
    },
    resumeAnimation() {
      this.animationState = "running"; // Resumes animation
    },
  },
};
</script>

<style>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.testimonials {
  display: flex;
  will-change: transform;
  animation: marquee linear infinite;
}
</style>
