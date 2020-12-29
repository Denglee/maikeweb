<template>
  <div class="public-main">

    <el-form :model="addStaffForm" class="addForm-box" :rules="addRules" ref="addStaffForm">

      <el-form-item label="员工头像" :label-width="formLabelWidth">
        <div class="img-header" v-if="addStaffForm.userimage">
          <img :src=' addStaffForm.userimage | imgBase(localUrl)' ref="singleImg" @click="staffCardPreview">
          <!--<span @click="staffCardPreview" class="imgHeader-big">放大</span>-->
        </div>
        <el-upload
            class="btn-header"
            action="#"
            list-type="picture-card"
            :on-change='changeUpload'
            :show-file-list="false"
            :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
        </el-upload>

        <!--弹出放大效果-->
        <el-dialog :append-to-body="true" :visible.sync="diaVisible">
          <img width="100%" :src="addStaffForm.userimage" alt="">
        </el-dialog>
      </el-form-item>

      <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
        <el-input v-model="addStaffForm.name" autocomplete="off" placeholder="请输入姓名" clearable></el-input>
      </el-form-item>

      <el-form-item :label-width="formLabelWidth">
        <el-button type="primary" @click="postStaffAdd('addStaffForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "PersonalInfo",
  data() {
    return {
      addRules: {
        name: [{required: true, message: '请输入姓名', trigger: 'blur'},],
        user_no: [{required: true, message: '请输入编号', trigger: 'blur'},],
        phone: [{required: true, message: '请输入姓名', trigger: 'blur'},],
        user_type: [{required: true, message: '请选择职位', trigger: 'change'},],
        group_id: [{required: true, message: '请选择部门', trigger: 'change'},],
      },

      /* == 添加员工 ==*/
      formLabelWidth: '120px',
      diaHeadImgUrl: '',  //头像放大 url
      diaVisible: false, //弹出方法头像
      diaImgVisi: false,  //弹出方法头像
      imgUrl: '',   //头像 上传路径
      addStaffForm: {
        id: '',
        information: '2',
        zmtek_ver: 2,
        type: 1,
        userimage: '', //头像
        user_type: '',//员工类型  职位
        name: '', //名字
        sex: '1', // 性别
        lock: '0', // 状态 离职 在职
        user_no: '', //编号
        phone: '', //电话
        classes: '', //班次 1 = 正常 2 = 早 3 = 中 4 = 晚 5 自定义
        group_id: '', //部门id
        salary: '',//基本工资
        deduction_type: [], //提成方式
        user_des: '', //练介绍
        price_type: '', //价格模式 1 = 全天统一 2 = 分时段
        eprice_s: '', //价格一开始时间
        eprice_e: '', //价格一结束时间
        eprice: '', //价格
        eprice2_s: '', //
        eprice2_e: '', //
        eprice2: '', //
        eprice3_s: '', //
        eprice3_e: '', //
        eprice3: '', //
      }, /*表单*/
    }
  },
  methods: {

    /*3.1、头像 上传 选中*/
    changeUpload(file){
      console.log(file);
      this.addStaffForm.userimage = '';
      this.GLOBAL.getEleBase64(file.raw).then(res => {
        console.log(res);
        this.addStaffForm.userimage = res;
      });
    },

    /*3.1、头像上传 删除*/
    handleRemove(file) {
      console.log(file);
    },

    /*1. 1、头像 放大*/
    staffCardPreview(file) {
      this.diaHeadImgUrl = file.url;
      this.diaVisible = true;
    },

    /*提交 */
    postStaffAdd(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let formArr = this.addStaffForm;
          console.log(formArr);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

  },
  created() {

  },
}
</script>

<style scoped lang="scss">

</style>