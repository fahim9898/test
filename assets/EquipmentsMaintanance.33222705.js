import{r as u,c as t,F as b,j as a}from"./vendor.436bddb5.js";import{b as p,u as f,T as e,B as g,g as i,N as r}from"./index.039e5ba8.js";import{C as T}from"./Card.50e90fed.js";const _=()=>{const{isLoading:H,callback:c}=p(),{data:s,setData:l,loadingDone:o}=f({method:"get",url:r},"equipments_to_maintains_to_maintain");u.exports.useEffect(()=>(e.search.clear(),e.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",3),()=>{e.search.clear()}),[]);function m(n){c({method:"patch",url:r+"/"+n.id,data:{},success:d=>{window.Notify({status:"success",message:d.data.message});let h={...n,...d.data.equipments_to_maintain};e.fn.updateTableWithId(s,h,l,"id")},error:d=>{window.$(`#${modalObj.modalId}`).modal("hide")}})}return t(b,{children:[a(g,{title:"Maintenance",links:[{name:"Home",link:"/branch-admin"},{name:"Equipments",link:"/branch-admin/equipments"},{name:"Maintenance",link:"/branch-admin/maintenance"}]}),a(T,{title:"Maintenance",children:t(e,{tableId:".table-brand-staff",loadingDone:o,footerSelect:!0,filter:!0,children:[a(e.Header,{children:t(e.Row,{children:[a(e.TH,{children:"Id"}),a(e.TH,{children:"Equipment"}),a(e.TH,{children:"Status"}),a(e.TH,{children:"Date"}),a(e.TH,{children:"Actions"})]})}),a(e.Body,{children:s&&s.map((n,d)=>t(e.Row,{children:[a(e.TH,{children:i(()=>n.id)}),a(e.TH,{children:i(()=>n.equipment.particular)}),a(e.TH,{children:n.status?a("span",{className:"badge badge-success",children:"Complete"}):a("span",{className:"badge badge-danger",children:"Pending"})}),a(e.TH,{children:i(()=>new Date(n.created_at).toIndiaDate())}),a(e.TH,{children:i(()=>n.status==0)&&t("span",{className:"cursor-pointer badge badge-info",onClick:()=>m(n),children:[a("i",{className:"feather icon-check-circle"})," Complete"]})})]},n.id))})]})})]})};export{_ as default};