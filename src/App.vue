<template>
  <div id="app">
    <product v-for="product in Products.products" :p=product></product>
    <cart :toggleActive=toggle></cart>
    <br/>
    <button @click="toggleCart()">cart</button>
    <br/>
    <button @click="clearCart()">clear cart</button>
  </div>
</template>

<script>
import Placeholder from './components/Placeholder'
import Products from '../products.json'
import Product from './components/Product'
import Cart from './components/Cart'
import { mapActions } from 'vuex'

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
  created () {
    this.$store.dispatch('getAllProducts')
    this.$store.dispatch('createCart')
  },
  methods: {
    toggleCart: function () {
      // change toggle to trigger cart watch: toggle
      this.toggle += 1
    },
    ...mapActions([
      'clearCart'
    ])
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
