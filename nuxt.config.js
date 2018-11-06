const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
    title: 'kikimetal | ききめたる',
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
          '株式会社CARVANCL（カーバンクル）は、若手デザイナーを起用したチームで新しい答えを生み出していくデザインプロジェクト推進企業です。上流工程からブランドづくりに関わり、ブランド戦略策定、UX設計、UIデザイン、デザインシステム設計を経てWebアプリケーション・サービスの制作を行います。',
      },
      {
        property: 'og:title',
        content:
          'CARVANCL カーバンクル - 経営に伴走するデザインプロジェクト企業',
      },
      {
        property: 'og:description',
        content:
          '株式会社CARVANCL（カーバンクル）は若手デザイナーを中心に起用したチームで新しい答えを生み出していくデザインプロジェクト推進企業です。上流工程からブランドづくりに関わり、ブランド戦略策定、UX設計、UIデザイン、デザインシステム設計を経てWebアプリケーション・サービスの制作を行います。',
      },
      { property: 'og:url', content: 'https://carvancl.co.jp' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://carvancl.co.jp/og-card.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
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
  css: [],

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
