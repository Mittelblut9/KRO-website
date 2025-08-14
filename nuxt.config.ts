import { generateJsonTranslations } from './.scripts/i18n/loadYamlTranslations';

export default defineNuxtConfig({
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
    ssr: false,
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    devtools: { enabled: true },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    css: [
        '~/assets/css/main.css',
    ],
    site: {
        url: 'https://kommtrumathraonline.de',
        name: 'Kommt Rumathra Online?',
        description: 'Kommt Rumathra Online? Ist eine Frage die stellt sich jeder Rumathra Fan. Hier findest du die Antwort.',
    },
    colorMode: {
        preference: 'light',
    },
    runtimeConfig: {
        public: {
            sentryDsn: process.env.SENTRY_DSN,
        },
        pgHost: process.env.POSTGRES_HOST,
        pgUser: process.env.POSTGRES_USER,
        pgDatabase: process.env.POSTGRES_DATABASE,
        pgPassword: process.env.POSTGRES_PASSWORD,
        pgPort: process.env.POSTGRES_PORT,
    },
    extensions: ['ts', 'js'],
    build: {
        transpile: ['sharp']
    },
    compatibilityDate: '2025-08-06',
    vite: {
        build: {
            minify: false
        }
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
});
