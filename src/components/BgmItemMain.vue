<template>
  <div
    class="item-main"
    @click="window.alert('xxx')"
    >
    <div class="title">
      <span title="title">
        {{title}}
      </span>
    </div>
    <div class="time-jp">
      <span class="m-show">flagCN：</span>
      {{formatedWeekDay}}&nbsp;&nbsp;{{formatedTime}}
    </div>
    <div class="time-cn">
      <span class="m-show">flagCN：</span>
      {{formatedWeekDay}}&nbsp;&nbsp;{{formatedTime}}
    </div>
    <item-sites></item-sites>
  </div>
</template>
<script charset="utf-8">
import ItemSites from './ItemSites.vue'
export default {
  name: 'app',
  components: {
    ItemSites
  },
  data () {
    return {
      title: 'bar',
      formatedWeekDay: '周三',
      formatedTime: '00:00'
    }
  }
}
</script>
