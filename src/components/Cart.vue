<template>
  <div id="cart">
  </div>
</template>

<script>
import api from '../../client-api-credentials.json'
import ShopifyBuy from 'shopify-buy'
import Vue from 'vue'

var bus = new Vue()
var cart, shopClient

export default {
  name: 'cart',
  components: {
    api,
    ShopifyBuy
  },
  created: function () {
    shopClient = ShopifyBuy.buildClient({
      apiKey: api.js_buy_key,
      domain: api.store + '.myshopify.com',
      appId: api.js_buy_id
    })
    shopClient.createCart().then(function (newCart) {
      cart = newCart
      console.log(cart)
      // do something with updated cart
    })
    bus.$on('addCartProduct', function (product) {
      console.log('here 4')
      console.log(product)
    })
  },
  methods: {
    someMethod: function () {
      console.log('here 2')
    }
  }
}
</script>

<style lang="scss">

</style>
