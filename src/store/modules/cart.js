import * as types from '../mutation-types'
import { apiCartPromise, apiClearCart } from '../api/shopify-api.js'

// apiCartPromise.then((newCart) => {
//   cart = newCart
//   // state.added = cart.lineItems
// })

// initial state
const state = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
  cartProducts: state => state.added
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    // const savedCartItems = [...state.added]
    commit(types.CHECKOUT_REQUEST)
    // shop.buyProducts(
    //   products,
    //   () => commit(types.CHECKOUT_SUCCESS),
    //   () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    // )
  },
  createCart ({ commit }) {
    apiCartPromise.then((cart) => {
      commit(types.REFRESH_CART, { cart })
    })
  },
  addToCart ({ commit }, p) {
    let variant = p[0]
    let product = p[1]
    let quantity = variant.inventory_quantity

    if (quantity > 0) {
      apiCartPromise.then((cart) => {
        console.log('!!!!!')
        console.log(cart)
        return cart
      }).then((cart) => {
        console.log('.....')
        console.log(cart)
        cart.createLineItemsFromVariants({ variant, quantity }).then((cart) => {
          var cartItem = cart.lineItems.filter((item) => (item.variant_id === variant.id))[0]
          console.log(cartItem)
        })

        commit(types.ADD_TO_CART, {
          variantID: variant.id,
          productID: product.id,
          variant,
          cart
        })
      })
    }
  },
  clearCart ({ commit }) {
    commit(types.CLEAR_CART)
  }
}

// mutations
const mutations = {
  [types.ADD_TO_CART] (state, { variantID, productID, variant, cart }) {
    console.log('cart-mutation ADD_TO_CART')
    console.log(variant)
    state.added = cart.lineItems
  },

  [types.CLEAR_CART] () {
    console.log('cart-mutation CLEAR_CART')
    apiClearCart()
    state.added = []
  },

  [types.REFRESH_CART] (state, { cart }) {
    console.log('cart-mutation REFRESH_CART')
    state.added = cart.lineItems
  },

  [types.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
