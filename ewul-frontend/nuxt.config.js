export default {
  ssr: false,
  target: 'static',
  srcDir: 'src/main/webapp',
  head: {
    title: 'ewul-frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ['bootstrap-vue/nuxt'],
  build: {},
}
