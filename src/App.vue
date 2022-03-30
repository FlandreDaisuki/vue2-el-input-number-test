<template>
  <div id="app">
    <SituationFirst />
  </div>
</template>

<script>
import SituationFirst from './components/SituationFirst.vue'

export default {
  name: 'App',
  components: {
    SituationFirst
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
