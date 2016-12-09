<template>
  <div class="placeholder">
    <p>{{ product.title }}</p>
    <img v-for="image in product.images" :src=image.src>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['product'],
  data () {
    return {
      msg: 'Wild Tuna'
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
