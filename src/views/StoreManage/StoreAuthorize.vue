<template>
  <div class="public-main">
    <el-form class="public-form">
      <el-input v-model="formData.name" placeholder="请输入店铺名称" autocomplete="off" clearable
                class="public-input">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="FnSearchShop"></i>
      </el-input>

      <div class="formR-main">
        <el-button icon="el-icon-circle-plus-outline" @click="diaState.diaAdd = true" class="public-btn">
          店铺授权
        </el-button>
        <el-button icon="el-icon-folder-add" @click="FnSearchShop" :loading="btnState.btnImport" class="public-btn">
          导入店铺
        </el-button>
      </div>

    </el-form>

    <el-table class="public-table" border
              :data="tableArr"
              @selection-change="checkedStore"
              ref="multipleTable"
              @row-click="handleRowClick">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="店铺名称"></el-table-column>
      <el-table-column prop="site" label="站点"></el-table-column>
      <el-table-column prop="county" label="国家"></el-table-column>
      <el-table-column prop="platform" label="平台"></el-table-column>
      <el-table-column prop="SallerID" label="Saller ID"></el-table-column>
      <el-table-column prop="email" label="店铺邮箱"></el-table-column>
      <el-table-column prop="ad" label="广告授权"></el-table-column>
      <el-table-column prop="people" label="负责人"></el-table-column>
      <el-table-column prop="state" label="店铺授权">
        <template slot-scope="scope">
          <div v-if="scope.row.state == 0 " class="status-connect">授权成功</div>
          <div v-if="scope.row.state == 1 " class="status-break">去授权</div>
        </template>
      </el-table-column>
      <el-table-column prop="time" label="创建时间"></el-table-column>

      <el-table-column label="操作" min-width="200px">
        <template slot-scope="scope">
          <el-dropdown @command="FnCommand">
            <el-button type="primary">
              编辑<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <!--              <el-dropdown-item command="a" @click="FnCommand( scope.$index, scope.row)">暂停同步</el-dropdown-item>-->
              <el-dropdown-item :command="{ type:'a', data:scope.row }">暂停同步</el-dropdown-item>
              <el-dropdown-item :command="{ type:'b', data:scope.row }">删除店铺</el-dropdown-item>
              <el-dropdown-item :command="{ type:'c', data:scope.row }">同步验证</el-dropdown-item>
              <el-dropdown-item :command="{ type:'d', data:scope.row }">财务核算设置</el-dropdown-item>
              <el-dropdown-item :command="{ type:'e', data:scope.row }">分配负责人</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </template>
      </el-table-column>

    </el-table>


    <!--添加授权店铺信息  -->
    <el-dialog :append-to-body="true"
               title="添加店铺授权"
               :visible.sync="diaState.diaAdd"
               custom-class="public-dialog"
               :close-on-click-modal="false"
               @close='FnCloseAdd'
               width="800px"
    >
      <el-form :model="addForm" status-icon ref="RefAddForm" label-width="136px" class="public-diaForm">
        <!--        <div class="form-subTitle">店铺信息</div>-->
        <el-form-item label="店铺账号名称：" prop="name" :rules="{ required: true, message: '请输入店铺账号名称', trigger: 'blur' }">
          <el-input type="text" v-model="addForm.name" autocomplete="off" clearable placeholder="用于卖家区分各个账号"></el-input>
        </el-form-item>
        <el-form-item label="平台：" prop="platform">
          <el-input type="text" v-model="addForm.platform" autocomplete="off" clearable></el-input>
        </el-form-item>

        <el-form-item label="国家：" prop="country" value-key="value"
                      :rules="{ required: true, message: '请选择国家', trigger: 'change' }">
          <el-select v-model="addForm.country" filterable clearable placeholder="请选择国家"
                     class="public-selectFull" @change='chooseCountry($event)'
                     :rules="{ required: true, message: '店铺账号名称', trigger: 'blur' }">
            <el-option v-for="(item, index) in countryArr"
                       :key="item.value"
                       :value="item"
                       :label="item.name">
              <span class="check"></span>
              <span style="margin-left: 8px">{{ item.name }}</span>
            </el-option>
          </el-select>

        </el-form-item>


        <el-form-item label="店铺负责人：" prop="charger">
          <el-input type="text" v-model="addForm.charger" autocomplete="off" clearable></el-input>
        </el-form-item>

        <el-form-item label="备注：" prop="remarks">
          <el-input type="textarea" :rows="3" v-model="addForm.remarks" autocomplete="off" clearable
                    placeholder="备注"></el-input>
        </el-form-item>

        <!--        <div class="form-subTitle">授权信息 </div>-->
        <el-form-item label="SallerId：" prop="SallerId"
                      :rules="{ required: true, message: '请输入卖家编号', trigger: 'blur' }">
          <el-input type="text" v-model="addForm.SallerId" autocomplete="off" clearable
                    placeholder="请输入卖家编号"></el-input>
          <div>
            <span>点击复制，获取</span>
            <span v-for="(item,index) in countryArr" :key="index">
              <span v-if="addForm.country  == item.value">{{ item.name }}</span>
            </span>
            <span>站授权链接，请在常用店铺环境打开，以免关联。</span>
            <span @click="FnCopy" style="color: #0000FF;">复制</span>
          </div>
        </el-form-item>

        <el-form-item label="MWSAuthToken：" prop="MWSAuthToken"
                      :rules="{ required: true, message: '请输入AWS访问秘钥', trigger: 'blur' }">
          <el-input type="text" v-model="addForm.MWSAuthToken" autocomplete="off" clearable
                    placeholder="请输入AWS访问秘钥"></el-input>
        </el-form-item>

        <div class="block">
          <span class="demonstration">单选可搜索</span>
          <el-cascader
              v-model="addForm.country2"
              clearable
              placeholder="试试搜索：指南"
              :options="options"
              filterable
              @change = 'FnChooseCounty'
          ></el-cascader>
        </div>

        <el-form-item style="text-align: right;">
          <el-button type="primary" @click="diaState.diaAdd = false;" :loading="btnState.btnCancel">取消</el-button>
          <el-button type="primary" @click="FnBtnAdd('RefAddForm')" :loading="btnState.btnSubmit">保存</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>


  </div>
</template>

<script>
export default {
  name: "StoreAuthorize",
  data() {
    return {
      formData: {  //查找form data
        name: '',
      },
      tableArr: [
        {
          id: 'shop1',
          name: 'icover',
          site: '北美洲',
          county: '美国',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '1',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },

        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
        {
          id: 'shop2',
          name: 'icover2',
          site: '拉丁美洲',
          county: '阿根廷',
          platform: 'Amazon',
          SallerID: 'A1B285k2PH4HK',
          email: '283402541@qq.com',
          people: '木子',
          ad: '1',
          state: '0',
          time: '2020-12-29',

        },
      ],    //table数据

      btnState: {         //按钮状态
        btnImport: false,
        btnCancel: false,
        btnSubmit: false,
      },

      options: [{
        value: 'zhinan',
        label: '指南',
        id:1,
        children: [
          {
            value: 'shejiyuanze',
            label: '设计原则',
            id:11,
          },
          {
            value: 'daohang',
            label: '导航',
            id:12
          }
        ]
      },
      ],

      diaState: {   //弹出框状态
        diaAdd: true,
      },

      addForm: {  /*添加弹窗表单数据*/
        name: '',
        platform: '',
        country: '1',
        charger: '',
        remarks: '',
        SallerId: '',
        MWSAuthToken: '',
        country2: '',
      },
      nowCountyName: '',   //当前选中国家名称
      nowCountySite: '',   //当前校对域名
      countryArr: [
        {
          id: 1,
          name: '北美',
          value: '1',
        },
        {
          id: 2,
          name: '欧洲',
          value: '2',
        },
      ],   //国家数组

    }
  },
  methods: {
    /* 1.10、 编辑选中  */
    checkedStore(val) {
      console.log(val);
      this.checkedRows = val;
    },

    /*点击行触发，选中或不选中复选框*/
    handleRowClick(row, column, event) {
      this.$refs.multipleTable.toggleRowSelection(row);
    },

    /*国家 select 选择*/
    chooseCountry(val) {
      console.log(val);
      this.nowCountyName = val.name;
      const developerName = 'DK';
      const devMWSAccountId = '1912-3969-1582';

      if (val.id == 1) {  //北美
        this.nowCountySite = 'http://sellercentral.amazon.com/gp/mws/registration/register.html?signInPageDisplayed=2&developerName=' + developerName + '&devMWSAccountId=' + devMWSAccountId;
      }
      if (val.id == 2) { //欧洲
        this.nowCountySite = 'https://sellercentral.amazon.co.uk/gp/mws/registration/register.html?signInPageDisplayed=2&developerName=' + developerName + '&devMWSAccountId=' + devMWSAccountId;
      }
      console.log(this.nowCountySite);
    },

    /*复制 封装 方法*/
    MethodCopy(text) {
      var textareaEl = document.createElement('textarea');
      textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
      textareaEl.value = text;
      document.body.appendChild(textareaEl);
      textareaEl.select();
      var res = document.execCommand('copy');
      document.body.removeChild(textareaEl);
      console.log("复制成功");
      return res;
    },

    /*点击复制 事件*/
    FnCopy() {
      console.log(this.nowCountySite);
      this.MethodCopy(this.nowCountySite);
    },

    /*添加 提交*/
    FnBtnAdd(formName) {
      let that = this;
      that.$refs[formName].validate((valid) => {
        this.GLOBAL.btnStateChange(this, 'btnState', 'btnSubmit');
        if (valid) {
          console.log(this.addForm);
        }
      })
    },

    /* 添加 取消*/
    FnCloseAdd() {
      this.GLOBAL.btnStateChange(this, 'btnState', 'btnCancel')
      this.diaState.diaAdd = false;
      console.log(this.addForm);
      this.$refs['RefAddForm'].resetFields();

    },

    /* 国家 多选 级联 */
    FnChooseCounty(){
      console.log(this.addForm.country2);
    },


    FnSearchShop() {
      console.log('sd');
    },

    /* tr 操作 */
    FnCommand(val) {
      console.log(val);
    },

  },
  created() {

  },
}
</script>
