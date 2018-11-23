<template lang="html">
  <div class="page">
    <div class="page-heading">
      このページは現在制作途中です。
      <div id="animation-container">
        <!-- cf. https://codepen.io/anon/pen/rQdzeE -->
        <div class="box">
          <div class="spin-container">
            <div class="shape">
              <div class="bd"></div>
            </div>
          </div>
          <div class="spin-container">
            <div class="shape">
              <div class="bd"></div>
            </div>
          </div>
          <h1 class="text">DESiGN.</h1>
        </div>
      </div>
    </div>

    <div class="card-container">
      <div
      class="card"
      v-for="(item, i) in $store.state.designItems"
      :key="i"
      :id="item.pathname"
      >
      <div data-scroll data-scroll-type="slide-up">
        <a v-if="item.linkIsExternal" :href="item.linkto">
          <div class="img" :style="{backgroundImage: `url(${item.imgsrc})`}">
            <div :class="['placeholder', {hide: item.load}]"><img src="~/assets/img/common/loader.svg" alt=""></div>
          </div>
        </a>
        <router-link v-else :to="item.linkto">
          <div class="img" :style="{backgroundImage: `url(${item.imgsrc})`}">
            <div :class="['placeholder', {hide: item.load}]"><img src="~/assets/img/common/loader.svg" alt=""></div>
          </div>
        </router-link>
      </div>

      <h1 class="title" data-scroll data-scroll-type="slide-up">
        <a v-if="item.linkIsExternal" :href="item.linkto" target="_blank">
          <span class="main">{{ item.title || 'title...' }}</span>
        </a>
        <router-link v-else :to="item.linkto">
          <span class="main">{{ item.title || 'title...' }}</span>
        </router-link>
        <span class="sub">{{ item.subtitle || 'subtitle...' }}</span>
      </h1>

      <div data-scroll data-scroll-type="slide-up">
        <div class="date">
          <div class="heading">Date & Time</div>
          <div class="content">
            {{ item.date }}<span class="split">/</span>{{ item.time }}
          </div>
        </div>
        <div class="role">
          <div class="heading">Role</div>
          <div class="content">
            <span v-for="r in item.role">{{ r }}<span class="split">/</span></span>
          </div>
        </div>
        <div class="skill">
          <div class="heading">Software & Language</div>
          <div class="content">
            <span v-for="s in item.skill">{{ s }}<span class="split">/</span></span>
          </div>
        </div>
      </div>

      <p class="comment" data-scroll data-scroll-type="slide-up">
        {{ item.comment || 'comment...' }}
      </p>

      <img :style="{display: 'none'}" :src="item.imgsrc" @load="complete(i)">
    </div>
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

.page-heading {
  padding: 0 8% 28px;
  width: 100%;
  height: 480px;
  @include flex-center(column);
  color: $primary;
  @include font-accent;
  @include md {
    margin: 140px 0 70px;
  }

  #animation-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;

    .box {
      width: 60vmin;
      height: 60vmin;
      border: 1px dashed rgba(255, 255, 255, 0.4);
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        border: 1px dashed rgba(255, 255, 255, 0.4);
        transform: scale(1.42);
      }

      .text {
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 1em;
        width: 100%;
        height: 100%;
        @include flex-center;
        @include font-accent;
        font-weight: 900;
        letter-spacing: 0.5em;
        color: $white;
        @include md {
          font-size: 1.2em;
        }
      }

      .spin-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: spin 24s linear infinite;

        .shape {
          width: 100%;
          height: 100%;
          transition: border-radius 1s ease-out;
          // border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          border-radius: 47% 53% 53% 47% / 47% 55% 45% 53%;
          animation: morph 16s ease-in-out infinite both alternate;
          position: absolute;
          overflow: hidden;
          z-index: 5;
        }

        .bd {
          width: 142%;
          height: 142%;
          position: absolute;
          left: -21%;
          top: -21%;
          background: rgb(249, 223, 229);
          background-size: 100%;
          background-position: center center;
          display: flex;
          color: #003;
          font-size: 5vw;
          font-weight: bold;
          align-items: center;
          justify-content: center;
          text-align: center;
          text-transform: uppercase;
          animation: spin 24s linear infinite reverse;
          opacity: 1;
          z-index: 2;
        }

        &:nth-of-type(2) {
          animation: spin 16s linear infinite reverse;
          .shape {
            animation: morph 10s ease-in-out infinite both alternate;
            transform: scale(0.88);
          }
          .bd {
            animation: spin 14s linear infinite reverse;
            background-color: rgb(240, 201, 201);
          }
        }

        @keyframes morph {
          0% {
            // border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
            border-radius: 47% 53% 53% 47% / 47% 55% 45% 53%;
          }
          100% {
            // border-radius: 40% 60%;
            border: 52% 48% 44% 56% / 53% 42% 58% 47%;
          }
        }

        @keyframes spin {
          to {
            transform: rotate(1turn);
          }
        }
      }
    }
  }
}

.card-container {
  animation: fade-in-cart-container 2.2s $ease-out both 1s;
  @keyframes fade-in-cart-container {
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
  padding: 4%;
  padding-bottom: 40vw;
  @include md {
    padding-bottom: 120px;
  }

  .img {
    display: block;
    position: relative;
    width: 100%;
    padding-top: 98%;
    @include box-shadow;
    background: pink;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    &:hover {
      @include touchme;
    }
    @include md {
      padding-top: 62%;
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
        pointer-events: none;
      }
    }
  }

  font-size: 15px;
  color: $secondary;

  .title {
    @include font-accent;
    margin: 2.9em 0 2.4em;
    color: $primary;
    cursor: pointer;
    .main {
      display: block;
      width: max-content;
      max-width: 100%;
      margin-bottom: 0.2em;
      font-size: 1.7em;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      text-decoration: underline;
      &:hover {
        @include touchme;
      }
    }
    .sub {
      display: block;
      font-size: 0.9em;
    }
  }
  .category {
    @include font-accent;
    padding: 0.6em 1em 0.5em 0.9em;
    margin-bottom: 2em;
    width: max-content;
    font-size: 0.7em;
    font-weight: 600;
    line-height: 1;
    color: rgba($secondary, 1);
    border: 1px solid rgba($secondary, 0.16);
    border-left-width: 4px;
    text-transform: uppercase;
  }
  .date,
  .role,
  .skill {
    @include font-accent;
    margin-bottom: 0.8em;
    line-height: 1.4;
    letter-spacing: 0.03em;
    .heading {
      font-size: 0.9em;
      font-weight: 700;
      opacity: 0.3;
    }
    .content {
      font-weight: 600;
      font-size: 1.06em;
      word-wrap: break-word;
      .split {
        padding: 0 0.4em;
        font-weight: 400;
        opacity: 0.3;
      }
      & > span {
        display: inline-block;
      }
      & > span:last-of-type .split {
        display: none;
      }
    }
  }
  .comment {
    padding-top: 1.55em;
    line-height: 1.9;
    font-weight: 400;
    opacity: 0.8;
  }
}
</style>
