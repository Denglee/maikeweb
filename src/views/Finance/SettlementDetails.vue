<template>
  <div>
    <!--头部-->
    <div class="public-header">
      <h4>结算明细</h4>
    </div>

    <!--中间部分-->
    <div class="public-main">
      <el-form class="public-form">
        <el-select filterable multiple collapse-tags v-model="formData.projectName" placeholder="项目名称" class="public-select">
          <el-option v-for="( item, index ) in projectArr" :key="index" :label="item.value"
                     :value="item.name"></el-option>
        </el-select>

        <el-select  v-model="formData.projectName" filterable multiple clearable collapse-tags
                    :popper-class="RevenSelCheckbox"   @change = 'chooseProject($event)'>
          <el-option v-for="(item, index) in projectArr"
                     :key="index"
                     :value="item.name"
                     :label="item.value">
            <span class="check"></span>
            <span style="margin-left: 8px">{{item.value}}</span>
          </el-option>
        </el-select>

        <el-date-picker
            v-model="formData.order_time"
            type="daterange"
            unlink-panels
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
        </el-date-picker>

        <!--搜索-->
        <el-button icon="el-icon-search" @click="FnSearchShop" :loading="btnState.btnSearchLoad" class="btn-public">搜索
        </el-button>
      </el-form>

      <!-- 表格-->
      <el-table class="public-table" border
                :data="tableStaff"
                @selection-change="checkedStaff"
                ref="multipleTable"
                @row-click="handleRowClick">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="shop" label="店铺" sortable></el-table-column>
        <el-table-column prop="project" label="项目"></el-table-column>

        <el-table-column prop="lock" label="状态">
          <template slot-scope="scope">
            <div v-if="scope.row.state == 0 " class="status-connect">已完成</div>
            <div v-if="scope.row.state == 1 " class="status-break">已断开</div>
          </template>
        </el-table-column>
        <el-table-column prop="register_time" label="开始时间" sortable>
          <template slot-scope="scope">
            <div class="status-connect">{{ scope.row.start_time | dateFormat }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="register_time" label="结束时间">
          <template slot-scope="scope">
            <div class="status-connect">{{ scope.row.end_time | dateFormat }}</div>
          </template>
        </el-table-column>

      </el-table>

      <el-pagination
          background
          layout="prev, pager, next,total,jumper"
          :total="pageArr.pageTotalRows"
          :page-size="pageArr.pageListRows"
          @current-change="PageCurrent">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettlementDetails",
  data() {
    return {
      RevenSelCheckbox:'RevenSel-checkbox',

      formData: {
        projectName: '',
        order_time: '',
      },
      pageArr: {
        pageTotalRows: 100,  //总条数
        pageListRows: 20, //每页个数
      },

      btnState: {
        btnSearchLoad: false,
      },

      tableStaff: [
        {
          shop: '店铺2',
          project: '项目2',
          state: 0,
          start_time: '1608538812',
          end_time: '1609136676',
        },
        {
          shop: '店铺1',
          project: '项目1',
          state: 1,
          start_time: '1608452412',
          end_time: '1609136676',
        },
        {
          shop: '店铺3',
          project: '项目3',
          state: 1,
          start_time: '1608625212',
          end_time: '1609136676',
        },
        {
          shop: '店铺4',
          project: '项目4',
          state: 1,
          start_time: '1609136900',
          end_time: '1609136800',
        },
      ],
      projectArr: [
        {
          name: 'shop1',
          value: '店铺1',
        },
        {
          name: 'shop2',
          value: '店铺2',
        },
        {
          name: 'shop3',
          value: '店铺3',
        },
        {
          name: 'shop4',
          value: '店铺4',
        }
      ],

      checkedRows: [],  //选中的值

    }
  },
  methods: {

    chooseProject(val){
      console.log(val);
    },

    /* 1.10、 编辑选中 */
    checkedStaff(val) {
      console.log(val);
      this.checkedRows = val;
    },

    //点击行触发，选中或不选中复选框
    handleRowClick(row, column, event) {
      this.$refs.multipleTable.toggleRowSelection(row);
    },

    /*搜索*/
    FnSearchShop() {
      console.log(this.formData);
      this.GLOBAL.btnStateChange(this, 'btnState', 'btnSearchLoad');
    },

    /*分页 */
    PageCurrent(page) {
      console.log(page)
      // this.staffPage = page;
      // this.getStaffIndex();
    },
  },
}
</script>

<style lang="scss">
.RevenSel-checkbox {
  /*selecet 模拟 checkbox*/
  .el-select-dropdown__item.selected::after {
    content: "";
  }

  .el-select-dropdown__item.selected .check {
    background-color: #005ad4;
    border-color: #005ad4;
  }

  .el-select-dropdown__item.selected {
    span {
      font-weight: 400;
    }
  }

  .el-select-dropdown__item.selected .check:after {
    transform: rotate(45deg) scaleY(1);
  }

  .el-select-dropdown__item .check::after {
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform .15s ease-in .05s;
    transform-origin: center;
  }

  .el-select-dropdown__item .check {
    display: inline-block;
    position: relative;
    top: 2px;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46);
  }

}
</style>