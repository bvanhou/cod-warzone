(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),o=n.n(a),s=n(16),i=n.n(s),r=(n(24),n(18)),l=n(5),u=n(3),f=(n(25),new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z")),d=.05,j=window.innerWidth,b=window.innerHeight;function v(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(u.a)(n,2),o=c[0],s=c[1],i=Object(a.useState)(!1),r=Object(u.a)(i,2),l=r[0],v=r[1];return Object(a.useEffect)((function(){var n=e.current.getContext("2d"),c=t.current,a=o.length-1;l||void 0!==a.type||function(e,t){t&&(e.style.left="".concat(t.x,"px"),e.style.top="".concat(t.y,"px"))}(c,o[o.length-1]),n.clearRect(0,0,j,b),o.forEach((function(e){!function(e,t){if(console.log(t),t.type){e.fillStyle="contract"===t.type?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d);var n=t.x-e.canvas.offsetLeft,c=t.y-e.canvas.offsetTop;console.log(e),console.log(n),console.log(c),e.translate(t.x/d-e.canvas.offsetLeft,t.y/d-e.canvas.offsetTop),e.rotate(225*Math.PI/180),e.fill(f),e.restore()}}(n,e)}))})),[t,o,s,e,j,b,v]}var x=n(17),h=n.n(x),p=n.p+"static/media/map-overview-bg.ccfc7476.jpg",O=(n(43),h.a.create({baseURL:"https://8vzcdy4su7.execute-api.us-east-1.amazonaws.com/dev/recon"}));var g=function(){var e=v(),t=Object(u.a)(e,7),n=t[0],o=t[1],s=t[2],i=t[3],f=t[4],d=t[5],j=t[6],b=Object(a.useState)({}),x=Object(u.a)(b,2),h=x[0],g=x[1],m=Object(a.useState)({}),y=Object(u.a)(m,2),w=y[0],C=y[1];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(a.useEffect)((function(){O.get().then((function(e){var t=e.data;j(!0),s(t)}))}),[s,j]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:p,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:f,height:d,onContextMenu:function(e){j(!1);var t={x:e.clientX,y:e.clientY};console.log(t),g(t),s([].concat(Object(l.a)(o),[t]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(){var e={parentId:null,x:h.x,y:h.y,type:"contract"};console.log(e),O.post("",Object(r.a)({},e)).then((function(t){C(t.data),s([].concat(Object(l.a)(o),[e]))}))},children:"Start Contract"}),w.id&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){var e=h.x,t=h.y,n={parentId:w.id,x:e,y:t,type:"recon"};s([].concat(Object(l.a)(o),[n]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=o.filter((function(e){return e.x!==h.x&&e.y!==h.y}));s(Object(l.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){s([])},children:" Clear Map "})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.24e3a392.chunk.js.map