(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),a=n.n(o),i=n(6),r=n.n(i),l=(n(13),n(7)),s=n(4),u=n.p+"static/media/map-overview-bg.ccfc7476.jpg",f=new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),d=.1,g=window.innerWidth,h=window.innerHeight;function j(){var e=Object(o.useRef)(null),t=Object(o.useState)([]),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(o.useEffect)((function(){var t=e.current.getContext("2d");t.clearRect(0,0,g,h),c.forEach((function(e){!function(e,t){console.log("attempting to draw"),e.fillStyle="red",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d),e.translate(t.x/d-0,t.y/d-0),e.rotate(225*Math.PI/180),e.fill(f),e.restore()}(t,e)}))})),[c,a,e,g,h]}n(14);var b=function(){var e=j(),t=Object(s.a)(e,5),n=t[0],o=t[1],a=t[2],i=t[3],r=t[4];return Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:u,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:a,width:i,height:r,onClick:function(e){console.log(e),"click"===e.type?console.log("Left click"):"contextmenu"===e.type&&console.log("Right click");var t={x:e.clientX,y:e.clientY};o([].concat(Object(l.a)(n),[t]))}})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.fbbaeee5.chunk.js.map