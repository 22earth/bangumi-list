<template>
  <div class="top">
    <div class="inner">
      <h2>{{year}}年{{month}}月番组</h2>
      <div class="search-box">
        <p>本季共 {{count}} 部番组</p>
        <div class="searcher">
          <input type="search" placeholder="搜索当季番组" />
          <div class="search-btn" title="搜索">搜索</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script charset="utf-8">
import _ from 'lodash'
export default {
  name: 'bgm-top',
  computed: {
    count () {
      const currentBangumiData = this.$store.state.currentBangumiData
      if (currentBangumiData) return _.keys(currentBangumiData).length
      return 0
    }
  },
  data () {
    return {
      year: 2017,
      month: 7
    }
  }
}
</script>
