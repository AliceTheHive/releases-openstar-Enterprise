(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3b4ab1a"],{"456d":function(t,e,i){var s=i("4bf8"),a=i("0d58");i("5eda")("keys",function(){return function(t){return a(s(t))}})},"5eda":function(t,e,i){var s=i("5ca1"),a=i("8378"),o=i("79e5");t.exports=function(t,e){var i=(a.Object||{})[t]||Object[t],n={};n[t]=e(i),s(s.S+s.F*o(function(){i(1)}),"Object",n)}},"7f7f":function(t,e,i){var s=i("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in a||i("9e1e")&&s(a,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},ac6a:function(t,e,i){for(var s=i("cadf"),a=i("0d58"),o=i("2aba"),n=i("7726"),r=i("32e9"),l=i("84f2"),c=i("2b4c"),p=c("iterator"),f=c("toStringTag"),d=l.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},u=a(h),m=0;m<u.length;m++){var v,g=u[m],w=h[g],b=n[g],_=b&&b.prototype;if(_&&(_[p]||r(_,p,d),_[f]||r(_,f,g),l[g]=d,w))for(v in s)_[v]||o(_,v,s[v],!0)}},ace1:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{attrs:{shadow:"never"}},[i("wafSiteSetDiag",{ref:"viewDiag",on:{diagAdd:t.setData}}),i("el-row",{staticStyle:{"margin-bottom":"10px","margin-left":"10px"},attrs:{gutter:10}},[i("div",{staticStyle:{float:"right"}},[i("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.showDiag}},[t._v("添加规则")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:"普通规则"===this.tabName,expression:" this.tabName === '普通规则' "}],attrs:{type:"primary",size:"mini",round:""},on:{click:t.setRulePriority}},[t._v("应用优先级")]),i("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.saveRule}},[t._v("保存为JSON")])],1)]),i("wafDivider"),i("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px","margin-left":"10px"},attrs:{gutter:10}},[i("el-col",{attrs:{span:24}},[i("div",{staticStyle:{float:"left"}},[t._v("\n\t\t\t\t\t域名名称: "),i("el-input",{staticStyle:{width:"200px"},attrs:{disabled:""},model:{value:t.host,callback:function(e){t.host=e},expression:"host"}}),t._v("   \n\t\t\t\t\t"),i("a",{attrs:{href:"/manage/domain/set/"}},[t._v("返回防护配置")])],1),i("div",{staticStyle:{float:"right"}},[t._v("\n\t\t\t\t\t当前规则数量：\n\t\t\t\t\t"),i("i",{staticStyle:{color:"red"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.count?t.count:0)+"\n\t\t\t\t\t")])]),i("br"),i("div",{directives:[{name:"show",rawName:"v-show",value:"配置获取真实IP"===t.tabName,expression:"tabName === '配置获取真实IP' "}],staticStyle:{float:"right"}},[i("span",{staticStyle:{color:"red"}},[i("strong",[t._v("默认一个域名对应一个规则，不能添加多个规则")])])])]),i("el-col",{staticClass:"custom-col"},[i("el-col",{staticClass:"custom-col",attrs:{span:8}},[i("label",{attrs:{for:""}},[t._v("拦截开关：")]),i("el-radio",{attrs:{label:"on"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("拦截")]),i("el-radio",{attrs:{label:"off"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("放行")]),i("el-radio",{attrs:{label:"log"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("日志")])],1),i("el-col",{staticClass:"custom-col",attrs:{span:8}},[i("label",{attrs:{for:""}},[t._v("args_HPP 拦截开关：")]),i("el-radio",{attrs:{label:"on"},model:{value:t.args_HPP,callback:function(e){t.args_HPP=e},expression:"args_HPP"}},[t._v("拦截")]),i("el-radio",{attrs:{label:"off"},model:{value:t.args_HPP,callback:function(e){t.args_HPP=e},expression:"args_HPP"}},[t._v("放行")])],1),i("el-col",{staticClass:"custom-col",attrs:{span:8}},[i("label",{attrs:{for:""}},[t._v("posts_HPP 拦截开关：")]),i("el-radio",{attrs:{label:"on"},model:{value:t.posts_HPP,callback:function(e){t.posts_HPP=e},expression:"posts_HPP"}},[t._v("拦截")]),i("el-radio",{attrs:{label:"off"},model:{value:t.posts_HPP,callback:function(e){t.posts_HPP=e},expression:"posts_HPP"}},[t._v("放行")])],1)],1)],1),i("wafDivider"),i("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px","margin-left":"10px"},attrs:{gutter:10}},[i("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.tabClick},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[i("el-tab-pane",{attrs:{label:"普通规则",name:"普通规则"}},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark",data:t.results}},[i("el-table-column",{attrs:{label:"系统ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.systemId)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"规则ID/名称",width:"120","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.ruleId)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"开关",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t._f("matchState")(e.row.protect))+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"匹配条件",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.uri,expression:"scope.row.uri"}],staticStyle:{"border-bottom":"1px dashed #e7eaec"}},[t._v("\n\t\t\t\t\t\t\t\t\turi\n\t\t\t\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.app_ext,expression:"scope.row.app_ext"}]},[t._v("\n\t\t\t\t\t\t\t\t\tapp_ext\n\t\t\t\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.network,expression:"scope.row.network"}]},[t._v("\n\t\t\t\t\t\t\t\t\tapp_ext\n\t\t\t\t\t\t\t\t")])]}}])}),i("el-table-column",{attrs:{label:"匹配符",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.uri,expression:"scope.row.uri"}],staticStyle:{"border-bottom":"1px dashed #e7eaec",overflow:"hidden"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t._f("matchadv")(e.row.uri))+"\n\t\t\t\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.network,expression:"scope.row.network"}]},[t._v("\n\t\t\t\t\t\t\t\t\t网络\n\t\t\t\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.app_ext,expression:"scope.row.app_ext"}]},[t._v("\n\t\t\t\t\t\t\t\t\t高级\n\t\t\t\t\t\t\t\t")])]}}])}),i("el-table-column",{attrs:{label:"取反",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.uri,expression:"scope.row.uri"}],staticStyle:{"border-bottom":"1px dashed #e7eaec"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t._f("matchNegate")(e.row.uri))+"\n\t\t\t\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.network,expression:"scope.row.network"}]},[t._v("\n\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.app_ext,expression:"scope.row.app_ext"}]},[t._v("\n\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t")])]}}])}),i("el-table-column",{attrs:{label:"匹配内容","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.uri,expression:"scope.row.uri"}],staticStyle:{"border-bottom":"1px dashed #e7eaec"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.row.uri)+"\n\t\t\t\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.network,expression:"scope.row.network"}]},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.row.network)+"\n\t\t\t\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.app_ext,expression:"scope.row.app_ext"}]},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.row.app_ext)+"\n\t\t\t\t\t\t\t\t")])]}}])}),i("el-table-column",{attrs:{label:"匹配动作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.action)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"操作",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(i){t.editDiag(e.row,e.$index)}}},[i("i",{staticClass:"fa fa-edit"}),t._v(" 编辑")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.delData(e.row,e.$index)}}},[i("i",{staticClass:"fa fa-close"}),t._v(" 删除")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.up(e.$index)}}},[i("i",{staticClass:"fa fa-chevron-up"}),t._v(" 上移")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.down(e.$index)}}},[i("i",{staticClass:"fa fa-chevron-down"}),t._v(" 下移")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.upIndex(e.$index)}}},[i("i",{staticClass:"fa fa-hand-o-up"}),t._v(" 置顶")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.downIndex(e.$index)}}},[i("i",{staticClass:"fa fa-hand-o-down"}),t._v(" 置底")])]}}])})],1)],1),i("el-tab-pane",{attrs:{label:"配置获取真实IP",name:"配置获取真实IP"}},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark",data:t.realip_results}},[i("el-table-column",{attrs:{label:"域名",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.host)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"类型",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t._f("match")(e.row.option))+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"取反",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(void 0===e.row.negate?"false":e.row.negate)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"来源IPS"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.ips)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"http头名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.http_header)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"操作",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.delData(e.row.host,e.$index)}}},[i("i",{staticClass:"fa fa-close"}),t._v(" 删除")]),i("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(i){t.editDiag(e.row,e.$index)}}},[i("i",{staticClass:"fa fa-edit"}),t._v(" 编辑")])]}}])})],1)],1),i("el-tab-pane",{attrs:{label:"IP规则",name:"IP规则"}},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark",data:t.ip_results}},[i("el-table-column",{attrs:{label:"域名","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.host)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"ip"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.ip)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"动作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.option)+"\n\t\t\t\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.delData(e.row,e.$index)}}},[i("i",{staticClass:"fa fa-close"}),t._v(" 删除")])]}}])})],1)],1)],1)],1)],1)],1)},a=[],o=(i("ac6a"),i("456d"),i("7f7f"),i("28a5"),function(){return i.e("chunk-24bbae2e").then(i.bind(null,"0882"))}),n=function(){return i.e("chunk-1249a9fe").then(i.bind(null,"b0e1"))},r={data:function(){return{ruleSearch:"",temp:[],domain:"",commonData:[],count:0,state:"",args_HPP:"",posts_HPP:"",tabName:"",editIndex:0,host:"",results:[],realip_results:[],ip_results:[]}},mounted:function(){this.domain=this.$route.params["host"],this.tabName="普通规则",this.initData("普通规则")},methods:{setRulePriority:function(){var t=[];for(var e in this.results){var i={};i["id"]=this.results[e]["ruleId"],i["action"]=this.results[e]["action"],i["state"]=this.results[e]["protect"],i["network"]=this.results[e]["network"],i["uri"]=this.results[e]["uri"],t.push(i)}var s=this.secReq(this.api.defHost,"post",{action:"set",host:this.domain,value:JSON.stringify(t)});"ok"===s.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:1500,position:"bottom-right"}):this.$notify({type:"warning",title:"提示",message:s.msg,duration:1500,position:"bottom-right"})},saveRule:function(){var t;"普通规则"===this.tabName?t=this.secReq(this.api.save2js,"post",{action:"save",mod:"all_Mod"}):"配置获取真实IP"===this.tabName?t=this.secReq(this.api.save2js,"post",{action:"save",mod:"realIpFrom_Mod"}):"IP规则"===this.tabName&&(t=this.secReq(this.api.save2js,"post",{action:"save",mod:"ip_Mod"})),t.hasOwnProperty("code")&&"ok"===t.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:1500,position:"bottom-right"}):this.$notify({type:"warning",title:"提示",message:t.msg,duration:1500,position:"bottom-right"})},initData:function(t){if("普通规则"===t){var e,i=this.$route.params["host"];if(e={action:"get",host:i},n=this.secReq(this.api.defHost,"get",e),n.hasOwnProperty("code")&&"ok"==n.code){this.host=i,this.commonData=n.msg["mod"],this.count=n.msg["count"],this.state=n.msg["state"],this.args_HPP=n.msg["args_HPP"],this.posts_HPP=n.msg["posts_HPP"];var s=[];for(var a in n.msg.mod){var o={};o.systemId=parseInt(a)+1,o.ruleId=n.msg.mod[a].id,o.protect=n.msg.mod[a].state,o.action=n.msg.mod[a].action,n.msg.mod[a].uri&&(o.uri=n.msg.mod[a].uri),n.msg.mod[a].network&&(o.network=n.msg.mod[a].network),n.msg.mod[a].app_ext&&(o.app_ext=n.msg.mod[a].app_ext),s.push(o)}this.results=s}else this.$notify({type:"warning",title:"提示",message:n.msg,duration:1500,position:"bottom-right"})}else if("配置获取真实IP"===t){this.count=1;var n=this.secReq(this.api.globalConfig,"post",{action:"get",mod:"realIpFrom_Mod",id:this.domain});if(n.hasOwnProperty("code")&&"ok"===n.code){s=[],o={};o.host=this.domain,n.hasOwnProperty("msg")?(o.option=n.msg.ips[1],o.negate=n.msg.ips[2],o.ips=n.msg.ips[0],o.http_header=n.msg.realipfrom,s.push(o),this.realip_results=s,this.temp=s):(this.realip_results=[],this.temp=[])}else this.realip_results=[],this.$notify({type:"warning",title:"提示",message:n.msg||"无返回值",duration:1500,position:"bottom-right"})}else if("IP规则"===t){n=this.secReq(this.api.defIPselect,"post",{action:"get",host:this.domain});if(n.hasOwnProperty("code")&&"ok"===n.code){this.count=n.msg.count;s=[];for(var a in n.msg)if("state"!==a&&"count"!==a){o={};var r=a.split("_");1==r.length?(o.host="*",o.ip=r[0]):(o.host=r[0],o.ip=r[1]),o.option=n.msg[a],s.push(o)}this.ip_results=s,this.temp=s}else this.$notify({type:"warning",title:"提示",message:n.msg,duration:1500,position:"bottom-right"})}},stateClick:function(){var t,e;t={action:"set",host:this.domain,value:this.state,id:"state"},e=this.secReq(this.api.defHost,"post",t),"ok"==e.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:1500,position:"bottom-right"}):this.$notify({type:"warning",title:"提示",message:e.msg,duration:1500,position:"bottom-right"})},argsHPPClick:function(){var t,e;t={action:"set",host:this.domain,value:this.args_HPP,id:"args_HPP"},e=this.secReq(this.api.defHost,"post",t),"ok"==e.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:1500,position:"bottom-right"}):this.$notify({type:"warning",title:"提示",message:e.msg,duration:1500,position:"bottom-right"})},postsHPPClick:function(){var t,e;t={action:"set",host:this.domain,value:this.posts_HPP,id:"posts_HPP"},e=this.secReq(this.api.defHost,"post",t),"ok"==e.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:1500,position:"bottom-right"}):this.$notify({type:"warning",title:"提示",message:e.msg,duration:1500,position:"bottom-right"})},delData:function(t,e){var i,s;if("普通规则"===this.tabName)i=e+1,s=this.domain,a={action:"del",host:String(s),id:parseInt(i)},o=this.secReq(this.api.defHost,"post",a);else if("配置获取真实IP"===this.tabName){a={action:"del",mod:"realIpFrom_Mod",id:String(this.domain)},o=this.secReq(this.api.globalConfig,"post",a)}else if("IP规则"===this.tabName){var a,o,n;n="*"===t.host?t.ip:t.host+"_"+t.ip,a={action:"del",ip:String(n)},o=this.secReq(this.api.defIP,"post",a)}"ok"==o.code?(this.$notify({type:"success",title:"提示",message:"应用成功",duration:1500,position:"bottom-right"}),this.initData(this.tabName)):this.$notify({type:"warning",title:"提示",message:o.msg,duration:1500,position:"bottom-right"})},tabClick:function(t,e){var i=t.name;this.tabName=i,this.initData(i)},showDiag:function(){"普通规则"===this.tabName?(this.$refs.viewDiag.viewTable="on",this.$refs.viewDiag.id="",this.$refs.viewDiag.state="off",this.$refs.viewDiag.action="deny",this.$refs.viewDiag.uri=[{condition:"uri",symbol:"",negate:"false",content:"",jioRegData:"",disabled:!1,headerData:""}],this.$refs.viewDiag.network=[{condition:"network",maxReqs:"",pTime:"",blackTime:""}],this.$refs.viewDiag.app_ext=[],this.$refs.viewDiag.title="普通规则"):"配置获取真实IP"===this.tabName?(this.$refs.viewDiag.realipfrom="",this.$refs.viewDiag.ips=[{condition:"ips",symbol:"",negate:"false",content:""}],this.$refs.viewDiag.contentIpTitle="",this.$refs.viewDiag.contentIPVisible=!1,this.$refs.viewDiag.title="配置获取真实IP"):"IP规则"===this.tabName&&(this.$refs.viewDiag.timeSwitch=!0,this.$refs.viewDiag._$domain=this.domain,this.$refs.viewDiag.ip="",this.$refs.viewDiag.editTile=!1,this.$refs.viewDiag.ip_value="",this.$refs.viewDiag.title="IP规则"),this.$refs.viewDiag.wafRuleVisible=!0},editDiag:function(t,e){if(this.$refs.viewDiag.timeSwitch=!1,this.$refs.viewDiag.editTile=!0,this.editIndex=e+1,"普通规则"===this.tabName){var i,s;if(i=this.arr2obj(t.uri,""),i["condition"]="uri",t.hasOwnProperty("app_ext")){var a=[];for(var o in t.app_ext)a.push(this.arr2obj(t.app_ext[o],"advanced"));this.$refs.viewDiag.viewTable="off",this.$refs.viewDiag.app_ext=a}else s={condition:"network",maxReqs:t.network["maxReqs"],pTime:t.network["pTime"],blackTime:t.network["blackTime"]},this.$refs.viewDiag.viewTable="on",this.$refs.viewDiag.network=[s];this.$refs.viewDiag.id=t.ruleId,this.$refs.viewDiag.state=t.protect,this.$refs.viewDiag.action=t.action,this.$refs.viewDiag.uri=[i],this.$refs.viewDiag.title="普通规则"}else if("配置获取真实IP"===this.tabName){var n,r,l;this.$refs.viewDiag.realipfrom=t.http_header,n=t.option,r=t.negate||"true"===t.negate?"true":"false",l=t.ips,this.$refs.viewDiag.ips=[{condition:"ips",symbol:n,negate:r,content:JSON.stringify(l)}],this.$refs.viewDiag.title="配置获取真实IP"}else"IP规则"===this.tabName&&(this.$refs.viewDiag._$domain=this.domain,this.$refs.viewDiag.ip=t.ip,this.$refs.viewDiag.ip_value=t.option,this.$refs.viewDiag.title="IP规则");this.$refs.viewDiag.wafRuleVisible=!0},arr2obj:function(t,e){var i,s,a,o,n,r,l,c,p;if(""===e){var f=t[1];if(""===f||"in"===f)s=t[1],o=t[0],r=!1;else if("@token@"===f)s=t[1],o=t[0],r=!0;else if("list"===f||"start_list"===f||"end_list"===f||"rein_list"===f||"in_list"===f||"len"===f||"restart_list"===f||"reend_list"===f){s=t[1];var d=[];for(var h in t[0])d.push(t[0][h]);o=JSON.stringify(d),r=!1}else"dict"===f?(s=t[1],o=JSON.stringify(t[0]),r=!1):(s="reg",n=t[1],r=!1,o=t[0]);a=t[2]?"true":"false",i={condition:"",symbol:s,negate:a,content:o,jioRegData:n||"",disabled:r}}else if("advanced"===e){l=t[0],c=t[2]||"and";f=t[1][1];if(""===f||"in"===f)s=t[1][1],o=t[1][0],r=!1;else if("@token@"===f)s=t[1][1],o=t[1][0],r=!0;else if("list"===f||"start_list"===f||"end_list"===f||"rein_list"===f||"in_list"===f||"len"===f||"restart_list"===f||"reend_list"===f){s=t[1][1];d=[];for(var h in t[1][0])d.push(t[1][0][h]);o=JSON.stringify(d),r=!1}else"dict"===f?(s=t[1][1],o=JSON.stringify(t[1][0]),r=!1):(s="reg",n=t[1][1],r=!1,o=t[1][0]);a=t[2]?"true":"false","headers"!==l&&"args"!==l&&"posts"!==l&&"post_form"!==l||(a=t[1][3]?"true":"false",p=t[1][2]),i=""===s||"in"===s||"list"===s||"in_list"===s||"start_list"===s||"end_list"===s||"dict"===s||"rein_list"===s||"len"===s||"restart_list"===s||"reend_list"===s?{condition:l,symbol:s,negate:a,connector:c,content:o,jioRegData:"",disabled:!1,headerData:p||""}:"@token@"===s?{condition:l,symbol:s,negate:a,connector:c,content:o,jioRegData:"",disabled:!0,headerData:p||""}:"reg"===s?{condition:l,symbol:"reg",negate:a,connector:c,content:o,jioRegData:n,disabled:!1,headerData:p||""}:{condition:l,symbol:"reg",negate:a,connector:c,content:o,jioRegData:s,disabled:!1,headerData:p||""}}return i},formatData2:function(t){var e,i,s,a,o=t["symbol"];switch(o){case"":i=t["content"],s=o;break;case"dict":i=JSON.parse(t["content"]),s=o;break;default:i=JSON.parse(t["content"]),s=o;break}return a="false"!==t["negate"]&&!1!==t["negate"],e=[i,s,a],e},formatData:function(t,e){var i,s,a,o,n=t["condition"],r=t["symbol"];if("adv"===e)if("headers"===n||"args"===n||"posts"===n||"post_form"===n){switch(r){case"":s=t["content"],a=r;break;case"in":s=t["content"],a=r;break;case"reg":s=t["content"],a=t["jioRegData"];break;case"dict":s=JSON.parse(t["content"]),a=r;break;case"len":var l=t["content"].split(",");s=[parseInt(l[0]),parseInt(l[1])],a=r;break;case"@token@":s=t["content"],a=r;break;default:s=JSON.parse(t["content"]),a=r;break}o="false"!=t["negate"]&&0!=t["negate"],i=[n,[s,a,t["headerData"],o],t["connector"]]}else{switch(r){case"":s=t["content"],a=r;break;case"in":s=t["content"],a=r;break;case"reg":s=t["content"],a=t["jioRegData"];break;case"dict":s=JSON.parse(t["content"]),a=r;break;case"len":l=t["content"].split(",");s=[parseInt(l[0]),parseInt(l[1])],a=r;break;case"@token@":s=t["content"],a=r;break;default:s=JSON.parse(t["content"]),a=r;break}o="false"!=t["negate"]&&0!=t["negate"],i=[n,[s,a,o],t["connector"]]}else{switch(r){case"":s=t["content"],a=r;break;case"in":s=t["content"],a=r;break;case"reg":s=t["content"],a=t["jioRegData"];break;case"dict":s=JSON.parse(t["content"]),a=r;break;case"len":l=t["content"].split(",");s=[parseInt(l[0]),parseInt(l[1])],a=r;break;case"@token@":s=t["content"],a=r;break;default:s=JSON.parse(t["content"]),a=r;break}o="false"!=t["negate"]&&0!=t["negate"],i=[s,a,o]}return i},setData:function(){var t,e=this.$refs.viewDiag.title;if(this.$refs.viewDiag.editTile){var i=this.editIndex;if("普通规则"===e){g=""===this.$refs.viewDiag.typeValue?this.$refs.viewDiag.id+"-other":this.$refs.viewDiag.id+"-"+this.$refs.viewDiag.typeValue,h=this.$refs.viewDiag.state,u=this.$refs.viewDiag.action,m=this.formatData(this.$refs.viewDiag.uri[0],"");var s=this.$refs.viewDiag.network[0]["maxReqs"],a=this.$refs.viewDiag.network[0]["pTime"],o=this.$refs.viewDiag.network[0]["blackTime"];if("on"===this.$refs.viewDiag.viewTable){v={maxReqs:parseInt(s),pTime:parseInt(a),blackTime:parseInt(o)};var n={id:g,state:h,action:u,uri:m,network:v},r=n,l=r["id"].split("-");if(n["id"].split("-")[n["id"].split("-").length-1]!==l[l.length-1]){r["id"]=l[0]+"-"+l[l.length-1];n=JSON.stringify(r)}else{r["id"]=l[0]+"-"+l[l.length-1];n=JSON.stringify(r)}d={action:"set",host:this.domain,value:n,id:parseInt(i)},t=this.secReq(this.api.defHost,"post",d)}else if("off"===this.$refs.viewDiag.viewTable){var c=[],p=Object.keys(this.$refs.viewDiag.app_ext).length;if(p>0)for(var f in this.$refs.viewDiag.app_ext)c.push(this.formatData(this.$refs.viewDiag.app_ext[f],"adv"));n={id:g,state:h,action:u,uri:m,app_ext:c},r=n,l=r["id"].split("-");if(n["id"].split("-")[n["id"].split("-").length-1]!==l[l.length-1]){r["id"]=l[0]+"-"+l[l.length-1];n=JSON.stringify(r)}else{r["id"]=l[0]+"-"+l[l.length-1];n=JSON.stringify(r)}d={action:"set",host:this.domain,value:n,id:parseInt(i)},t=this.secReq(this.api.defHost,"post",d)}}else if("配置获取真实IP"===e){g=this.domain,b=this.$refs.viewDiag.realipfrom,w=this.formatData2(this.$refs.viewDiag.ips[0]);n={ips:w,realipfrom:b};var d={action:"set",id:g,mod:"realIpFrom_Mod",value_type:"json",value:JSON.stringify(n)};t=this.secReq(this.api.globalConfig,"post",d)}else if("IP规则"===e){_=this.domain+"_"+this.$refs.viewDiag.ip,k=this.$refs.viewDiag.ip_value;d={action:"set",ip:_,value:k};t=this.secReq(this.api.defIP,"post",d)}this.editIndex=0}else if("普通规则"===e){var h,u,m,v;g=""===this.$refs.viewDiag.typeValue?this.$refs.viewDiag.id+"-other":this.$refs.viewDiag.id+"-"+this.$refs.viewDiag.typeValue,h=this.$refs.viewDiag.state,u=this.$refs.viewDiag.action,m=this.formatData(this.$refs.viewDiag.uri[0],"");s=this.$refs.viewDiag.network[0]["maxReqs"],a=this.$refs.viewDiag.network[0]["pTime"],o=this.$refs.viewDiag.network[0]["blackTime"];if("on"===this.$refs.viewDiag.viewTable){v={maxReqs:parseInt(s),pTime:parseInt(a),blackTime:parseInt(o)};n={id:g,state:h,action:u,uri:m,network:v};d={action:"add",host:this.domain,value:JSON.stringify(n)},t=this.secReq(this.api.defHost,"post",d)}else if("off"===this.$refs.viewDiag.viewTable){c=[],p=Object.keys(this.$refs.viewDiag.app_ext).length;if(p>0)for(var f in this.$refs.viewDiag.app_ext)c.push(this.formatData(this.$refs.viewDiag.app_ext[f],"adv"));n={id:g,state:h,action:u,uri:m,app_ext:c};d={action:"add",host:this.domain,value:JSON.stringify(n)},t=this.secReq(this.api.defHost,"post",d)}}else if("配置获取真实IP"===e){var g,w,b;g=this.domain,b=this.$refs.viewDiag.realipfrom,w=this.formatData2(this.$refs.viewDiag.ips[0]);n={ips:w,realipfrom:b},d={action:"add",id:g,mod:"realIpFrom_Mod",value:JSON.stringify(n)};t=this.secReq(this.api.globalConfig,"post",d)}else if("IP规则"===e){var _,k;_=this.domain+"_"+this.$refs.viewDiag.ip,k=this.$refs.viewDiag.ip_value;d={action:"set",ip:_,time:this.$refs.viewDiag.times,value:k};t=this.secReq(this.api.defIP,"post",d)}"ok"==t.code?(this.$refs.viewDiag.editTile=!1,this.$notify({type:"success",title:"提示",message:"应用成功",duration:1500,position:"bottom-right"}),this.initData(this.tabName),this.$refs.viewDiag.wafRuleVisible=!1):this.$notify({type:"warning",title:"提示",message:t.msg,duration:1500,position:"bottom-right"})},up:function(t){0!==t&&this.swapItems(this.results,t,t-1)},upIndex:function(t){0!==t&&this.swapItems(this.results,t,0,"up")},down:function(t){t!==this.results.length-1&&this.swapItems(this.results,t,t+1)},downIndex:function(t){t!==this.results.length-1&&this.swapItems(this.results,t,0,"down")},swapItems:function(t,e,i,s){return"up"==s?(t.unshift(t[e]),t.splice(e+1,1),t):"down"==s?(t.push(t[e]),t.splice(e,1),t):(t[e]=t.splice(i,1,t[e])[0],t)}},components:{wafDivider:o,wafSiteSetDiag:n},filters:{joint:function(t){""==t.uri[1]||t.uri[1];return t.uri[0]},match:function(t){return""==t?"等于":"list"==t?"数组":"cidr"==t?"ip段":"dict"==t?"字典":void 0},matchadv:function(t){return t?""==t[1]?"等于":"in"==t[1]?"包含":"list"==t[1]?"数组":"in_list"==t[1]?"包含列表":"start_list"==t[1]?"开头列表":"restart_list"==t[1]?"开头扩展列表":"end_list"==t[1]?"结尾列表":"reend_list"==t[1]?"结尾扩展列表":"dict"==t[1]?"字典":"rein_list"==t[1]?"包含扩展列表":"len"==t[1]?"长度":"@token@"==t[1]?"token":"正则":""},matchNegate:function(t){return t&&1==t[2]?"true":"false"},matchState:function(t){return t?"on"===t?"开启":"关闭":""}},watch:{$route:function(t,e){},state:function(t,e){""!==e&&this.stateClick()},args_HPP:function(t,e){""!==e&&this.argsHPPClick()},posts_HPP:function(t,e){""!==e&&this.postsHPPClick()},ruleSearch:{handler:function(t,e){this.data=""===t?this.temp:this.data.filter(function(e){if(e.id.indexOf(t)>=0)return!0})}}}},l=r,c=i("2877"),p=Object(c["a"])(l,s,a,!1,null,null,null);e["default"]=p.exports}}]);