<template>
  <div class="placeholder">
    <img src="../assets/images/placeholder.jpg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'placeholder',
  data () {
    return {
      msg: 'Wild Tuna'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'Neat';

  .placeholder {
    @include span-columns(2);
  }

  img{
    max-width: 100%;
  }
</style>
