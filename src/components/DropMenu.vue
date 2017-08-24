<template>
  <li class="drop"
    @click="toggleMenu"
    >
    <a href="#">{{name}}</a>
    <div class="drop-menu"
      :class="{show: showMenu}">
      <ul>
        <li v-for="(item, key) in items"
          :key="key"
          :data-key="key"
          @mouseover="changeActiveListKey(key)"
          >
          <a href="#">{{key + '年'}}</a>
          <ul class="sub-menu"
            :class="{show: showSubMenu(key)}"
            >
            <li v-for="(subItem, subKey) in item"
              :key="subKey"
              >
              <a href="#">
                {{subKey + '月'}}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </li>
</template>

<script charset="utf-8">
export default {
  name: 'drop-menu',
  data () {
    return {
      showMenu: false,
      activeListKey: undefined
    }
  },
  methods: {
    toggleMenu (e) {
      this.showMenu = !this.showMenu
      if (!this.showMenu) {
        this.activeListKey = undefined
      }
    },
    showSubMenu (key) {
      if (key === this.activeListKey) return true
    },
    changeActiveListKey (key) {
      this.activeListKey = key
    }
  },
  props: {
    items: {
      type: Object
    },
    name: String
  }
}
</script>

<style lang="less" scoped>
@main-green: #1ABC9C;
@main-blue: #34495E;

@min-width: 640px;

.transition(@prop) {
  -webkit-transition: @prop;
  transition: @prop;
}

.drop {
  position: relative;

  & > a:after {
    content: " ";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px;
    border-color: #fff transparent transparent transparent;
    display: inline-block;
    position: relative;
    top: 0.3rem;
    margin-left: 8px;
    .transition(border-color 0.3s ease);
  }

  & > a:hover:after {
    border-top-color: @main-green;
  }

  .show {
    display: block;
  }
}

.drop-menu {
  position: absolute;
  background: @main-blue;
  top: 150%;
  left: 2%;
  border-radius: 4px;
  display: none;
  z-index: 10;

  &:before {
    content: " ";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px;
    border-color: transparent transparent @main-blue transparent;
    display: block;
    position: absolute;
    top: -16px;
    left: 15px;
  }

  li {
    padding-top: 0;
    position: relative;
  }

  a {
    text-align: center;
    padding: 10px 0;
    width: 8rem;
    display: block;
    border-radius: 2px;
    margin: 2px;

    &:hover {
      background: @main-green;
      color: inherit;
      .transition(background-color 0.3s ease);
    }
  }

}
.sub-menu {
  position: absolute;
  left: 104%;
  top: 0;
  background: @main-blue;
  border-radius: 4px;
  display: none;
}

@media (max-width: @min-width) {
  .drop-menu {
    left: auto;
    right: 2%;

    a {
      width: 6rem;
      padding: 8px 0;
    }

    .sub-menu {
      right: 104%;
      left: auto;
    }
  }
}
</style>
