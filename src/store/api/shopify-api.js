import api from '../../../client-api-credentials.json'
import ShopifyBuy from 'shopify-buy'

// Set up Shopify cart
const shopClient = ShopifyBuy.buildClient({
  apiKey: api.js_buy_key,
  domain: api.store + '.myshopify.com',
  appId: api.js_buy_id
})

// shopClient.fetchAllProducts()
const cartPromise = shopClient.fetchRecentCart()
cartPromise.then((cart) => {
  console.log('CART ' + cart.id)
  console.log(cart)
  console.log(cart.lineItems)
  console.log('..............\n..............\n..............\n')
})

const addVariantToCart = (cart, variant, quantity) => {
  shopClient.fetchProduct(variant.product_id).then(function (product) {
    console.log(product)
  })

  cart.createLineItemsFromVariants({ variant: variant, quantity: quantity }).then(function () {
    console.log('----------------\n\n')
    console.log(variant)
    var cartItem = cart.lineItems.filter((item) => (item.variant_id === variant.id))[0]
    console.log(cartItem)
    console.log(cart)
    console.log(cart.lineItems)
    console.log('----------------\n\n')
  })
}

export { cartPromise, addVariantToCart }
