"use strict";(self["webpackChunkexcel_data"]=self["webpackChunkexcel_data"]||[]).push([[775],{6775:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var a=function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticStyle:{"text-align":"center",margin:"16px auto"}},[t._v(t._s(t.fileName))]),e("table",{attrs:{id:"customers"}},t._l(this.tableData,(function(s,a){return e("tr",{key:a},t._l(s,(function(s,a){return e("th",{key:a},[t._v(t._s(s))])})),0)})),0)])},r=[],i=s(6335),l={data(){return{tableData:[],fileName:"",columns:[],rows:[]}},methods:{groupBy(t,e){return t.reduce(((t,s)=>((t[s[e]]=t[s[e]]||[]).push(s),t)),[])},getDataExcel(){(0,i.e)({UrlCode:this.$route.params.id}).then((t=>{if(0==t.RespCode){console.log(t),0==t.Columns.length&&this.$notify({title:"Hết hạn",message:"Link excel đã hết hạn",type:"warning"}),this.fileName=t.FileName,this.columns=t.Columns,this.rows=this.groupBy(t.Rows,"RowIndex"),this.rows[0]=this.columns;for(var e=0;e<this.rows.length;e++)if(0==e){var s=this.rows[e].map((t=>t.ColName));this.tableData.push(s)}else{var a=this.rows[e].map((t=>t.RowValue));this.tableData.push(a)}}else this.$notify.error({title:"Lỗi",message:t.RespText})}))}},created(){this.getDataExcel()}},n=l,o=s(1001),u=(0,o.Z)(n,a,r,!1,null,"114a442b",null),h=u.exports}}]);
//# sourceMappingURL=775.17495a4d.js.map