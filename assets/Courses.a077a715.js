import{j as e,d as r,r as T,F as g}from"./vendor.07a30449.js";import{B as H,g as l,a as p}from"./index.855c6d75.js";import{C as I}from"./Card.9e07570d.js";import{M as j,T as a,P as k}from"./Modal.7e336fc7.js";import{S as y}from"./index.29c50f19.js";import{u as A,a as N}from"./useFetch.e6951538.js";import"./motion.b8bd9615.js";const{Option:S}=y,v=({modalObj:o,editValue:s,setEditValue:m})=>e(j,{...o,modalWidth:"700px",children:r("div",{className:"modal-body one-col-grid",children:[r("fieldset",{className:"form-group",children:[e("label",{children:"Name"}),e("input",{type:"text",value:s.name,onChange:d=>m({...s,name:d.target.value}),className:"form-control",placeholder:"Name",required:!0})]}),r("fieldset",{className:"form-group",children:[e("label",{children:"Types"}),s.types.length!=0&&e(y,{mode:"tags",loading:s.types?.length===0,size:"large",defaultValue:s.types.map(d=>d.name),placeholder:"Please select",onChange:d=>m({...s,types:d}),style:{width:"100%"},children:s.types?.map((d,i)=>e(S,{selected:!0,value:d.name,checked:!0,children:d.name},i))})]})]})}),F=()=>{const[o,s]=T.exports.useState({formId:"staff-member-form-edit",modalId:"staff-member-modal-edit",title:"Edit Course",visible:!1}),{isLoading:m,callback:d}=A(),{data:i,setData:f,loadingDone:C}=N({method:"get",url:p}),[n,u]=T.exports.useState({name:"",types:[]});function w(){n.types.length>0&&(n.types=n.types.map(t=>({name:t.name?t.name:t}))),d({method:"put",url:p+"/"+n._id,data:n,success:t=>{window.Notify({status:"success",message:"Course Updated Successfully"}),window.$(`#${o.modalId}`).modal("hide");let c={...n,...t.data};a.fn.updateTableWithId(i,c,f,"_id")},error:t=>{window.$(`#${o.modalId}`).modal("hide")}})}function x(t){let c=t.types;u({...t,types:[]}),setTimeout(()=>{u({...t,types:c})},100),s({...o,visible:!0}),window.$(`#${o.modalId}`).modal("show"),window.$(`#${o.formId}`).off("submit")}return r(g,{children:[e(H,{title:"Courses",links:[{name:"Home",link:"/admin"},{name:"Courses",link:"/admin/courses"}]}),e(I,{title:"Courses",button:{name:"Add",link:"courses-add"},children:r(a,{tableId:".table-brand-staff",loadingDone:C,children:[e(a.Header,{children:r(a.Row,{children:[e(a.TH,{children:"Id"}),e(a.TH,{children:"Name"}),e(a.TH,{children:"Types"}),e(a.TH,{children:"Created At"}),e(a.TH,{children:"Updated At"}),e(a.TH,{children:"Actions"})]})}),e(a.Body,{children:i&&i.map((t,c)=>r(a.Row,{children:[e(a.TH,{children:l(()=>t._id)}),e(a.TH,{children:l(()=>t.name)}),e(a.TH,{children:l(()=>e(g,{children:t.types.map((h,b)=>e("div",{children:h.name},b))}))}),e(a.TH,{children:l(()=>new Date(t.createdAt).toIndiaDate())}),e(a.TH,{children:l(()=>new Date(t.updatedAt).toIndiaDate())}),r(a.TH,{children:[e("i",{className:"feather icon-edit cursor-pointer",onClick:()=>x(t)}),e(k,{title:"Are you sure to delete this Course?",onConfirm:()=>new Promise(h=>{d({method:"delete",url:p+"/"+t._id,success:b=>(a.fn.deleteTableWithId(i,t,f,"_id"),h())})}),okText:"Yes",cancelText:"No",children:e("i",{className:"feather pl-1 icon-trash cursor-pointer text-danger"})})]})]},t.id))})]})}),e(v,{editValue:n,setEditValue:u,modalObj:{...o,onSubmit:w,isLoading:m}})]})};export{F as default};
