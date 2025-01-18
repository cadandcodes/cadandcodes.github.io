import SmoothScroll from 'smooth-scroll'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // This ensures the code runs only in the browser
    new SmoothScroll('a[href*="#"]', {
      speed: 800, // Adjust scroll speed
      offset: 50, // Optional: Offset from the top
    })
  }
})
