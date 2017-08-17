<template>
  <div id="app">
    <bgm-header></bgm-header>
    <bgm-top></bgm-top>
    <bgm-table></bgm-table>
    <footer>
      <p class="inner">©2014 - 2017&nbsp;&nbsp;番组放送 | <a href="https://github.com/wxt2005/bangumi-list" title="欢迎提出宝贵的意见">Github 项目地址</a></p>
    </footer>
  </div>
</template>

<script>
import BgmHeader from './components/BgmHeader.vue'
import BgmTop from './components/BgmTop.vue'
import BgmTable from './components/BgmTable.vue'

export default {
  name: 'app',
  components: {
    BgmHeader,
    BgmTop,
    BgmTable
  },
  created () {
    this.$store.dispatch('getBangumiData')
  }
}
</script>
<style lang="less">
@import './less/main.less';
</style>
