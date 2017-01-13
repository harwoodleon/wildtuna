import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  console.log(product)
  console.log(product.id)
  console.log(product.inventory)
  if (product.variants[0].inventory_quantity > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}
