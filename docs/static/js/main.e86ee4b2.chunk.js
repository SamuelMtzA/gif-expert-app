(this["webpackJsonp03-gif-expert"]=this["webpackJsonp03-gif-expert"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.target.value)}})})},j=n(10),d=n(6),b=n.n(d),f=n(8),l=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,a,r,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=12&api_key=BYLmd0xsaH5O7qWI7QyE5WY3N6u7PHNu"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();function p(e){var t=e.id,n=e.title,a=e.url;return Object(u.jsxs)("main",{className:"main-container",children:[Object(u.jsx)("img",{src:a,alt:t}),Object(u.jsx)("p",{children:n})]})}var m=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){l(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"gifs-grid animate__bounceIn animate__fadeIn",children:t}),c&&Object(u.jsx)("p",{className:"gifs-grid animate__bounceIn animate__flash",children:"Loading..."}),Object(u.jsx)("div",{className:"gifs-grid animate__bounceIn animate__fadeIn",children:r.map((function(e){return Object(u.jsx)(p,Object(j.a)({},e),e.id)}))})]})},O=function(){var e=Object(a.useState)(["One-Punch"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(m,{category:e},e)}))})]})};n(17);c.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e86ee4b2.chunk.js.map