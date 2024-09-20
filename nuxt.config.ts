// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-07-21',
  devtools: { enabled: true },
  srcDir: 'src',
  runtimeConfig: {
    public: {
      sentryDsn: process.env.SENTRY_DSN,
    },
    pg_host: process.env.POSTGRES_HOST,
    pg_user: process.env.POSTGRES_USER,
    pg_database: process.env.POSTGRES_DATABASE,
    pg_password: process.env.POSTGRES_PASSWORD,
    pg_port: process.env.POSTGRES_PORT,
  },
  colorMode: {
    preference: 'light',
  },
  css: [
    '~/assets/scss/base.scss',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'KommtRumathraOnline?',
    },
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/seo',
  ],
  plugins: [],
  nitro: {
    plugins: [
      '~/server/plugins/sentry.ts',
    ],
  },
  build: {
    transpile: ['sharp']
  },
  extensions: ['ts', 'js'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  vite: {
    build: {
      minify: false
    }
  },
  site: {
    url: 'https://kommtrumathraonline.de',
    name: 'Kommt Rumathra Online?',
    description: 'Kommt Rumathra Online? Ist eine Frage die stellt sich jeder Rumathra Fan. Hier findest du die Antwort.',
  },
  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    defaultLocale: 'de-DE',
    locales: [
      {
        code: 'de-DE',
        language: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.yaml'
      }
    ],
    compilation: {
      escapeHtml: false,
      strictMessage: false
    },
  },
})