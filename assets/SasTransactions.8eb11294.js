import{r as i,b as r,F as c,j as a}from"./vendor.abe5e19c.js";import{b as l,u as o,T as e,B as h,g as n,I as m}from"./index.945cac23.js";import{C as T}from"./Card.0a56d7c5.js";const S=()=>{l();const{data:d,setData:u,loadingDone:s}=o({method:"get",url:m+"/create"},"sas_transaction");return i.exports.useEffect(()=>(e.search.clear(),e.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",5),()=>{e.search.clear()}),[]),r(c,{children:[a(h,{title:"Transactions",links:[{name:"Home",link:"/branch-admin"},{name:"Transactions",link:"/branch-admin/transactions"}]}),a(T,{title:"Transactions",children:r(e,{tableId:".table-brand-staff",loadingDone:s,footerSelect:!0,filter:!0,footer:[{index:2,text:"\u20B9"},{index:4,text:""}],children:[a(e.Header,{children:r(e.Row,{children:[a(e.TH,{children:"Id"}),a(e.TH,{children:"Plan"}),a(e.TH,{children:"Amount"}),a(e.TH,{children:"Transaction Id"}),a(e.TH,{children:"Plan Days"}),a(e.TH,{children:"Date"})]})}),a(e.Body,{children:d&&d.map((t,x)=>r(e.Row,{children:[a(e.TH,{children:n(()=>t.id)}),a(e.TH,{children:n(()=>t.sas_plan.plan_name)}),a(e.TH,{children:n(()=>t.amount)}),a(e.TH,{children:n(()=>t.razorpay_transaction_id)}),a(e.TH,{children:n(()=>t.sas_plan.plan_validity_days)}),a(e.TH,{children:n(()=>new Date(t.created_at).toLocaleDateString())})]},t.id))}),a(e.Footer,{children:r("tr",{children:[a("td",{colSpan:2,className:"text-right",children:"Total Amount"}),a("th",{}),a("td",{}),a("th",{colSpan:2})]})})]})})]})};export{S as default};
