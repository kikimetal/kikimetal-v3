<template>
  <div class="page">
    <Logotype />
    <Logotype fill="thistle" />
    <Logotype />
    <Logotype fill="thistle" />
  </div>
</template>

<script>
import Logotype from '~/components/Logotype.vue'
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav,
    Logotype,
  },
}
</script>

<style>
</style>
