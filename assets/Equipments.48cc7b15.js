import{q as o,r as h,b as d,F as b,j as a}from"./vendor.abe5e19c.js";import{k as u,u as p,T as e,B as T,g as n}from"./index.6b6b7103.js";import{C as f}from"./Card.0a56d7c5.js";const S=()=>{let i=o(),l=u+(i.id?"/"+i.id:"");const{data:c,setData:H,loadingDone:m}=p({method:"get",url:l},t=>{var r,s;return i.id?[(r=t.data)==null?void 0:r.branches]:(s=t.data)==null?void 0:s.branches});return h.exports.useEffect(()=>(e.search.clear(),e.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",4),()=>{e.search.clear()}),[]),d(b,{children:[a(T,{title:"Equipments",links:[{name:"Home",link:"/gym-admin"},{name:"Equipments",link:"/gym-admin/equipments"}]}),a(f,{title:"Equipments",children:d(e,{tableId:".table-brand-staff",loadingDone:m,footerSelect:!0,filter:!0,footer:[{index:3,text:""}],children:[a(e.Header,{children:d(e.Row,{children:[a(e.TH,{children:"Id"}),a(e.TH,{children:"Branch"}),a(e.TH,{children:"Equipment"}),a(e.TH,{children:"Qty"}),a(e.TH,{children:"Date"})]})}),a(e.Body,{children:c&&c.map(t=>t.equipment.map((r,s)=>d(e.Row,{children:[a(e.TH,{children:n(()=>r.id)}),a(e.TH,{children:n(()=>t.branch_name)}),a(e.TH,{children:n(()=>r.particular)}),a(e.TH,{children:n(()=>r.qty)}),a(e.TH,{children:n(()=>new Date(r.created_at).toLocaleDateString())})]},r.id)))}),a(e.Footer,{children:d("tr",{children:[a("td",{colSpan:3}),a("th",{}),a("td",{colSpan:1})]})})]})})]})};export{S as default};