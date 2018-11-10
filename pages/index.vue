<template>
  <div class="page">
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <div data-scroll data-so-scale>
      <Logotype fill="thistle" />
    </div>
    <Logotype />
    <div data-scroll data-so-scale>
      <Logotype fill="thistle" />
    </div>
    <Logotype />
    <div data-scroll data-so-scale>
      <Logotype fill="thistle" />
    </div>
    <Logotype />
    <div data-scroll data-so-scale>
      <Logotype fill="thistle" />
    </div>
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
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
