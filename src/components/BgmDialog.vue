<template>
  <div class="dialog-mask" :class="{show: dialog.show}">
    <div class="dialog" :class="dialog.type">
      <div class="title">
        <h3>{{ {info:'注意', warning:'警告', error:'错误'}[dialog.type] }}</h3>
      </div>
      <div class="content">
        <p>{{ dialog.content }}</p>
      </div>
      <div class="footer">
        <a v-for="button in buttons"
          href="#"
          :key="button.id"
          class="button"
          @click="button.callback"
          >
          {{button.text}}
        </a>
      </div>
    </div>
  </div>
</template>
<script charset="utf-8">
import * as types from '../store/mutation-types.js'
export default {
  name: 'bgm-dialog',
  data () {
    return {
      buttons: [{
        text: '确定',
        callback: () => {
          this.$store.commit(types.RESET_CONFIG)
          this.$store.commit(types.TOGGLE_DIALOG, { showDialog: false })
          // location.reload(true)
        }
      }, {
        text: '取消',
        callback: () => {
          this.$store.commit(types.TOGGLE_DIALOG, { showDialog: false })
        }
      }]
    }
  },
  computed: {
    dialog () {
      return this.$store.state.dialog
    }
  }
}
</script>
