<template>
	<div class="handle-manufaction">
		{{ msg }}
	</div>
</template>

<script>
export default {
  name: 'handle-manufaction',
  data () {
    return {
      msg: '这个是故障处理页面'
    }
  }
}
</script>

<style lang="stylus" scoped>
.handle-manufaction
  width 1000px
  height 200px
  margin 0px auto
  background-color brown
</style>
