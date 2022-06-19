import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#typescript
  typescript: {
    shim: false,
    strict: true,
  },

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#app
  app: {
    head: {
      title: 'Nuxt3 + Primer CSS Starter',
      titleTemplate: '%s - Nuxt3 + Primer CSS Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt3 + Primer CSS Starter',
        },
      ],
    },
  },

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#css
  css: ['@/assets/primer.scss'],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#components
  components: true,

  // build modules
  buildModules: ['@pinia/nuxt', '@vueuse/nuxt'],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
})
