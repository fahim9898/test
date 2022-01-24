var U=Object.defineProperty,q=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var A=(d,s,i)=>s in d?U(d,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[s]=i,T=(d,s)=>{for(var i in s||(s={}))P.call(s,i)&&A(d,i,s[i]);if(C)for(var i of C(s))R.call(s,i)&&A(d,i,s[i]);return d},S=(d,s)=>q(d,$(s));import{c as W,r as h,b as a,F as f,j as t,i as p}from"./vendor.abe5e19c.js";import{b as Y,u as z,B as G,g as l,q as J,a as K,x as v}from"./index.945cac23.js";import{C as u}from"./Card.0a56d7c5.js";import{I as Q}from"./InputLable.a582803e.js";const se=()=>{W(e=>e.user.currentUser);const[d,s]=h.exports.useState(!1),[i,V]=h.exports.useState(!1),[g,k]=h.exports.useState([]),{isLoading:X,callback:_}=Y(),[N,y]=h.exports.useState(""),[I,w]=h.exports.useState([]),L=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,{data:r,setData:x,loadingDone:o}=z({method:"get",url:v},e=>{var c,n;return w((c=e.data)==null?void 0:c.attendances),(n=e.data)==null?void 0:n.attendances});h.exports.useEffect(()=>{var e;w((e=r==null?void 0:r.filter(c=>!!(c.member.member_name.toLowerCase().includes(N.toLowerCase())||c.member.id.toString().toLowerCase().includes(N.toLowerCase()))))==null?void 0:e.sort((c,n)=>c.checkin_time&&n.checkin_time?-1:1))},[N]);const D="Member Attendance",H=[{name:"Home",link:"/branch-admin"},{name:"Member Attendance",link:"/branch-admin/member-attendance"}];h.exports.useEffect(()=>{let e;return o&&(k(r.map((c,n)=>({index:n,c_second:0,time:"00:00:00"}))),e=setInterval(()=>{s(c=>!c)},1e3)),()=>{clearInterval(e)}},[o,i]);function j(e,c){let n=r[c].checkin_time,b=r[c].checkout_time;if(!n||b)return e;let m=p().startOf("day");if(e.c_second==0){let F=p(n,"HH:mm:ss"),O=p(p(new Date).format("HH:mm:ss"),"HH:mm:ss");var B=p.duration(O.diff(F));e.c_second=B.asSeconds(),m.add(e.c_second,"second")}else m.add(e.c_second,"second");return S(T({},e),{c_second:e.c_second+1,time:m.format("HH:mm:ss")})}h.exports.useEffect(()=>{g&&k(g.map((e,c)=>j(e,c)))},[d]);function E(e){_({url:v+"/"+e.id,method:"patch",success:c=>{let n=c.data.attendance;window.Notify({message:c.data.message,status:"success"});let b=r.map(m=>m.id==e.id?n:m);x(b)}})}function M(e){_({url:v+"/"+e.id,method:"patch",success:c=>{let n=c.data.attendance;window.Notify({message:c.data.message,status:"success"});let b=r.map(m=>m.id==e.id?n:m);x(b)}})}return a(f,{children:[t(G,{title:D,links:H}),a("div",{id:"member-attendance-table",className:"d-none",children:[t("div",{className:"row",children:t("div",{className:"col-12 mb-2",children:a("h3",{children:["Attendance - ",L]})})}),a("table",{className:"table",children:[t("thead",{children:a("tr",{children:[t("th",{children:"Name"}),t("th",{children:"Login"}),t("th",{children:"Logout"}),t("th",{children:"Status"})]})}),t("tbody",{children:r&&r.map((e,c)=>a("tr",{children:[t("td",{children:l(()=>e.member.member_name)}),t("td",{children:l(()=>e.checkin_time)}),t("td",{children:l(()=>e.checkout_time)}),t("td",{children:l(()=>e.checkin_time?"Present":"Absent")})]},e.id))})]})]}),t("div",{className:"filter-options",style:{paddingTop:"10px",paddingBottom:"0px",marginBottom:"0px"},children:a("div",{className:"row w-100",children:[t(Q.LabelInput,{style:{width:"min(500px, 85vw)"},className:"form-control h-100",type:"text",required:!0,value:N,onChange:e=>y(e.target.value),label:"Enter Name/Id",invalidText:"Name is required"}),r&&t("div",{className:"input-grp mt-0 ml-2 float-right",children:t("div",{className:"btn btn-info",onClick:()=>{J("member-attendance-table")},children:"Print"})})]})}),a("div",{className:"row mt-3",children:[r&&r.filter(e=>I.some(c=>c.id==e.id)).map((e,c)=>t("div",{className:"col-xl-4 col-md-6",children:a(u,{className:"attendance-card",children:[a("div",{className:"row",children:[t("div",{className:"col-md-4 py-1",children:t("img",{className:"attendance-img",src:K(l(()=>e.member.profile_pic)),alt:""})}),a("div",{className:"col-md-8 py-1",children:[a("h5",{children:[e.member.gender?t("i",{className:"fa fa-female"}):t("i",{className:"fa fa-male"}),"\xA0\xA0",l(()=>e.member.member_name)]}),a("p",{className:"mb-0",children:[t("i",{className:"fa fa-phone"}),"\xA0\xA0",l(()=>e.member.contact_no)]}),a("div",{className:"row pt-1",children:[t("div",{className:"col-6",children:t("p",{className:"mb-0 text-center",children:(()=>{if(e.checkin_time)return a(f,{children:[t("span",{className:"font-weight-bold",children:"Check In"})," ",t("br",{}),l(()=>e.checkin_time)]})})()})}),t("div",{className:"col-6 border-left",children:t("p",{className:"mb-0 text-center",children:(()=>{if(e.checkout_time)return a(f,{children:[t("span",{className:"font-weight-bold",children:"Checked Out"})," ",t("br",{}),l(()=>e.checkout_time)]});if(e.checkin_time)return a(f,{children:[t("span",{className:"font-weight-bold",children:"Time"}),t("br",{}),l(()=>g[c].time)]})})()})})]})]}),t("span",{className:"member-type",children:l(()=>e.member.member_type)})]}),t("div",{className:"row",children:t("div",{className:"col-md-12 border-top",children:(()=>{if(!e.checkin_time&&!e.checkout_time)return t("span",{className:"c-mt-1 c-btn float-right badge badge-success",onClick:()=>window.confirmAlert(()=>E(e)),children:"Check In"});if(e.checkin_time&&!e.checkout_time)return t("span",{className:"c-mt-1 c-btn float-right badge badge-danger",onClick:()=>window.confirmAlert(()=>M(e)),children:"Check Out"})})()})})]})},e.id)),!r&&a(f,{children:[t("div",{className:"col-md-4",children:t(u,{loadingDone:o})}),t("div",{className:"col-md-4",children:t(u,{loadingDone:o})}),t("div",{className:"col-md-4",children:t(u,{loadingDone:o})}),t("div",{className:"col-md-4",children:t(u,{loadingDone:o})}),t("div",{className:"col-md-4",children:t(u,{loadingDone:o})}),t("div",{className:"col-md-4",children:t(u,{loadingDone:o})})]})]})]})};export{se as default};
