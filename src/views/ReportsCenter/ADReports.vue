<template>
   <div class="tabs-main" style="background-color: #fff;">
      <el-tabs :tab-position="tabPosition" id="tabs-message" v-model="tabActiveName" @tab-click="FnChangeTab">
         <el-tab-pane lazy name="name1" label="SP-广告活动">
            <!--中间部分-->
            <div class="tab-content">
               <el-form class="public-form">
                  <!--            <el-select  v-model="formData.projectName" filterable multiple clearable collapse-tags
                                          popper-class="elSelect-checkbox" class="public-select"  @change = 'chooseProject($event)'>
                                <el-option v-for="(item, index) in projectArr"
                                           :key="index"
                                           :value="item.name"
                                           :label="item.value">
                                  <span class="check"></span>
                                  <span style="margin-left: 8px">{{item.value}}</span>
                                </el-option>
                              </el-select>

                              <el-date-picker
                                  class="public-datePicker"
                                  v-model="formData.order_time"
                                  type="daterange"
                                  unlink-panels
                                  range-separator="-"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期"
                                  value-format="yyyy-MM-dd">
                              </el-date-picker>-->

                  <!--搜索-->
                  <el-button icon="el-icon-search" @click="FnSearchShop" :loading="btnState.btnSearchLoad"
                             class="public-btn">搜索
                  </el-button>

                  <!--设置-->
                  <el-popover
                     placement="bottom"
                     width="400"
                     trigger="manual"
                     v-model="diaState.diaShowPopSet"
                     label-width='120px'>
                     <el-form class="public-form" :model="setForm">

                        <el-form-item label="展示量">
                           <div class="public-selInp">
                              <el-select placeholder="" v-model="selInp">
                                 <el-option value=">"> ></el-option>
                                 <el-option value="<"> <</el-option>
                                 <el-option value="="> =</el-option>
                              </el-select>
                              <el-input placeholder="请输入"></el-input>
                           </div>
                        </el-form-item>

                        <el-form-item label="点击量">
                           <div class="public-selInp">
                              <el-select placeholder="" v-model="selInp2">
                                 <el-option value=">"> ></el-option>
                                 <el-option value="<"> <</el-option>
                                 <el-option value="="> =</el-option>
                              </el-select>
                              <el-input placeholder="请输入"></el-input>
                           </div>
                        </el-form-item>

                        <div class="formR-main">
                           <el-button type="primary" class="public-btn" :loading="btnState.btnAddRankMonit"
                                      @click="diaState.diaShowPopSet = false">取消
                           </el-button>
                           <el-button type="primary" class="public-btn" :loading="btnState.btnAddRankMonit"
                                      @click="btnState.btnSaveSet = true">保存
                           </el-button>
                        </div>

                     </el-form>

                     <el-button slot="reference" @click="diaState.diaShowPopSet = !diaState.diaShowPopSet"
                                icon="el-icon-setting"></el-button>

                  </el-popover>

               </el-form>

               <!-- 表格-->
               <el-table class="public-table" border
                         :data="tableStaff"
                         @selection-change="checkedStaff"
                         ref="multipleTable"
                         @row-click="handleRowClick">
                  <el-table-column type="selection" width="55"></el-table-column>
                  <el-table-column prop="title" label="消息标题"></el-table-column>

                  <el-table-column prop="lock" label="消息类型">
                     <template slot-scope="scope">
                        <div v-if="scope.row.type == 0 " class="status-connect">跟卖消息</div>
                        <div v-if="scope.row.type == 1 " class="status-break">中差评提醒</div>
                        <div v-if="scope.row.type == 2 " class="status-break">发货提醒</div>
                     </template>
                  </el-table-column>
                  <el-table-column prop="register_time" label="消息时间" sortable>
                     <template slot-scope="scope">
                        <div class="status-connect">{{ scope.row.time | dateFormat }}</div>
                     </template>
                  </el-table-column>

               </el-table>

               <el-pagination
                  background
                  layout="total, prev, pager,next, sizes, jumper"
                  :page-sizes="[10, 20, 50, 100]"
                  :current-page="pageArr.pageNum"
                  :total="pageArr.total"
                  :page-size="pageArr.pageSize"
                  @size-change='sizeChange'
                  @current-change="PageCurrent">
               </el-pagination>
            </div>

         </el-tab-pane>

         <el-tab-pane label="SP-广告组" lazy name="name2">

            <div id="demo1"></div>
            <button type="button" class="btn" @click="getEditorData">获取当前内容</button>
            <h3>内容预览</h3>
            <textarea name="" id="" cols="170" rows="20" readonly v-model="editorData"></textarea>

         </el-tab-pane>

         <el-tab-pane label="SP-推广的商品" lazy name="name3">

         </el-tab-pane>

         <el-tab-pane label="SP-投放报表" lazy name="name4">

         </el-tab-pane>

         <el-tab-pane label="SP-搜索词" lazy name="name5">

         </el-tab-pane>

         <el-tab-pane label="SP-广告位" lazy name="name6">

         </el-tab-pane>

      </el-tabs>
   </div>
</template>

<script>

import Edit from 'wangeditor'

export default {
   name: "ADReports",
   inject: ['reLoad'],
   components: {},
   data() {
      return {
         editor: null,
         editorData: '',

         user_des: '',
         disabled: false,

         tabPosition: 'left',
         tabActiveName: 'name2',

         selInp: '',
         selInp2: '',

         formData: {
            projectName: '',
            order_time: '',
         },
         pageArr: {
            pageTotalRows: 100,  //总条数
            pageListRows: 20, //每页个数
         },
         setForm: {
            type: 1,
         },
         diaState: {
            diaShowPopSet: true,
         },
         btnState: {
            btnSearchLoad: false,
         },

         tableStaff: [
            {
               title: '店铺 Renom 跟读了您的产品 B07W',
               type: 1,
               time: '1608538812',
            },
            {
               title: '店铺 Renom 跟读了您的产品 B07W',
               type: 0,
               time: '1608538812',
            },
            {
               title: '店铺 Renom 跟读了您的产品 B07W',
               type: 2,
               time: '1608538812',
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
      /*页面刷新*/
      FnRefresh() {
         // this.reLoad();
         // window.location.href="http://localhost:8282/ ";
      },

      /*tab 切换点击事件  */
      FnChangeTab(tab, e) {
         console.log(tab);
         console.log(e);
      },

      chooseProject(val) {
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
         console.log(page);
         // this.staffPage = page;
         // this.getStaffIndex();
      },
      sizeChange(size) {
         console.log(size);
      },


      getEditorData() {
         // 通过代码获取编辑器内容
         let data = this.editor.txt.html()
         alert(data)
      }
   },
   mounted() {
      const editor = new Edit(`#demo1`)
      // 配置 onchange 回调函数，将数据同步到 vue 中
      editor.config.onchange = (newHtml) => {
         this.editorData = newHtml
      }
      /*图片上传接口*/
      editor.config.uploadImgServer = '/upload-img';

      /*不需要的设置*/
      editor.config.excludeMenus = [
         'emoticon',
         'video',
         'code',
      ];

      // 创建编辑器
      editor.create()
      this.editor = editor
   },
   beforeDestroy() {
      // 调用销毁 API 对当前编辑器实例进行销毁
      this.editor.destroy()
      this.editor = null
   },
   created() {

      // this.addNum();
   },
}
</script>
