<template lang="html">
  <div class="page">

    <section class="heading-container">
      <h1 class="heading">
        <div class="main">
          {{ data.title }}
        </div>
        <div class="sub">
          {{ data.subtitle }}
        </div>
      </h1>
      <p class="comment">
        {{ data.comment }}
      </p>
    </section>

    <div class="img-container">
      <div
      class="img"
      v-for="(imgsrc, i) in imgs"
      :key="i"
      :style="{backgroundImage: `url(${imgsrc})`}"
      />
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
  data() {
    return {
      data: this.$store.state.designItems.filter(
        item => item.title === 'nomeru'
      )[0],
      imgs: [
        require('~/assets/img/design/nomeru/red-02.jpg'),
        require('~/assets/img/design/nomeru/red-02.jpg'),
        require('~/assets/img/design/nomeru/red-02.jpg'),
      ],
    }
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
.page {
  font-size: 15px;
  color: $secondary;
  .heading-container {
    padding: 5%;
    .heading {
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
        // text-decoration: underline;
        &:hover {
          @include touchme;
        }
      }
      .sub {
        display: block;
        font-size: 0.9em;
      }
    }
    .comment {
      margin-bottom: 1.5em;
      line-height: 1.9;
      font-weight: 400;
      opacity: 0.8;
    }
  }

  .img-container {
    padding: 3%;
    .img {
      margin-bottom: 4em;
      padding-top: 98%;
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      @include md {
        margin-bottom: 6em;
        padding-top: 60%;
      }
    }
  }
}
</style>
