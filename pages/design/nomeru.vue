<template lang="html">
  <div class="page">
    ITEM
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Footer,
  },
  mounted() {
    this.$store.state.so()
  },
  head() {
    return this.$store.state.getHead()
  },
}
</script>

<style lang="scss" scoped>
</style>
