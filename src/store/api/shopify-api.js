import api from '../../../client-api-credentials.json'
import ShopifyBuy from 'shopify-buy'

// Set up Shopify cart
const shopClient = ShopifyBuy.buildClient({
  apiKey: api.js_buy_key,
  domain: api.store + '.myshopify.com',
  appId: api.js_buy_id
})

const apiCartPromise = shopClient.fetchRecentCart()
const apiProductsPromise = shopClient.fetchAllProducts()

const apiAddVariantToCart = (cart, variant, quantity) => {
  cart.createLineItemsFromVariants({ variant: variant, quantity: quantity }).then(function () {
    var cartItem = cart.lineItems.filter((item) => (item.variant_id === variant.id))[0]
    console.log(cartItem)
  })
}

const apiClearCart = () => {
  apiCartPromise.then((cart) => {
    console.log('clearing...')
    cart.clearLineItems()
    console.log(cart.lineItems)
  })
}

export { apiCartPromise, apiProductsPromise, apiAddVariantToCart, apiClearCart }
