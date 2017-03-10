<template>
	<div class="add-manufaction">
		{{ msg }}
	</div>
</template>

<script>
export default {
  name: 'add-manufaction',
  data () {
    return {
      msg: '这个是添加故障页面'
    }
  }
}
</script>

<style lang="stylus" scoped>
.add-manufaction
  width 1000px
  height 200px
  margin 0px auto
  background-color red
</style>
