import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

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
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#css
  css: ['@/assets/primer.scss'],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#components
  components: true,

  // build modules
  buildModules: ['@pinia/nuxt', '@vueuse/nuxt', 'unplugin-icons/nuxt'],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // vite
  vite: {
    // unplugin-icons
    // https://github.com/antfu/unplugin-icons
    plugins: [
      Components({
        resolvers: [IconsResolver()],
      }),
      Icons({ compiler: 'vue3' }),
    ],
  },
})
