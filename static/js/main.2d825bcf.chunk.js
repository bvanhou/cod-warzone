(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),a=n.n(o),i=n(16),s=n.n(i),r=(n(24),n(18)),l=n(5),u=n(3),f=(n(25),new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z")),d=.05,j=window.innerWidth,b=window.innerHeight;function v(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(o.useState)([]),c=Object(u.a)(n,2),a=c[0],i=c[1],s=Object(o.useState)(!1),r=Object(u.a)(s,2),l=r[0],v=r[1];return Object(o.useEffect)((function(){var n=e.current.getContext("2d"),c=t.current,o=a.length-1;l||void 0!==o.type||function(e,t){t&&(e.style.left="".concat(t.x,"px"),e.style.top="".concat(t.y,"px"))}(c,a[a.length-1]),n.clearRect(0,0,j,b),a.forEach((function(e){!function(e,t){if(console.log(t),t.type){e.fillStyle="contract"===t.type?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d);var n=t.x-e.offsetLeft,c=t.y-e.offsetTop;console.log(n),console.log(c),console.log(e.offsetLeft),console.log(e.offsetTop),e.translate(t.x/d-80,t.y/d-80),e.rotate(225*Math.PI/180),e.fill(f),e.restore()}}(n,e)}))})),[t,a,i,e,j,b,v]}var x=n(17),h=n.n(x),p=n.p+"static/media/map-overview-bg.ccfc7476.jpg",O=(n(43),h.a.create({baseURL:"https://8vzcdy4su7.execute-api.us-east-1.amazonaws.com/dev/recon"}));var g=function(){var e=v(),t=Object(u.a)(e,7),n=t[0],a=t[1],i=t[2],s=t[3],f=t[4],d=t[5],j=t[6],b=Object(o.useState)({}),x=Object(u.a)(b,2),h=x[0],g=x[1],m=Object(o.useState)({}),y=Object(u.a)(m,2),w=y[0],C=y[1];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(o.useEffect)((function(){O.get().then((function(e){var t=e.data;j(!0),i(t)}))}),[i,j]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:p,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:s,width:f,height:d,onContextMenu:function(e){j(!1);var t={x:e.clientX,y:e.clientY};console.log(t),g(t),i([].concat(Object(l.a)(a),[t]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(){var e={parentId:null,x:h.x,y:h.y,type:"contract"};console.log(e),O.post("",Object(r.a)({},e)).then((function(t){C(t.data),i([].concat(Object(l.a)(a),[e]))}))},children:"Start Contract"}),w.id&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){var e=h.x,t=h.y,n={parentId:w.id,x:e,y:t,type:"recon"};i([].concat(Object(l.a)(a),[n]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=a.filter((function(e){return e.x!==h.x&&e.y!==h.y}));i(Object(l.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){i([])},children:" Clear Map "})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.2d825bcf.chunk.js.map