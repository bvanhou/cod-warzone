(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),a=n.n(o),r=n(7),i=n.n(r),l=(n(13),n(5)),s=n(3),u=(n(14),new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z")),d=.05,j=window.innerWidth,f=window.innerHeight;function b(){var t=Object(o.useRef)(null),e=Object(o.useRef)(null),n=Object(o.useState)([]),c=Object(s.a)(n,2),a=c[0],r=c[1];return Object(o.useEffect)((function(){var n=t.current.getContext("2d"),c=e.current;console.log(a),function(t,e){console.log(e),e&&(t.style.left="".concat(e.x,"px"),t.style.top="".concat(e.y,"px"))}(c,a[a.length-1]),n.clearRect(0,0,j,f),a.forEach((function(t){!function(t,e){console.log("attempting to draw"),(e.contract||e.recon)&&(t.fillStyle=e.contract?"red":"blue",t.shadowColor="blue",t.shadowBlur=15,t.save(),t.scale(d,d),t.translate(e.x/d-80,e.y/d-80),t.rotate(225*Math.PI/180),t.fill(u),t.restore())}(n,t)}))})),[e,a,r,t,j,f]}var x=n.p+"static/media/map-overview-bg.ccfc7476.jpg";n(15);var v=function(){var t=b(),e=Object(s.a)(t,6),n=e[0],a=e[1],r=e[2],i=e[3],u=e[4],d=e[5],j=Object(o.useState)({}),f=Object(s.a)(j,2),v=f[0],h=f[1];return window.addEventListener("contextmenu",(function(t){t.preventDefault()}),!1),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:x,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:u,height:d,onContextMenu:function(t){var e={x:t.clientX,y:t.clientY};h(e),r([].concat(Object(l.a)(a),[e]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(){var t={x:v.x,y:v.y,contract:!0,recon:!1};r([].concat(Object(l.a)(a),[t]))},children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){var t={x:v.x,y:v.y,contract:!1,recon:!0};r([].concat(Object(l.a)(a),[t]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var t=v.x,e=v.y;a.filter((function(n){return n.x===t&&n.y===e}))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(t){r([])},children:" Clear Map "})})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),a(t),r(t)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.f3afb7dd.chunk.js.map