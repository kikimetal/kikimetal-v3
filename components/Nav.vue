<template lang="html">
  <div>
    <transition name="nav-transition">
      <nav
      v-show="$store.state.isScrollTop || $store.state.isScrollUp"
      id="global-nav-sm">
        <router-link
        v-for="(route, i) in routes"
        :key="i"
        class="link"
        exact
        :to="route.to">
          <span>{{ route.title }}</span>
        </router-link>
      </nav>
    </transition>

    <nav
    id="global-nav-md">
      <router-link
      v-for="(route, i) in routes"
      :key="i"
      class="link"
      exact
      :to="route.to">
        <span>{{ route.title }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { to: '/', title: 'About' },
        { to: '/art', title: 'Art' },
        { to: '/design', title: 'Design' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

// only sm
#global-nav-sm {
  @include md {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }

  position: fixed;
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  height: 30vw;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2em;
  line-height: 1;
  text-transform: uppercase;
  color: $secondary;
  background: $bg-color;
  @include box-shadow;
  cursor: pointer;
  z-index: 9999;

  .link {
    flex: 1 1 calc(100% / 3);
    padding: 1em;
    padding-bottom: 19vw;
    @include flex-center(row);
    transition: all 0.2s ease;

    &:nth-of-type(1) {
      justify-content: flex-end;
    }
    &:nth-of-type(2) {
      flex: 1 1 20%;
    }
    &:nth-of-type(3) {
      justify-content: flex-start;
    }

    span {
      padding-left: 0.1em;
    }

    &.nuxt-link-exact-active {
      $active-color: $primary;
      color: $active-color;
      span {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1em;
          margin: auto;
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba($active-color, 0.6);
          animation: circle-in 0.6s $ease-out both;
          @keyframes circle-in {
            0% {
              transform: scale(5);
              opacity: 0;
            }
            80% {
              transform: scale(0.9);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: calc(-9vw - 1em);
          margin: auto;
          display: block;
          width: 1px;
          height: 9vw;
          background: rgba($active-color, 0.6);
          transform-origin: top;
          animation: line-in 2s $ease-out 0.4s both;
          @keyframes line-in {
            0% {
              transform: scaleY(0);
              opacity: 0;
            }
            100% {
              transform: scaleY(1);
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

// over md
#global-nav-md {
  @include sm {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: $md-header-height;
  @include flex-center(row);
  align-items: stretch;

  background: $md-header-color;
  @include box-shadow(rgba($shadow-color, 0.08));
  color: $secondary;
  @include font-accent;
  font-size: 20px;
  font-weight: 700;
  z-index: 99999;

  .link {
    width: 120px;
    @include flex-center;
    cursor: pointer;

    &.nuxt-link-exact-active {
      $active-color: $primary;
      color: $active-color;
      span {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.6em;
          margin: auto;
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba($active-color, 0.6);
          animation: circle-in 0.6s $ease-out both;
          @keyframes circle-in {
            0% {
              transform: scale(5);
              opacity: 0;
            }
            80% {
              transform: scale(0.9);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: calc(-12px - 0.6em);
          margin: auto;
          display: block;
          width: 1px;
          height: 12px;
          background: rgba($active-color, 0.6);
          transform-origin: top;
          animation: line-in 2s $ease-out 0.4s both;
          @keyframes line-in {
            0% {
              transform: scaleY(0);
              opacity: 0;
            }
            100% {
              transform: scaleY(1);
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
  &-enter-active {
    transition: opacity ease-out 0.5s 0.1s, transform $ease-out 0.3s 0.1s;
  }
  &-leave-active {
    transition: opacity ease-out 0.5s, transform $ease-out 0.5s;
  }
  &-leave-to {
    opacity: 0;
    transform: translateY(7vw);
  }
  &-enter {
    opacity: 0;
    transform: translateY(7vw);
  }
}
</style>
