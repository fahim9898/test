import{q as o,r as u,b as c,F as b,j as e}from"./vendor.abe5e19c.js";import{o as T,u as H,T as a,B as p,g as n,a as s}from"./index.945cac23.js";import{C as x}from"./Card.0a56d7c5.js";const S=()=>{let l=o(),m=T+(l.id?"/"+l.id:"");const{data:i,setData:f,loadingDone:h}=H({method:"get",url:m},t=>{var r,d;return l.id?[(r=t.data)==null?void 0:r.branches]:(d=t.data)==null?void 0:d.branches});return u.exports.useEffect(()=>(a.search.clear(),a.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",9),()=>{a.search.clear()}),[]),c(b,{children:[e(p,{title:"Purchases",links:[{name:"Home",link:"/gym-admin"},{name:"Purchases",link:"/gym-admin/purchases"}]}),e(x,{title:"Purchases",children:c(a,{tableId:".table-brand-staff",loadingDone:h,footerSelect:!0,filter:!0,footer:[{index:3,text:""},{index:4,text:"\u20B9"},{index:5,text:"\u20B9"}],children:[e(a.Header,{children:c(a.Row,{children:[e(a.TH,{children:"Id"}),e(a.TH,{children:"Branch"}),e(a.TH,{children:"Item"}),e(a.TH,{children:"Qty"}),e(a.TH,{children:"Cost Price"}),e(a.TH,{children:"Amount"}),e(a.TH,{children:"Bill"}),e(a.TH,{children:"Note"}),e(a.TH,{children:"Purchase By"}),e(a.TH,{children:"Date"})]})}),e(a.Body,{children:i&&i.map(t=>t.purchase.map((r,d)=>c(a.Row,{children:[e(a.TH,{children:n(()=>r.id)}),e(a.TH,{children:n(()=>t.branch_name)}),e(a.TH,{children:n(()=>r.stock_item.particular)}),e(a.TH,{children:n(()=>r.qty)}),e(a.TH,{children:n(()=>r.amount)}),e(a.TH,{children:n(()=>r.amount*r.qty)}),e(a.TH,{children:e("a",{href:s(r.bill),"data-fancybox":"images",children:e("img",{className:"table-img",src:s(r.bill),alt:""})})}),e(a.TH,{children:n(()=>r.purchase_transaction.note)}),e(a.TH,{children:n(()=>r.purchase_transaction.purchased_by.name)}),e(a.TH,{children:n(()=>new Date(r.created_at).toLocaleDateString())})]},r.id)))}),e(a.Footer,{children:c("tr",{children:[e("td",{colSpan:3,className:"text-right",children:"Total"}),e("th",{children:n(()=>i.reduce((t,r)=>(r.purchase.map(d=>{t=Number(d.qty)+t}),t),0))}),e("th",{children:n(()=>i.reduce((t,r)=>(r.purchase.map(d=>{t=Number(d.amount)+t}),t),0))}),e("th",{children:n(()=>i.reduce((t,r)=>(r.purchase.map(d=>{t=Number(d.amount)*Number(d.qty)+t}),t),0))}),e("td",{colSpan:4})]})})]})})]})};export{S as default};
