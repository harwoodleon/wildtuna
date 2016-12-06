<template>
  <div id="app">
    <placeholder></placeholder>
  </div>
</template>

<script>
import placeholder from './components/Placeholder'

export default {
  name: 'app',
  components: {
    placeholder
  }
}
</script>

<style lang="scss">

  @import 'main';


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
