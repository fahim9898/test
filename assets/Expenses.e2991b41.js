import{q as m,r as h,b as s,F as u,j as a}from"./vendor.abe5e19c.js";import{m as p,u as b,T as e,B as T,g as n}from"./index.945cac23.js";import{C as x}from"./Card.0a56d7c5.js";const _=()=>{let c=m(),l=p+(c.id?"/"+c.id:"");const{data:i,setData:H,loadingDone:o}=b({method:"get",url:l},t=>{var r,d;return c.id?[(r=t.data)==null?void 0:r.branches]:(d=t.data)==null?void 0:d.branches});return h.exports.useEffect(()=>(e.search.clear(),e.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",6),()=>{e.search.clear()}),[]),s(u,{children:[a(T,{title:"Expenses",links:[{name:"Home",link:"/gym-admin"},{name:"Expenses",link:"/gym-admin/expenses"}]}),a(x,{title:"Expenses",children:s(e,{tableId:".table-brand-staff",loadingDone:o,footerSelect:!0,filter:!0,footer:[{index:3,text:"\u20B9"}],children:[a(e.Header,{children:s(e.Row,{children:[a(e.TH,{children:"Id"}),a(e.TH,{children:"Branch"}),a(e.TH,{children:"Expense"}),a(e.TH,{children:"Amount"}),a(e.TH,{children:"Added By"}),a(e.TH,{children:"Note"}),a(e.TH,{children:"Date"})]})}),a(e.Body,{children:i&&i.map(t=>t.expense.map((r,d)=>s(e.Row,{children:[a(e.TH,{children:n(()=>r.id)}),a(e.TH,{children:n(()=>t.branch_name)}),a(e.TH,{children:n(()=>r.particular)}),a(e.TH,{children:n(()=>r.expense_amount)}),a(e.TH,{children:n(()=>r.expense_transaction.added_by.name)}),a(e.TH,{children:n(()=>r.expense_transaction.note)}),a(e.TH,{children:n(()=>new Date(r.created_at).toLocaleDateString())})]},r.id)))}),a(e.Footer,{children:s("tr",{children:[a("td",{colSpan:3,className:"text-right",children:"Total Amount"}),a("th",{children:n(()=>i.reduce((t,r)=>(r.expense.map(d=>{t=Number(d.expense_amount)+t}),t),0)+" \u20B9")}),a("td",{colSpan:3})]})})]})})]})};export{_ as default};
