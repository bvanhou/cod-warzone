(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),o=n.n(a),i=n(16),r=n.n(i),s=(n(23),n(5)),l=n(4),u=(n(24),new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z")),d=.05,f=window.innerWidth,j=window.innerHeight;function b(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(l.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){var n=e.current.getContext("2d");!function(e,t){t&&(e.style.left="".concat(t.x,"px"),e.style.top="".concat(t.y,"px"))}(t.current,o[o.length-1]),n.clearRect(0,0,f,j),o.forEach((function(e){!function(e,t){t.type&&(e.fillStyle="contract"===t.type?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d),e.translate(t.x/d-80,t.y/d-80),e.rotate(225*Math.PI/180),e.fill(u),e.restore())}(n,e)}))})),[t,o,i,e,f,j]}var x=n(17),h=n.n(x),v=n.p+"static/media/map-overview-bg.ccfc7476.jpg",p=(n(42),h.a.create({baseURL:"https://3fz62fox9a.execute-api.us-east-1.amazonaws.com/dev/recon/",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}));var O=function(){var e=b(),t=Object(l.a)(e,6),n=t[0],o=t[1],i=t[2],r=t[3],u=t[4],d=t[5],f=Object(a.useState)({}),j=Object(l.a)(f,2),x=j[0],h=j[1];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(a.useEffect)((function(){p.get().then((function(e){var t=e.data;console.log(e),h(Object(s.a)(t))}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:v,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:r,width:u,height:d,onContextMenu:function(e){var t={x:e.clientX,y:e.clientY};h(t),i([].concat(Object(s.a)(o),[t]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(){x.x,x.y},children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){var e={x:x.x,y:x.y,type:"recon"};i([].concat(Object(s.a)(o),[e]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=o.filter((function(e){return e.x!==x.x&&e.y!==x.y}));i(Object(s.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){i([])},children:" Clear Map "})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),m()}},[[43,1,2]]]);
//# sourceMappingURL=main.3a2728b8.chunk.js.map