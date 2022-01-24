var U=Object.defineProperty,M=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var T=(d,c,l)=>c in d?U(d,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):d[c]=l,y=(d,c)=>{for(var l in c||(c={}))Y.call(c,l)&&T(d,l,c[l]);if(D)for(var l of D(c))R.call(c,l)&&T(d,l,c[l]);return d},H=(d,c)=>M(d,P(c));import{c as W,r as h,q as z,b as s,F as f,j as t,i as b}from"./vendor.abe5e19c.js";import{b as G,u as J,B as K,g as i,q as Q,a as V,w}from"./index.e8bf6671.js";import{C as u}from"./Card.0a56d7c5.js";import{I as X}from"./InputLable.a582803e.js";const ie=()=>{W(e=>e.user.currentUser);const[d,c]=h.exports.useState(!1),[l,Z]=h.exports.useState(!1),[_,v]=h.exports.useState([]),{isLoading:ee,callback:x}=G(),k=z().date||`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,[N,I]=h.exports.useState(""),[C,A]=h.exports.useState([]),{data:r,setData:S,loadingDone:m}=J({method:"get",url:w+"/"+k},e=>{var a,n;return A((a=e.data)==null?void 0:a.attendances),(n=e.data)==null?void 0:n.attendances});h.exports.useEffect(()=>{var e;A((e=r==null?void 0:r.filter(a=>!!(a.staff_user.staff_name.toLowerCase().includes(N.toLowerCase())||a.staff_user.id.toString().toLowerCase().includes(N.toLowerCase()))))==null?void 0:e.sort((a,n)=>a.checkin_time&&n.checkin_time?-1:1))},[N]);const L="Staff Attendance",j=[{name:"Home",link:"/branch-admin"},{name:"Staff Attendance",link:"/branch-admin/staff-attendance"}];h.exports.useEffect(()=>{let e;return m&&(v(r.map((a,n)=>({index:n,c_second:0,time:"00:00:00"}))),e=setInterval(()=>{c(a=>!a)},1e3)),()=>{clearInterval(e)}},[m,l]);function g(){return k==`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`}function F(e,a){let n=r[a].checkin_time,p=r[a].checkout_time;if(!n||p)return e;let o=b().startOf("day");if(e.c_second==0){let q=b(n,"HH:mm:ss"),O=b(b(new Date).format("HH:mm:ss"),"HH:mm:ss");var B=b.duration(O.diff(q));e.c_second=B.asSeconds(),o.add(e.c_second,"second")}else o.add(e.c_second,"second");return H(y({},e),{c_second:e.c_second+1,time:o.format("HH:mm:ss")})}h.exports.useEffect(()=>{_&&v(_.map((e,a)=>F(e,a)))},[d]);function E(e){x({url:w+"/"+e.id,method:"patch",success:a=>{let n=a.data.attendance;window.Notify({message:a.data.message,status:"success"});let p=r.map(o=>o.id==e.id?n:o);S(p)}})}function $(e){x({url:w+"/"+e.id,method:"patch",success:a=>{let n=a.data.attendance;window.Notify({message:a.data.message,status:"success"});let p=r.map(o=>o.id==e.id?n:o);S(p)}})}return s(f,{children:[t(K,{title:L,links:j}),s("div",{id:"staff-attendance-table",className:"d-none",children:[t("div",{className:"row",children:t("div",{className:"col-12 mb-2",children:s("h3",{children:["Attendance - ",k]})})}),s("table",{className:"table",children:[t("thead",{children:s("tr",{children:[t("th",{children:"Name"}),t("th",{children:"Type"}),t("th",{children:"Login"}),t("th",{children:"Logout"}),t("th",{children:"Status"})]})}),t("tbody",{children:r&&r.map((e,a)=>s("tr",{children:[t("td",{children:i(()=>e.staff_user.staff_name)}),t("td",{children:i(()=>e.staff_user.staff_type)}),t("td",{children:i(()=>e.checkin_time)}),t("td",{children:i(()=>e.checkout_time)}),t("td",{children:i(()=>e.checkin_time?"Present":"Absent")})]}))})]})]}),t("div",{className:"filter-options",style:{paddingTop:"10px",paddingBottom:"0px",marginBottom:"0px"},children:s("div",{className:"row w-100",children:[t(X.LabelInput,{style:{width:"min(500px, 85vw)"},className:"form-control h-100",type:"text",required:!0,value:N,onChange:e=>I(e.target.value),label:"Enter Name/Id",invalidText:"Name is required"}),r&&t("div",{className:"input-grp mt-0 ml-2 float-right",children:t("div",{className:"btn btn-info",onClick:()=>{Q("staff-attendance-table")},children:"Print"})})]})}),s("div",{className:"row mt-3",children:[r&&C&&r.filter(e=>C.some(a=>a.id==e.id)).map((e,a)=>t("div",{className:"col-xl-4 col-md-6",children:s(u,{className:"attendance-card",children:[s("div",{className:"row",children:[t("div",{className:"col-md-4 py-1",children:t("img",{className:"attendance-img",src:V(i(()=>e.staff_user.profile_pic)),alt:""})}),s("div",{className:"col-md-8 py-1",children:[t("h5",{children:i(()=>e.staff_user.staff_name)}),s("p",{className:"mb-0",children:[t("i",{className:"fa fa-phone"}),"\xA0\xA0",i(()=>e.staff_user.contact_no)]}),s("p",{className:"mb-0",children:[t("i",{className:"feather icon-clock"}),"\xA0\xA0",i(()=>e.staff_user.working_hours)," Hours"]}),s("div",{className:"row pt-1",children:[t("div",{className:"col-6",children:t("p",{className:"mb-0 text-center",children:(()=>{if(e.checkin_time)return s(f,{children:[t("span",{className:"font-weight-bold",children:"Check In"})," ",t("br",{}),i(()=>e.checkin_time)]});if(!g())return s(f,{children:[t("span",{className:"font-weight-bold",children:"Absent"})," ",t("br",{})]})})()})}),t("div",{className:"col-6 border-left",children:t("p",{className:"mb-0 text-center",children:(()=>{if(e.checkout_time)return s(f,{children:[t("span",{className:"font-weight-bold",children:"Checked Out"})," ",t("br",{}),i(()=>e.checkout_time)]});if(e.checkin_time&&g())return s(f,{children:[t("span",{className:"font-weight-bold",children:"Time"}),t("br",{}),i(()=>_[a].time)]});if(e.checkin_time&&!g())return s(f,{children:[t("span",{className:"font-weight-bold",children:"Not Checkout"}),t("br",{})]})})()})})]})]}),t("span",{className:"staff-type",children:i(()=>e.staff_user.staff_type)})]}),g()&&t("div",{className:"row",children:t("div",{className:"col-md-12 border-top",children:(()=>{if(!e.checkin_time&&!e.checkout_time)return t("span",{className:"c-mt-1 c-btn float-right badge badge-success",onClick:()=>window.confirmAlert(()=>E(e)),children:"Check In"});if(e.checkin_time&&!e.checkout_time)return t("span",{className:"c-mt-1 c-btn float-right badge badge-danger",onClick:()=>window.confirmAlert(()=>$(e)),children:"Check Out"})})()})})]})},e.id)),!r&&s(f,{children:[t("div",{className:"col-md-4",children:t(u,{loadingDone:m})}),t("div",{className:"col-md-4",children:t(u,{loadingDone:m})}),t("div",{className:"col-md-4",children:t(u,{loadingDone:m})}),t("div",{className:"col-md-4",children:t(u,{loadingDone:m})}),t("div",{className:"col-md-4",children:t(u,{loadingDone:m})}),t("div",{className:"col-md-4",children:t(u,{loadingDone:m})})]})]})]})};export{ie as default};