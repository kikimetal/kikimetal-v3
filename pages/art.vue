<template lang="html">
  <div class="page">

    <div class="heading">
      <h1 class="main">A<span class="small">RT</span></h1>
      <h2 class="sub">ききめたるのイラストレーション作品です。</h2>
    </div>

    <div
    class="card"
    v-for="(item, i) in $store.state.artItems"
    :key="i"
    >
    <!-- v-if="!i || $store.state.artItems[i - 1].load" -->
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
      <h1 class="message">{{ item.message || 'message...' }}</h1>
      <img :style="{display: 'none'}" :src="item.imgsrc" @load="complete(i)">
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

.heading {
  @include heading;
}

.card {
  padding-bottom: 40vw;
  @include md {
    padding-bottom: 120px;
  }

  .img {
    position: relative;
    width: 92%;
    padding-top: 152%;
    @include box-shadow;
    background: pink;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @include md {
      width: 500px;
      padding-top: 760px;
    }

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

  .message {
    padding: 0.9em 8%;
    width: 100%;
    font-weight: 300;
    font-size: 12px;
    color: $primary;
    @include md {
      padding-right: calc(100% - 500px);
    }
  }

  &:nth-of-type(even) {
    text-align: right;
  }
  &:nth-of-type(odd) {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-end;
    .message {
      @include md {
        padding-right: 0;
        padding-left: calc(100% - 500px);
      }
    }
  }
}
</style>
