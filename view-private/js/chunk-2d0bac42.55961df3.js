(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bac42"],{3939:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-card",{attrs:{shadow:"never"}},[s("wafFilterDiag",{ref:"viewDiag",on:{diagAdd:t.setData}}),s("el-row",{staticStyle:{"margin-bottom":"20px","margin-left":"10px"},attrs:{gutter:10}},[s("div",{staticStyle:{width:"300px",float:"left"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索内容"},model:{value:t.ruleSearch,callback:function(e){t.ruleSearch=e},expression:"ruleSearch"}})],1),s("div",{staticStyle:{float:"right"}},[s("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.showDiag}},[t._v("添加规则")]),s("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.setRulePriority}},[t._v("应用优先级")]),s("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.saveRule}},[t._v("保存为JSON")])],1)]),s("wafDivider"),s("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px","margin-left":"10px"},attrs:{gutter:10}},[s("el-col",{attrs:{span:4}},[t._v("\n\t\t\t\t域名方法过滤 * 白名单: \n\t\t\t\t"),s("el-tooltip",{attrs:{content:t.state,placement:"top"}},[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"on","inactive-value":"off"},on:{change:t.stateClick},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)],1),s("el-col",{attrs:{span:4}},[s("span",{staticStyle:{color:"red"}},[t._v("\n\t\t\t\t\t(点击应用生效)\n\t\t\t\t")]),t._v("\n\t\t\t\t当前数量：\n\t\t\t\t"),s("i",{staticClass:"red-fonts"},[t._v("\n\t\t\t\t\t"+t._s(t.count?t.count:0)+"\n\t\t\t\t")])])],1),s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark",data:t.results}},[s("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.$index+1)+"\n\t\t\t\t")]}}])}),s("el-table-column",{attrs:{label:"开关",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t._f("matchState")(e.row.state))+"\n\t\t\t\t")]}}])}),s("el-table-column",{attrs:{label:"域名","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t"+t._s(e.row.hostname[0])+"\n\t\t\t\t")]}}])}),s("el-table-column",{attrs:{label:"域名匹配","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t"+t._s(t._f("match")(e.row.hostname))+"\n\t\t\t\t")]}}])}),s("el-table-column",{attrs:{label:"取反",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t"+t._s(void 0===e.row.hostname[2]?"false":e.row.hostname[2])+"\n\t\t\t\t")]}}])}),s("el-table-column",{attrs:{label:"支持的方法","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t"+t._s(e.row.method[0])+"\n\t\t\t\t")]}}])}),s("el-table-column",{attrs:{label:"操作",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(s){t.delData(e.$index+1)}}},[s("i",{staticClass:"fa fa-close"}),t._v(" 删除")]),s("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(s){t.editDiag(e.row,e.$index)}}},[s("i",{staticClass:"fa fa-edit"}),t._v(" 编辑")]),s("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(s){t.up(e.$index)}}},[s("i",{staticClass:"fa fa-chevron-up"}),t._v(" 上移")]),s("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(s){t.down(e.$index)}}},[s("i",{staticClass:"fa fa-chevron-down"}),t._v(" 下移")]),s("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(s){t.upIndex(e.$index)}}},[s("i",{staticClass:"fa fa-hand-o-up"}),t._v(" 置顶")]),s("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(s){t.downIndex(e.$index)}}},[s("i",{staticClass:"fa fa-hand-o-down"}),t._v(" 置底")])]}}])})],1)],1)],1)},a=[],n=(s("28a5"),s("cadf"),s("551c"),s("097d"),function(){return s.e("chunk-24bbae2e").then(s.bind(null,"0882"))}),o=function(){return s.e("chunk-2d0bd626").then(s.bind(null,"2c87"))},r={data:function(){return{ruleSearch:"",temp:[],state:"on",count:0,results:[],editIndex:0}},mounted:function(){this.initData()},methods:{setRulePriority:function(){var t=this.secReq(this.api.globalConfig,"post",{action:"set",mod:"host_method_Mod",value:JSON.stringify(this.results)});"ok"===t.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},saveRule:function(){var t=this.secReq(this.api.save2js,"post",{action:"save",mod:"host_method_Mod"});t.hasOwnProperty("code")&&"ok"===t.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},initData:function(){var t=this.secReq(this.api.globalConfig,"post",{action:"get",mod:"host_method_Mod"});if("ok"===t.code){this.count=t.msg.count,this.state=t.msg.state;var e=[];for(var s in t.msg)"state"!==s&&"count"!==s&&e.push(t.msg[s]);this.results=e,this.temp=e}else this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},stateClick:function(){var t,e;"on"===this.state?(t={action:"set",mod:"base",id:"host_method_Mod",value:"on"},e=this.secReq(this.api.globalConfig,"post",t),"ok"==e.code?(this.state="on",this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3})):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3})):"off"===this.state&&(t={action:"set",mod:"base",id:"host_method_Mod",value:"off"},e=this.secReq(this.api.globalConfig,"post",t),"ok"==e.code?(this.state="off",this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3})):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3}))},delData:function(t){var e,s;e={action:"del",mod:"host_method_Mod",id:parseInt(t)},s=this.secReq(this.api.globalConfig,"post",e),"ok"==s.code?(this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}),this.initData()):this.$notify({type:"warning",title:"提示",message:s.msg,duration:4e3})},up:function(t){0!==t&&this.swapItems(this.results,t,t-1)},upIndex:function(t){0!==t&&this.swapItems(this.results,t,0,"up")},down:function(t){t!==this.results.length-1&&this.swapItems(this.results,t,t+1)},downIndex:function(t){t!==this.results.length-1&&this.swapItems(this.results,t,0,"down")},swapItems:function(t,e,s,i){return"up"==i?(t.unshift(t[e]),t.splice(e+1,1),t):"down"==i?(t.push(t[e]),t.splice(e,1),t):(t[e]=t.splice(s,1,t[e])[0],t)},showDiag:function(){this.$refs.viewDiag.id="",this.$refs.viewDiag.state="off",this.$refs.viewDiag.checkList=[],this.$refs.viewDiag.results=[{condition:"host",symbol:"",negate:"false",content:"",jioRegData:"",disabled:!1}],this.$refs.viewDiag.title="添加",this.$refs.viewDiag.pageVisible=!0},editDiag:function(t,e){var s;this.editIndex=e+1,this.$refs.viewDiag.id=t.id,this.$refs.viewDiag.state=t.state,s="dict"===t.hostname[1]||"list"===t.hostname[1]?JSON.stringify(t.hostname[0]):t.hostname[0];var i={condition:"host",symbol:t.hostname[1],negate:t.hostname[2],content:s,jioRegData:"",disabled:!1};this.$refs.viewDiag.results=[i];var a=[];for(var n in t.method[0])a.push(n);this.$refs.viewDiag.checkList=a,this.$refs.viewDiag.title="编辑",this.$refs.viewDiag.pageVisible=!0},formatData:function(t,e){var s,i,a,n,o=t["condition"],r=t["symbol"];if("adv"===e)if("headers"===o||"args"===o||"posts"===o||"post_form"===o){switch(r){case"":i=t["content"],a=r;break;case"reg":i=t["content"],a=t["jioRegData"];break;case"dict":i=JSON.parse(t["content"]),a=r;break;case"len":var l=t["content"].split(",");i=[parseInt(l[0]),parseInt(l[1])],a=r;break;case"@token@":i=t["content"],a=r;break;default:i=t["content"].split(","),a=r;break}n="false"!==t["negate"]&&!1!==t["negate"],s=[o,[i,a,t["headerArg"],n],t["connector"]]}else{switch(r){case"":i=t["content"],a=r;break;case"reg":i=t["content"],a=t["jioRegData"];break;case"dict":i=JSON.parse(t["content"]),a=r;break;case"len":l=t["content"].split(",");i=[parseInt(l[0]),parseInt(l[1])],a=r;break;case"@token@":i=t["content"],a=r;break;default:i=t["content"].split(","),a=r;break}n="false"!==t["negate"]&&!1!==t["negate"],s=[o,[i,a,n],t["connector"]]}else{switch(r){case"":i=t["content"],a=r;break;case"reg":i=t["content"],a=t["jioRegData"];break;case"dict":i=JSON.parse(t["content"]),a=r;break;case"len":l=t["content"].split(",");i=[parseInt(l[0]),parseInt(l[1])],a=r;break;case"@token@":i=t["content"],a=r;break;default:i=JSON.parse(t["content"]),a=r;break}n="false"!=t["negate"]&&0!=t["negate"],s=[i,a,n]}return s},setData:function(t){if("添加"===t){a=this.$refs.viewDiag.id,n=this.$refs.viewDiag.state;for(var e={},s=0;s<this.$refs.viewDiag.checkList.length;s++)e[this.$refs.viewDiag.checkList[s]]=!0;var i=[e,"dict"];o=this.formatData(this.$refs.viewDiag.results[0],""),r={id:a,state:n,method:i,hostname:o},l=this.secReq(this.api.globalConfig,"post",{action:"add",mod:"host_method_Mod",value_type:"json",value:JSON.stringify(r)})}else if("编辑"===t){var a,n,o;a=this.$refs.viewDiag.id,n=this.$refs.viewDiag.state;for(e={},s=0;s<this.$refs.viewDiag.checkList.length;s++)e[this.$refs.viewDiag.checkList[s]]=!0;var r,l;i=[e,"dict"];o=this.formatData(this.$refs.viewDiag.results[0],""),r={id:a,state:n,method:i,hostname:o},l=this.secReq(this.api.globalConfig,"post",{action:"set",mod:"host_method_Mod",value_type:"json",value:JSON.stringify(r),id:parseInt(this.editIndex)})}"ok"===l.code?(this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}),this.initData(),this.editIndex=0):this.$notify({type:"warning",title:"提示",message:l.msg,duration:4e3}),this.$refs.viewDiag.pageVisible=!1}},filters:{match:function(t){if(t){if(""==t[1])return"等于";if("list"==t[1])return"数组";if("dict"==t[1])return"字典"}return""},matchState:function(t){return t?"on"===t?"开启":"关闭":""}},components:{wafDivider:n,wafFilterDiag:o},watch:{$route:function(t,e){},ruleSearch:{handler:function(t,e){this.results=""===t?this.temp:this.results.filter(function(e){if(e.hostname[0].indexOf(t)>=0)return!0})}}}},l=r,c=s("2877"),u=Object(c["a"])(l,i,a,!1,null,null,null);e["default"]=u.exports}}]);