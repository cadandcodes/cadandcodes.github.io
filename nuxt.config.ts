// ~/nuxt.config.ts
export default defineNuxtConfig({
  target: 'static',

  app: {
    baseURL: '/',
    buildAssetsDir: '/assets/',
    head: {
      title: 'CAD and CODES',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'CAD and Codes - A platform for mechanical design engineers.' },
        { property: 'og:title', content: 'CAD and Codes' },
        { property: 'og:description', content: 'A hands-on guide for mechanical design engineering and GD&T.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://cadandcodes.github.io/' },
        { property: 'og:image', content: 'https://cadandcodes.github.io/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

  css: [
    'assets/styles/main.css',
    'assets/styles/typography.css',
  ],

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Roboto: [400, 500, 700],
      OpenSans: [400, 600],
    },
  },

  runtimeConfig: {
    public: {
      apiBase: 'https://api.example.com',
    },
  },

  build: {
    transpile: [],
  },

  vite: {
    server: {
      fs: {
        strict: true,
      },
    },
  },

  typescript: {
    shim: false,
    strict: true,
  },

  tailwindcss: {
    config: {
      configPath: 'tailwind.config.js',
    },
  },

  experimental: {
    payloadExtraction: true,
  },
});
function defineNuxtConfig(config: {
  target: string;
  app: {
    baseURL: string;
    buildAssetsDir: string;
    head: {
      title: string;
      meta: ({ name: string; content: string; } | { property: string; content: string; })[];
      link: { rel: string; type: string; href: string; }[];
    };
  };
  css: string[];
  modules: string[];
  googleFonts: {
    families: {
      Roboto: number[];
      OpenSans: number[];
    };
  };
  runtimeConfig: {
    public: {
      apiBase: string;
    };
  };
  build: {
    transpile: never[];
  };
  vite: {
    server: {
      fs: {
        strict: boolean;
      };
    };
  };
  typescript: {
    shim: boolean;
    strict: boolean;
  };
  tailwindcss: {
    config: {
      configPath: string;
    };
  };
  experimental: {
    payloadExtraction: boolean;
  };
}) {
  return config;
}

