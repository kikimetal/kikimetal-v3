<template>
  <div class="page">
    <h1 id="doeSupported">No</h1>
    <h1 id="coordinate">coordinate</h1>
  </div>
</template>

<script>
import Logotype from '~/components/Logotype.vue'

export default {
  components: {
    Logotype,
  },
  methods: {
    deviceOrientationHandler(e) {
      let x = e.gamma / 1.3
      let y = e.beta / 1.6
      const n = 1
      const maxPx = 40
      x =
        x > maxPx
          ? maxPx
          : x < -maxPx
            ? -maxPx
            : Math.floor(x * Math.pow(10, n)) / Math.pow(10, n)
      y =
        y > maxPx
          ? maxPx
          : y < -maxPx
            ? -maxPx
            : Math.floor(y * Math.pow(10, n)) / Math.pow(10, n)
      // this.setState({
      //   bgTranslate: `translate(${y}px, ${x}px)`,
      // })
      document.getElementById('coordinate').innerText = `x: ${x}, y: ${y}`
    },
  },
  mounted() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener(
        'deviceorientation',
        this.deviceOrientationHandler,
        false
      )
      document.getElementById('doeSupported').innerText = 'Supported!'
    }
  },
}
</script>

<style>
</style>
