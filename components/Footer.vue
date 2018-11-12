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
  padding-top: 2.5em;
  width: 100%;
  height: 200px;
  // background: $secondary;
  background: linear-gradient(180deg, $primary, $bg-color);
  color: $white;
  text-align: center;
  font-size: 12px;
  p {
    opacity: 0.7;
  }

  @include md {
    background: transparent;
    color: $secondary;
    p {
      margin: 0 auto;
      width: 14em;
      line-height: 3;
      border-bottom: 1px solid rgba($secondary, 0.2);
    }
  }
}
</style>
