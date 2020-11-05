import webpack from 'webpack';
export default {
  server: {
    port: 30000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Freedom PR Agency Москва',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {src: '~/assets/less/fonts.less', lang: 'less'},
    {src: '~/assets/less/reset.less', lang: 'less'},
    {src: '~/assets/less/main.less', lang: 'less'},
    {src: '~/assets/less/media.less', lang: 'less'},
    {src: '~/assets/less/popupKeys.less', lang: 'less'},
    {src: 'swiper/css/swiper.min.css'},
    {src: '~plugins/jquery.fancybox.min.css'},

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/jquery-3.5.1.min.js', mode: "client", ssr: false},
    { src: '~plugins/jquery.marquee.min.js', mode: "client", ssr: false},
    { src: '~plugins/anime.min.js', mode: "client", ssr: false},
    { src: '~plugins/nuxt-swiper-plugin.js', mode: "client", ssr: false},
    { src: '~plugins/jquery.fancybox.min.js', mode: "client", ssr: false},
    { src: '~plugins/metrika.js', mode: "client", ssr: false},
    { src: '~plugins/vue-loadscript.js', mode: "client", ssr: false},
    { src: '~/plugins/notifications.js', mode: "client", ssr: false}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-babel',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
        anime: 'anime',
        fancybox: 'fancybox',
        marquee: 'marquee',
      })
    ],
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },

    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
