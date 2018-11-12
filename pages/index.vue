
<template>
  <div class="page">

    <!-- <div class="heading">
      <h1 class="main"><span class="less">K</span><span class="small">IKIMETAL</span></h1>
      <h2 class="sub">ききめたるのポートフォリオサイトへようこそ</h2>
    </div> -->

    <div class="top">
      <Logotype class="logotype" fill="rgb(198, 159, 180)" />
      <!-- <h2 class="sub">ききめたるのポートフォリオサイトへようこそ</h2> -->
    </div>

    <router-link exact to="/art" class="link-card to-art">
      <div class="box"></div>
      <div class="text">イラストをみる</div>
    </router-link>

    <router-link exact to="/design" class="link-card to-design">
      <div class="box"></div>
      <div class="text">デザインをみる</div>
    </router-link>

    <section class="about-me">
      <h1>About me</h1>
      <p>好きなものを好きというためのチカラが欲しい！</p>
      <p>少しでも多くの想いを形にしていくために、日々修行中のデザインラーナーです。</p>
      <div class="sns">
        <a class="link-btn" href="https://twitter.com/qiqimetal">Twitter</a>
        <a class="link-btn" href="https://sketch.pixiv.net/@kikimetal">PixivSketch</a>
      </div>
    </section>

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

// .heading {
//   @include heading;
//   .less {
//     margin-right: -0.02em;
//     margin-left: -0.08em;
//   }
// }

.top {
  padding: 31% 0 29%;
  @include flex-center(column);
  .logotype {
    width: 65%;
  }
  .sub {
    color: $secondary;
    font-size: 13px;
    opacity: 0.5;
    line-height: 1.8;
  }
}

.link-card {
  padding: 1em 1em 23%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: $primary;
  .box {
    position: relative;
    width: 60%;
    padding-top: 60%;
    background: pink;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 4px;
    @include box-shadow;
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
      &::after {
        opacity: 0.3;
      }
    }
  }
  .text {
    font-size: 0.96em;
    font-weight: 300;
    line-height: 2.6;
    border-bottom: 1px solid rgba($primary, 0.5);
  }

  &:nth-of-type(even) {
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
  padding: 4% 4% 26%;
  color: $secondary;
  h1 {
    padding-bottom: 0.9em;
    font-size: 2.1em;
    @include font-accent;
    font-weight: 900;
  }
  p {
    line-height: 1.5;
    font-size: 1em;
    font-weight: 300;
    opacity: 0.8;
  }
}

// sns
.sns {
  padding: 2.2em 0;
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
  }
}
</style>
