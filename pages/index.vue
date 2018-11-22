
<template>
  <div class="page">

    <!-- <div class="heading">
      <h1 class="main"><span class="less">K</span><span class="small">IKIMETAL</span></h1>
      <h2 class="sub">ききめたるのポートフォリオサイトへようこそ</h2>
    </div> -->

    <div class="top">
      <!-- <Logotype class="logotype" fill="rgb(198, 159, 180)" /> -->
      <div class="img"/>
      <Logotype class="logotype" fill="rgb(245, 219, 234)" />
      <h2 class="sub">好きなものを好きと言うチカラ</h2>
    </div>

    <section class="about-me" data-scroll data-scroll-type="slide-up">
      <h1>About me</h1>
      <p>"かわいさと力強さ"の想いを形にしていくため日々修行中のデザインラーナーです。</p>
      <p>東京でWEBサイト/アプリ制作をしています。</p>
      <p>お仕事のご相談は、TwitterのDMから気軽にご連絡ください。</p>
      <div class="sns">
        <a class="link-btn" href="https://twitter.com/qiqimetal">Twitter</a>
        <a class="link-btn" href="https://sketch.pixiv.net/@kikimetal">PixivSketch</a>
      </div>
    </section>

    <router-link exact to="/art" class="link-card to-art" data-scroll data-scroll-type="slide">
      <div class="box" />
      <div class="text">イラストをみる</div>
    </router-link>

    <router-link exact to="/design" class="link-card to-design" data-scroll data-scroll-type="slide" data-scroll-direction='reverse'>
      <div class="box" />
      <div class="text">デザインをみる</div>
    </router-link>

    <!-- TODO: スキルセットについて追加すべきか？ -->

    <Footer />
  </div>
</template>

<script>
import Logotype from '~/components/Logotype.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer,
    Logotype,
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

.top {
  padding: 33% 0 35%;
  @include flex-center(column);
  .logotype {
    width: 60vw;
  }
  .sub {
    padding-top: 0.5em;
    padding-left: 0.5em;
    color: rgb(236, 206, 223);
    font-size: 2.77vw;
    letter-spacing: 0.62em;
  }
  .img {
    margin-bottom: 10px;
    width: 60vw;
    padding-top: calc(60vw * 0.6);
    background-image: url('~assets/img/top.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 3px solid $secondary;
  }
  @include md {
    padding: 0;
    padding-bottom: 8vh;
    height: calc(100vh - 90px);
    .logotype {
      width: 374px;
    }
    .img {
      width: 374px;
      padding-top: calc(374px * 0.6);
    }
    .sub {
      font-size: 17px;
    }
  }
}

.link-card {
  margin: 37% 1em 1em;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: $primary;
  @include md {
    margin: 20% 1em 1em;
  }

  .box {
    position: relative;
    width: 80%;
    padding-top: 78%;
    background: pink;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 12px solid $white;
    @include box-shadow;
    box-shadow: 0 4px 21px 0 $shadow-color;
    @include md {
      width: 60%;
      padding-top: 58%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(116, 66, 66, 0.3);
      transition: all 0.3s ease;
    }
    &:hover {
      @include touchme;
      &::after {
        opacity: 0.3;
      }
    }
  }
  .text {
    font-size: 0.96em;
    font-weight: 500;
    padding: 1.2em 0 0.4em;
    border-bottom: 3px solid rgba($primary, 0.5);
  }

  &:nth-of-type(odd) {
    align-items: flex-end;
  }

  &.to-art {
    .box {
      background-image: url('~assets/img/to-art.jpg');
    }
  }

  &.to-design {
    .box {
      background-image: url('~assets/img/to-design.jpg');
    }
  }
}

// about me
.about-me {
  // padding: 0 6%;
  padding: 0 2em;
  font-size: 14px;
  @include md {
    font-size: 15px;
  }
  h1 {
    // color: $primary;
    color: $secondary;
    padding-bottom: 1.7em;
    font-size: 1.2em;
    @include font-accent;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    font-weight: 700;
  }
  p {
    color: $secondary;
    line-height: 2.4;
    font-size: 1em;
    font-weight: 400;
    opacity: 0.8;
  }
}

// sns
.sns {
  padding: 2.8em 0;
  .link-btn {
    padding: 0.6em 0;
    margin-right: 1.2em;
    display: inline-block;
    background: pale($bg-color);
    color: $primary;
    width: 8em;
    text-align: center;
    @include font-accent;
    font-weight: 700;
    @include box-shadow;
    transition: all 0.3s $ease-out;
    &:hover {
      @include touchme(0.94);
      @include md {
        @include touchme(0.98);
      }
      background: $primary;
      color: $bg-color;
    }
  }
}
</style>
