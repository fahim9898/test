var L=Object.defineProperty,T=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var g=(r,t,n)=>t in r?L(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,p=(r,t)=>{for(var n in t||(t={}))S.call(t,n)&&g(r,n,t[n]);if(y)for(var n of y(t))Z.call(t,n)&&g(r,n,t[n]);return r},v=(r,t)=>T(r,E(t));import{c as w,r as N,d as C,b as s,F,j as a}from"./vendor.abe5e19c.js";import{u as V,b as P,B as q,v as K,t as W}from"./index.945cac23.js";import{C as h}from"./Card.0a56d7c5.js";import{F as j,I as l}from"./InputLable.a582803e.js";const X=()=>{const r=w(e=>e.user.currentUser);N.exports.useEffect(()=>{const e=document.createElement("script");e.src="https://checkout.razorpay.com/v1/checkout.js",e.async=!0,document.body.appendChild(e)},[]);const t="Add Branch",n=[{name:"Home",link:"/gym-admin"},{name:"Branches",link:"/gym-admin/branches"},{name:"Add Branch",link:"/gym-admin/branch-add"}];let A=C();const{data:b,setData:O,loadingDone:M}=V({method:"get",url:K},"sasplans"),{isLoading:x,callback:z}=P(),[i,f]=N.exports.useState({sas_subscription_id:"",branch_name:"",branch_address:"",city:"",state:"",phone:""});function d(e){f(v(p({},i),{[e.target.name]:e.target.value}))}const I=function(e){var o=document.getElementById("profile-image");o.src=URL.createObjectURL(event.target.files[0])},B=function(){let e=new FormData;for(var o in i)e.append(o,i[o]);e.delete("branch_logo"),(!i.aniversary||i.aniversary=="")&&e.delete("aniversary");let c=document.getElementById("profile-file-image");c.files.length&&(console.log("Files Uplod"),e.append("branch_logo",c.files[0])),z({method:"post",url:W,data:e,success:m=>{window.Notify({message:m.data.message,status:"success"}),A.push("/gym-admin/branches")}})};function D(){window.api.get("/api/make-razorpay-order/"+i.sas_subscription_id).then(e=>{let o=e.data.razorpay_response||{},c=e.data.amount;e.data.order_id;var m={key:"rzp_test_Q0N5y5ASSPTTPe",amount:o.amount,currency:o.currency,name:"",description:"",order_id:o.id,handler:function(u){console.log(u);var k={razorpay_signature:u.razorpay_signature,razorpay_order_id:u.razorpay_order_id,razorpay_payment_id:u.razorpay_payment_id,transactionamount:c};f(G=>p(p({},G),k)),B()},prefill:{name:r.name,email:r.email,contact:r.phone},notes:o.notes,theme:{color:"#528ff0"}};console.log(m);var R=new window.Razorpay(m);R.open()})}return s(F,{children:[a(q,{title:t,links:n}),a(j,{id:"form-member-plan-validation",autoComplete:"off",onSubmit:e=>{e.preventDefault(),window.formValidate("form-member-plan-validation")(D)},children:s("div",{className:"row",children:[a("div",{className:"col-md-8",children:s(h,{title:"Branch Information",children:[a(l.LabelInput,{className:"form-control",type:"text",name:"branch_name",required:!0,value:i.branch_name,onChange:d,label:"Branch Name",invalidText:"Branch Name is required"}),a(l.LabelInput,{className:"form-control",type:"text",name:"branch_address",required:!0,value:i.branch_address,onChange:d,label:"Branch Address",invalidText:"Branch Address is required"}),a(l.LabelInput,{className:"form-control",type:"text",name:"city",required:!0,value:i.city,onChange:d,label:"City",invalidText:"City is required"}),a(l.LabelInput,{className:"form-control",type:"text",name:"state",required:!0,value:i.state,onChange:d,label:"State",invalidText:"State is required"}),a(l.LabelInput,{className:"form-control",type:"number",name:"phone",required:!0,value:i.phone,onChange:d,label:"Phone",invalidText:"phone is required"})]})}),a("div",{className:"col-md-4",children:s(h,{title:"Branch Logo",children:[a("img",{id:"profile-image",src:"data:image/png;base64,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",alt:"",style:{width:"100%",height:"190px",objectFit:"contain"}}),a("label",{htmlFor:"profile-file-image",className:"btn btn-info position-absolute-right-top",children:a("i",{className:"feather icon-camera"})}),a(l.LabelInput,{className:"d-none",type:"file",accept:"image/*",required:!0,id:"profile-file-image",onChange:e=>I(),invalidText:"Profile photo is required"})]})}),a("div",{className:"col-md-12",children:a(h,{loadingDone:M,title:"Sas Plans",iconLeft:"feather icon-box",children:a("div",{className:"row",children:a("div",{className:"col-md-6",children:s(l.LabelSelect,{value:i.sas_subscription_id,required:!0,label:"Branch",name:"sas_subscription_id",onChange:d,invalidText:"Need to select Branch",children:[a("option",{value:"",children:"Select Plan"}),b&&b.map(e=>s("option",{value:e.id,children:[e.plan_name," | Amount: ",e.plan_amount," | ",e.plan_validity_days," Days"]},e.id))]})})})})}),a("div",{className:"col-md-2",children:x?s("div",{className:"mb-4 btn btn-primary btn-lg btn-block",children:[a("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xA0 Loading..."]}):s("button",{type:"submit",className:"mb-4 btn btn-primary btn-lg btn-block",children:[a("i",{className:"feather icon-plus"})," Add Branch"]})})]})})]})};export{X as default};
