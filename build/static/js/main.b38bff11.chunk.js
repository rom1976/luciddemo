(this.webpackJsonplucid=this.webpackJsonplucid||[]).push([[0],{79:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(26),i=c.n(a),r=c(22),o=c(4),j=c(83),l=c(84),d=c(33),u=c.n(d),b=c(34),O=c(29),h=c(2);var m=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[" ",c]}),Object(h.jsx)("button",{onClick:function(){return s(c+1)},children:"Add"})]})},p=(c(77),function(e){return e.items.map((function(e,t){return Object(h.jsx)("div",{className:"col mb-3",children:Object(h.jsxs)(j.a,{border:"primary",style:{width:"19rem",textAlign:"center"},children:[Object(h.jsxs)(j.a.Header,{style:{fontWeight:"bold"},children:[" ",e.itemName]},Math.random()),Object(h.jsxs)(j.a.Body,{children:[Object(h.jsxs)(j.a.Title,{children:[" ",e.itemRate,"/- "]},Math.random()),Object(h.jsxs)(j.a.Text,{children:["Veg"===e.foodTypeName&&Object(h.jsx)(b.a,{icon:O.b,size:"2x",color:"green"}),"Non Veg"===e.foodTypeName&&Object(h.jsx)(b.a,{icon:O.a,size:"2x",color:"red"})]},Math.random()),Object(h.jsx)(m,{})]},Math.random())]},t)})}))}),x=(c(81),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),d=i[0],b=i[1],O=Object(n.useState)([]),m=Object(o.a)(O,2),x=m[0],g=m[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),y=v[0],N=v[1],w=Object(n.useState)(!1),S=Object(o.a)(w,2),C=S[0],I=S[1],k=Object(n.useState)([]),L=Object(o.a)(k,2),T=L[0],F=L[1],P=Object(n.useState)([]),A=Object(o.a)(P,2),M=A[0],B=A[1],D=Object(n.useState)(""),z=Object(o.a)(D,2),J=z[0],U=z[1],V=Object(n.useState)({width:"0px",opacity:0}),E=Object(o.a)(V,2),G=E[0],H=E[1];Object(n.useEffect)((function(){x.lucidapiToken&&I(!0),u.a.get("https://demo.lucidits.com/LUCIDAPI/V1/GetOnlineOrderMenuItemListPageDetails",{headers:{Authorization:"Bearer ".concat(x.lucidapiToken)}}).then((function(e){F(e.data.response.menuItems)})).then((function(e){return N("Failed")}))}),[C,x]);var R,W=JSON.stringify(T),q=JSON.parse(W);return console.log(Object.entries(q)),C?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row pb-3",children:[Object(h.jsx)("h1",{children:M}),Object(h.jsx)("span",{style:{fontSize:"40px"},onClick:function(){return H({width:"250px",opacity:1})},children:" \u2630"}),Object(h.jsx)("h1",{className:"mb-4",style:{textAlign:"center"},children:"Menu Items List"}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",placeholder:"search...",onChange:function(e){U(e.target.value)}})}),Object(h.jsxs)("div",{className:"sidenav",style:G,children:[Object(h.jsxs)("div",{className:"close",children:[Object(h.jsx)("span",{onClick:function(){return H({width:"0px",opacity:0})},children:"\xd7"})," "]}),Object(h.jsx)("a",{href:"\\#",children:"User Name"})]}),Object(h.jsxs)("div",{className:"row mt-3",children:[""===J&&Object(h.jsx)(p,{items:q}),q.map((function(e,t){return e.itemName})).filter((function(e){if(e.toLowerCase().includes(J.toLowerCase()))return Object(h.jsx)(p,{item:e})})).map((function(e,t){var c=q.filter((function(t){return t.itemName===e}));return Object(h.jsx)(p,{items:c})}))]})]})})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container p-5",children:[Object(h.jsx)("h1",{children:M}),Object(h.jsxs)("div",{className:"row ",children:[Object(h.jsx)("div",{className:"col-md-12 d-flex justify-content-center h-100",children:Object(h.jsx)(j.a,{className:"shadow-lg login-card",children:Object(h.jsx)(j.a.Body,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Login"}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{class:"input-group mb-3",children:[Object(h.jsx)("div",{class:"input-group-prepend",children:Object(h.jsx)("span",{class:"input-group-text",children:"User ID"})}),Object(h.jsx)("input",{type:"text",class:"form-control",name:"loginName",placeholder:"yourname",onChange:function(e){s(e.target.value),console.log(c)}})]}),Object(h.jsxs)("div",{class:"input-group mb-3",children:[Object(h.jsx)("div",{class:"input-group-prepend",children:Object(h.jsx)("span",{class:"input-group-text",children:"Password"})}),Object(h.jsx)("input",(R={type:"password",class:"form-control"},Object(r.a)(R,"type","password"),Object(r.a)(R,"name","loginPassword"),Object(r.a)(R,"placeholder","yourpassword"),Object(r.a)(R,"onChange",(function(e){b(e.target.value),console.log(d)})),R))]})]}),Object(h.jsx)(l.a,{type:"button",className:"btn btn-primary",onClick:function(){u.a.post("https://demo.lucidits.com/LUCIDAPI/V1/Login",{},{auth:{username:c,password:d}}).then((function(e){if(console.log(e.data),g(e.data),1===x.errorCode)throw x.message;B(e.data.defaultPropertyName),N("Login Success"),sessionStorage.setItem("key",x.lucidapiToken),console.log(sessionStorage.getItem("key"))})).catch((function(e){N(x.message)}))},children:"Submit"})]})})})}),Object(h.jsxs)("h2",{children:[" ",y," "]})]})]})})});c(79),c(80);var g=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(x,{})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,85)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),f()}},[[82,1,2]]]);
//# sourceMappingURL=main.b38bff11.chunk.js.map