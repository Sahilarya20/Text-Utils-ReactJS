(this.webpackJsonpreactsahil=this.webpackJsonpreactsahil||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(4),r=a.n(n),l=a(2),o=a(5),i=a.n(o),b=a(0);function d(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-success",type:"submit",children:"Search"})]}),Object(b.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(b.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})}),Object(b.jsx)("button",{className:"btn btn-primary ",onClick:function(){var t=s.toUpperCase();n(t),e.showAl("Changed to Upper Case","success")},children:"Conver to uppercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2 ",onClick:function(){var t=s.toLowerCase();n(t),e.showAl("Changed to lower Case","success")},children:"Conver to lowercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2 ",onClick:function(){n(""),e.showAl("Text Cleared","success")},children:"Clear text"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2 ",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAl("Text Cleared","success")},children:"Copy Text"})]}),Object(b.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(b.jsx)("h2",{children:" Your text summary"}),Object(b.jsxs)("p",{children:[s.split(" ").length-1," words and ",s.length," characters"]}),Object(b.jsxs)("p",{children:[.008*s.split(" ").length," minutes to read"]}),Object(b.jsx)("h2",{children:"Preview"}),Object(b.jsx)("p",{children:s.length>0?s:"Enter yout text to Preview"})]})]})}function j(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(b.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})}d.prototypes={title:i.a.string.isRequired};var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),r=Object(l.a)(n,2),o=r[0],i=r[1],m=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),2e3)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{title:"TextUtilss",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#1b0a2f",m("Dark Mode has been Enabled","success")):(s("light"),document.body.style.backgroundColor="white",m("Light Mode has been Enabled","success"))}}),Object(b.jsx)(j,{alert:o}),Object(b.jsx)("div",{className:"container my-3",children:Object(b.jsx)(h,{showAl:m,heading:" Enter the text to analyze ",mode:a})})]})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e7ccb4d3.chunk.js.map