import{o as m,r as i,j as e,F as o,d as a,L as d}from"./vendor.07a30449.js";import{u as h}from"./useFetch.e6951538.js";import{A as p}from"./index.855c6d75.js";const v=()=>{const{id:c}=m(),{isLoading:N,loadingDone:l,callback:t}=h(),[s,n]=i.exports.useState(null);return i.exports.useEffect(()=>(document.body.classList.add("certificate-page"),()=>{document.body.classList.remove("certificate-page")}),[]),i.exports.useEffect(()=>{t({url:p+"/"+c,method:"get",success:r=>{n(r.data)}})},[]),e(o,{children:a("div",{className:"wrapper-view",dir:"ltr",children:[e("div",{className:"wrapper-header",children:e("header",{className:"header-app",role:"banner",children:a("h1",{className:"header-app-title",children:[e("a",{className:"logo",href:"#",children:e("img",{className:"logo-img",src:"/test/public/phoenix-logo-1.png",alt:"phoenix Home"})}),e("span",{className:"sr-only",children:"Certificate Validation"})]})})}),e("hr",{className:"divider sr-only"}),l&&s&&s.course=="30 Days Of Code"?a("main",{className:"accomplishment accomplishment-main",children:[e("div",{className:"wrapper-accomplishment-rendering",children:a("div",{className:"accomplishment-rendering",children:[a("div",{className:"wrapper-accomplishment-title verified",children:[a("div",{className:"accomplishment-title",children:[e("img",{className:"lj-university-logo",src:"/test/public/lj-logo.png",alt:""}),e("span",{className:"sr-only",children:"Verified Certificate"})]}),a("div",{className:"wrapper-accomplishment-orgs",children:[e("h3",{className:"accomplishment-orgs-title sr-only",children:"Supported by the following organizations"}),e("ul",{className:"wrapper-orgs list-orgs",children:e("li",{className:"wrapper-organization",children:e("div",{className:"organization",children:e("img",{className:" w-120px",src:"/test/public/phoenix-logo-1.png",alt:"MITx logo"})})})})]})]}),a("div",{className:"wrapper-accomplishment-statement",children:[e("div",{className:"accomplishment-statement",children:a("p",{className:"accomplishment-statement-lead",children:[e("span",{className:"accomplishment-statement-detail copy",children:"This is to certify that"}),a("strong",{className:"accomplishment-recipient",children:[s.first_name," ",s.last_name]}),e("span",{className:"accomplishment-summary copy",children:"successfully completed"}),e("span",{className:"accomplishment-course",children:e("span",{className:"accomplishment-course-name",children:s.course})}),e("span",{className:"accomplishment-statement-detail copy",children:"a course of study offered by MITx, an online learning initiative of the Massachusetts Institute of Technology."})]})}),a("div",{className:"accomplishment-signatories d-flex-column-reverse",children:[e("h3",{className:"accomplishment-signatories-title sr-only",children:"Noted by"}),e("div",{className:"wrapper-signatories",children:e("div",{className:"list-signatories",children:a("div",{className:"signatory",children:[e("img",{className:"signatory-signature",src:"#",alt:"Manish Sir"}),e("h4",{className:"signatory-name",children:"Manish Sir"}),a("p",{className:"signatory-credentials",children:[e("span",{className:"role",children:"Dean for LJ University"}),e("span",{className:"organization"})]})]})})})]})]}),e("div",{className:"wrapper-accomplishment-stamps",children:a("ul",{className:"accomplishment-stamps copy-list",children:[e("li",{className:"accomplishment-stamp-platform",children:e("a",{className:"img-link",href:"#",children:e("img",{className:"logo-img w-50px",src:"/test/public/phoenix-logo-half.png",alt:"phoenix"})})}),a("li",{className:"accomplishment-stamp-date",children:[e("span",{className:"title",children:"Verified Certificate"}),e("span",{className:"copy-micro emphasized",children:"Issued June 9, 2020"})]}),a("li",{className:"accomplishment-stamp-validity",children:[e("span",{className:"title",children:"Valid Certificate ID"}),e("span",{className:"emphasized",children:e(d,{to:"#",children:c})})]})]})})]})}),e("div",{className:"wrapper-accomplishment-metadata",children:a("div",{className:"accomplishment-metadata",children:[a("div",{className:"accomplishment-metadata-bit accomplishment-metadata-aboutedx",children:[e("h3",{className:"accomplishment-metadata-title",children:"About phoenix"}),a("p",{className:"accomplishment-metadata-copy",children:[e("a",{href:"http://www.phoenix.org/",children:"phoenix"})," offers interactive online classes and MOOCs from the world\u2019s best universities, including MIT, Harvard, Berkeley, University of Texas, and many others. phoenix is a mission driven initiative created by founding partners Harvard and MIT."]})]}),a("div",{className:"accomplishment-metadata-bit accomplishment-metadata-aboutcert",children:[e("h3",{className:"accomplishment-metadata-title",children:"About phoenix Verified Certificates"}),e("p",{className:"accomplishment-metadata-copy",children:"An phoenix Verified Certificate signifies that the learner has agreed to abide by the phoenix honor code and completed all of the required tasks of this course under its guidelines."})]})]})})]}):e("div",{className:"sorry-page",children:a("h5",{children:["SORRY BUDDY, ",e("br",{})," THIS TRICK WON'T WORK!!!"]})}),e("hr",{className:"divider sr-only"})]})})};export{v as default};