import{q as h,r as m,b as c,F as u,j as e}from"./vendor.abe5e19c.js";import{n as T,u as b,T as r,B as p,g as n}from"./index.945cac23.js";import{C as H}from"./Card.0a56d7c5.js";const j=()=>{let i=h(),s=T+(i.id?"/"+i.id:"");const{data:l,setData:x,loadingDone:o}=b({method:"get",url:s},t=>{var a,d;return i.id?[(a=t.data)==null?void 0:a.branches]:(d=t.data)==null?void 0:d.branches});return m.exports.useEffect(()=>(r.search.clear(),r.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",6),()=>{r.search.clear()}),[]),c(u,{children:[e(p,{title:"Stocks",links:[{name:"Home",link:"/gym-admin"},{name:"Stocks",link:"/gym-admin/stocks"}]}),e(H,{title:"Stocks",children:c(r,{tableId:".table-brand-staff",loadingDone:o,footerSelect:!0,filter:!0,footer:[{index:3,text:""},{index:4,text:"\u20B9"},{index:6,text:"\u20B9"}],children:[e(r.Header,{children:c(r.Row,{children:[e(r.TH,{children:"Id"}),e(r.TH,{children:"Branch"}),e(r.TH,{children:"Item"}),e(r.TH,{children:"Qty"}),e(r.TH,{children:"Cost Price"}),e(r.TH,{children:"Selling Price"}),e(r.TH,{children:"Amount"}),e(r.TH,{children:"Date"})]})}),e(r.Body,{children:l&&l.map(t=>t.stocks.map((a,d)=>c(r.Row,{children:[e(r.TH,{children:n(()=>a.id)}),e(r.TH,{children:n(()=>t.branch_name)}),e(r.TH,{children:n(()=>a.particular)}),e(r.TH,{children:n(()=>a.qty)}),e(r.TH,{children:n(()=>a.rate)}),e(r.TH,{children:n(()=>a.amount)}),e(r.TH,{children:n(()=>a.qty*a.rate)}),e(r.TH,{children:n(()=>new Date(a.created_at).toLocaleDateString())})]},a.id)))}),e(r.Footer,{children:c("tr",{children:[e("th",{colSpan:3,className:"text-right",children:"Total"}),e("th",{children:n(()=>l.reduce((t,a)=>(a.stocks.map(d=>{t=Number(d.qty)+t}),t),0))}),e("th",{colSpan:1}),e("th",{colSpan:1}),e("th",{colSpan:1}),e("td",{colSpan:1})]})})]})})]})};export{j as default};
