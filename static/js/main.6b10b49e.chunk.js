(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),o=n.n(a),i=n(16),r=n.n(i),s=(n(23),n(5)),u=n(4),l=(n(24),new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z")),d=.05,j=window.innerWidth,f=window.innerHeight;function b(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(u.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){var n=e.current.getContext("2d");!function(e,t){t&&(e.style.left="".concat(t.x,"px"),e.style.top="".concat(t.y,"px"))}(t.current,o[o.length-1]),n.clearRect(0,0,j,f),o.forEach((function(e){!function(e,t){t.type&&(e.fillStyle="contract"===t.type?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d),e.translate(t.x/d-80,t.y/d-80),e.rotate(225*Math.PI/180),e.fill(l),e.restore())}(n,e)}))})),[t,o,i,e,j,f]}var O=n(17),v=n.n(O),x=n.p+"static/media/map-overview-bg.ccfc7476.jpg",h=(n(42),Object({NODE_ENV:"production",PUBLIC_URL:"/cod-warzone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL);var p=function(){var e=b(),t=Object(u.a)(e,6),n=t[0],o=t[1],i=t[2],r=t[3],l=t[4],d=t[5],j=Object(a.useState)({}),f=Object(u.a)(j,2),O=f[0],p=f[1];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(a.useEffect)((function(){v.a.get(h).then((function(e){var t=e.data;p(Object(s.a)(t))}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:x,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:r,width:l,height:d,onContextMenu:function(e){var t={x:e.clientX,y:e.clientY};p(t),i([].concat(Object(s.a)(o),[t]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(){O.x,O.y},children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){var e={x:O.x,y:O.y,type:"recon"};i([].concat(Object(s.a)(o),[e]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=o.filter((function(e){return e.x!==O.x&&e.y!==O.y}));i(Object(s.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){i([])},children:" Clear Map "})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),m()}},[[43,1,2]]]);
//# sourceMappingURL=main.6b10b49e.chunk.js.map