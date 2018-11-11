import Vuex from 'vuex'
import heads from '~/assets/heads.js'
import ScrollOut from 'scroll-out'

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
            // visibleY: true,
          },
        }),
    },

    mutations: {
      setIsScrollTop(state) {
        const isScrollTop = window.scrollY < 100
        if (state.isScrollTop === isScrollTop) return
        state.isScrollTop = isScrollTop
      },

      setScrollUpDown(state) {
        const isUp = state.isScrollUp
          ? state.scrollY > window.scrollY - 10 // scrollUp中の場合、タップで画面止めた場合の誤差を吸収する必要がある
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
    },
  })

export default store