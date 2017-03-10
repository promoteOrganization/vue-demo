<template>
  <div id="app">
    <mu-appbar title="Title">
      <router-link to="/">首页</router-link>
      <router-link to="/other">其它</router-link>
      <mu-text-field class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
      <mu-flat-button color="white" label="flat Button" slot="right"/>
    </mu-appbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
