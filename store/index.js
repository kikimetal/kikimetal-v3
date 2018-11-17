import Vuex from 'vuex'
import ScrollOut from 'scroll-out'
import heads from '~/assets/heads.js'
import designItems from '~/assets/designItems.js'

const store = () =>
  new Vuex.Store({
    state: {
      isShowNav: false,

      scrollY: 0,
      isScrollTop: true,
      isScrollUp: true,

      getHead: path => (path ? heads[path] : heads[$nuxt.$route.path]),
      so: () =>
        ScrollOut({
          cssProps: {
            // viewportY: true,
            visibleY: true,
          },
        }),

      artItemsStatus: false,
      artItems: Array(5).fill({}),

      designItems: designItems.map(item => ({
        ...item,
        load: false,
      })),
    },

    mutations: {
      setIsScrollTop(state) {
        const isScrollTop = window.scrollY < 50
        if (state.isScrollTop === isScrollTop) return
        state.isScrollTop = isScrollTop
      },

      setScrollUpDown(state) {
        const isUp = state.isScrollUp
          ? state.scrollY > window.scrollY - 9 // scrollUp中の場合、タップで画面止めた場合の誤差を吸収する必要がある
          : state.scrollY > window.scrollY

        if (state.isScrollUp !== isUp) {
          state.isScrollUp = isUp
        }
        state.scrollY = window.scrollY
      },

      toggleNav(state, isShow) {
        if (isShow === undefined) {
          state.isShowNav = !state.isShowNav
        } else {
          state.isShowNav = isShow
        }
      },

      setArtItems(state, items) {
        if (state.artItemsStatus) return

        const api =
          'https://maylily.co.jp/api/getSheet.php' +
          '?GSSID=' +
          '1_CzKIJarThdNjjobQNLJRWmYD9edVEvuYrBrilPlV_s' +
          '&sheetName=art' +
          '&imgsrc' +
          '&message'
        this.$axios(api)
          .then(res =>
            res.data.map(row => ({
              ...row,
              load: false,
            }))
          )
          .then(data => {
            state.artItems = data
            state.artItemsStatus = true
          })
      },
    },
  })

export default store
