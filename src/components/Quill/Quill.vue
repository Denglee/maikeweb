<template>
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
</template>

<script>
import {quillEditor} from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

// import * as Quill from 'quill'
// let fontSizeStyle = Quill.import('attributors/style/size')
// fontSizeStyle.whitelist = ['12px', '14px', '16px', '20px', '24px', '36px']
// Quill.register(fontSizeStyle, true)

export default {
    name: "Quill",
    data(){
       // let fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];
       // 工具栏配置
       const toolbarOptions = [
          ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
          ["blockquote", "code-block"], //引用，代码块
          // [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
          [{list: "ordered"}, {list: "bullet"}], //列表
          [{script: "sub"}, {script: "super"}], // 上下标
          [{indent: "-1"}, {indent: "+1"}], // 缩进
          [{direction: "rtl"}], // 文本方向
          [{size: [''] }], // 字体大小
          [{header: [1, 2, 3, 4, 5, 6, false]}], //几级标题
          [{color: []}, {background: []}], // 字体颜色，字体背景颜色
          [{font: ['']  }], //字体
          [{align: []}], //对齐方式
          ["clean"], //清除字体样式
          ["image",], //上传图片、上传视频
       ];
     return{
        content: ``,
        editorOption: {
           modules: {
              toolbar: {
                 container: toolbarOptions
              },
           },
           placeholder: "请输入正文",
        },
     }
    },
   computed: {
      editor() {
         return this.$refs.myQuillEditor.quill;
      },
   },
    methods:{
       onEditorReady(editor) { // 准备编辑器

       },
       onEditorBlur() {
          console.log(this.content);
       }, // 失去焦点事件
       onEditorFocus() {
       }, // 获得焦点事件
       onEditorChange() {
       }, // 内容改变事件
    },
   components:{   quillEditor,},
    created(){

    },
}
</script>
<style>
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=SimSun]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=SimSun]::before {
   content: "宋体";
   font-family: "SimSun"!important;
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=SimHei]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=SimHei]::before {
   content: "黑体";
   font-family: "SimHei";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Microsoft-YaHei]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Microsoft-YaHei]::before {
   content: "微软雅黑";
   font-family: "Microsoft YaHei";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=KaiTi]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=KaiTi]::before {
   content: "楷体";
   font-family: "KaiTi"!important;
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=FangSong]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=FangSong]::before {
   content: "仿宋";
   font-family: "FangSong";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Arial]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Arial]::before {
   content: "Arial";
   font-family: "Arial";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Times-New-Roman]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Times-New-Roman]::before {
   content: "Times New Roman";
   font-family: "Times New Roman";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=sans-serif]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=sans-serif]::before {
   content: "sans-serif";
   font-family: "sans-serif";
}

.ql-font-SimSun {
   font-family: "SimSun";
}
.ql-font-SimHei {
   font-family: "SimHei";
}
.ql-font-Microsoft-YaHei {
   font-family: "Microsoft YaHei";
}
.ql-font-KaiTi {
   font-family: "KaiTi";
}
.ql-font-FangSong {
   font-family: "FangSong";
}
.ql-font-Arial {
   font-family: "Arial";
}
.ql-font-Times-New-Roman {
   font-family: "Times New Roman";
}
.ql-font-sans-serif {
   font-family: "sans-serif";
}

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

/*.ql-snow .ql-picker.ql-size .ql-picker-label::before,*/
/*.ql-snow .ql-picker.ql-size .ql-picker-item::before {*/
/*   content: "14px";*/
/*}*/

/*.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,*/
/*.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {*/
/*   content: "10px";*/
/*}*/

/*.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,*/
/*.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {*/
/*   content: "18px";*/
/*}*/

/*.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,*/
/*.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {*/
/*   content: "32px";*/
/*}*/

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