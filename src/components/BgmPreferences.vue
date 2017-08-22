<template>
  <div class="setting-mask" :class="{show: showSetting}">
    <div class="setting">
      <div class="setting-col">
        <div class="setting-left">
          <h3>显示设置</h3>
          <div class="setting-display setting-box">
            <ul @click="changeConfig">
              <check-box-item
                v-for="(item, index) in configDealed"
                :name="item.name"
                :id="item.id"
                :checked="item.checked"
                :key="index"
                >
              </check-box-item>
              <li>
                <label for="dayDivide">转到次日</label>
                <div class="number-selector">
                  <a href="#"
                    class="number-control-btn left-arrow"
                    :class="{disabled: config.dayDivide == dayDivideMin}"
                    >减小</a>
                  <input type="number" id="dayDivide" readonly :value="config.dayDivide">
                  <a href="#"
                    class="number-control-btn right-arrow"
                    :class="{disabled: config.dayDivide == dayDivideMax}"
                    >增大</a>
                </div>
              </li>
              <li>
                <label for="bangumiDomain">Bangumi域名</label>
                <select class="select-list" id="bangumiDomain">
                  <option value="bangumi.tv">bangumi.tv</option>
                  <option value="bgm.tv">bgm.tv</option>
                  <option value="chii.in">chii.in</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div class="setting-right">
          <h3>站点过滤</h3>
          <a href="#" class="check-all"
            @click.prevent="toggleSiteSetting"
            >{{selectAllSites ? '全选': '全不选'}}</a>
          <div class="setting-sites setting-box">
            <ul @click="changeSiteSetting">
              <check-box-item
                v-for="(site, key) in bangumiListSites"
                :name="site.name"
                :id="'Site_' + key"
                :checked="site.enable"
                :key="'Site_' + key"
                >
              </check-box-item>
            </ul>
          </div>
        </div>
      </div>
      <a href="#" class="setting-confirm" @click.prevent="hideSetting">确定</a>
      <a href="#" class="setting-reset" @click.prevent="resetConfig">重置</a>
    </div>
  </div>
</template>
<script charset="utf-8">
import CheckBoxItem from './CheckBoxItem.vue'
import _ from 'lodash'
import * as types from '../store/mutation-types.js'
import { mapState } from 'vuex'
export default {
  name: 'bgm-preferences',
  data () {
    return {
      selectAllSites: false
    }
  },
  components: { CheckBoxItem },
  computed: {
    ...mapState(['showSetting', 'bangumiListSites', 'config', 'dayDivideMax', 'dayDivideMin']),
    configDealed () {
      const configValueMap = {
        'newOnly': '只显示新番',
        'noAutoSwitch': '关闭自动切换',
        'disableNewTab': '当前页面打开',
        'jpTitle': '显示日文标题',
        'highlightOnly': '只显示关注'
      }
      return _.map(_.keys(configValueMap), (key) => {
        return {
          id: key,
          name: configValueMap[key],
          checked: this.config[key]
        }
      })
    }
  },
  methods: {
    hideSetting () {
      this.$store.commit(types.TOGGLE_SETTING, { showSetting: false })
    },
    resetConfig () {
      this.$store.commit(types.RESET_CONFIG)
    },
    changeConfig (e) {
      if (e.target.type === 'checkbox') {
        this.$store.commit(types.CHANGE_CONFIG, {
          [e.target.id]: e.target.checked
        })
      } else if (e.target.tagName.toLowerCase() === 'select') {
        this.$store.commit(types.CHANGE_CONFIG, {
          [e.target.id]: e.target.value
        })
      } else if (e.target.classList.contains('right-arrow')) {
        if (this.config.dayDivide < this.dayDivideMax) {
          this.$store.commit(types.CHANGE_CONFIG, {
            dayDivide: this.config.dayDivide + 1
          })
        }
      } else if (e.target.classList.contains('left-arrow')) {
        if (this.config.dayDivide > this.dayDivideMin) {
          this.$store.commit(types.CHANGE_CONFIG, {
            dayDivide: this.config.dayDivide - 1
          })
        }
      }
    },
    changeSiteSetting (e) {
      if (e.target.type === 'checkbox') {
        this.$store.commit(types.TOGGLE_BANGUMI_LIST_SITE, {
          id: e.target.id.replace('Site_', ''),
          enable: e.target.checked
        })
      }
    },
    toggleSiteSetting () {
      this.$store.commit(types.TOGGLE_BANGUMI_LIST_SITE, {
        all: true,
        enable: this.selectAllSites
      })
      this.selectAllSites = !this.selectAllSites
    }
  }
}
</script>
