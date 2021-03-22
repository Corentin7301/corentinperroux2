export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Corentin PERROUX',
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
        content: 'Corentin PERROUX photographie'
      },
      {
        property: "og:site_name",
        content: "Corentin PERROUX photographie"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: `https://corentinperroux.fr`,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Corentin PERROUX photographie",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Corentin PERROUX photographie",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://res.cloudinary.com/corentin7301/image/upload/v1610110316/corentinperroux.fr/corentinperroux_sighg8.jpg",
      },
      {
        property: "og:image:width",
        content: "740"
      },
      {
        property: "og:image:height",
        content: "300"
      },

      {
        name: "twitter:site",
        content: "@corentinperroux"
      },
      // { name: "twitter:card", content: "summary_large_image" }, 
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://corentinperroux.fr",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Corentin PERROUX photographie",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Corentin PERROUX photographie",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://res.cloudinary.com/corentin7301/image/upload/v1610110316/corentinperroux.fr/corentinperroux_sighg8.jpg",
      },

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
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  // auto import des comp.
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/cloudinary',

    // always at the end of array
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://corentinperroux.fr',
    routes: async () => {
      
      const dynamicArticles = ""
      const staticPages = [
        "/",
        "/animaliere",
        "/portrait",
        "/artistique",
      ]
      return [...dynamicArticles, ...staticPages]
    },
  },








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
