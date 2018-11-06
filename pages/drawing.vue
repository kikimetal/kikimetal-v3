<template>
  <div class="page">
    <Logotype />
    <router-link exact to="/">
      Kikimetal Home
    </router-link>
    <router-link exact to="/drawing">
      My drawing
    </router-link>
    <div id="pinterest-container">
      <a
      data-pin-do="embedBoard"
      data-pin-lang="ja"
      data-pin-board-width="1600"
      data-pin-scale-height="1000"
      data-pin-scale-width="10"
      href="https://www.pinterest.jp/kikimetal/kikimetal"/>
    </div>
    <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
  </div>
</template>

<script>
import Logotype from '~/components/Logotype.vue'

export default {
  components: {
    Logotype,
  },
}
</script>

<style>
#pinterest-container > span {
  width: 100%;
  max-width: 100%;
  max-height: none;
  box-shadow: none;
  border: none;
  border-radius: 0;
  /* background: pink; */
  -webkit-overflow-scrolling: touch;
}
</style>
