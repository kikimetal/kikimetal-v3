<template lang="html">
  <div class="page">
    <div class="heading">
      <h1 class="main"><span class="less">D</span><span class="small">ESIGN</span></h1>
      <h2 class="sub">ききめたるのデザインワーク紹介です。</h2>
    </div>

    <Footer />
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
@import '~/assets/css/myset.scss';

.heading {
  @include heading;
  .less {
    margin-right: -0.06em;
    margin-left: -0.08em;
  }
}
</style>
