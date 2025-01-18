// mixins/aos.js
import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * AOS (Animate On Scroll) Mixin
 *
 * Initializes AOS on mount and disables it on mobile devices.
 *
 * @see https://github.com/michalsnik/aos
 */
export default {
  mounted() {
    /**
     * Disable AOS on mobile devices for better performance.
     *
     * @see https://github.com/michalsnik/aos#disable
     */
    AOS.init({ disable: 'mobile' })
  },
}

