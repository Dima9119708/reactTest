(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{109:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n(0),i=n.n(c),r=n(11),l=n.n(r),o=n(13),s=(n(91),n(12)),u=n(20),d=n(147),j=n(149),b="getClients",p="getApplicants",O="addApplicantData",m="delApplicant",x="client",f="arrayIndexApplicant",h="jsonDATA",g=n(45),v=n.n(g),y=n(63),A="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDc0NjEyMDMsImV4cCI6MTYxMDA1MzIwMywicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImJ5Lmhhc2tlbGwifQ.F_0yZmAbIbPuonnXiKdxI9ne77y3CCFmoe-Wygp3wIgXShDoO64cnnTBsVQG6u6VUvZt1LrueXhUnbOmVKnbUTckKKkNcQWl6iHVO-9RgP2133SOzWcSmVDpf0BC_K0lczF0DaAmp1gHii-Ct50nORpSONSbWNnjkfhBIPbyLVDR2sKuGKyMGG-6Qy0JRDTFnt5AVO_z5HEpCYSrQdhwd_wl7gcD9-vH7_aQib9dq6htbDdqdFw1NXk84B_YTfa2szSFyMDuQkaTgXZwoOOouxEHy9JlJgkKgxK5W-f84cNFkFrYxUhxaNROgPFY8Cs9pB54NcVaSceQc2vF2lgtFb3VyC-ra3xTNtrNmzGPpikftkeU8lnojP8ifEsdeYWjgJGUa7HsR-VMq2fN9otGd0PqpXLpXPasBXEvub7tRyqLziGUG_h4SdgIOu0aGe3sItigzF3fnaCc-Vv8B1wM_qt05ahCgdMuMD7X2dW0eAFuO8zKZszz7owiD5S92QiJkI2sGUG5YzPTOPjch-Qoax--aM1QE8XFDvkDYCruARDTBxcqNp6QAdEANr_toscUpcwTM5-hNfSTGaWvF0dkJaek2PCCszOWAyz6TiLy9lGXVkFEGn-qeR9V0ecdHNx9F_6YNqgWAIOlMNCsYiNp77J6ggmLjJZfTYDh6BAwFNI",N=function(t){return{type:x,clientObj:t}},C=function(t){return function(e){v.a.get("http://lexberry.com.ua/api/v1/clients",{headers:{Authorization:"Bearer ".concat(A)}}).then((function(n){var a;e((a=n.data.items,{type:b,clients:a})),t(n.data.items)})).catch((function(t){return console.warn(t)}))}},B=function(t){return function(e){v.a.get("http://lexberry.com.ua/api/v1/applicants?filter[".concat(t.id,"]=XXX"),{headers:{Authorization:"Bearer ".concat(A)}}).then((function(n){var a;e((a=n.data.items,{type:p,applicants:a})),e(N(t))})).catch((function(t){return console.warn(t)}))}},w=function(t){return{type:f,data:t}},S=n(141),k=function(){var t=Object(o.c)((function(t){return t.data})),e=Object(o.b)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(S.a,{onClick:function(){e(function(t){return{type:h,data:t}}(JSON.stringify(t,null,2)))},style:{fontSize:"15px"},variant:"contained",color:"primary",children:"\u0417\u0411\u0415\u0420\u0415\u0413\u0422\u0418 \u0417\u0410\u042f\u0412\u041a\u0423"})})},D=n(148),I=Object(D.a)({client:{"& .name":{margin:0,marginBottom:"5px",fontSize:"17px"},"& .phone":{marginBottom:"15px"}}}),F=function(){var t=i.a.useState([]),e=Object(u.a)(t,2),n=e[0],c=e[1],r=Object(o.c)((function(t){return t.client})),l=Object(o.c)((function(t){return t.getClients||[]})),b=Object(o.b)(),p=I();i.a.useEffect((function(){b(C(c))}),[]);return Object(a.jsxs)("div",{className:"wrap ".concat(p.client),children:[Object(a.jsx)("h2",{children:"\u041a\u043bi\u0454\u043d\u0442"}),Object(a.jsx)("div",{className:"select",children:Object(a.jsx)(j.a,{className:"select",options:n,getOptionLabel:function(t){return(null===t||void 0===t?void 0:t.name)||(null===t||void 0===t?void 0:t.label)},onInputChange:function(t,e){e.length>3?b(function(t,e){return function(n){Object(y.debounce)((function(){v.a.get("http://lexberry.com.ua/api/v1/clients?search[name]=".concat(t),{headers:{Authorization:"Bearer ".concat(A)}}).then((function(t){var n;(null===(n=t.data)||void 0===n?void 0:n.error)?e([]):e(t.data.items)}))}),300)()}}(e,c)):c(""===e?l:[])},onChange:function(t,e){b(N(null)),e&&b(B(e))},loading:!l.length,renderInput:function(t){return Object(a.jsx)(d.a,Object(s.a)(Object(s.a)({},t),{},{label:"\u041f\u043e\u0438\u0441\u043a / \u0412\u044b\u0431\u043e\u0440 \u043a\u043b\u0438\u0435\u043d\u0442\u0430",margin:"normal"}))}})}),r&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"name",children:(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.label)}),Object(a.jsxs)("p",{className:"phone",children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d. ",r.phone||"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"]}),Object(a.jsx)(k,{})]})]})},z=n(38),J=n(154),M=n(151),V=n(153),T=n(150),X=Object(D.a)({title:{marginBottom:"15px"},formAddApplicant:{width:"100%",marginBottom:"25px","& .title":{marginBottom:"15px",color:"#858585",fontSize:"18px"}},buttonAdd:{"& span":{display:"inline-block"}},buttonWrap:{display:"flex",flexDirection:"column",width:"180px",marginBottom:"15px"},formInner:{display:"flex",flexDirection:"column","@media (min-width : 768px)":{flexDirection:"row",alignItems:"flex-end"},"& .form-inputs-group":{display:"flex",flexDirection:"column","&:last-child":{marginRight:"0"},"@media (min-width : 768px)":{marginRight:"20px",width:"50%"}},"& .label":{marginBottom:"20px"}}}),G=["\u0423\u043a\u0440\u0430\u0438\u043d\u0430","\u0413\u0440\u0443\u0437\u0438\u044f","\u0418\u0442\u0430\u043b\u0438\u044f"],W=function(){var t=i.a.useState(G[0]),e=Object(u.a)(t,2),n=e[0],c=e[1],r=i.a.useState(""),l=Object(u.a)(r,2),b=l[0],p=l[1],m=i.a.useState(""),x=Object(u.a)(m,2),f=x[0],h=x[1],g=i.a.useState(""),v=Object(u.a)(g,2),y=v[0],A=v[1],N=i.a.useState(""),C=Object(u.a)(N,2),B=C[0],w=C[1],k=i.a.useState(""),D=Object(u.a)(k,2),I=D[0],F=D[1],z=i.a.useState(""),M=Object(u.a)(z,2),W=M[0],Q=M[1],R=i.a.useState(""),E=Object(u.a)(R,2),U=E[0],L=E[1],Y=i.a.useState(!1),K=Object(u.a)(Y,2),P=K[0],_=K[1],q=Object(o.b)(),H=X();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:H.buttonWrap,children:Object(a.jsxs)(S.a,{onClick:function(){return _(!P)},className:H.buttonAdd,variant:"outlined",color:"primary",children:["\u0414\u043e\u0434\u0430\u0442\u0438 ",Object(a.jsx)("span",{children:"+"})]})}),Object(a.jsxs)("form",{style:{display:P?"block":"none"},className:H.formAddApplicant,children:[Object(a.jsx)("h4",{className:"title",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u044f\u0432\u043d\u0438\u043a\u0430"}),Object(a.jsxs)(V.a,{"aria-label":"gender",defaultValue:"\u0424i\u0437\u0438\u0447\u043d\u0430 \u043e\u0441\u043e\u0431\u0430",name:"gender1",style:{marginBottom:"20px"},children:[Object(a.jsx)(J.a,{value:"\u0424i\u0437\u0438\u0447\u043d\u0430 \u043e\u0441\u043e\u0431\u0430",control:Object(a.jsx)(T.a,{color:"primary"}),label:"\u0424i\u0437\u0438\u0447\u043d\u0430 \u043e\u0441\u043e\u0431\u0430"}),Object(a.jsx)(J.a,{value:"\u042e\u0440\u0438\u0434\u0438\u0447\u043d\u0430 \u043e\u0441\u043e\u0431\u0430",control:Object(a.jsx)(T.a,{color:"primary"}),label:"\u042e\u0440\u0438\u0434\u0438\u0447\u043d\u0430 \u043e\u0441\u043e\u0431\u0430"})]}),Object(a.jsxs)("div",{className:H.formInner,children:[Object(a.jsxs)("div",{className:"form-inputs-group",children:[Object(a.jsx)("div",{className:"select",children:Object(a.jsx)(j.a,{className:"select",options:G,getOptionLabel:function(t){return t},onChange:function(t,e){return c(e)},defaultValue:G[0],renderInput:function(t){return Object(a.jsx)(d.a,Object(s.a)(Object(s.a)({},t),{},{label:"\u041a\u0440\u0430\u0457\u043d\u0430",margin:"normal"}))}})}),Object(a.jsx)(d.a,{value:b,onChange:function(t){return p(t.target.value)},style:{marginBottom:"20px"},label:"USREOU"}),Object(a.jsx)(d.a,{value:f,onChange:function(t){return h(t.target.value)},style:{marginBottom:"20px"},label:"I\u043c'\u044f"}),Object(a.jsx)(d.a,{value:y,onChange:function(t){return A(t.target.value)},style:{marginBottom:"20px"},label:"\u0410\u0434\u0440\u0435\u0441\u0430"}),Object(a.jsx)(d.a,{value:B,onChange:function(t){return w(t.target.value)},style:{marginBottom:"20px"},label:"\u041ci\u0441\u0442\u043e"}),Object(a.jsx)(d.a,{value:I,onChange:function(t){return F(t.target.value)},style:{marginBottom:"20px"},label:"I\u043d\u0434\u0435\u043a\u0441"})]}),Object(a.jsxs)("div",{className:"form-inputs-group",style:{display:"\u0423\u043a\u0440\u0430\u0438\u043d\u0430"===n?"none":"inline-flex"},children:[Object(a.jsx)(d.a,{value:W,onChange:function(t){return Q(t.target.value)},style:{marginBottom:"20px"},label:"\u041d\u0430\u0437\u0432\u0430 \u043c\u043e\u0432\u043e\u044e \u043f\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f"}),Object(a.jsx)(d.a,{value:U,onChange:function(t){return L(t.target.value)},style:{marginBottom:"20px"},label:"\u0410\u0434\u0440\u0435\u0441\u0430 \u043c\u043e\u0432\u043e\u044e \u043f\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f"})]})]}),Object(a.jsx)("div",{className:H.buttonWrap,children:Object(a.jsx)(S.a,{onClick:function(){if(f.length&&y.length){var t={address:{address:y,city:B,country:n,postCode:I},id:Date.now(),innCode:b,name:f,originalAddress:U,originalName:W,delete:!0};q(function(t){return{type:O,data:t}}(t)),h(""),p(""),A(""),w(""),F(""),Q(""),L(""),_(!1)}},className:H.buttonAdd,variant:"outlined",color:"primary",children:"\u0414\u043e\u0434\u0430\u0442\u0438"})})]})]})},Q=Object(D.a)({root:Object(z.a)({display:"flex",marginBottom:"20px"},"@media (min-width:768px)",{marginBottom:"0"}),title:{marginBottom:"15px"},wrapCheckBox:{marginBottom:"20px"},buttonWrap:{display:"flex",flexDirection:"column",width:"180px"}}),R=[],E=function(){var t=Object(o.c)((function(t){return t.client})),e=Object(o.c)((function(t){return t.getApplicants||[]})),n=Object(o.b)(),c=Q(),i=function(t,e){var a=R.indexOf(e);R.splice(a,1),n(w(R)),n(function(t){return{type:m,id:t}}(t))};return Object(a.jsxs)("div",{className:"wrap",children:[Object(a.jsx)("h2",{className:c.title,children:"\u0417\u0430\u044f\u0432\u043d\u0438\u043a\u0438"}),Object(a.jsx)("div",{className:c.wrapCheckBox,children:e.map((function(t,e){return Object(a.jsx)(J.a,{className:c.root,control:Object(a.jsx)(M.a,{onChange:function(t){return function(t,e){if(R.includes(e)){var a=R.indexOf(e);R.splice(a,1)}else R.push(e);n(w(R))}(0,e)},name:"checkedB",color:"primary"}),label:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("strong",{children:t.name}),",",t.address.address,Object(a.jsx)("span",{onClick:function(n){return i(t.id,e)},style:{display:t.delete?"inline-block":"none",marginLeft:"5px"},children:"\u2716"})]})},t.id)}))}),Object(a.jsx)(W,{}),Object(a.jsx)("div",{style:{display:t?"block":"none"},className:c.buttonWrap,children:Object(a.jsx)(k,{})})]})},U=function(){var t=Object(o.c)((function(t){return t.jsonDATA}));return Object(a.jsx)("div",{className:"wrap",style:{overflowX:"auto"},children:Object(a.jsx)("pre",{children:t})})};var L=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(F,{}),Object(a.jsx)(E,{}),Object(a.jsx)(U,{})]})},Y=n(34),K=n(69),P=n(70),_={getClients:[],getApplicants:[],client:null,data:{id:"",applicantsIds:[],newApplicants:[]},jsonDATA:""},q=Object(Y.c)((function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return Object(s.a)(Object(s.a)({},e),{},{getClients:n.clients});case x:return Object(s.a)(Object(s.a)({},e),{},{client:n.clientObj});case p:return Object(s.a)(Object(s.a)({},e),{},{getApplicants:n.applicants});case O:return Object(s.a)(Object(s.a)({},e),{},{getApplicants:[].concat(Object(P.a)(e.getApplicants),[n.data])});case m:return Object(s.a)(Object(s.a)({},e),{},{getApplicants:e.getApplicants.filter((function(t){return t.id!==n.id}))});case f:var a=n.data.reduce((function(t,n){return t.push(e.getApplicants[n]),t}),[]),c=a.filter((function(t){return null===t||void 0===t?void 0:t.delete}));return Object(s.a)(Object(s.a)({},e),{},{data:{id:null===(t=e.client)||void 0===t?void 0:t.id,applicantsIds:a,newApplicants:c}});case h:return Object(s.a)(Object(s.a)({},e),{},{jsonDATA:n.data});default:return Object(s.a)({},e)}}),Object(Y.a)(K.a));l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(o.a,{store:q,children:Object(a.jsx)(L,{})})}),document.getElementById("root"))},91:function(t,e,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.53ab60ec.chunk.js.map