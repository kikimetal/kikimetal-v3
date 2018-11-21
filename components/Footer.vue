<template lang="html">
  <footer>
    <p>
      &copy; 2018-2018 kikimetal.com.
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

footer {
  padding: 40% 0 12%;
  width: 100%;
  color: $secondary;
  text-align: center;
  font-size: 12px;
  p {
    opacity: 0.6;
  }
  @include md {
    padding: 200px 0 3em;
  }
}
</style>
