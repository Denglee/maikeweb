<template>
  <div class="public-main">
    <el-form class="public-form">
<!--      <el-input v-model="formData.name" placeholder="请输入店铺名称" autocomplete="off" clearable-->
<!--                class="public-input"></el-input>-->

      <div class="formR-main">
        <el-button icon="el-icon-search" @click="FnSearchShop" :loading="btnState.btnAuthorize" class="btn-public">
          店铺授权</el-button>
        <el-button icon="el-icon-delete" @click="FnSearchShop" :loading="btnState.btnImport" class="btn-public">
          导入店铺</el-button>
      </div>

    </el-form>

    <el-table class="public-table" border
              :data="tableArr"
              @selection-change="checkedStore"
              ref="multipleTable"
              @row-click="handleRowClick">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="title" label="消息标题"></el-table-column>
    </el-table>

  </div>
</template>


<script>
export default {
  name: "StoreAuthorize",
  data() {
    return {
      formData: {
        name: '',
      },
      tableArr: [
        {
          id: 'shop1',
          name: 'icover',
          site: '北美洲',

        }
      ],

      btnState: {
        btnAuthorize: false,
        btnImport: false,
      },

    }
  },
  methods: {
    /* 1.10、 编辑选中 */
    checkedStore(val) {
      console.log(val);
      this.checkedRows = val;
    },

    /*点击行触发，选中或不选中复选框*/
    handleRowClick(row, column, event) {
      this.$refs.multipleTable.toggleRowSelection(row);
    },


    FnSearchShop() {

    },

  },
  created() {

  },
}
</script>
