(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{14:function(n,e,t){},15:function(n,e,t){},16:function(n,e,t){"use strict";t.r(e);var c=t(0),o=t(1),i=t.n(o),a=t(7),r=t.n(a),s=(t(14),t(6)),l=t(4),u=t(8),j=t.n(u),d=(new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),window.innerWidth),f=window.innerHeight;function b(){var n=Object(o.useRef)(null),e=Object(o.useRef)(null),t=Object(o.useState)([]),c=Object(l.a)(t,2),i=c[0],a=c[1];return Object(o.useEffect)((function(){n.current.getContext("2d").clearRect(0,0,d,f),function(n){if(n){var t=e.current;j()(t).css({left:"".concat(n.x,"px"),top:"".concat(n.y,"px")})}}(i.pop())})),[e,i,a,n,d,f]}var p=t.p+"static/media/map-overview-bg.ccfc7476.jpg";t(15);var x=function(){var n=b(),e=Object(l.a)(n,6),t=e[0],o=e[1],i=e[2],a=e[3],r=e[4],u=e[5],j=function(n){console.log(n),"click"===n.type?console.log("Left click"):"contextmenu"===n.type&&console.log("Right click")};return Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:p,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:a,width:r,height:u,onClick:j,onContextMenu:j}),Object(c.jsxs)("div",{ref:t,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--option",onClick:function(n){var e={x:n.clientX,y:n.clientY,contract:!0,recon:!1};i([].concat(Object(s.a)(o),[e]))},children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--option",onClick:function(n){var e={x:n.clientX,y:n.clientY,contract:!1,recon:!0};i([].concat(Object(s.a)(o),[e]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--option",onClick:function(n){},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(n){i([])},children:" Clear Map "})})]})},h=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(e){var t=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),c(n),o(n),i(n),a(n)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.d84ae257.chunk.js.map