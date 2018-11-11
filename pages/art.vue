<template lang="html">
  <div class="page">

    <div class="card" v-for="(item, i) in items" :key="i">
      <h1>card</h1>
      <div
      class="img"
      :style="{backgroundImage: `url(${item.imgsrc})`}"
      />
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      items: Array(5).fill({
        imgsrc: 'https://kikimetal.com/_nuxt/img/kikigirl.027d235.jpg',
      }),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.card {
  .img {
    width: 92%;
    padding-top: 160%;
    @include box-shadow;
    background: pink;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-of-type(even) {
    text-align: right;
    .img {
      position: relative;
      left: 8%;
    }
  }
}
</style>
