<template>
  <div class="item-sub">
    <div class="sub-left">
      <p class="sub-links">
        <span class="sub-title">链接：</span>
        <a :href="item.officalSite" :target="disableNewTab ? '' : '_blank'">官方网站</a>
        <a :href="bangumiURL" :target="disableNewTab ? '' : '_blank'">Bangumi页面</a>
      </p>
      <p class="sub-links">
        <span class="sub-title">下载：</span>
        <a v-for="site in downloadSites"
          :href="site.url"
          :target="disableNewTab ? '' : '_blank'"
          >
          {{site.name}}
        </a>
      </p>
    </div>
    <div class="sub-middle">
      <p>
        <span class="sub-title">放送日期：</span>
        <span>{{item.showDate}}</span>
      </p>
      <p v-if="item.comment">
        <span class="sub-title">备注：</span>
        <span class="sub-comment" :title="item.comment">{{item.comment}}</span>
      </p>
    </div>
    <div class="sub-right">
      <p>
        <input type="checkbox" :id="'highlight_' + item.id">
        <label :for="'highlight_' + item.id">关注</label>
      </p>
      <p>
        <input type="checkbox" :id="'hide_' + item.id">
        <label :for="'hide_' + item.id">隐藏</label>
      </p>
    </div>
  </div>
</template>
<script charset="utf-8">
import _ from 'lodash'
export default {
  name: 'bgm-item-sub',
  props: ['item'],
  computed: {
    bangumiURL () {
      const bangumiDomain = null
      if (this.item.bgmId) {
        return `http://${bangumiDomain || 'bangumi.tv'}/subject/${this.item.bgmId}`
      }
    },
    disableNewTab () {
      return this.$store.state.disableNewTab
    },
    downloadSites () {
      const siteList = {
        'dmhy': {
          name: '花园',
          url: 'https://share.dmhy.org/topics/list?keyword=###',
          default: 'CN'
        }
      }
      return _.map(siteList, (site, key) => {
        const keyword = encodeURIComponent(this.item.titleCN)
        const url = site.url.replace('###', keyword)
        return {
          key,
          name: site.name,
          url
        }
      })
    }
  }
}
</script>
