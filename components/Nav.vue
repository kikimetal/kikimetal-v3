<template lang="html">
  <transition name="nav-transition">
    <nav
    v-show="$store.state.isScrollTop || $store.state.isScrollUp"
    id="global-nav">
      <router-link class="link" exact to="/">Home</router-link>
      <router-link class="link" exact to="/drawing">Art</router-link>
      <router-link class="link" exact to="/gyro">Design</router-link>
    </nav>
  </transition>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

#global-nav {
  display: block;
  position: fixed;
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}
.link {
  display: block;
  margin: 5px;
  padding: 0.5em 2em;
  line-height: 1;
  color: white;
  font-weight: 600;
  text-decoration: none;
  background: rgb(131, 184, 189);
  border-radius: 3em;
  box-shadow: 0 2px 16px 0 rgba(74, 143, 143, 0.35);
}

/* nuxt transition */
.nav-transition {
  &-enter-active {
    transition: opacity ease-out 0.5s 0.1s, transform $ease-out-back 0.3s 0.1s;
  }
  &-leave-active {
    transition: opacity ease-out 0.5s, transform $ease-out 0.5s;
  }
  &-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
  &-enter {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>
