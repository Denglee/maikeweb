<template>
    <div>
      <el-table class="public-table" border
                :data="tableArr"
                @selection-change="checkedStore"
                ref="refTable"
                height="600"
                @row-click="handleRowClick">

        <el-table-column type="selection""></el-table-column>
        <el-table-column prop="storeName" label="店铺名称"></el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
    name: "SystemRole",
    props:{
      checkID:{
        type: String,
      }
    },

    data(){
     return{
       tableArr: [
         {
           storeName:'店铺名称',
         }
       ],    //table数据
     }
    },
    methods:{

      /* 1、 编辑选中  */
      checkedStore(val) {
        console.log(val);
        this.checkedRows = val;
      },
      /*点击行触发，选中或不选中复选框 */
      handleRowClick(row, column, event) {
        // this.$refs.refTable.toggleRowSelection(row);
      },

    },
    created(){
    
    },
}
</script>
