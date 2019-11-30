<template>
  <div id="app">
    <PageFrame></PageFrame>
  </div>
</template>

<script>
import PageFrame from './components/PageFrame.vue'

export default {
  name: 'app',
  components: {
    PageFrame
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
