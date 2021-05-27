export default {
  ssr: false,
  target: 'static',
  srcDir: 'src/main/webapp',
  head: {
    title: 'ewul-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ['bootstrap-vue/nuxt', 'nuxt-i18n'],
  i18n: {
    locales: [
      {
        code: 'en_US',
        file: 'en_US.json'
      }
    ],
    lazy: true,
    langDir: '~/languages/',
    defaultLocale: 'en_US'
  },
  build: {}
};
