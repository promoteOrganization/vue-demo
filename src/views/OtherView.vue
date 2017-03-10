<template>
  <div class="other-view">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'other-view',
  data () {
    return {
      msg: '这是其它页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
