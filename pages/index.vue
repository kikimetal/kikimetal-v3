<template>
  <div class="page">
    <div data-scroll data-so-scale><Logotype fill="thistle" /></div>
  </div>
</template>

<script>
import Logotype from '~/components/Logotype.vue'
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav,
    Logotype,
  },
  mounted() {
    this.$store.state.so()
  },
  head() {
    return this.$store.state.getHead()
  },
}
</script>

<style>
</style>
