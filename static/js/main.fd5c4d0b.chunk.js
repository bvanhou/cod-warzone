(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),o=n.n(a),r=n(16),i=n.n(r),s=(n(23),n(5)),l=n(3),u=(n(24),new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z")),d=.05,j=window.innerWidth,f=window.innerHeight;function b(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(l.a)(n,2),o=c[0],r=c[1];return Object(a.useEffect)((function(){var n=e.current.getContext("2d");!function(e,t){t&&(e.style.left="".concat(t.x,"px"),e.style.top="".concat(t.y,"px"))}(t.current,o[o.length-1]),n.clearRect(0,0,j,f),o.forEach((function(e){!function(e,t){console.log(t),t.type&&(e.fillStyle="contract"===t.type?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d),e.translate(t.x/d-80,t.y/d-80),e.rotate(225*Math.PI/180),e.fill(u),e.restore())}(n,e)}))})),[t,o,r,e,j,f]}var x=n(17),v=n.n(x),h=n.p+"static/media/map-overview-bg.ccfc7476.jpg",p=(n(42),v.a.create({baseURL:"https://8vzcdy4su7.execute-api.us-east-1.amazonaws.com/dev/recon"}));var O=function(){var e=b(),t=Object(l.a)(e,6),n=t[0],o=t[1],r=t[2],i=t[3],u=t[4],d=t[5],j=Object(a.useState)({}),f=Object(l.a)(j,2),x=f[0],v=f[1],O=Object(a.useState)({}),m=Object(l.a)(O,2),g=m[0],y=m[1];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(a.useEffect)((function(){p.get().then((function(e){var t=e.data;r(t)}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:h,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:u,height:d,onContextMenu:function(e){var t={x:e.clientX,y:e.clientY};v(t),r([].concat(Object(s.a)(o),[t]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(){var e={parentId:null,x:x.x,y:x.y,type:"contract"};console.log(e),p.post("/",{_currentCoord:e}).then((function(t){y(t.data),r([].concat(Object(s.a)(o),[e]))}))},children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){var e=x.x,t=x.y,n={parentId:g.id,x:e,y:t,type:"recon"};console.log(n),r([].concat(Object(s.a)(o),[n]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=o.filter((function(e){return e.x!==x.x&&e.y!==x.y}));r(Object(s.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){r([])},children:" Clear Map "})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),m()}},[[43,1,2]]]);
//# sourceMappingURL=main.fd5c4d0b.chunk.js.map