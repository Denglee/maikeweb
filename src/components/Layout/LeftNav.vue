<template>
  <aside class="layoutLeft-nav">
    <!--logo-->
    <div class="img-logoBox" @click="goIndex()">
      logo
      <!--<img class="img-logo" :src='localUrl+"/"+UserInfo.logo' alt="">-->
    </div>
    <el-menu class="menuL-navBox"
             background-color="#001529"
             text-color="#fff"
             active-text-color="#fff"
             :default-active="defaultActive"
             :collapse="NavIsCollapse"
    >
      <!--一级导航-->
      <el-submenu class="submenu-box"
                  popper-class="subMenuL-popNav"
                  :index="index1 +'' " v-for="(navItem , index1) in StateNavList.data" :key="index1">

        <template slot="title">
          <i class="iconNav" :class="navItem.fonts"></i>
          <span slot="title">{{ navItem.name }}</span>
        </template>

        <!--二级导航 数据-->
        <el-menu-item-group v-for="(subItems,index2) in (navItem.sub_menu)" :key="index2">

          <el-menu-item v-if="subItems.action ==''"></el-menu-item>
          <el-menu-item v-else
                        :index="index1+'' +'-'+ index2+''" :dataIndex2="index1+'-'+ index2"
          >
<!--            <span-->
<!--               @click="FnSubGo"-->
<!--                   :data-path="subItems.controller+'/'+subItems.action"-->
<!--                   :data-index2="index1+'-'+ index2"-->
<!--            >{{ subItems.name }}</span>-->
            <router-link :to="{path:'/'+subItems.controller+'/'+subItems.action}"
                         :data-path="subItems.controller+'/'+subItems.action"
            @click.native="FnActiveNav(index1+'-'+ index2)">
              {{ subItems.name }}
            </router-link>

<!--            <a href="javascript:;" @click="layoutGoPath(subItems.controller, subItems.action, subItems.name, index1+'-'+ index2)">-->
<!--              {{ subItems.name }}-->
<!--            </a>-->

          </el-menu-item>

        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </aside>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
// import {ApiLayoutNav} from "@/assets/js/api"
import {menu} from "@/assets/js/menu"; /*引用 用户信息 */

export default {
  name: "LeftNav",
  data() {
    return {
      localUrl: this.GLOBAL.localUrl,
      StateNavList: menu,

      defaultActive:"3-0",
    };
  },

  methods: {
    //store 里 StoreTagNav中 actions 的getNavList方法  获取左侧路由导航
    ...mapActions({
      getNavList: "StoreTagNav/actNavList",
    }),


    /*获取侧边导航数据*/
    getNavObj() {
      ApiLayoutNav().then(res => {
        if (res.status == 1) {
          this.getNavList(res);  //数据传到store
        }
        if (res.status == 0) {
          this.$message({
            message: res.info,
            type: 'error',
            duration: 1500,
            offset: 40,
          });
          setTimeout(() => {
            this.$router.replace({path: '/login'});
          }, 1500)
        }
      }).catch(res => {
        console.log(res);
      });
    },

    /*回到首页*/
    goIndex() {
      this.$router.push({path: '/index'});
    },

    goNext(e) {
      console.log(e);
      let trainerId = e.currentTarget.dataset.index2;
      console.log(`${trainerId}`);
      this.dataNum = trainerId;
      // this.$routerConfigure.push({path:trainerId});
    },

    layoutGoPath(path1,path2,name,val1){
      // console.log(this.tagPages);
      // console.log(this.openedPageList2);
      // let path = '/'+path1+''+'/'+''+path2+'';
      // console.log(path);
      // let openedPageList2 = this.openedPageList2;
      // if(openedPageList2.length == 0){
      //   console.log(`127--  ${path}`);
      //   openedPageList2.push({
      //     name:name,
      //     path: path,
      //     title: '',
      //   });
      //   console.log(this.openedPageList2)
      //   this.actTagPages(this.openedPageList2);
      // } else {
      //   console.log(openedPageList2);
      //   let hasSome = openedPageList2.some(item=>{
      //     if(item.path == path){
      //       return true
      //     }
      //   })
      //   console.log(hasSome);
      //   if(!hasSome){
      //     openedPageList2.push({
      //       name:name,
      //       path: path,
      //       title: '',
      //     });
      //     console.log(openedPageList2);
      //     this.actTagPages(openedPageList2);
      //   }
      // }
      //
      // this.$router.push({
      //   path:path,
      // });


      console.log(val1);
      this.defaultActive = val1
      window.sessionStorage.setItem('defaultActive',val1);

    },

    /*保存导航active*/
    FnActiveNav(val1){
      console.log(val1);
      this.defaultActive = val1
      window.sessionStorage.setItem('defaultActive',val1);

    },
  },

  created() {
    let defaultActive = sessionStorage.getItem('defaultActive');
    if(defaultActive){
      console.log('in'+defaultActive);
      this.defaultActive = defaultActive;
    }


  },
  computed: {
    //获取 store 中 StoreTagNav。js 的 gState 页面通过{{gState}}直接用
    ...mapGetters({
      tagPages: "StoreActiveNav/getsTagPages",
      // StateNavList: "StoreTagNav/getNavList",
      // UserInfo: 'StoreTagNav/getsUserInfo',
      NavIsCollapse: "StoreTagNav/getNavIsCollapse",
    }),
  },

  mounted(){
    let path = this.$route.path;

    // this.navConfig = [
    //   {index:'1',path:['/system/aa','/system/bb','/system/cc']},
    // ];
    // let thisNav = this.navConfig.find(item =>{
    //   return item.path.includes(path);
    // });
    // this.defaultOpeneds = [thisNav.index];
    // console.log(path);
  },
};
</script>
