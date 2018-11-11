<template lang="html">
  <div class="page">

    <div class="card" v-for="(item, i) in $store.state.artItems" :key="i">
      <h1 class="message">{{ item.message || 'message...' }}</h1>
      <div
      data-scroll
      data-scroll-type="slide"
      :data-scroll-direction="i%2 === 0 ? 'reverse' : ''"
      class="img"
      :style="{backgroundImage: item.imgsrc ? `url(${item.imgsrc})` : 'linear-gradient(#eee, #ccc)'}">
        <div :class="['placeholder', {hide: item.load}]">
          <img src="~/assets/img/common/loader.svg" alt="">
        </div>
      </div>
      <img :style="{display: 'none'}" :src="item.imgsrc" @load="complete(i)">
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    complete(i) {
      this.$store.state.artItems[i].load = true
    },
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
.card {
  padding-bottom: 40vw;

  .img {
    position: relative;
    width: 92%;
    padding-top: 152%;
    @include box-shadow;
    background: pink;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .placeholder {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
      box-shadow: 0 0 35vw 0 rgba(117, 46, 80, 0.06) inset;
      @include flex-center;
      img {
        width: 12%;
      }
      transition: all 0.3s ease 0.1s;
      &.hide {
        opacity: 0;
      }
    }
  }
  &:nth-of-type(even) {
    .img {
      position: relative;
      left: 8%;
    }
  }

  .message {
    padding: 0.9em 8%;
    font-weight: 300;
    font-size: 12px;
    color: $primary;
  }
  &:nth-of-type(odd) {
    text-align: right;
  }
}
</style>
