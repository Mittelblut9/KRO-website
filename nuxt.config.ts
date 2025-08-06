import { generateJsonTranslations } from './.scripts/i18n/loadYamlTranslations';

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-08-06',
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
    '~/assets/css/main.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui-pro',
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
  hooks: {
    'build:before': () => {
      generateJsonTranslations();
    },
    'webpack:change': () => {
      generateJsonTranslations();
    },
    'builder:watch': () => {
      generateJsonTranslations();
    },
  },
  i18n: {
    lazy: true,
    langDir: 'locales/.generated/',
    strategy: 'no_prefix',
    defaultLocale: 'de-DE',
    locales: [
      {
        code: 'de-DE',
        language: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.json',
      },
    ],
    compilation: {
      escapeHtml: false,
      strictMessage: false
    }
  },
})