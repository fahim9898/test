var D=Object.defineProperty,C=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var x=(n,r,i)=>r in n?D(n,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[r]=i,s=(n,r)=>{for(var i in r||(r={}))y.call(r,i)&&x(n,i,r[i]);if(N)for(var i of N(r))j.call(r,i)&&x(n,i,r[i]);return n},m=(n,r)=>C(n,G(r));import{r as g,j as e,b as d,F as A}from"./vendor.abe5e19c.js";import{u as S,z as $,b as v,T as a,B as k,g as c,D as w}from"./index.945cac23.js";import{C as E}from"./Card.0a56d7c5.js";import{M as L}from"./Modal.395016a9.js";import{I as M}from"./InputLable.a582803e.js";const O=({modalObj:n,editValue:r,setEditValue:i})=>{function p(t,l){let h=t,f=l;if(h.split(":")[0]<=f.split(":")[0])return!0;if(h&&f)return window.Notify({status:"error",message:"Please Select Appropriate Start Time and End Time"}),!1}g.exports.useEffect(()=>{let t=r.start_time,l=r.end_time;t&&l&&i(m(s({},r),{group_timmings_hours:l.split(":")[0]-t.split(":")[0]}))},[r.start_time,r.end_time]);const{data:u,setData:b,loadingDone:_}=S({method:"get",url:$},"staff");return e(L,m(s({},n),{modalWidth:"700px",children:d("div",{className:"modal-body two-col-grid",children:[d("fieldset",{className:"form-group",children:[e("label",{children:"Group Name"}),e("input",{type:"text",value:r.name,onChange:t=>i(m(s({},r),{name:t.target.value})),className:"form-control",placeholder:"Group Name",required:!0})]}),d("fieldset",{className:"form-group",children:[e("label",{children:" Trainer Information"}),d(M.LabelSelect,{value:r.group_trainer_id,required:!0,label:"Trainer",onChange:t=>{console.log("called");const l=JSON.parse(t.target[t.target.selectedIndex].getAttribute("trainer"));i(m(s({},r),{group_trainer_id:t.target.value,trainer:l}))},invalidText:"Need to select Trainer",children:[e("option",{value:"",children:"Select Trainer"}),u&&u.map(t=>(()=>{if(t.staff_type=="Trainer")return e("option",{value:t.id,trainer:`${JSON.stringify(t)}`,children:t.staff_name},t.id)})())]})]}),d("fieldset",{className:"form-group",children:[e("label",{children:"Start Time"}),e("input",{type:"time",value:r.start_time,onChange:t=>{p(t.target.value,r.end_time)&&i(m(s({},r),{start_time:t.target.value}))},required:!0,className:"form-control",placeholder:"Start Time"})]}),d("fieldset",{className:"form-group",children:[e("label",{children:"End Time"}),e("input",{type:"time",value:r.end_time,onChange:t=>{p(r.start_time,t.target.value)&&i(m(s({},r),{end_time:t.target.value}))},required:!0,className:"form-control",placeholder:"End Time"})]}),d("fieldset",{className:"form-group",children:[e("label",{children:"Group Hours"}),e("input",{type:"text",value:r.group_timmings_hours,onChange:t=>i(m(s({},r),{group_timmings_hours:t.target.value})),required:!0,disabled:!0,className:"form-control",placeholder:"Group Hours"})]})]})}))},U=()=>{const[n,r]=g.exports.useState({formId:"group-form-edit",modalId:"group-modal-edit",title:"Edit Member"}),{isLoading:i,callback:p}=v();v();const{data:u,setData:b,loadingDone:_}=S({method:"get",url:w},"groups"),[t,l]=g.exports.useState({group_trainer_id:"",group_timmings_hours:"",start_time:"",end_time:"",name:""});function h(){let o=new FormData;for(var T in t)o.append(T,t[T]);o.append("_method","patch"),p({method:"post",url:w+"/"+t.id,data:o,headers:{"Content-Type":"multipart/form-data"},success:H=>{window.Notify({status:"success",message:H.data.message}),window.$(`#${n.modalId}`).modal("hide");let I=s({},t);a.fn.updateTableWithId(u,I,b,"id")},error:H=>{window.$(`#${n.modalId}`).modal("hide")}})}function f(o){l(o),window.$(`#${n.modalId}`).modal("show"),window.$(`#${n.formId}`).off("submit")}return g.exports.useEffect(()=>(a.search.clear(),a.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",6),()=>{a.search.clear()}),[]),d(A,{children:[e(k,{title:"Groups",links:[{name:"Home",link:"/branch-admin"},{name:"Groups",link:"/branch-admin/groups"}]}),e(E,{title:"Groups",button:{name:"Add",link:"group-add"},children:d(a,{tableId:".table-brand-staff",loadingDone:_,footerSelect:!0,filter:!0,children:[e(a.Header,{children:d(a.Row,{children:[e(a.TH,{children:"Id"}),e(a.TH,{children:"Name"}),e(a.TH,{children:"Trainer"}),e(a.TH,{children:"Group Hours"}),e(a.TH,{children:"Start Time"}),e(a.TH,{children:"End Time"}),e(a.TH,{children:"Date"}),e(a.TH,{children:"Actions"})]})}),e(a.Body,{children:u&&u.map((o,T)=>d(a.Row,{children:[e(a.TH,{children:c(()=>o.id)}),e(a.TH,{children:c(()=>o.name)}),e(a.TH,{children:c(()=>o.trainer.staff_name)}),e(a.TH,{children:c(()=>o.group_timmings_hours)}),e(a.TH,{children:c(()=>o.start_time)}),e(a.TH,{children:c(()=>o.end_time)}),e(a.TH,{children:c(()=>new Date(o.created_at).toLocaleDateString())}),e(a.TH,{children:e("i",{className:"feather icon-edit cursor-pointer",onClick:()=>f(o)})})]},o.id))})]})}),e(O,{editValue:t,setEditValue:l,modalObj:m(s({},n),{onSubmit:h,isLoading:i})})]})};export{U as default};
