(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),o=n.n(a),i=n(7),r=n.n(i),s=(n(14),n(6)),l=n(4),u=n(8),d=n.n(u),f=new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),j=.05,b=window.innerWidth,h=window.innerHeight;function p(){var t=Object(a.useRef)(null),e=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(l.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){var n=t.current.getContext("2d"),c=e.current;n.clearRect(0,0,b,h),function(t,e,n){d()(t).css({left:"".concat(n.x,"px"),top:"".concat(n.y,"px")})}(c,0,o.pop()),o.forEach((function(t){!function(t,e){console.log("attempting to draw"),t.fillStyle=e.contract?"red":"blue",t.shadowColor="blue",t.shadowBlur=15,t.save(),t.scale(j,j),t.translate(e.x/j-80,e.y/j-80),t.rotate(225*Math.PI/180),t.fill(f),t.restore()}(n,t)}))})),[e,o,i,t,b,h]}var v=n.p+"static/media/map-overview-bg.ccfc7476.jpg";n(15);var x=function(){var t=p(),e=Object(l.a)(t,6),n=e[0],a=e[1],o=e[2],i=e[3],r=e[4],u=e[5];return window.addEventListener("contextmenu",(function(t){t.preventDefault()}),!1),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:v,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:r,height:u,onContextMenu:function(t){var e={x:t.clientX,y:t.clientY,contract:!0};o([].concat(Object(s.a)(a),[e]))}}),Object(c.jsx)("div",{ref:n,id:"contextMenu",children:Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(t){var e={x:t.clientX,y:t.clientY,contract:!0};o([].concat(Object(s.a)(a),[e]))},children:"Start Contract"})}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(t){o([])},children:" Clear Map "})})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),o(t),i(t)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),w()}},[[16,1,2]]]);
//# sourceMappingURL=main.7c487556.chunk.js.map