<template>
  <div id="app">
    <product v-for="product in Products.products" :product=product></product>
  </div>
</template>

<script>
import placeholder from './components/Placeholder'
import Products from '../products.json'
import product from './components/Product'

export default {
  name: 'app',
  data () {
    return {
      Products: Products
    }
  },
  components: {
    placeholder,
    product
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
