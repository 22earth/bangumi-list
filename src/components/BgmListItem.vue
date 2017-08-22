<template>
  <li :class="{expanded: showSub, new: item.newBgm}">
    <div class="item-scroller">
      <div class="item-main" @click="toggleSub">
        <div class="title">
          <span v-if="showJpTitle" :title="item.titleCN">
            {{item.titleJP}}
          </span>
          <span v-else :title="item.titleJP">
            {{item.titleCN}}
          </span>
        </div>
        <div class="time-jp">
          <span class="m-show">flagCN：</span>
          {{item.weekDayJP}}&nbsp;&nbsp;{{item.timeJP}}
        </div>
        <div class="time-cn">
          <span class="m-show">flagCN：</span>
          {{item.weekDayCN}}&nbsp;&nbsp;{{item.timeCN}}
        </div>
        <div class="sites">
          <ul v-if="getSiteList.length">
            <li :key="site.id" v-for="site in getSiteList">
              <a
                :href="site.url"
                :target="disableNewTab ? '' : '_blank'"
                @click.stop=""
                >{{site.name}}</a>
            </li>
          </ul>
          <ul v-else-if="item.onAirSite.length === 0">
            <li><span class="empty">暂无</span></li>
          </ul>
          <ul v-else>
            <li><span class="empty">过滤</span></li>
          </ul>
        </div>
      </div>
      <bgm-item-sub :item="item"></bgm-item-sub>
    </div>
  </li>
</template>
<script charset="utf-8">
import BgmItemSub from './BgmItemSub.vue'
import utils from '../utils'
export default {
  name: 'bgm-list-item',
  data () {
    return {
      showSub: false
    }
  },
  methods: {
    toggleSub () {
      this.showSub = !this.showSub
    }
  },
  computed: {
    getSiteList () {
      const sites = this.$props.item.onAirSite
      const supportSites = this.$store.state.bangumiListSites
      return sites.map((url) => {
        const siteInfo = utils.getLinkSite(url, supportSites)
        return {
          ...siteInfo,
          url
        }
      }).filter((site) => site.enable)
    },
    disableNewTab () {
      return this.$store.state.disableNewTab
    },
    showJpTitle () {
      return this.$store.state.config.jpTitle
    }
  },
  components: {
    BgmItemSub
  },
  props: ['item']
}
</script>
