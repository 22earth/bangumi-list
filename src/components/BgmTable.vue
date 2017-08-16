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
              <label htmlFor="selectorToggle">{state.tabName}</label>
              <span>作品名</span>
            </div>
            <div class="time-jp">日本放送</div>
            <div class="time-cn">
              <span class="m-hide">大陆放送</span>
              <span class="m-show">放送时间</span>
            </div>
            <div class="sites">
              放送站点
            </div>
          </div>
        </div>
      </div>
      <div class="table-container">
        <input id="selectorToggle" type="checkbox" class="toggle-input" />
        <table-selector></table-selector>
        <bgm-list></bgm-list>
      </div>
    </div>
  </div>
</template>
<script charset="utf-8">
import TableSelector from './TableSelector.vue'
import BgmList from './BgmList.vue'
export default {
  name: 'bgm-table',
  components: {
    TableSelector,
    BgmList
  },
  data () {
    return {

    }
  }
}
</script>
