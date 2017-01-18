<template>
  <div id="app">
    <product v-for="product in Products.products" :p=product></product>
    <cart :toggleActive=toggle></cart>
    <br/>
    <button @click="toggleCart()">cart</button>
  </div>
</template>

<script>
import Placeholder from './components/Placeholder'
import Products from '../products.json'
import Product from './components/Product'
import Cart from './components/Cart'

export default {
  name: 'app',
  data () {
    return {
      Products: Products,
      toggle: 0
    }
  },
  components: {
    Placeholder,
    Product,
    Cart
  },
  methods: {
    toggleCart: function () {
      // change toggle to trigger cart watch: toggle
      this.toggle += 1
    }
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
