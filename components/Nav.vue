<template lang="html">
  <div>
    <transition name="nav-transition">
      <nav
      v-show="$store.state.isScrollTop || $store.state.isScrollUp"
      id="global-nav-sm">
        <router-link
        v-for="(route, i) in routes"
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
        { to: '/', title: 'Home' },
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
  padding-bottom: 2vw;
  width: 100%;
  height: 30vw;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: rgba($white, 0.8);
  background: linear-gradient(135deg, rgb(236, 145, 194), rgb(163, 132, 227));
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 9999;

  .link {
    flex: 1 1 calc(100% / 3);
    padding: 1em;
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

    &.nuxt-link-exact-active {
      $active-color: rgba($white, 0.5);
      color: $active-color;
      span {
        position: relative;
      }
      span::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -1em;
        margin: auto;
        display: block;
        width: 0.56em;
        height: 0.56em;
        background: $active-color;
        border-radius: 50%;
        animation: popin 0.6s $ease-out;
        @keyframes popin {
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
    }
  }
}

// over md
#global-nav-md {
  background: red;
  @include sm {
    display: none;
    visibility: hidden;
    pointer-events: none;
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
    // transform: scale(0.9);
    transform: translateY(10vw);
  }
  &-enter {
    opacity: 0;
    transform: translateY(10vw);
  }
}
</style>
