import{j as e,c as s,r as h,F as b}from"./vendor.436bddb5.js";import{u as w,T as a,B as T,a as p}from"./index.039e5ba8.js";import{C as N}from"./Card.50e90fed.js";import{M as H}from"./Modal.e818ba0e.js";const _=({modalObj:n,editValue:i,setEditValue:d})=>e(H,{...n,children:s("div",{className:"modal-body two-col-grid",children:[s("fieldset",{className:"form-group",children:[e("label",{children:"Name"}),e("input",{type:"text",value:i.name,onChange:l=>d({...i,name:l.target.value}),className:"form-control",placeholder:"Name",required:!0})]}),s("fieldset",{className:"form-group",children:[e("label",{children:"Email"}),e("input",{type:"text",value:i.email,onChange:l=>d({...i,email:l.target.value}),className:"form-control",placeholder:"Name",required:!0})]}),s("fieldset",{className:"form-group",children:[e("label",{children:"Phone"}),e("input",{type:"text",value:i.phone,onChange:l=>d({...i,phone:l.target.value}),className:"form-control",placeholder:"Name",required:!0})]})]})}),S=()=>{const[n,i]=h.exports.useState({formId:"user-form-edit",modalId:"user-modal-edit",title:"User Edit",isLoading:!1}),[d,l]=h.exports.useState({name:"",email:"",phone:"",profile_pic:""}),{data:t,setData:m,loadingDone:f}=w({method:"get",url:"/api/all_users"},"users");function u(r,o){window.api({method:"patch",url:"/api/all_users/"+r.id,data:{is_active:o}}).then(c=>{window.Notify({status:"success",message:c.data.message}),a.fn.updateTableWithId(t,{...r,is_active:o},m,"id")}).catch(c=>{window.Notify({status:"error",message:window.handleError(c)})})}function g(){window.api({method:"post",url:"/api/all_users/"+d.id,data:{name:d.name,phone:d.phone,email:d.email}}).then(r=>{i({...n,isLoading:!1}),window.$(`#${n.modalId}`).modal("hide"),a.fn.updateTableWithId(t,d,m,"id")}).catch(r=>{window.Notify({status:"error",message:window.handleError(r)}),i({...n,isLoading:!1}),window.$(`#${n.modalId}`).modal("hide")})}return h.exports.useEffect(()=>(a.search.clear(),a.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",7),()=>{a.search.clear()}),[]),s(b,{children:[e(T,{title:"Users",links:[{name:"Home",link:"/super-admin"},{name:"Users",link:"/super-admin/users"}]}),e(N,{title:"Users",button:{name:"Add",link:"user-add"},children:s(a,{loadingDone:f,footerSelect:!0,filter:!0,children:[e(a.Header,{children:s(a.Row,{children:[e(a.TH,{children:"Id"}),e(a.TH,{children:"Name"}),e(a.TH,{children:"Profile"}),e(a.TH,{children:"Email"}),e(a.TH,{children:"Number"}),e(a.TH,{children:"Type"}),e(a.TH,{children:"Status"}),e(a.TH,{children:"Date"})]})}),e(a.Body,{children:t&&t.map((r,o)=>s(a.Row,{children:[e(a.TH,{children:r.id}),e(a.TH,{children:r.name}),e(a.TH,{children:e("a",{href:p(r.profile_pic),"data-fancybox":"images",children:e("img",{className:"table-img",src:p(r.profile_pic),alt:""})})}),e(a.TH,{children:r.email}),e(a.TH,{children:r.phone}),e(a.TH,{children:(()=>{if(r.is_super_admin)return e("span",{className:"badge badge-dark",children:"Super Admin"});if(r.is_branch_admin)return e("span",{className:"badge badge-warning",children:"Branch Admin"});if(r.is_gym_admin)return e("span",{className:"badge badge-secondary",children:"Gym Admin"})})()}),e(a.TH,{children:r.is_active?e("span",{className:"cursor-pointer badge badge-success",onClick:()=>u(r,!1),children:"Active"}):e("span",{className:"cursor-pointer badge badge-danger",onClick:()=>u(r,!0),children:"In Active"})}),e(a.TH,{children:new Date(r.created_at).toIndiaDate()})]},r.id))})]})}),e(_,{editValue:d,setEditValue:l,modalObj:{...n,onSubmit:g}})]})};export{S as default};