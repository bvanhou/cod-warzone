(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),a=n.n(o),i=n(7),r=n.n(i),l=(n(13),n(5)),s=n(4),u=(n(14),new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z")),d=.05,j=window.innerWidth,f=window.innerHeight;function b(){var t=Object(o.useRef)(null),e=Object(o.useRef)(null),n=Object(o.useState)([]),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(o.useEffect)((function(){var n=t.current.getContext("2d"),c=e.current;n.clearRect(0,0,j,f),a.forEach((function(t){!function(t,e){console.log("attempting to draw"),console.log(e.contract),(e.contract||e.recon)&&(t.fillStyle=e.contract?"red":"blue",t.shadowColor="blue",t.shadowBlur=15,t.save(),t.scale(d,d),t.translate(e.x/d-80,e.y/d-80),t.rotate(225*Math.PI/180),t.fill(u),t.restore())}(n,t)})),console.log(a[a.length-1]),function(t,e){e&&(t.style.left="".concat(e.x,"px"),t.style.top="".concat(e.y,"px"))}(c,a[a.length-1])})),[e,a,i,t,j,f]}var h=n.p+"static/media/map-overview-bg.ccfc7476.jpg";n(15);var v=function(){var t=b(),e=Object(s.a)(t,6),n=e[0],o=e[1],a=e[2],i=e[3],r=e[4],u=e[5];return window.addEventListener("contextmenu",(function(t){t.preventDefault()}),!1),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:h,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:r,height:u,onContextMenu:function(t){var e={x:t.clientX,y:t.clientY};a([].concat(Object(l.a)(o),[e]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(t){var e={x:t.clientX,y:t.clientY,contract:!0,recon:!1};a([].concat(Object(l.a)(o),[e]))},children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(t){var e={x:t.clientX,y:t.clientY,contract:!1,recon:!0};a([].concat(Object(l.a)(o),[e]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(t){},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(t){a([])},children:" Clear Map "})})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),a(t),i(t)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.dc363e1d.chunk.js.map