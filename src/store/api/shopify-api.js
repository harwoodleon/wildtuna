import api from '../../../client-api-credentials.json'
import ShopifyBuy from 'shopify-buy'

// Set up Shopify cart
const shopClient = ShopifyBuy.buildClient({
  apiKey: api.js_buy_key,
  domain: api.store + '.myshopify.com',
  appId: api.js_buy_id
})

shopClient.fetchRecentCart().then(function (newCart) {
  console.log(newCart.id)
  var cart = newCart
})

export { cart }
