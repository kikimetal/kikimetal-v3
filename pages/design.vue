<template lang="html">
  <div class="page">
    <h1>DESIGN</h1>

  </div>
</template>

<script>
export default {
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
