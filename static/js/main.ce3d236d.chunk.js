(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),i=n(7),r=n.n(i),l=(n(13),n(5)),s=n(4),u=(n(14),new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z")),d=.05,j=window.innerWidth,f=window.innerHeight;function b(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(o.useState)([]),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(o.useEffect)((function(){var n=e.current.getContext("2d"),c=t.current;n.clearRect(0,0,j,f),a.forEach((function(e){!function(e,t){console.log("attempting to draw"),e.fillStyle=t.contract?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d),e.translate(t.x/d-80,t.y/d-80),e.rotate(225*Math.PI/180),e.fill(u),e.restore()}(n,e)})),console.log(a[a.length-1]),function(e,t){t&&(e.style.left="".concat(t.x,"px"),e.style.top="".concat(t.y,"px"))}(c,a[a.length-1])})),[t,a,i,e,j,f]}var h=n.p+"static/media/map-overview-bg.ccfc7476.jpg";n(15);var v=function(){var e=b(),t=Object(s.a)(e,6),n=t[0],o=t[1],a=t[2],i=t[3],r=t[4],u=t[5];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:h,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:r,height:u,onContextMenu:function(e){var t={x:e.clientX,y:e.clientY};a([].concat(Object(l.a)(o),[t]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){var t={x:e.clientX,y:e.clientY,contract:!0,recon:!1};a([].concat(Object(l.a)(o),[t]))},children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(e){var t={x:e.clientX,y:e.clientY,contract:!1,recon:!0};a([].concat(Object(l.a)(o),[t]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(e){},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){a([])},children:" Clear Map "})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.ce3d236d.chunk.js.map