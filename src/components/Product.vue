<template>
  <div class="placeholder">
    <p>{{ p.title }}</p>
    <img v-for="image in p.images" :src=image.src>
    <br/>
    <button @click="addToCart([variant, p])">Add {{ p.title }} to cart</button>

    <select v-model="variant">
      <option v-for="variant in Variants" v-bind:value="variant">{{ variant.title }}</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'product',
  props: ['p'],
  data () {
    return {
      msg: 'Wild Tuna',
      variant: this.p.variants[0],
      Variants: this.p.variants
    }
  },
  computed: {
    ...mapGetters({
      products: 'allProducts'
    })
  },
  methods: {
    ...mapActions([
      'addToCart'
    ])
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  img{
    width: 300px;
    max-width: 100%;
  }
</style>
