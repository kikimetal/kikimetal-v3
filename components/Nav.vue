<template lang="html">
  <nav>
    <router-link class="link" exact to="/">Kikimetal Home</router-link>
    <router-link class="link" exact to="/drawing">My drawing</router-link>
    <router-link class="link" exact to="/gyro">Gyro test</router-link>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.link {
  display: block;
  margin: 5px;
  padding: 0.5em 2em;
  line-height: 1;
  color: white;
  font-weight: 600;
  text-decoration: none;
  background: rgb(131, 184, 189);
  border-radius: 3em;
  box-shadow: 0 2px 16px 0 rgba(74, 143, 143, 0.35);
}
</style>
