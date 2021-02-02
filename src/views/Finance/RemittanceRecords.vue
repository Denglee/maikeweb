<template>
   <div class="public-main">

      <el-form :model="FormSearch" class="public-form" ref="refRoleForm" @submit.native.prevent
               label-width="120px" label-position="left" :inline="true">
         <el-form-item label="关键词" prop="name">
            <el-input v-model="FormSearch.name" class="public-input" autocomplete="off" placeholder="请输入"
                      clearable></el-input>
         </el-form-item>

         <el-button @click="diaState.diaSetTr = true" class="public-btn">设置</el-button>

      </el-form>

      <!--管理-->
      <customThead :TrCheckedArr="TrCheckedArr" pageRefs="pageRecords" :diaSetTr="diaState.diaSetTr"
                   @closeDia='closeDia'></customThead>

      <el-table :data="tableData" border ref="refTable">
         <el-table-column type="selection" width="55" align="center"></el-table-column>
         <el-table-column v-if="TrCheckedArr[0].iState" prop="name" label="名称" align="center"></el-table-column>
         <el-table-column v-if="TrCheckedArr[1].iState" prop="select" label="性别" align="center"></el-table-column>
         <el-table-column v-if="TrCheckedArr[2].iState" prop="kafang" label="年龄" align="center"></el-table-column>
         <el-table-column v-if="TrCheckedArr[3].iState" prop="fengbi" label="时间" align="center"></el-table-column>
         <el-table-column v-if="TrCheckedArr[4].iState" prop="isETF" label="事件" align="center"></el-table-column>
         <el-table-column v-if="TrCheckedArr[5].iState" prop="range" label="地点" align="center"></el-table-column>
      </el-table>


      <div class="edit_container">
         <quill-editor
            class="quill-editor"
            style="height: 400px"
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
         </quill-editor>
      </div>

   </div>
</template>

<script>
import customThead from '@/components/publicPage/customThead'

import {quillEditor} from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
   name: "RemittanceRecords", //回款记录

   data() {
      // 工具栏配置
      const toolbarOptions = [
         ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
         ["blockquote", "code-block"], //引用，代码块
         // [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
         [{list: "ordered"}, {list: "bullet"}], //列表
         [{script: "sub"}, {script: "super"}], // 上下标
         [{indent: "-1"}, {indent: "+1"}], // 缩进
         [{direction: "rtl"}], // 文本方向
         [{size: ["small", false, "large", "huge"]}], // 字体大小
         [{header: [1, 2, 3, 4, 5, 6, false]}], //几级标题
         [{color: []}, {background: []}], // 字体颜色，字体背景颜色
         [{font: ['微软雅黑']}], //字体
         [{align: []}], //对齐方式
         ["clean"], //清除字体样式
         ["image",], //上传图片、上传视频
      ];

      return {
         content: ``,
         editorOption: {
            modules: {
               toolbar: toolbarOptions,
            },
            placeholder: "请输入正文",
         },

         diaState: {
            diaSetTr: false,
         },
         FormSearch: {},
         TrCheckedArr: [
            {title: "名称", iState: true,},
            {title: "性别", iState: false,},
            {title: "年龄", iState: true,},
            {title: "时间", iState: true,},
            {title: "事件", iState: true,},
            {title: "地点", iState: true,},
         ],
         tableData: [],
      }
   },
   computed: {
      editor() {
         return this.$refs.myQuillEditor.quill;
      },
   },
   methods: {
      onEditorReady(editor) { // 准备编辑器

      },

      onEditorBlur() {
         console.log(this.content);
      }, // 失去焦点事件
      onEditorFocus() {
      }, // 获得焦点事件
      onEditorChange() {
      }, // 内容改变事件

      closeDia() {
         let that = this;
         this.diaState.diaSetTr = false;
         this.$nextTick(() => {
            that.$refs.refTable.doLayout();
         });
      },
   },

   created() {

   },
   components: {
      customThead,
      quillEditor,
   }
}
</script>
<style>
.ql-snow .ql-tooltip[data-mode="link"]::before {
   content: "请输入链接地址:";
}

.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
   border-right: 0px;
   content: "保存";
   padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode="video"]::before {
   content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
   content: "14px";
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
   content: "10px";
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
   content: "18px";
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
   content: "32px";
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
   content: "文本";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
   content: "标题1";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
   content: "标题2";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
   content: "标题3";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
   content: "标题4";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
   content: "标题5";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
   content: "标题6";
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
   content: "标准字体";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
   content: "衬线字体";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
   content: "等宽字体";
}
</style>
