import SmoothScroll from 'smooth-scroll'

/**
 * This plugin uses the SmoothScroll library to enable smooth scrolling
 * on links with a hash in the href attribute.
 *
 * @see https://github.com/cferdinandi/smooth-scroll
 */
export default defineNuxtPlugin(() => {
  if (process.client) {
    // This ensures the code runs only in the browser
    new SmoothScroll('a[href*="#"]', {
      /**
       * The speed of the scroll in milliseconds.
       * A higher value will result in a slower scroll.
       */
      speed: 800,
      /**
       * Optional offset from the top of the page in pixels.
       * This can be used to offset the scroll position.
       */
      offset: 50,
    })
  }
})

