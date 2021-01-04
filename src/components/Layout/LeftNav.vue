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
             :default-active="this.$route.path"
             :collapse="NavIsCollapse"
             :default-openeds='["1-0"]'
    >
      <!--一级导航-->
      <el-submenu class="submenu-box"
                  popper-class="subMenuL-popNav"
                  :index="index1 +''" v-for="(navItem , index1) in StateNavList.data" :key="index1">

        <template slot="title">
          <i class="iconNav" :class="navItem.fonts"></i>
          <span slot="title">{{ navItem.name }}</span>
        </template>

        <!--二级导航 数据-->
        <el-menu-item-group v-for="(subItems,index2) in (navItem.sub_menu)" :key="index2">

          <el-menu-item v-if="subItems.action ==''"></el-menu-item>
          <el-menu-item v-else
                        :index="index1+'' +'-'+ index2+''" :dataIndex2="index1+'' +'-'+ index2+''">
            <router-link :to="{path:'/'+subItems.controller+'/'+subItems.action}"
                         :dataPath="subItems.controller+'/'+subItems.action">
              <span>{{ subItems.name }}</span>
            </router-link>
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
      let trainerId = e.currentTarget.dataset.datanum;
      console.log(`${trainerId}`);
      this.dataNum = trainerId;
      // this.$routerConfigure.push({path:trainerId});
    },

    // FnSubGo(e){
    //   let link = e.currentTarget.dataset.datapath;
    //   console.log(link);
    // },
  },

  created() {
    // this.getNavObj();
  },
  computed: {
    //获取 store 中 StoreTagNav。js 的 gState 页面通过{{gState}}直接用
    ...mapGetters({
      // StateNavList: "StoreTagNav/getNavList",
      // UserInfo: 'StoreTagNav/getsUserInfo',
      NavIsCollapse: "StoreTagNav/getNavIsCollapse",
    }),
  },

  mounted(){
    let path = this.$route.path;
    console.log(path);
  },
};
</script>
