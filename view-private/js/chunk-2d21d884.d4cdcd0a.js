(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d884"],{d266:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:t.title,visible:t.pageVisible,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(e){t.pageVisible=e}}},[n("el-dialog",{attrs:{title:t.contentTitle+"选项:",visible:t.contentVisible,width:"45%","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(e){t.contentVisible=e}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.headerVisible,expression:"headerVisible"}],staticStyle:{"margin-bottom":"20px"}},[n("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v("header属性:\r\n\t\t\t\t\t\t\t"),n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.headerContentArr[0],callback:function(e){t.$set(t.headerContentArr,0,e)},expression:"headerContentArr[0]"}})],1)]),n("el-col",{attrs:{span:12}},[n("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v("出现位置:\r\n\t\t\t\t\t\t\t"),n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.headerContentArr[1],callback:function(e){t.$set(t.headerContentArr,1,e)},expression:"headerContentArr[1]"}})],1)]),n("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:24}},[n("h5",[n("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("   header属性: 查找的header属性；默认参数：string")])]),n("el-col",{attrs:{span:24}},[n("h5",[n("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("   出现位置：查找的header属性出现的位置；默认参数any/end")])])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:""===t.contentTitle,expression:"contentTitle === '' "}],staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[n("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v("匹配的内容等于:\r\n\t\t\t\t\t\t"),n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.headerValue,callback:function(e){t.headerValue=e},expression:"headerValue"}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:"in"===t.contentTitle,expression:"contentTitle === 'in' "}],staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[n("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v("匹配的内容包含:\r\n\t\t\t\t\t\t"),n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.headerValue,callback:function(e){t.headerValue=e},expression:"headerValue"}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:"@token@"===t.contentTitle,expression:"contentTitle === '@token@' "}],staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[n("el-input",{attrs:{placeholder:"true",disabled:""},model:{value:t.headerValue,callback:function(e){t.headerValue=e},expression:"headerValue"}})],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"reg"===t.contentTitle,expression:"contentTitle === 'reg' "}]},[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("正则参数：")]),n("el-checkbox-group",{model:{value:t.regCheckList,callback:function(e){t.regCheckList=e},expression:"regCheckList"}},t._l(t.jioContent,function(e,l){return n("div",{key:l},[l<3?n("el-col",{attrs:{span:8}},[n("el-checkbox",{attrs:{label:e.name}},[t._v(" "+t._s(e.label)+" ")])],1):n("div",[n("div",3===l?[n("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{span:24}},[n("WafDivider")],1)]:[n("el-col",{attrs:{span:12}},[n("el-checkbox",{attrs:{label:e.name}},[t._v(" "+t._s(e.label)+" ")])],1)],1)])],1)}))],1)],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticStyle:{"margin-bottom":"10px","margin-top":"20px"}},[t._v("正则匹配内容：")]),n("div",[n("el-input",{attrs:{placeholder:"请输入正则表达式"},model:{value:t.regContentValue,callback:function(e){t.regContentValue=e},expression:"regContentValue"}})],1)])],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"list"===t.contentTitle||"in_list"===t.contentTitle||"start_list"===t.contentTitle||"end_list"===t.contentTitle||"rein_list"===t.contentTitle||"restart_list"===t.contentTitle||"reend_list"===t.contentTitle,expression:"contentTitle === 'list' || contentTitle === 'in_list' || contentTitle === 'start_list' || contentTitle === 'end_list' || contentTitle === 'rein_list' || contentTitle === 'restart_list' || contentTitle === 'reend_list' "}]},[n("div",{staticStyle:{width:"100%"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.listContentValue,callback:function(e){t.listContentValue=e},expression:"listContentValue"}}),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",round:""},on:{click:function(e){t.addList(t.contentTitle)}}},[t._v("添加")])],1),t._l(t.listContentArr,function(e,l){return n("div",{staticStyle:{width:"100%","margin-top":"10px"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{value:e,disabled:""}}),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger",round:""},on:{click:function(e){t.removeList(t.contentTitle,l)}}},[t._v("删除")])],1)})],2),n("div",{directives:[{name:"show",rawName:"v-show",value:"dict"===t.contentTitle,expression:"contentTitle === 'dict' "}]},[n("div",{staticStyle:{width:"100%"}},[n("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"请输入内容"},model:{value:t.dictContentValue,callback:function(e){t.dictContentValue=e},expression:"dictContentValue"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.dictNegate,expression:"dictNegate"}],staticStyle:{width:"20%",height:"39px"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.dictNegate=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"true"}},[t._v("true")]),n("option",{attrs:{value:"false"}},[t._v("false")])]),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",round:""},on:{click:function(e){t.addList(t.contentTitle)}}},[t._v("添加")])],1),t._l(t.dictContentArr,function(e,l,i){return n("div",{staticStyle:{width:"100%","margin-top":"10px"}},[n("div",{staticStyle:{width:"80%",height:"40px",border:"1px solid #dcdfe6","text-align":"center","line-height":"40px",display:"inline-block"}},[t._v(t._s(l)+":"+t._s(e))]),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger",round:""},on:{click:function(e){t.removeList(t.contentTitle,l)}}},[t._v("删除")])],1)})],2),n("div",{directives:[{name:"show",rawName:"v-show",value:"len"===t.contentTitle,expression:"contentTitle === 'len' "}]},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("label",{staticClass:"label",staticStyle:{height:"40px","line-height":"40px"}},[t._v("值1:\r\n\t\t\t\t\t\t\t"),n("el-input",{staticStyle:{width:"80%"},model:{value:t.lenContentArr[0],callback:function(e){t.$set(t.lenContentArr,0,e)},expression:"lenContentArr[0]"}})],1)]),n("el-col",{attrs:{span:12}},[n("label",{staticClass:"label",staticStyle:{height:"40px","line-height":"40px"}},[t._v("值2:\r\n\t\t\t\t\t\t\t"),n("el-input",{staticStyle:{width:"80%"},model:{value:t.lenContentArr[1],callback:function(e){t.$set(t.lenContentArr,1,e)},expression:"lenContentArr[1]"}})],1)]),n("el-col",{staticStyle:{"margin-top":"10px"},attrs:{span:24}},[n("h5",[n("span",{staticStyle:{color:"red"}},[t._v("* ")]),n("span",[t._v("值1: 表示长度等于大于的数字(>=); ")])])]),n("el-col",{attrs:{span:24}},[n("h5",[n("span",{staticStyle:{color:"red"}},[t._v("* ")]),n("span",[t._v("值2:表示长度等于小于的数字(<=)")])])])],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.pushContent}},[t._v("确 定")]),n("el-button",{on:{click:t.cancelContent}},[t._v("取 消")])],1)]),n("div",{staticClass:"modal-body col-sm-12"},[n("el-row",[n("el-col",[t._v("\r\n\t\t\t\t\t规则名称:"),n("el-input",{staticStyle:{width:"300px"},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),n("el-col",{staticClass:"custom-col"},[n("label",{attrs:{for:""}},[t._v("规则开关: ")]),n("el-radio",{attrs:{label:"on"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("开启")]),n("el-radio",{attrs:{label:"off"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("关闭")]),n("span",{staticStyle:{color:"red","margin-left":"20px"}},[t._v("*")]),t._v("开启表示启用自定义拦截信息配置，否则仅显示默认拦截信息\r\n\t\t\t\t")],1)],1),n("el-row",{staticStyle:{"margin-top":"20px"}},[n("el-table",{ref:"multipleTable",attrs:{data:t.results}},[n("el-table-column",{attrs:{label:"匹配条件",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n\t\t\t\t\t\t\t"+t._s(e.row.condition)+"\r\n\t\t\t\t\t\t")]}}])}),n("el-table-column",{attrs:{label:"匹配符",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{disabled:!0},model:{value:e.row.symbol,callback:function(n){t.$set(e.row,"symbol",n)},expression:"scope.row.symbol"}},[n("el-select",{staticStyle:{width:"140px"},attrs:{slot:"prepend"},on:{change:function(n){t.selectSymbol(e.$index,e.row)}},slot:"prepend",model:{value:e.row.symbol,callback:function(n){t.$set(e.row,"symbol",n)},expression:"scope.row.symbol"}},t._l(t.symbol_options,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),"reg"==e.row.symbol?n("div",{staticStyle:{color:"red"}},[t._v("\r\n\t\t\t\t\t\t\t\t"+t._s(e.row.jioRegData)+"\r\n\t\t\t\t\t\t\t")]):t._e()]}}])}),n("el-table-column",{attrs:{label:"取反",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-select",{model:{value:e.row.negate,callback:function(n){t.$set(e.row,"negate",n)},expression:"scope.row.negate"}},t._l(t.negate_options,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]}}])}),n("el-table-column",{attrs:{label:"匹配内容","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{on:{click:function(n){t.selectContent(e.row,e.$index)}}},["@token@"==e.row.symbol?n("div",[n("el-input",{attrs:{placeholder:"请输入内容",disabled:e.row.disabled},model:{value:e.row.content,callback:function(n){t.$set(e.row,"content",n)},expression:"scope.row.content"}})],1):n("div",[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.row.content,callback:function(n){t.$set(e.row,"content",n)},expression:"scope.row.content"}})],1)])]}}])})],1)],1),n("el-row",{staticStyle:{"margin-top":"20px"}},[n("h4",[n("strong",[t._v("频率配置：")])]),n("el-table",{ref:"multipleTable",attrs:{data:t.network}},[n("el-table-column",{attrs:{label:"匹配条件",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n\t\t\t\t\t\t\t"+t._s(e.row.condition)+"\r\n\t\t\t\t\t\t")]}}])}),n("el-table-column",{attrs:{label:"访问次数",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.maxReqs,callback:function(n){t.$set(e.row,"maxReqs",n)},expression:"scope.row.maxReqs"}})]}}])}),n("el-table-column",{attrs:{label:"检查时长(s)",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.pTime,callback:function(n){t.$set(e.row,"pTime",n)},expression:"scope.row.pTime"}})]}}])}),n("el-table-column",{attrs:{label:"封锁时常(s)","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.blackTime,callback:function(n){t.$set(e.row,"blackTime",n)},expression:"scope.row.blackTime"}})]}}])})],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.pageVisible=!1}}},[t._v("取 消")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:"添加"===t.title,expression:"title === '添加' "}],attrs:{type:"primary"},on:{click:t.addData}},[t._v("添加")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:"编辑"===t.title,expression:"title === '编辑' "}],attrs:{type:"primary"},on:{click:t.addData}},[t._v("编辑")])],1)],1)},i=[],a=(n("a481"),n("6b54"),n("28a5"),function(){return n.e("chunk-24bbae2e").then(n.bind(null,"0882"))}),o={data:function(){return{checked1:!0,title:"",pageVisible:!1,id:"",state:"off",results:[],network:[],contentTitle:"",contentVisible:!1,contentIndex:0,regCheckList:[],regContentValue:"",listContentValue:"",listContentArr:[],dictContentValue:"",dictNegate:!0,dictContentArr:{},lenContentArr:[0,0],headerValue:"",headerVisible:!1,headerContentArr:["sessionss","any"],negate_options:[{value:!1,label:"false"},{value:!0,label:"true"}],symbol_options:[{value:"",label:"等于"},{value:"list",label:"数组"},{value:"dict",label:"字典"},{value:"start_list",label:"开头列表"},{value:"restart_list",label:"开头扩展列表"},{value:"end_list",label:"结尾列表"},{value:"reend_list",label:"结尾扩展列表"},{value:"in",label:"包含"},{value:"in_list",label:"包含列表"},{value:"rein_list",label:"包含扩展列表"},{value:"len",label:"长度"},{value:"reg",label:"正则"}],jioContent:[{label:"大小写敏感 i",name:"i",index:0},{label:"启用JIT编译 j",name:"j",index:1},{label:"缓存 o",name:"o",index:2},{label:"单行模式 s",name:"s",index:3},{label:"锚定模式 a",name:"a",index:4},{label:"DFA模式 d",name:"d",index:5},{label:"扩展模式 x",name:"x",index:6},{label:"允许重复命名子模式 D",name:"D",index:7},{label:"启用Javescript兼容模式 J",name:"J",index:8},{label:"UTF-8模式 u * 需要PCRE库加上--enable-utf8",name:"u",index:9},{label:"UTF-8模式 U  * 同u模式，但不进行字符串有效性检查",name:"U",index:10}]}},created:function(){},methods:{addData:function(){this.$emit("diagAdd",this.title)},addList:function(t){switch(t){case"dict":!0===this.dictNegate||"true"===this.dictNegate?this.$set(this.dictContentArr,this.dictContentValue,!0):this.$set(this.dictContentArr,this.dictContentValue,!1);break;default:this.listContentArr.push(this.listContentValue);break}},removeList:function(t,e){switch(t){case"dict":this.$delete(this.dictContentArr,e);break;default:this.listContentArr.splice(e,1);break}},selectSymbol:function(t){this.results[t]["content"]="",this.regCheckList=[],this.regContentValue="",this.listContentArr="",this.listContentArr=[],this.dictContentValue="",this.dictContentArr={},this.lenContentArr=[0,0]},selectContent:function(t,e){var n=this,l=String(t.symbol);switch(l){case"":n.contentIndex=e,n.contentTitle=l,n.contentVisible=!1;break;case"in":n.contentIndex=e,n.contentTitle=l,n.contentVisible=!1;break;case"@token@":n.results[e]["content"]="true",n.results[e]["disabled"]=!0,n.contentIndex=e,n.contentTitle=l,n.contentVisible=!1;break;case"dict":n.contentIndex=e,n.contentTitle=l,n.listContentArr=t["content"],n.contentVisible=!0;break;case"reg":n.contentIndex=e,n.contentTitle=l,n.regCheckList=t["jioRegData"].split(""),n.regContentValue=t["content"],n.contentVisible=!0;break;default:n.contentIndex=e,n.contentTitle=l,n.listContentArr=t["content"].split(","),n.contentVisible=!0;break}},pushContent:function(){var t=String(this.results[this.contentIndex]["symbol"]);switch(t){case"len":this.results[this.contentIndex]["content"]=this.lenContentArr.toString();break;case"reg":var e=this.regCheckList.map(function(t){return t}).toString().replace(/[,]/g,"");this.results[this.contentIndex]["jioRegData"]=e,this.results[this.contentIndex]["content"]=this.regContentValue;break;case"dict":this.results[this.contentIndex]["content"]=JSON.stringify(this.dictContentArr);break;default:var n=this.listContentArr.map(function(t){return t}).toString().replace(/[]/g,"");this.results[this.contentIndex]["content"]=n;break}this.contentVisible=!1},cancelContent:function(){this.headerVisible=!1,this.contentVisible=!1}},components:{WafDivider:a},watch:{$route:function(t,e){}}},s=o,r=n("2877"),c=Object(r["a"])(s,l,i,!1,null,"f31345ae",null);e["default"]=c.exports}}]);