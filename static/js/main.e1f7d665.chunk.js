(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(2),a=n.n(o),i=n(16),r=n.n(i),s=(n(22),n(6)),l=n(4),u=(n(23),new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z")),d=.05,j=window.innerWidth,O=window.innerHeight;function f(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(o.useState)([]),c=Object(l.a)(n,2),a=c[0],i=c[1];return Object(o.useEffect)((function(){var n=e.current.getContext("2d");!function(e,t){t&&(e.style.left="".concat(t.x,"px"),e.style.top="".concat(t.y,"px"))}(t.current,a[a.length-1]),n.clearRect(0,0,j,O),a.forEach((function(e){!function(e,t){t.type&&(e.fillStyle="contract"===t.type?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d),e.translate(t.x/d-80,t.y/d-80),e.rotate(225*Math.PI/180),e.fill(u),e.restore())}(n,e)}))})),[t,a,i,e,j,O]}n(24);var b=n.p+"static/media/map-overview-bg.ccfc7476.jpg",v=(n(42),Object({NODE_ENV:"production",PUBLIC_URL:"/cod-warzone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL);var x=function(){var e=f(),t=Object(l.a)(e,6),n=t[0],a=t[1],i=t[2],r=t[3],u=t[4],d=t[5],j=Object(o.useState)({}),O=Object(l.a)(j,2),x=O[0],h=O[1];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(o.useEffect)((function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/cod-warzone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),console.log(v)}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:b,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:r,width:u,height:d,onContextMenu:function(e){var t={x:e.clientX,y:e.clientY};h(t),i([].concat(Object(s.a)(a),[t]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(){x.x,x.y},children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){var e={x:x.x,y:x.y,type:"recon"};i([].concat(Object(s.a)(a),[e]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=a.filter((function(e){return e.x!==x.x&&e.y!==x.y}));i(Object(s.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){i([])},children:" Clear Map "})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),h()}},[[43,1,2]]]);
//# sourceMappingURL=main.e1f7d665.chunk.js.map