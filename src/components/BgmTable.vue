<template>
  <div class="main">
    <div class="inner table">
      <div class="table-header">
        <div class="table-left">
          <a href="#" class="setting-btn" @click="window.alert('ttt')">设置</a>
        </div>
        <div class="table-right">
          <div class="table-header-info">
            <div class="title">
              <span>作品名</span>
            </div>
            <div class="time-jp">日本放送</div>
            <div class="time-cn">
              <span class="m-hide">大陆放送</span>
              <span class="m-show">放送时间</span>
            </div>
            <div class="sites">放送站点</div>
          </div>
        </div>
      </div>
      <div class="table-container">
        <table-selector></table-selector>
        <div
          class="table-right data-list"
          v-if="bangumiList.length"
          >
          <ul>
            <bgm-list-item
              v-for="bangumi in bangumiList"
              :key="bangumi.id"
              :item="bangumi"
              >
            </bgm-list-item>
            <li class="empty-item" v-if="bangumiList.length < 5"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script charset="utf-8">
import TableSelector from './TableSelector.vue'
import BgmListItem from './BgmListItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'bgm-table',
  components: {
    TableSelector,
    BgmListItem
  },
  computed: {
    ...mapGetters(['bangumiList'])
  }
}
</script>
