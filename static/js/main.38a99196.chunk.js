(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),r=n(7),i=n.n(r),s=(n(13),n(5)),l=n(3),u=(n(14),new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z")),d=.05,j=window.innerWidth,f=window.innerHeight;function b(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(o.useState)([]),c=Object(l.a)(n,2),a=c[0],r=c[1];return Object(o.useEffect)((function(){var n=e.current.getContext("2d");!function(e,t){console.log(t),t&&(e.style.left="".concat(t.x,"px"),e.style.top="".concat(t.y,"px"))}(t.current,a[a.length-1]),n.clearRect(0,0,j,f),a.forEach((function(e){!function(e,t){console.log("attempting to draw"),(t.contract||t.recon)&&(e.fillStyle=t.contract?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d),e.translate(t.x/d-80,t.y/d-80),e.rotate(225*Math.PI/180),e.fill(u),e.restore())}(n,e)}))})),[t,a,r,e,j,f]}var x=n.p+"static/media/map-overview-bg.ccfc7476.jpg";n(15);var h=function(){var e=b(),t=Object(l.a)(e,6),n=t[0],a=t[1],r=t[2],i=t[3],u=t[4],d=t[5],j=Object(o.useState)({}),f=Object(l.a)(j,2),h=f[0],v=f[1];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:x,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:u,height:d,onContextMenu:function(e){console.log("menu test"),v({x:e.clientX,y:e.clientY}),r([].concat(Object(s.a)(a),[h]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){var t={x:h.x,y:h.y,contract:!0,recon:!1};r([].concat(Object(s.a)(a),[t]))},children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(e){var t={x:h.x,y:h.y,contract:!1,recon:!0};r([].concat(Object(s.a)(a),[t]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(e){},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){r([])},children:" Clear Map "})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.38a99196.chunk.js.map