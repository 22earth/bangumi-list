<template>
  <div class="table-left selector">
    <ol>
      <li v-for="tab in tabs"
        :key="tab.key"
        :class="getTabClass(tab.key)"
        @click.prevent="switchTab(tab.key)"
        >
        <a href="#">
          {{new Date().getDay() === tab.key ? '今天' : tab.name}}
        </a>
      </li>
    </ol>
  </div>
</template>
<script charset="utf-8">
import * as types from '../store/mutation-types.js'
export default {
  name: 'table-selector',
  methods: {
    getTabClass (key) {
      if (key === this.$store.state.activeTab) {
        return 'cur'
      }
    },
    switchTab (key) {
      this.$store.commit(types.SWITCH_TAB, {key})
    }
  },
  data () {
    return {
      tabs: [
        {name: '周一', key: 1},
        {name: '周二', key: 2},
        {name: '周三', key: 3},
        {name: '周四', key: 4},
        {name: '周五', key: 5},
        {name: '周六', key: 6},
        {name: '周日', key: 0},
        {name: '全部', key: 7}
      ]
    }
  }
}
</script>
