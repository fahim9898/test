import{d as p,r as f,b as r,F as k,j as t}from"./vendor.61ffbfff.js";import{b as h,B as v,J as S}from"./index.d0bee3a0.js";import{C as g}from"./Card.a57d113a.js";import{F as N,I as o}from"./InputLable.103d759b.js";const C=()=>{const i="Add Stock",l=[{name:"Home",link:"/branch-admin"},{name:"Stocks",link:"/branch-admin/stocks"},{name:"Add Stock",link:"/branch-admin/stock-add"}];let c=p();const{isLoading:d,callback:m}=h(),[a,n]=f.exports.useState({particular:"",qty:"",rate:"",amount:""}),u=function(){let e=new FormData;for(var s in a)e.append(s,a[s]);m({method:"post",url:S,data:a,success:b=>{window.Notify({message:b.data.message,status:"success"}),c.push("/branch-admin/stocks")}})};return r(k,{children:[t(v,{title:i,links:l}),t(N,{id:"form-stock-plan-validation",onSubmit:e=>{e.preventDefault(),window.formValidate("form-stock-plan-validation")(u)},children:r("div",{className:"row",children:[t("div",{className:"col-md-8",children:r(g,{title:"Stock Information",iconLeft:"fa fa-th-large",children:[t(o.LabelInput,{className:"form-control",type:"text",required:!0,value:a.particular,onChange:e=>n({...a,particular:e.target.value}),label:"Stock Name",invalidText:"Stock Name is required"}),t(o.LabelInput,{className:"form-control",type:"number",required:!0,value:a.qty,onChange:e=>n({...a,qty:e.target.value}),label:"Stock Qty",invalidText:"Stock Qty is required"}),t(o.LabelInput,{className:"form-control",type:"number",required:!0,value:a.rate,onChange:e=>n({...a,rate:e.target.value}),label:"Stock Rate",invalidText:"Stock Rate is required"}),t(o.LabelInput,{className:"form-control",type:"number",required:!0,value:a.amount,onChange:e=>n({...a,amount:e.target.value}),label:"Stock Amount",invalidText:"Stock Amount is required"})]})}),t("div",{className:"col-md-4"}),t("div",{className:"col-md-2",children:d?r("div",{className:"mb-4 btn btn-primary btn-lg btn-block",children:[t("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xA0 Loading..."]}):r("button",{type:"submit",className:"mb-4 btn btn-primary btn-lg btn-block",children:[t("i",{className:"feather icon-plus"})," Add Stock"]})})]})})]})};export{C as default};