(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd18a"],{"2b15":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{attrs:{title:"批量添加",visible:t.wafBatRuleVisible,width:"40%","close-on-click-modal":!1},on:{"update:visible":function(a){t.wafBatRuleVisible=a}}},[e("div",{staticClass:"modal-body col-sm-12"},[e("el-row",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ips,expression:"ips"}],staticStyle:{width:"100%"},attrs:{rows:"10",placeholder:"www.abc.com;;1.1.1.1,2.2.2.2:81\nwww.ab1c.com;;1.1.1.1:88\nwww.ab2c.com;;1.1.1.1,2.2.2.2 backup"},domProps:{value:t.ips},on:{input:function(a){a.target.composing||(t.ips=a.target.value)}}}),e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(' 内容以";;"方式进行分割\n\t\t\t')])],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.wafBatRuleVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.addData}},[t._v("添加")])],1)])},o=[],s=(e("cadf"),e("551c"),e("097d"),{data:function(){return{wafBatRuleVisible:!1,ips:""}},created:function(){},methods:{addData:function(){this.$emit("diagAdd",this.ips)}},watch:{$route:function(t,a){}}}),l=s,c=e("2877"),n=Object(c["a"])(l,i,o,!1,null,"4c83bfe0",null);a["default"]=n.exports}}]);