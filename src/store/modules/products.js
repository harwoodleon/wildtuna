import * as types from '../mutation-types'
import { apiProductsPromise } from '../api/shopify-api.js'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    apiProductsPromise.then((products) => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    console.log('product-mutation RECEIVE_PRODUCTS')
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    console.log('product-mutation ADD_TO_CART')
    // state.all.find(p => p.id === id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
