<template>
  <div class="public-main organize-box">
    <div class="organizeL-box">

      <ul>
        <li v-for="(item, index) in siteArr" :key="index" class="site-item" @click="FnChoose(item)">
          <span>{{item.name}}</span>
          <el-dropdown size="medium"  class="siteLeft">
            <span class="el-dropdown-link"><i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>编辑</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
    <div class="organizeR-box">

      <div class="formR-main">
        <el-button icon="el-icon-folder-add" @click="FnBtnAddShow" :loading="btnState.btnAdd" class="public-btn">新增国家站点</el-button>
      </div>

      <el-table class="public-table" border
                :data="tableArr"
                ref="refTable"
                height="600">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="country" label="国家站点"></el-table-column>
        <el-table-column prop="site" label="所属区域站点"></el-table-column>
        <el-table-column prop="hostCountry" label="所在国家"></el-table-column>
        <el-table-column prop="currencyCode" label="结算货币代码"></el-table-column>
        <el-table-column prop="currencySymbol" label="货币符号"></el-table-column>
        <el-table-column prop="img" label="站点图片"></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">

          </template>
        </el-table-column>
      </el-table>

    </div>

    <!--添加国家站点  -->
    <el-dialog :append-to-body="true"
               :title="diaState.diaAddTitle"
               :visible.sync="diaState.diaAdd"
               custom-class="public-dialog"
               :close-on-click-modal="false"
               @close='FnCloseAdd'
               width="800px">
      <el-form :model="addForm" ref="RefAddForm" label-width="136px" class="public-diaForm">
        <el-form-item label="店铺账号名称：" prop="storeName" :rules="{ required: true, message: '请输入店铺账号名称', trigger: 'blur' }">
          <el-input type="text" v-model="addForm.storeName" autocomplete="off" clearable placeholder="用于卖家区分各个账号"></el-input>
        </el-form-item>
 
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "SiteManage",
  data() {
    return {
      btnState:{
        btnAdd:false,
      },
      diaState:{
        diaAddTitle:'添加',
      },

      addForm:{

      },

      siteArr:[
        {
          id:1,
          name:'北美站',
          value:'bm',
        },
        {
          id:2,
          name:'南美站',
          value:'bm',
        },
      ],
      tableArr:[
        {
          country:'美国',
          site:'北美站',
          hostCountry:'美国',
          currencyCode:'USD',
          currencySymbol:'$',
          img:'',
          state:'1',
        },
      ],


    }
  },
  methods: {
    FnChoose(val){
      console.log(val);
    },

    /*添加显示*/
    FnBtnAddShow(){
      this.diaState.diaAdd = true;
      this.diaState.submitType='add';
      this.diaState.diaAddTitle='添加店铺授权';
      // this.$refs['RefAddForm'].resetFields();
    },

    /* 添加 取消  */
    FnCloseAdd() {
      this.GLOBAL.btnStateChange(this, 'btnState', 'btnCancel');
      console.log(this.addForm);
      this.$refs['RefAddForm'].resetFields();
    },

  },
  created() {

  },
}
</script>
<style lang="scss">
  .site-item{
    display: flex;
    border:solid 1px red;
    height: 32px;
    line-height: 32px;
  }
  .siteLeft{
    text-align: right;
    flex: 1;
    i{
      width: 80px;
      display: inline-block;
      padding: 6px 0;
    }
  }
</style>