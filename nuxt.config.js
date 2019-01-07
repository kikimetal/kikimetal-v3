const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
    title: 'KIKIMETAL ききめたる',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      {
        hid: 'description',
        name: 'description',
        content:
          'イラストレーター KIKIMETAL ききめたる のポートフォリオサイトです。もちもち。',
      },
      // OGP
      {
        property: 'og:title',
        content: 'KIKIMETAL | ききめたる',
      },
      {
        property: 'og:description',
        content:
          'イラストレーター KIKIMETAL ききめたる のポートフォリオサイトです。もちもち。',
      },
      { property: 'og:url', content: 'https://kikimetal.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://kikimetal.com/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      // pinterest domain Authentication
      { name: 'p:domain_verify', content: '65365ebbd1a39ee7477144c933d52a54' },
    ],
    link: [
      { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      {
        rel: 'shortcut icon',
        type: 'image/vnd.microsoft.icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'apple-touch-startup-image', href: '/apple-touch-icon.png' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['assets/css/common.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {},
  },
}
