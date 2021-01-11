export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Template NUXT',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Template NUXT starter kit description'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap'
      }
    ]
  },
  css: ['~/assets/scss/main.scss', '~/assets/scss/colors.scss', '~/assets/scss/scrollbar.scss', '~/assets/scss/transition.scss','~/assets/scss/lightbox.scss'],
  plugins: [],
  // auto import des comp.
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/cloudinary'
  ],
  styleResources: {
    scss: ['~/assets/scss/*.scss']
  },
  build: {},

  cloudinary: {
    cloudName: 'corentin7301',
    apiKey: '446663536317113',
    apiSecret: 'MSjOmtsE0AXPfRgVBnTPnsjbp5M',
    useComponent: true
  },
  layoutTransition: {
    name: 'layout-transition',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'page-transition',
    mode: 'out-in',
  }
}
