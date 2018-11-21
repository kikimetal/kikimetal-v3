<template lang="html">
  <div class="page">
    <div class="heading">
      このページは現在制作途中です。
    </div>

    <div class="card" v-for="(item, i) in $store.state.designItems" :key="i">
      <div
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
      this.$store.state.designItems[i].load = true
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
  color: $secondary;
  font-size: 22px;
  height: 300px;
  color: red;
}

.card {
  padding-bottom: 40vw;
  @include md {
    padding-bottom: 120px;
  }

  .img {
    position: relative;
    width: 92%;
    // padding-top: 51.75%;
    padding-top: 150%;
    @include box-shadow;
    background: pink;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @include md {
      width: 700px;
      // padding-top: 400px;
      padding-top: 600px;
    }

    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   display: block;
    //   width: inherit;
    //   padding-top: inherit;
    //   background: inherit;
    //   background-image: inherit;
    //   transform: translate(30px, 30px);
    //   filter: brightness(90%) blur(30px);
    //   z-index: -1;
    // }

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
