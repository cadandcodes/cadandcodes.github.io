// ~/tailwind.config.js

module.exports = {
  content: [
    './components/**/*.{vue,js}', // Scan components for Tailwind classes
    './layouts/**/*.vue',         // Scan layouts for Tailwind classes
    './pages/**/*.vue',           // Scan pages for Tailwind classes
    './plugins/**/*.{js,ts}',     // Scan plugins for Tailwind classes
    './app.vue',                  // Scan the main app file
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Deep blue
        secondary: '#9333EA', // Purple
        accent: '#F59E0B', // Amber
        background: '#F3F4F6', // Light gray
        surface: '#FFFFFF', // White
        muted: '#6B7280', // Gray for muted text
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Primary font
        serif: ['Merriweather', 'serif'], // Secondary font
        mono: ['Fira Code', 'monospace'], // For code snippets
      },
      spacing: {
        '128': '32rem', // Custom spacing (e.g., for larger containers)
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem', // Extra-large rounded corners
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1D2025',
            a: {
              color: '#1D4ED8',
            },
            strong: {
              color: '#1D2025',
            },
            h1: {
              fontSize: '4.5rem',
              letterSpacing: '-0.05em',
            },
            h2: {
              fontSize: '3.25rem',
              letterSpacing: '-0.05em',
            },
            h3: {
              fontSize: '2rem',
              letterSpacing: '-0.05em',
            },
          },
        },
        dark: {
          css: {
            color: '#CAD3C8',
            a: {
              color: '#9333EA',
            },
            strong: {
              color: '#CAD3C8',
            },
            h1: {
              fontSize: '4.5rem',
              letterSpacing: '-0.05em',
            },
            h2: {
              fontSize: '3.25rem',
              letterSpacing: '-0.05em',
            },
            h3: {
              fontSize: '2rem',
              letterSpacing: '-0.05em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Adds better typography defaults
    require('@tailwindcss/forms'), // Improves form styling
    require('@tailwindcss/aspect-ratio'), // Simplifies aspect ratio management
  ],
  darkMode: 'class', // Enable dark mode with the 'class' strategy
};

