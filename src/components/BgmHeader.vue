<template>
  <header>
    <div class="inner">
      <h1><a href="/">番组放送</a></h1>
      <ul class="header-nav nav-left">
        <drop-menu></drop-menu>
        <li>
          <a
            href="mailto:wxt2005@gmail.com?subject=%e7%95%aa%e7%bb%84%e6%94%be%e9%80%81-%e9%94%99%e8%af%af%e6%8f%90%e4%ba%a4"
            title="如果您发现数据错误，或者其它问题，请联系我">提交问题</a>
        </li>
      </ul>
      <ul class="header-nav nav-right">
        <li class="share-icon share-twitter">
          <a target="_blank" href="https://twitter.com/share?url=http%3A%2F%2Fbgmlist.com%2F&text=%e6%96%b9%e4%be%bf%e5%bf%ab%e6%8d%b7%e7%9a%84%e7%89%88%e6%9d%83%e5%8a%a8%e7%94%bb%e6%92%ad%e6%94%be%e5%9c%b0%e5%9d%80%e8%81%9a%e5%90%88%e7%ab%99+-+%e7%95%aa%e7%bb%84%e6%94%be%e9%80%81">Twitter</a>
        </li>
        <li class="share-icon share-weibo">
          <a target="_blank" href="http://service.weibo.com/share/share.php?title=%e6%96%b9%e4%be%bf%e5%bf%ab%e6%8d%b7%e7%9a%84%e7%89%88%e6%9d%83%e5%8a%a8%e7%94%bb%e6%92%ad%e6%94%be%e5%9c%b0%e5%9d%80%e8%81%9a%e5%90%88%e7%ab%99+-+%e7%95%aa%e7%bb%84%e6%94%be%e9%80%81&url=http%3A%2F%2Fbgmlist.com%2F">Weibo</a>
        </li>
        <li>
          分享本站
        </li>
      </ul>
    </div>
  </header>
</template>
<script charset="utf-8">
import DropMenu from './DropMenu.vue'
export default {
  name: 'bgm-header',
  components: {
    DropMenu
  }
}
</script>
