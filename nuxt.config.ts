

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  googleFonts: {
    families: {
      'Montserrat': true,
    }
  },
  i18n: {
    vueI18n: './i18n.ts',
  }

})