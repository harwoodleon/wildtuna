import * as types from '../mutation-types'
import { cartPromise, addVariantToCart } from '../api/shopify-api.js'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    // const savedCartItems = [...state.added]
    commit(types.CHECKOUT_REQUEST)
    // shop.buyProducts(
    //   products,
    //   () => comm it(types.CHECKOUT_SUCCESS),
    //   () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    // )
  }
}

// mutations
const mutations = {
  [types.ADD_TO_CART] (state, { variantID, productID, variant }) {
    console.log('\n\n\n')
    // when cart promise is resolved
    cartPromise.then((cart) => {
      console.log('cart-mutation ADD_TO_CART')
      console.log(cart)
      console.log(cart.id)
      console.log(cart.lineItems)
      console.log('\n\n\n')
      console.log(variant)
      addVariantToCart(cart, variant, 1)
      // const record = state.added.find(p => p.id === variantID)
    })
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
