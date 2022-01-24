import{c as F,r as m,b as a,F as u,j as t,i as o}from"./vendor.61ffbfff.js";import{b as M,u as O,B,g as i,q as U,a as P,x as g}from"./index.85da2068.js";import{C as h}from"./Card.a57d113a.js";import{I as q}from"./InputLable.103d759b.js";import{F as K}from"./FingerPrintScan.67122bc0.js";const Q=()=>{F(e=>e.user.currentUser);const[x,A]=m.exports.useState(!1),[H,$]=m.exports.useState(!1),[b,N]=m.exports.useState([]),{isLoading:R,callback:k}=M(),[f,y]=m.exports.useState(""),[w,_]=m.exports.useState([]),T=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,{data:n,setData:p,loadingDone:l}=O({method:"get",url:g},e=>(_(e.data?.attendances),e.data?.attendances));m.exports.useEffect(()=>{_(n?.filter(e=>!!(e.member.member_name.toLowerCase().includes(f.toLowerCase())||e.member.id.toString().toLowerCase().includes(f.toLowerCase())))?.sort((e,c)=>e.checkin_time&&c.checkin_time?-1:1))},[f]);const I="Member Attendance",S=[{name:"Home",link:"/branch-admin"},{name:"Member Attendance",link:"/branch-admin/member-attendance"}];m.exports.useEffect(()=>{let e;return l&&(N(n.map((c,s)=>({index:s,c_second:0,time:"00:00:00"}))),e=setInterval(()=>{A(c=>!c)},1e3)),()=>{clearInterval(e)}},[l,H]);function D(e,c){let s=n[c].checkin_time,d=n[c].checkout_time;if(!s||d)return e;let r=o().startOf("day");if(e.c_second==0){let L=o(s,"HH:mm:ss"),j=o(o(new Date).format("HH:mm:ss"),"HH:mm:ss");var E=o.duration(j.diff(L));e.c_second=E.asSeconds(),r.add(e.c_second,"second")}else r.add(e.c_second,"second");return{...e,c_second:e.c_second+1,time:r.format("HH:mm:ss")}}m.exports.useEffect(()=>{b&&N(b.map((e,c)=>D(e,c)))},[x]);function v(e){k({url:g+"/"+e.id,method:"patch",success:c=>{let s=c.data.attendance;window.Notify({message:c.data.message,status:"success"}),p(d=>d.map(r=>r.id==e.id?s:r))}})}function C(e){k({url:g+"/"+e.id,method:"patch",success:c=>{let s=c.data.attendance;window.Notify({message:c.data.message,status:"success"}),p(d=>d.map(r=>r.id==e.id?s:r))}})}return a(u,{children:[t(B,{title:I,links:S}),a("div",{id:"member-attendance-table",className:"d-none",children:[t("div",{className:"row",children:t("div",{className:"col-12 mb-2",children:a("h3",{children:["Attendance - ",T]})})}),a("table",{className:"table",children:[t("thead",{children:a("tr",{children:[t("th",{children:"Name"}),t("th",{children:"Login"}),t("th",{children:"Logout"}),t("th",{children:"Status"})]})}),t("tbody",{children:n&&n.map((e,c)=>a("tr",{children:[t("td",{children:i(()=>e.member.member_name)}),t("td",{children:i(()=>e.checkin_time)}),t("td",{children:i(()=>e.checkout_time)}),t("td",{children:i(()=>e.checkin_time?"Present":"Absent")})]},e.id))})]})]}),t("div",{className:"filter-options",style:{paddingTop:"10px",paddingBottom:"0px",marginBottom:"0px"},children:a("div",{className:"row w-100",children:[t(q.LabelInput,{style:{width:"min(500px, 85vw)"},className:"form-control h-100",type:"text",required:!0,value:f,onChange:e=>y(e.target.value),label:"Enter Name/Id",invalidText:"Name is required"}),n&&t("div",{className:"input-grp mt-0 ml-2 float-right",children:t("div",{className:"btn btn-info",onClick:()=>{U("member-attendance-table")},children:"Print"})})]})}),a("div",{className:"row mt-3",children:[n&&n.filter(e=>w.some(c=>c.id==e.id)).map((e,c)=>t("div",{className:"col-xl-4 col-md-6",children:a(h,{className:"attendance-card",children:[a("div",{className:"row",children:[t("div",{className:"col-md-4 py-1",children:t("img",{className:"attendance-img",src:P(i(()=>e.member.profile_pic)),alt:""})}),a("div",{className:"col-md-8 py-1",children:[a("h5",{children:[e.member.gender?t("i",{className:"fa fa-female"}):t("i",{className:"fa fa-male"}),"\xA0\xA0",i(()=>e.member.member_name)]}),a("p",{className:"mb-0",children:[t("i",{className:"fa fa-phone"}),"\xA0\xA0",i(()=>e.member.contact_no)]}),a("div",{className:"row pt-1",children:[t("div",{className:"col-6",children:t("p",{className:"mb-0 text-center",children:(()=>{if(e.checkin_time)return a(u,{children:[t("span",{className:"font-weight-bold",children:"Check In"})," ",t("br",{}),i(()=>e.checkin_time)]})})()})}),t("div",{className:"col-6 border-left",children:t("p",{className:"mb-0 text-center",children:(()=>{if(e.checkout_time)return a(u,{children:[t("span",{className:"font-weight-bold",children:"Checked Out"})," ",t("br",{}),i(()=>e.checkout_time)]});if(e.checkin_time)return a(u,{children:[t("span",{className:"font-weight-bold",children:"Time"}),t("br",{}),i(()=>b[c].time)]})})()})})]})]}),t("span",{className:"member-type",children:i(()=>e.member.member_type)})]}),t("div",{className:"row",children:t("div",{className:"col-md-12 border-top",children:(()=>{if(!e.checkin_time&&!e.checkout_time)return t("span",{className:"c-mt-1 c-btn float-right badge badge-success",onClick:()=>window.confirmAlert(()=>v(e)),children:"Check In"});if(e.checkin_time&&!e.checkout_time)return t("span",{className:"c-mt-1 c-btn float-right badge badge-danger",onClick:()=>window.confirmAlert(()=>C(e)),children:"Check Out"})})()})})]})},e.id)),n&&t(K,{type:"member",users:n.filter(e=>w.some(c=>c.id==e.id)),scanComplete:e=>{setTimeout(()=>{console.log(e);let c={};if(p(s=>(c=s.filter(d=>d.id==e.id)[0],s)),console.log(c),!c.checkin_time&&!c.checkout_time)console.log("CHECKED IN"),v(e);else if(c.checkin_time&&!c.checkout_time){let s=o(c.checkin_time,"HH:mm:ss"),d=o(o(new Date).format("HH:mm:ss"),"HH:mm:ss"),r=d.diff(s,"minute");console.log("CHECKOUT ->",r,s,d),r>5?(console.log("CHECKED OUT"),C(e)):window.Notify({message:"Please wait for 5 minutes to checkout",status:"warning"})}else window.Notify({message:"Already Checked In",status:"warning"})},0)},frequency:2,timeout:0}),!n&&a(u,{children:[t("div",{className:"col-md-4",children:t(h,{loadingDone:l})}),t("div",{className:"col-md-4",children:t(h,{loadingDone:l})}),t("div",{className:"col-md-4",children:t(h,{loadingDone:l})}),t("div",{className:"col-md-4",children:t(h,{loadingDone:l})}),t("div",{className:"col-md-4",children:t(h,{loadingDone:l})}),t("div",{className:"col-md-4",children:t(h,{loadingDone:l})})]})]})]})};export{Q as default};
