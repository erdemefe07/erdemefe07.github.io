(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6044d36b"],{"81e3":function(t,a,e){"use strict";var s=e("fb33"),r=e.n(s);r.a},d9fd:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row m-4"},[e("div",{staticClass:"col-lg-12 p-0 card"},[e("div",{staticClass:"card-header"},[t._v("Blog Listesi (Tümü)")]),e("div",{staticClass:"card-body"},[e("table",{staticClass:"table table-responsive-lg",attrs:{id:"tabloYazilar"}},[t._m(0),e("tbody",t._l(t.yazi,(function(a,s){return e("tr",{key:a._id},[e("td",[e("b",[t._v(t._s(a.Sira))])]),e("td",{attrs:{width:"auto"}},[t._v(t._s(t._f("moment")(a.Tarih,"(dddd) Do MMMM YYYY, HH:mm:ss")))]),e("td",[e("b",[t._v(t._s(a.Baslik))])]),e("td",[t._v("59")]),e("td",[t._v(t._s(a.Yorumlar.length))]),e("td",[e("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.Sil(a.Sira,s)}}},[t._v("Sil")])])])})),0)])])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("Sıra")]),e("th",[t._v("Tarih (Yıl Gün Ay Saat)")]),e("th",[t._v("Başlık")]),e("th",[t._v("Görüntülenme")]),e("th",[t._v("Yorumlar")]),e("th",[t._v("Sil")])])])}],n={name:"Bloglar",data:()=>({yazi:[]}),methods:{async veriCek(){await fetch("https://erdemlog-server.herokuapp.com/").then(t=>t.json()).then(t=>{this.yazi=t}),this.tablolastir()},tablolastir(){$("#tabloYazilar").DataTable({responsive:!0,language:{url:"/tr.json"},order:[[0,"desc"]],columnDefs:[{width:"5%",targets:0}]})}},computed:{Sil(){return(t,a)=>{fetch("https://erdemlog-server.herokuapp.com/"+t,{method:"DELETE",headers:{token:this.$session.get("token")}}).then(t=>{this.yazi.splice(a,1)}).catch((function(t){console.log("error handled",t)}))}}},mounted(){this.veriCek()},metaInfo:()=>({link:[{rel:"stylesheet",href:"https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css"}],script:[{src:"https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js",async:!0,defer:!0},{src:"https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js",async:!0,defer:!0}]})},i=n,l=(e("81e3"),e("2877")),o=Object(l["a"])(i,s,r,!1,null,"911665cc",null);a["default"]=o.exports},fb33:function(t,a,e){}}]);
//# sourceMappingURL=chunk-6044d36b.db9fdaa5.js.map