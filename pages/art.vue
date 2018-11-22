<template lang="html">
  <div class="page">

    <div class="page-heading">
      <h2 class="fuwafuwa">
        <!-- 文字列分解はどっちでもできるけど、Array.from はUnicodeサロゲートペア(絵文字など)もサポートしてるようだ -->
        <!-- 'ふわふわでもちもちな'.split('')" -->
        <!-- Array.from('ふわふわでもちもちな')" -->
        <span
        v-for="(char, i) in Array.from('ふわふわでもちもちな')"
        :key="i"
        :style="{animationDelay: `${i * 400}ms`}"
        >{{ char }}</span>
        <br class="md">
        <span
        v-for="(char, i) in 'お姉さんと夢の中で'.split('')"
        :key="i"
        :style="{animationDelay: `${i * 400 - 3000}ms`}"
        >{{ char }}</span>
      </h2>
    </div>

    <section class="card-container">
      <div
      class="card"
      v-for="(item, i) in $store.state.artItems"
      :key="i"
      v-if="!i || $store.state.artItems[i - 1].load"
      >
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
    </section>

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
      this.$store.state.so()
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

.page-heading {
  padding: 0 8% 28px;
  width: 100%;
  height: 480px;
  @include flex-center(column);
  color: $primary;
  @include font-accent;
  .fuwafuwa {
    padding-left: 19px;
    font-weight: 300;
    line-height: 1.5;
    font-size: 0;
    span {
      width: 1.3em;
      font-size: 11.7vw;
      @include md {
        font-size: 48px;
      }
      display: inline-block;
      animation: char-in ease 3s infinite alternate both;
      @keyframes char-in {
        from {
          opacity: 0.3;
          transform: scale(0.7);
        }
        to {
          opacity: 1;
          transform: scale(0.4);
        }
      }
    }
  }
}

.card-container {
  animation: fade-in-card-container 2.2s $ease-out both 1s;
  @keyframes fade-in-card-container {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
}

.card {
  padding-bottom: 40vw;
  &:last-child {
    padding-bottom: 30px;
  }
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
    border: 4px solid $secondary;

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
    letter-spacing: 0.3em;
    color: $primary;
    @include md {
      padding-right: calc(100% - 500px);
    }
  }

  &:nth-child(even) {
    text-align: right;
    padding-left: 5px;
  }
  &:nth-child(odd) {
    padding-right: 5px;
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
