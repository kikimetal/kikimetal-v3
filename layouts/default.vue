<template lang="html">
  <div @touchstart="() => {}">
    <div id="bg" />
    <Nav />
    <div id="page-container">
      <nuxt/>
    </div>
    <!-- Typekit kikimetal.com -->
    <script>
    (function(d){
      var config = {
        kitId: 'bps7ybw',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document)
    </script>
  </div>
</template>

<script>
import Vue from 'vue'
import VueParallaxJs from 'vue-parallax-js'
Vue.use(VueParallaxJs, { className: 'v-parallax' })

import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav,
  },
  methods: {
    setPropertyScrollY() {
      const d = document.body || document.documentElement
      d.style.setProperty('--scrollY', `${window.scrollY}px`)
    },
    handleScroll() {
      this.setPropertyScrollY()
      this.$store.commit('setScrollUpDown')
      this.$store.commit('setIsScrollTop')
    },
  },
  created() {
    if (process.browser) {
      this.setPropertyScrollY()
      window.addEventListener('scroll', this.handleScroll)
      // get art items
      this.$store.commit('setArtItems')
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/css/myset.scss';

// #page-container {
// どうもこれやるとスクロール挙動おかしい
//   overflow-x: hidden;
// }
#page-container > div {
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  transform-origin: 50% calc(50vh + var(--scrollY));

  max-width: 900px;
  margin: 0 auto;
}
:root {
  background: $bg-color;
}
#bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $bg-color;
  z-index: -999;
}
</style>
