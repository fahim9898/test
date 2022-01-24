var f=Object.defineProperty,N=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var h=(o,a,s)=>a in o?f(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,l=(o,a)=>{for(var s in a||(a={}))x.call(a,s)&&h(o,s,a[s]);if(b)for(var s of b(a))y.call(a,s)&&h(o,s,a[s]);return o},i=(o,a)=>N(o,g(a));import{d as C,r as A,b as r,F as L,j as t}from"./vendor.abe5e19c.js";import{u as j,b as q,B as I,J as _,H as w}from"./index.945cac23.js";import{C as D}from"./Card.0a56d7c5.js";import{F,I as d}from"./InputLable.a582803e.js";const E=()=>{const o="Sale Stock",a=[{name:"Home",link:"/branch-admin"},{name:"Stocks",link:"/branch-admin/stocks"},{name:"Sale Stock",link:"/branch-admin/stock-add"}];let s=C();const{data:m,setData:H,loadingDone:T}=j({method:"get",url:_},"stocks"),{isLoading:k,callback:p}=q(),[n,c]=A.exports.useState({branch_stock_id:"",qty:"",note:""}),v=function(){let e=new FormData;for(var u in n)e.append(u,n[u]);p({method:"post",url:w,data:e,success:S=>{window.Notify({message:S.data.message,status:"success"}),s.push("/branch-admin/stock-sales")}})};return r(L,{children:[t(I,{title:o,links:a}),t(F,{id:"form-stock-plan-validation",onSubmit:e=>{e.preventDefault(),window.formValidate("form-stock-plan-validation")(v)},children:r("div",{className:"row",children:[t("div",{className:"col-md-8",children:r(D,{title:"Sale Information",iconLeft:"fa fa-th-large",children:[r(d.LabelSelect,{value:n.branch_stock_id,required:!0,label:"Stock Item",onChange:e=>c(i(l({},n),{branch_stock_id:e.target.value})),invalidText:"Need to select Stock Item",children:[t("option",{value:"",children:"Select Stock"}),m&&m.map(e=>t("option",{value:e.id,children:e.particular},e.id))]}),r("div",{className:"row",children:[t("div",{className:"col-md-6",children:t(d.LabelInput,{className:"form-control",type:"text",required:!0,pattern:"\\d+",value:n.qty,onChange:e=>c(i(l({},n),{qty:e.target.value})),label:"Stock Qty",invalidText:"Stock Qty is required & valid"})}),t("div",{className:"col-md-6",children:t(d.LabelInput,{className:"form-control",type:"text",required:!0,value:n.note,onChange:e=>c(i(l({},n),{note:e.target.value})),label:"Stock Note",invalidText:"Stock Note is required"})})]})]})}),t("div",{className:"col-md-4"}),t("div",{className:"col-md-2",children:k?r("div",{className:"mb-4 btn btn-primary btn-lg btn-block",children:[t("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xA0 Loading..."]}):r("button",{type:"submit",className:"mb-4 btn btn-primary btn-lg btn-block",children:[t("i",{className:"feather icon-plus"})," Sell Stock"]})})]})})]})};export{E as default};
