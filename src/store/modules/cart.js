import * as types from '../mutation-types'
import cartPromise from '../api/shopify-api.js'

let cart

cartPromise.then(function (newCart) {
  cart = newCart
  console.log('CART_Id ' + cart.id)
})

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
  [types.ADD_TO_CART] (state, { variantID, productID }) {
    console.log('cart-mutation ADD_TO_CART')
    console.log(state)
    state.lastCheckout = null
    const record = state.added.find(p => p.id === variantID)
    if (!record) {
      state.added.push({
        id: variantID,
        quantity: 1
      })
    } else {
      record.quantity++
    }
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
