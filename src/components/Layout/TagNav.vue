<template>
  <div class="tag-nav">

    <div id="tags-view-container" class="tags-view-container" style="position: relative;">
      <scroll-bar ref="scrollPane" class="tags-view-wrapper" @scroll="handleScroll">
        <!--    <scroll-bar ref="scrollPane" class="tags-view-wrapper" @scroll="handleScroll"-->
        <!--    style="position:relative;">-->
        <router-link ref="tag" class="tag-nav-item" :class="isActive(item) ? 'cur' : ''"
                     v-for="(item, index) in tagPages" :to="item.path" :key="index"
                     @click="reloadRouter(item)"
                     tag="span"
                     @contextmenu.prevent.native="openMenu(item,$event)">
          {{ item.name }}
          <i class="el-icon-close" @click.prevent.stop="closeTheTag(item, index)"></i>
        </router-link>
      </scroll-bar>

      <ul v-show="visible" :style="{left:(left)+'px',top:(top-50)+'px'}" class="contextmenu">
        <li>刷新页面</li>
        <li>关闭当前</li>
        <li>关闭其他</li>
        <li>关闭所有</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ScrollBar from './ScrollBar'
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      defaultPage: '/Index',

      openedPageList2: [],
      top: 0,
      left: 0,

      visible: false,
    }
  },
  watch: {
    visible(value) {
      console.log(value);
      // if (value) {
      //   document.body.addEventListener('click', this.closeMenu)
      // } else {
      //   document.body.removeEventListener('click', this.closeMenu)
      // }
    }
  },
  computed: {
    //获取 store 中 StoreTagNav.js 的 gState 页面通过{{gState}}直接用
    ...mapGetters({
      tagPages: "StoreActiveNav/getsTagPages",
    })
  },

  methods: {
    ...mapActions({
      actTagPages: "StoreActiveNav/actTagPages",
      actChangeNavActive: "StoreActiveNav/actChangeNavActive",
    }),

    /*路由跳转 刷新*/
    reloadRouter(val) {
      // console.log(val);
      this.$router.push({path: val.path});
      this.actChangeNavActive(val.index);
      // window.sessionStorage.setItem('defaultActive',val.index);
    },

    addTagNav() {
      // 如果需要缓存则必须使用组件自身的name，而不是router的name
      this.$store.commit("StoreActiveNav/addTagNav", {
        name: this.$router.name,
        path: this.$route.path,
        title: this.$route.meta.title
      })
    },

    isActive(item) {
      return item.path === this.$route.path
    },

    handleScroll() {
      this.closeMenu()
    },

    closeMenu() {
      this.visible = false
    },

    openMenu(tag, e) {
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.clientY
      this.visible = true
      // this.selectedTag = tag
    },


    closeTheTag(item, index) {
      // 当关闭当前页面的Tag时，则自动加载前一个Tag所属的页面
      // 如果没有前一个Tag，则加载默认页面
      // console.log(item);
      if (this.openedPageList2.length > 1) {
        this.openedPageList2.splice(index, 1);
        this.actTagPages(this.openedPageList2);
        this.$router.push(this.openedPageList2[index - 1].path);
      } else {
        console.log('别删了，我快没了');
      }

      // if (item.path != '/Index') {
      //   this.openedPageList2.splice(index, 1);
      //   if (this.openedPageList2.length == 0) {
      //     let openedPageList2 = [{
      //       name: '首页',
      //       path: '/Index',
      //       title: '',
      //     }];
      //     this.$router.push('/Index');
      //     this.actTagPages(openedPageList2);
      //   } else {
      //     this.actTagPages(this.openedPageList2);
      //     this.$router.push(this.openedPageList2[index - 1].path);
      //   }
      // }
    },
    scrollToCurTag() {
      // this.$nextTick(() => {
      //   for (let item of this.$refs.tag) {
      //     if (item.to === this.$route.path) {
      //       this.$refs.scrollBar.scrollToCurTag(item.$el)
      //       break
      //     }
      //   }
      // })
    },

  },

  created() {

    let nowPath = this.$route.path;
    if (this.tagPages) {
      // console.log(this.tagPages);
      this.openedPageList2 = this.tagPages;
    } else {
      this.openedPageList2 = [];
      // console.log(this.openedPageList2);
    }

    let NavActive = sessionStorage.getItem('NavActive');
    if (NavActive) {
      // console.log('in'+NavActive);
      this.actChangeNavActive(NavActive);
    }

  },

  components: {
    ScrollBar
  },
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);

  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;

      &:first-of-type {
        margin-left: 15px;
      }

      &:last-of-type {
        margin-right: 15px;
      }

      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;

        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }

  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;

      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;

      &:before {
        transform: scale(.6);
        display: inline-block;
        vertical-align: -3px;
      }

      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>