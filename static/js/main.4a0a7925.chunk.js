(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{14:function(n,t,c){},15:function(n,t,c){},16:function(n,t,c){"use strict";c.r(t);var e=c(0),o=c(1),i=c.n(o),a=c(7),r=c.n(a),l=(c(14),c(5)),s=c(4),u=c(8),j=c.n(u),d=(new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),window.innerWidth),b=window.innerHeight;function f(){var n=Object(o.useRef)(null),t=Object(o.useRef)(null),c=Object(o.useState)([]),e=Object(s.a)(c,2),i=e[0],a=e[1];return Object(o.useEffect)((function(){n.current.getContext("2d").clearRect(0,0,d,b),function(n){if(n){var c=t.current;j()(c).css({left:"".concat(n.x,"px"),top:"".concat(n.y,"px")})}}(i.pop())})),[t,i,a,n,d,b]}var x=c.p+"static/media/map-overview-bg.ccfc7476.jpg";c(15);var p=function(){var n=f(),t=Object(s.a)(n,6),c=t[0],o=t[1],i=t[2],a=t[3],r=t[4],u=t[5],j=function(n){console.log(n),"click"===n.type?console.log("Left click"):"contextmenu"===n.type&&console.log("Right click");var t={x:n.clientX,y:n.clientY};i([].concat(Object(l.a)(o),[t]))};return Object(e.jsxs)("main",{id:"container",className:"App-main",children:[Object(e.jsx)("img",{src:x,className:"img-warzone",alt:"logo"}),Object(e.jsx)("canvas",{className:"App-canvas",ref:a,width:r,height:u,onClick:j,onContextMenu:j}),Object(e.jsxs)("div",{ref:c,id:"contextMenu",children:[Object(e.jsx)("div",{className:"contextMenu--option",onClick:function(n){var t={x:n.clientX,y:n.clientY,contract:!0,recon:!1};i([].concat(Object(l.a)(o),[t]))},children:"Start Contract"}),Object(e.jsx)("div",{className:"contextMenu--option",onClick:function(n){var t={x:n.clientX,y:n.clientY,contract:!1,recon:!0};i([].concat(Object(l.a)(o),[t]))},children:"Add Recon"}),Object(e.jsx)("div",{className:"contextMenu--option",onClick:function(n){},children:"Remove"})]}),Object(e.jsx)("div",{className:"clearButton",children:Object(e.jsx)("button",{onClick:function(n){i([])},children:" Clear Map "})})]})},h=function(n){n&&n instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,e=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;c(n),e(n),o(n),i(n),a(n)}))};r.a.render(Object(e.jsx)(i.a.StrictMode,{children:Object(e.jsx)(p,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.4a0a7925.chunk.js.map