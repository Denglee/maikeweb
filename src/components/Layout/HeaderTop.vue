<template>
  <div>
    <div class="headerTop-contain">
      <div @click="FnNavChange" v-model="navIsCollapse" class="header-topLeft">
        <i class="el-icon-s-fold" v-if="!navIsCollapse"></i>
        <i class="el-icon-s-unfold" v-else></i>
      </div>

      <div class="header-rMain">
        <!--头部用户信息+退出+更换密码 -->
        <div class="headerTop-userInfo">
          <i class="el-icon-bell" style="font-size: 20px;margin-right: 20px;"></i>

          <el-dropdown class="dropdown-header">
            <div class="el-dropdown-link">
              <!--          <img class="userHeader" :src='localUrl+"/"+UserInfo.logo || "assets/images/logo-daka.png"' alt="">-->
              <i class="el-icon-user-solid"></i>
              <div class="user-name">
                木子
                <!--<div>{{ UserInfo.username }}</div>-->
              </div>
              <div><i class="el-icon-caret-bottom"></i></div>
            </div>
            <el-dropdown-menu slot="dropdown"
                              hide-timeout="30000"
                              class="dropdown-HeaderTop">
              <el-dropdown-item  @click.native="FnCommand(scope.$index, scope.row)">个人中心</el-dropdown-item>
              <el-dropdown-item command="b">更改密码</el-dropdown-item>
              <el-dropdown-item command="c">企业管理授权</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>

    </div>

    <!--更换密码弹出-->
<!--    <el-dialog :append-to-body="true" title="更换密码"
               :visible.sync="diaChangePass"
               custom-class="passAlert"
               width="600px">
      <el-form :model="changePassForm" status-icon :rules="changeRules" ref="changePassForm" label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="旧密码" prop="oldPass">
          <el-input type="password" :show-password="true" v-model="changePassForm.oldPass" autocomplete="off"
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPass">
          <el-input type="password" :show-password="true" v-model="changePassForm.newPass" autocomplete="off"
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" :show-password="true" v-model="changePassForm.checkPass" autocomplete="off"
                    clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" class="public-btn" @click="submitForm('changePassForm')">提交</el-button>
          <el-button size="small" @click="resetForm('changePassForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>-->


  </div>
</template>

<script>

import {ApiloginOut, ApiChangePass, ApiTopSearch} from '@/assets/js/api'

import {mapState, mapActions, mapGetters} from 'vuex'

let btnStateChange = true;  //修改密码按钮点击状态
export default {
  /*在页面注入App.vue组件提供（provide）的 reload 依赖，在逻辑完成之后（删除或添加...）,
  直接this.reload()调用，即可刷新当前页面*/
  inject: ['reLoad'], //注入依赖 App 中的reLoad方法
  name: "HeaderTop",
  data() {
    /*旧密码验证规则*/
    let validateOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('旧密码不能为空'));
      } else if (value.length <= 5) {
        callback(new Error('密码不能少于6位数'));
      } else {
        callback();
      }
    };
    /*新密码验证规则*/
    let validateNewPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('新密码不能为空'));
      } else if (value.length <= 5) {
        callback(new Error('密码不能少于6位数'));
      } else {
        callback();
      }
    };
    /*确认密码验证规则*/
    let validateCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value.length <= 5) {
        callback(new Error('密码不能少于6位数'));
      } else if (value !== this.changePassForm.newPass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {

      // cityName:'',
      localUrl: this.GLOBAL.localUrl,

      SearchVal: "",  //搜索框值
      diaChangePass: false,   //修改密码弹出框状态

      formLabelWidth: '80px',

      /*修改密码 form  changePassForm 对应v-model*/
      changePassForm: {
        oldPass: '',
        newPass: '',
        checkPass: '',
      },
      /*修改密码 form  changeRules 对应 :rules*/
      changeRules: {
        oldPass: [
          {validator: validateOldPass, trigger: 'blur'}
        ],
        newPass: [
          {validator: validateNewPass, trigger: 'blur'}
        ],
        checkPass: [  //确认密码
          {validator: validateCheckPass, trigger: 'blur'}
        ],
      },
    }
  },
  methods: {
    ...mapActions({
      ACTlogout: 'StoreTagNav/ACTlogout',   //store里 loginOut 退出登录方法
      mutUserInfo: 'StoreTagNav/actUserInfo',
      actChangeLeftWidth: "StoreTagNav/actChangeLeftWidth",
      actChangeNavIsCollapse: "StoreTagNav/actChangeNavIsCollapse",
    }),

    /*伸缩状态+宽度*/
    IsCollapseWidth(val){
      if (val == false || val == 'false' || !val) {
        this.actChangeLeftWidth('200px');
        this.actChangeNavIsCollapse(false);
      } else {
        this.actChangeLeftWidth('64px');
        this.actChangeNavIsCollapse(true);
      }
    },
    /*左边导航宽度修改*/
    FnNavChange() {
      let state =  !this.navIsCollapse;
      this.IsCollapseWidth(state);
    },


    /*退出登录*/
    loginOut() {
      let that = this;
      ApiloginOut().then(res => {
        console.log(res);
        this.ACTlogout();
        if (res.status == 1) {

          this.$message({
            type: 'success',
            duration: 1500,
            message: "退出成功！",
            offset: 100,
          });
          setTimeout(() => {
            that.$router.push({path: '/login'})
          }, 1500)
        }
        ;
      })
    },
    /*修改密码提交*/
    submitForm(changePassForm) {
      this.$refs[changePassForm].validate((valid) => {
        if (valid && btnStateChange) {
          console.log(btnStateChange);
          btnStateChange = false;
          setTimeout(() => {
            btnStateChange = true;
          }, 1000);

          let uid = this.UserInfo.uid;
          let old_password = this.changePassForm.oldPass;
          let new_password = this.changePassForm.newPass;
          console.log(`${uid},${old_password},${new_password}`);
          ApiChangePass({
            uid: uid,
            old_password: old_password,
            new_password: new_password,
          }).then(res => {
            if (res.status == 1) {
              this.$message({
                message: res.info,
                type: 'success',
                duration: 1500,
                offset: 100,
              });
              setTimeout(() => {
                this.diaChangePass = false;
                /*刷新页面*/

              }, 1500)
            }
            if (res.status == 0) {
              this.$message({
                message: res.info,
                type: 'error',
                duration: 3000,
                offset: 40,
              });
            }
          }).catch(res => {
            console.log(res);
          })
        } else {
          console.error('确认密码提交失败!!');
          return false;
        }
      });
    },
    /*修改密码 重置*/
    resetForm(changePassForm) {
      this.$refs[changePassForm].resetFields();
    },

    /*回到首页*/
    // goIndex() {
    //   this.$router.push({path: '/index'});
    // },

    FnCommand(){

    },

  },
  created() {
    let isCollapse = sessionStorage.getItem('isCollapse');
    // console.log(isCollapse);
    this.IsCollapseWidth(isCollapse);

    /*获取用户信息*/
    // this.mutUserInfo();

    // console.log(this.UserInfo);

    // let city_name = this.UserInfo.city_name;
    // console.log(city_name);
    // if(this.UserInfo == undefined){
    //     console.log('asd');
    //     // this.$message({
    //     //     message: res.info,
    //     //     type: 'success',
    //     //     duration: 1500,
    //     //     offset: 100,
    //     // });
    //     // // return false;
    //     // setTimeout(() => {
    //     //     that.$routerConfigure.push({path: '/index'});
    //     // }, 1500);
    //     this.$message({
    //         message:'登录过期',
    //         // icon:'fail',
    //         duration:2000,
    //         type:'error',
    //         offset:100,
    //     });
    //
    //     setTimeout(() =>{
    //         this.$routerConfigure.push({path:'/login'});
    //     },1500)
    // }
  },

  computed: {
    ...mapGetters({
      // UserInfo: 'StoreTagNav/getsUserInfo',
      navIsCollapse: 'StoreTagNav/getNavIsCollapse',
    })
  },
}
</script>
