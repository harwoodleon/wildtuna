<template>
  <div id="cart">
  </div>
</template>

<script>
import api from '../../client-api-credentials.json'
import ShopifyBuy from 'shopify-buy'

var shopClient

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
    shopClient.fetchRecentCart().then(function (newCart) {
      console.log(newCart.id)
      this.$store.dispatch('update-cart', {
        cart: newCart
      })
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
