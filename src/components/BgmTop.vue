<template>
  <div class="top">
    <div class="inner">
      <h2>{{getYear()}}年{{getMonth()}}月番组</h2>
      <div class="search-box">
        <p>本季共 {{count}} 部番组</p>
        <div class="searcher">
          <input type="search"
          placeholder="搜索当季番组"
          @input="queryBangumi"
          @focusout="switchTodayTab"
          />
          <div class="search-btn" title="搜索">搜索</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script charset="utf-8">
import _ from 'lodash'
import utils from '../utils'
import * as types from '../store/mutation-types.js'
export default {
  name: 'bgm-top',
  computed: {
    count () {
      const currentBangumiData = this.$store.state.currentBangumiData
      if (currentBangumiData) return _.keys(currentBangumiData).length
      return 0
    }
  },
  methods: {
    getYear () {
      return new Date().getFullYear()
    },
    getMonth () {
      return utils.monthToSeason(new Date().getMonth() + 1)
    },
    queryBangumi: _.debounce(function (e) {
      this.$store.commit(types.QUERY_BANGUMI, { queryText: e.target.value })
    }, 300),
    switchTodayTab () {
      if (!this.$store.state.queryText) {
        this.$store.commit(types.SWITCH_TAB, { key: new Date().getDay() })
      }
    }
  }
}
</script>
