<template>
  <div id="app">
    <div class="header">
      <mu-appbar>
        <div class="inner">
          <router-link to="/">新增故障</router-link>
          <router-link to="/table">故障表格</router-link>
        </div>
      </mu-appbar>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" scoped>
body
  font-family "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
  background-color lighten(#eceef1, 30%)
  margin 0

a
  color #34495e
  text-decoration none

.header
  z-index 999
  max-width 100%
  height 55px
  top 0
  left 0
  right 0
  .inner
    padding-left 100px
    font-size 16px
    font-family "Microsoft YaHei"
    a
      color rgba(255, 255, 255, .8)
      line-height 24px
      transition color .15s ease
      display inline-block
      vertical-align middle
      font-weight 300
      letter-spacing .075em
      margin-right 1.8em
      &:hover
        color #fff
      &.router-link-active
        color #fff
        font-weight 400
        
.view
  padding 0 100px
  margin 0 auto
  position relative
  
.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  body
    font-size 14px
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .github
      display none
</style>
