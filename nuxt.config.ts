// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/ui'
  ],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'de', language: 'de-DE' }
    ],
    defaultLocale: 'en',
  }
})
