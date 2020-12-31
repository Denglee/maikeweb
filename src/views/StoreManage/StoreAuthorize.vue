<template>
  <div class="public-main">
    <el-form class="public-form">
<!--      @submit.native.prevent-->
      <el-input v-model="searchForm.storeName" placeholder="请输入店铺名称" autocomplete="off" clearable class="public-input"
                @keyup.enter.native = "FnSearchShop">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="FnSearchShop"></i>
      </el-input>

      <div class="formR-main">
        <el-button icon="el-icon-circle-plus-outline" @click="diaState.diaAdd = true" class="public-btn">店铺授权</el-button>
        <el-button icon="el-icon-folder-add" @click="FnImport" :loading="btnState.btnImport" class="public-btn">导入店铺</el-button>
      </div>
    </el-form>

    <el-table class="public-table" border
              :data="tableArr"
              @selection-change="checkedStore"
              ref="refTable"
              @row-click="handleRowClick">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="storeName" label="店铺名称"></el-table-column>
      <el-table-column prop="site" label="站点"></el-table-column>
      <el-table-column prop="country" label="国家"></el-table-column>
      <el-table-column prop="platform" label="平台"></el-table-column>
      <el-table-column prop="sellerId" label="Saller ID"></el-table-column>
      <el-table-column prop="principalEmail" label="店铺邮箱"></el-table-column>
      <el-table-column prop="advertAuth" label="广告授权"></el-table-column>
      <el-table-column prop="principalName" label="负责人"></el-table-column>
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
              <!--<el-dropdown-item command="a" @click="FnCommand( scope.$index, scope.row)">暂停同步</el-dropdown-item>-->
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

    <el-pagination
        background
        layout="prev, pager, next, total, jumper"
        :total="searchForm.pageTotalRows"
        :page-size="searchForm.pageListRows"
        @current-change="PageCurrent">
    </el-pagination>

    <!--添加授权店铺信息  -->
    <el-dialog :append-to-body="true"
               title="添加店铺授权"
               :visible.sync="diaState.diaAdd"
               custom-class="public-dialog"
               :close-on-click-modal="false"
               @close='FnCloseAdd'
               width="800px">
      <el-form :model="addForm" status-icon ref="RefAddForm" label-width="136px" class="public-diaForm">
        <!--        <div class="form-subTitle">店铺信息</div>-->
        <el-form-item label="店铺账号名称：" prop="storeName" :rules="{ required: true, message: '请输入店铺账号名称', trigger: 'blur' }">
          <el-input type="text" v-model="addForm.storeName" autocomplete="off" clearable placeholder="用于卖家区分各个账号"></el-input>
        </el-form-item>
        <el-form-item label="平台：" prop="platform">
          <el-input type="text" v-model="addForm.platform" autocomplete="off" clearable></el-input>
        </el-form-item>

        <el-form-item label="国家：" prop="countryData"
                      :rules="{ required: true, message: '请选择国家', trigger: 'change' }">
          <el-cascader
              class="public-selectFull"
              v-model="addForm.countryData"
              clearable
              placeholder="请选择国家"
              :options="options"
              filterable
              @change = 'FnChooseCounty'
              popper-class = 'public-cascader'
          ></el-cascader>

        </el-form-item>

        <el-form-item label="店铺负责人：" prop="principalName ">
          <el-select v-model="addForm.principalName" value.key="id" filterable clearable placeholder="请选择店铺负责人"
                     class="public-selectFull" @change='FnChooseCharge'
                     :rules="{ required: true, message: '店铺负责人', trigger: 'change' }">
            <el-option v-for="(item, index) in chargeArr" :key="item.id"
                       :value="item.id"
                       :label="item.name">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="备注：" prop="remark">
          <el-input type="textarea" :rows="3" v-model="addForm.remark" autocomplete="off" clearable
                    placeholder="备注"></el-input>
        </el-form-item>

        <!--        <div class="form-subTitle">授权信息 </div>-->
        <el-form-item label="SallerId：" prop="sellerId"
                      :rules="{ required: true, message: '请输入卖家编号', trigger: 'blur' }">
          <el-input type="text" v-model="addForm.sellerId" autocomplete="off" clearable placeholder="请输入卖家编号"></el-input>
          <div>
            <span>点击复制，获取{{nowCountyName}}站授权链接，请在常用店铺环境打开，以免关联。</span>
            <span @click="FnCopy" style="color: #0000FF;cursor: pointer;">复制</span>
          </div>
        </el-form-item>

        <el-form-item label="MWSAuthToken：" prop="authToken"
                      :rules="{ required: true, message: '请输入AWS访问秘钥', trigger: 'blur' }">
          <el-input type="text" v-model="addForm.authToken" autocomplete="off" clearable
                    placeholder="请输入AWS访问秘钥"></el-input>
        </el-form-item>

        <el-form-item style="text-align: right;">
          <el-button type="primary" @click="diaState.diaAdd = false;" :loading="btnState.btnCancel">取消</el-button>
          <el-button type="primary" @click="FnBtnAdd('RefAddForm')" :loading="btnState.btnSubmit">保存</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>

  </div>
</template>

<script>
import { addStoreAuth, updateStoreAuth, selectStoreAuth, delStoreAuth, delStoreAuthList } from "@/assets/js/api";
export default {
  name: "StoreAuthorize",
  data() {
    return {

      searchForm: {  //查找form data
        storeName: '',
        pageTotalRows:100,
        pageListRows:20,
      },

      diaState: {   //弹出框状态
        diaAdd: false,
      },

      btnState: {         //按钮状态
        btnImport: false,
        btnCancel: false,
        btnSubmit: false,
      },

      checkedRows:[],

      tableArr: [
        {
          id: 'shop1',
          storeName: 'test01',
          platform: 'amazon',
          principalEmail:'100@qq.com',
          site:'2',
          country:'21',
          principalName : 'boss',
          remark: '测试',
          sellerId: 'AD12311',
          authToken: '101141',
          advertAuth:'',
        },
        {
          id: 'shop2',
          storeName: 'test01',
          platform: 'amazon',
          principalEmail:'100@qq.com',
          site:'2',
          country:'21',
          principalName : 'boss',
          remark: '测试',
          sellerId: 'AD12311',
          authToken: '101141',
          advertAuth:'',
        },
      ],    //table数据

      /*国家联动数据*/
      options: [
        {
          value: 2,
          label: '北美站点',
          id:20,
          children: [
            {
              value: 21,
              label: '美国',
              id:201,
            },
            {
              value: 22,
              label: '加拿大',
              id:202,
            },
          ]
        },
        {
          value: 1,
          label: '欧洲站点',
          id:10,
          children: [
            {
              value: 11,
              label: '英国',
              id:101,
            },
            {
              value: 12,
              label: '德国',
              id:102,
            }
          ]
        },
      ],

      chargeArr:[
        {name:'负责人1', id:'100'},
        {name:'负责人2', id:'200'},
        {name:'负责人3', id:'300'},
      ],

      addForm: {  /*添加弹窗表单数据*/
        storeName: 'test01',
        platform: 'amazon',
        countryData:[2,21],
        site:'2',
        country:'21',
        principalName :'200',
        remark: '测试',
        sellerId: 'AD12311',
        authToken: '101141',
      },
      nowCountyName: '',   //当前选中国家名称
      nowCountySite: '',   //当前校对域名

    }

  },
  methods: {
    /*搜索*/
    FnSearchShop() {
      console.log(this.searchForm.storeName);
    },

    /*分页*/
    PageCurrent(val){
      console.log(val);
    },

    /* 1、 编辑选中  */
    checkedStore(val) {
      console.log(val);
      this.checkedRows = val;
    },
    /*点击行触发，选中或不选中复选框 */
    handleRowClick(row, column, event) {
      // this.$refs.refTable.toggleRowSelection(row);
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
      this.$message.success('复制成功');
      // this.$message({
      //   message: '复制成功',
      //   type: 'success',
      //   duration: 3000,
      //   // offset: 40,
      // });
      return res;

    },
    /*点击复制 事件*/
    FnCopy() {
      let site =this.addForm.site;

      const developerName = 'DK';
      const devMWSAccountId = '1912-3969-1582';
      if (site == 2) {  //北美
        this.nowCountyName = '北美';
        this.nowCountySite = 'http://sellercentral.amazon.com/gp/mws/registration/register.html?signInPageDisplayed=2&developerName=' + developerName + '&devMWSAccountId=' + devMWSAccountId;
      }
      if (site == 1) { //欧洲
        this.nowCountyName = '欧洲';
        this.nowCountySite = 'https://sellercentral.amazon.co.uk/gp/mws/registration/register.html?signInPageDisplayed=2&developerName=' + developerName + '&devMWSAccountId=' + devMWSAccountId;
      }
      console.log(site);
      this.MethodCopy(this.nowCountySite);
    },

    /*选择负责人*/
    FnChooseCharge(id){
      console.log(id);

      /*let obj = {};
      obj = this.chargeArr.find((item)=>{
        return item.id == id;//筛选出匹配数据
      });
      console.log(obj.name);//我这边的name就是对应label的*/
    },

    /*添加 提交 */
    FnBtnAdd(formName) {
      let that = this;
      that.$refs[formName].validate((valid) => {
        this.GLOBAL.btnStateChange(this, 'btnState', 'btnSubmit');
        if (valid) {
          console.log(this.addForm);

          // return;
          addStoreAuth(this.addForm).then(res => {
            console.log(res.data);
            this.$message.success('添加成功');
          }).catch(res => {

          })
        };
      })
    },

    /* 添加 取消  */
    FnCloseAdd() {
      this.GLOBAL.btnStateChange(this, 'btnState', 'btnCancel')
      this.diaState.diaAdd = false;
      console.log(this.addForm);
      this.$refs['RefAddForm'].resetFields();
    },


    /* 国家 多选 级联 */
    FnChooseCounty(val){
      console.log(val);
      this.site = val[0];
      this.country = val[1];
    },


    /*表格 tr 操作 */
    FnCommand(val) {
      console.log(val)
      console.log(val.type);
      console.log(val.data.id);
      if(val.type == 'a'){
        this.FnDelStoreAuthList();
      }
    },
    /*单个 删除 店铺*/
    FnDelStoreAuth(){
      delStoreAuth().then(res=>{
        console.log(res);
      }).catch(res=>{

      });
    },

    /*多个删除 店铺 */
    FnDelStoreAuthList(){
      let idArr = [];
      this.checkedRows.forEach((row)=>{
        idArr.push(row.id);
      });
      console.log(idArr);
    },

    FnImport(){

    },

    /* 查询 获取 table */
    FnSelectStoreAuth(){
      selectStoreAuth(this.searchForm).then(res=>{
        console.log(res);
      }).then(res=>{
        consol.log(res);
      })
    },

  },
  created() {
    // this.FnSelectStoreAuth();
  },
}
</script>
