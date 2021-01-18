<template>
  <div class="public-main">

    <div class="formR-main marbom">
      <el-button @click="diaState.diaSetTr = true">设置</el-button>
    </div>

    <el-table :data="tableData" border ref="refTable">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column v-if="TrCheckedArr[0].iState" prop="name" label="名称" align="center"></el-table-column>
      <el-table-column v-if="TrCheckedArr[1].iState" prop="select" label="性别" align="center"></el-table-column>
      <el-table-column v-if="TrCheckedArr[2].iState" prop="kafang" label="年龄" align="center"></el-table-column>
      <el-table-column v-if="TrCheckedArr[3].iState" prop="fengbi" label="时间" align="center"></el-table-column>
      <el-table-column v-if="TrCheckedArr[4].iState" prop="isETF" label="事件" align="center"></el-table-column>
      <el-table-column v-if="TrCheckedArr[5].iState" prop="range" label="地点" align="center"></el-table-column>
    </el-table>

    <!-- 自定义列 -->
    <el-dialog :append-to-body="true"
               title="自定义列"
               :visible.sync="diaState.diaSetTr"
               custom-class="public-dialog"
               :close-on-click-modal="false"
               width="1000px">

      <el-checkbox-group v-model="isTrCheckedArr" class="marbom">

        <el-checkbox v-for="item in AllTrChecked" :label="item" :key="item" ></el-checkbox>
      </el-checkbox-group>

      <div class="formR-main">
        <el-button @click="diaState.diaSetTr = false">取消</el-button>
        <el-button @click="FnSaveTrChecked" class="public-btn" style="margin-top: 20px;">保存</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "EvaluateMonitor",
  data() {
    return {

      diaState:{
        diaSetTr:false,
      },
      tableData:[],

      TrCheckedArr: [
        {title: "名称",iState: true},
        {title: "性别",iState: true},
        {title: "年龄",iState: true},
        {title: "时间",iState: true},
        {title: "事件",iState: true},
        {title: "地点",iState: true},
      ],
      AllTrChecked: [], //全部选项
      isTrCheckedArr: [],//已经勾选

    }
  },
  methods: {
    /* 获取 自定义列 所有选项 */
    FnGetAllTrChecked() {
      let that = this;
      let isVal = localStorage.getItem('isTrChecked');
      // console.log(isVal);
      if(isVal){  //有储存勾选
        for (let i = 0; i < that.TrCheckedArr.length; i++) {
          that.AllTrChecked.push(that.TrCheckedArr[i].title);
        }
        that.isTrCheckedArr = isVal.split(',');
      } else {
        for (let i = 0; i < that.TrCheckedArr.length; i++) {
          that.AllTrChecked.push(that.TrCheckedArr[i].title);
          /*初始化不想展示的列可以放在这个条件里*/
          // if (that.TrCheckedArr[i].title == '名称') {
          //   continue;
          // }
          that.isTrCheckedArr.push(that.TrCheckedArr[i].title);
        }
      }

    },
    /* 保存 自定义列 */
    FnSaveTrChecked(){
      this.diaState.diaSetTr = false;
      let checkedArr = this.isTrCheckedArr;
      let noSrr = this.AllTrChecked.filter(i => checkedArr.indexOf(i) < 0); // 未选中
      this.TrCheckedArr.filter(i => {
        if(noSrr.indexOf(i.title) != -1) {
          i.iState = false;
        } else {
          i.iState = true;
        }
      });
      // console.log(checkedArr);
      localStorage.setItem('isTrChecked',checkedArr);
      this.$nextTick(() => {
        this.$refs.refTable.doLayout();
      });
    },
  },
  created() {
    this.FnGetAllTrChecked();
    this.FnSaveTrChecked();
  },

}
</script>
