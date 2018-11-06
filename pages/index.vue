<template>
  <div class="page">
    <Logotype />
    <router-link
      exact
      to="/">Kikimetal Home</router-link>
    <router-link
      exact
      to="/drawing">My drawing</router-link>
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
  </div>
</template>

<script>
import Logotype from '~/components/Logotype.vue'

export default {
  components: {
    Logotype
  }
}
</script>

<style>
</style>
