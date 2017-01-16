import * as types from './mutation-types'

export const addToCart = ({ commit }, p) => {
  let variant = p[0]
  let product = p[1]

  if (variant.inventory_quantity > 0) {
    commit(types.ADD_TO_CART, {
      variantID: variant.id,
      productID: product.id,
      variant: variant
    })
  }
}
