import * as types from './mutation-types'

export const addToCart = ({ commit }, p) => {
  let variant = p[0]
  let product = p[1]

  console.log(variant.id)
  console.log(product.id)
  console.log(variant.inventory_quantity)
  if (variant.inventory_quantity > 0) {
    commit(types.ADD_TO_CART, {
      variantID: variant.id,
      productID: product.id
    })
  }
}
