<template>
  <div class="index-view">
    <h1>{{ msg }}</h1>
    <add-manufaction></add-manufaction>
  </div>
</template>

<script>
import AddManufaction from '../components/AddManufaction.vue'
export default {
  name: 'index-view',
  components: {
    AddManufaction
  },
  data () {
    return {
      msg: '这是首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.index-view
  width 1000px
  height 500px
  margin 0px auto 
</style>
