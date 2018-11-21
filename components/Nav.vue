<template lang="html">
  <div>
    <transition name="nav-transition">
      <nav
      v-show="$store.state.isScrollTop || $store.state.isScrollUp || showForce"
      id="global-nav">
        <router-link
        v-for="(route, i) in routes"
        :key="i"
        class="link"
        exact
        :to="route.to">
          <span class="sm">{{ route.title }}</span>
          <span class="md">{{ route.titleLong }}</span>
        </router-link>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showForce: window.innerWidth > 768,
      routes: [
        { to: '/', title: 'About', titleLong: 'About Me' },
        { to: '/art', title: 'Art', titleLong: 'Art Works' },
        { to: '/design', title: 'Design', titleLong: 'Design Works' },
      ],
    }
  },
  created() {
    window.addEventListener('resize', () => {
      this.showForce = window.innerWidth > 768
    })
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

$nav-color-bg: $white;
$nav-color-text: rgba($secondary, 0.9);
$nav-color-text-active: $primary;

#global-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  padding: 0 1.4em;
  width: 100%;
  height: $header-height-sm;

  @include font-accent;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.4em;
  line-height: 1;
  text-transform: uppercase;

  color: $nav-color-text;
  // backdrop-filter: blur(30px);
  overflow: hidden;
  z-index: 9999;

  @include md {
    padding: 0 2.4em;
    height: $header-height-md;
    font-size: 15px;
    align-items: stretch;
  }
  @media screen and (min-width: $page-max-width) {
    // padding: 0 calc((100vw - 960px) / 2);
    // width: $page-max-width;
    // margin: 0 auto;
  }

  .link {
    flex: 1 1 calc(100% / 3);
    padding-bottom: 1em;
    @include flex-center(row);
    transition: all 0.2s ease;
    cursor: pointer;

    &:nth-of-type(1) {
      justify-content: flex-start;
    }
    &:nth-of-type(3) {
      justify-content: flex-end;
    }

    span {
      padding-left: 0.4em;
    }

    @include sm {
      span.md {
        display: none;
      }
    }
    @include md {
      span.sm {
        display: none;
      }
      width: 140px;
      @media screen and (min-width: $page-max-width) {
        width: 230px;
      }
      &:hover span {
        @include touchme(0.94);
      }
    }

    // &.nuxt-link-exact-active {
    //   $active-color: $nav-color-text-active;
    //   color: $active-color;
    //   span {
    //     position: relative;
    //     &::after {
    //       content: '';
    //       position: absolute;
    //       left: 0;
    //       right: 0;
    //       bottom: -0.74em;
    //       margin: auto;
    //       display: block;
    //       width: 7px;
    //       height: 7px;
    //       border-radius: 50%;
    //       background: rgba($active-color, 0.3);
    //       animation: circle-in 0.6s $ease-out both;
    //       @include md {
    //         bottom: -0.45em;
    //         width: 6px;
    //         height: 6px;
    //       }
    //       @keyframes circle-in {
    //         0% {
    //           transform: scale(5);
    //           opacity: 0;
    //         }
    //         80% {
    //           transform: scale(0.9);
    //           opacity: 1;
    //         }
    //         100% {
    //           transform: scale(1);
    //           opacity: 1;
    //         }
    //       }
    //     }
    //   }
    // }
    &.nuxt-link-exact-active {
      $active-color: $nav-color-text-active;
      color: $active-color;
      span {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.54em;
          margin: auto;
          display: block;
          width: 2.9em;
          width: 100%;
          height: 3px;
          background: rgba($active-color, 0.3);
          animation: focus-in 0.8s $ease-out both;
          @keyframes focus-in {
            0% {
              transform: scaleX(5);
              opacity: 0;
            }
            72% {
              transform: scaleX(0.9);
              opacity: 1;
            }
            100% {
              transform: scaleX(1);
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

/* nuxt transition */
.nav-transition {
  @include sm {
    &-enter-active {
      transition: opacity ease-out 0.5s 0.1s, transform $ease-out 0.3s 0.1s;
    }
    &-leave-active {
      transition: opacity ease-out 0.5s, transform $ease-out 0.5s;
    }
    &-leave-to {
      opacity: 0;
      transform: translateY(-7vw);
    }
    &-enter {
      opacity: 0;
      transform: translateY(-7vw);
    }
  }
  @include md {
    &-leave,
    &-enter {
      display: block;
    }
  }
}
</style>
