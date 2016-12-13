<template>
  <div class="placeholder">
    <p>{{ product.title }}</p>
    <img v-for="image in product.images" :src=image.src>
    <button v-on:click="addCart(product)">{{ product.title }}</button>
  </div>
</template>

<script>
import Vue from 'vue'

var bus = new Vue()

export default {
  name: 'product',
  props: ['product'],
  data () {
    return {
      msg: 'Wild Tuna'
    }
  },
  methods: {
    addCart: function (product) {
      console.log('here 3 ' + product.id)
      bus.$emit('addCartProduct', product)
    }
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
