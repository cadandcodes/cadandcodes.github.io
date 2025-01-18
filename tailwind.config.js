/** @type {import('tailwindcss').Config} */
export default {
  /**
   * The content option specifies which files to scan for classes,
   * and generates the corresponding utility styles.
   * See: https://tailwindcss.com/docs/configuration#content
   */
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  /**
   * The theme section is where you define your custom styles,
   * such as colors, fonts, spacing, and so on.
   * See: https://tailwindcss.com/docs/theme
   */
  theme: {
    extend: {
      /**
       * The Poppins font family is a sans-serif font that is
       * optimized for web and mobile devices.
       * See: https://fonts.google.com/specimen/Poppins
       */
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  /**
   * The plugins option allows you to register plugins that can
   * extend the functionality of Tailwind CSS.
   * See: https://tailwindcss.com/docs/plugins
   */
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};

