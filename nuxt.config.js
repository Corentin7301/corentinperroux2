
export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Template NUXT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Template NUXT starter kit description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap'
      }
    ]
  },
  css: ['~/assets/scss/main.scss','~/assets/scss/colors.scss','~/assets/scss/scrollbar.scss','~/assets/scss/utility.scss'
  ],
  plugins: [
  ],
  // auto import des comp.
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['~/assets/scss/*.scss']
  },
  build: {
  }
}
