<template>
  <div class="placeholder">
    <p>{{ p.title }}</p>
    <img v-for="image in p.images" :src=image.src>
    <button @click="addToCart(p)">{{ p.title }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'product',
  props: ['p'],
  data () {
    return {
      msg: 'Wild Tuna'
    }
  },
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: {
    ...mapActions([
      'addToCart'
    ]),
    ...mapMutations([
      'ADD_TO_CART'
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
