(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),a=n.n(o),i=n(7),r=n.n(i),s=(n(18),n(11)),l=n(3),u=n.p+"static/media/map-overview-bg.ccfc7476.jpg",f=new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),d=.1,g=window.innerWidth,h=window.innerHeight;function j(){var e=Object(o.useRef)(null),t=Object(o.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(o.useEffect)((function(){var t=e.current.getContext("2d");t.clearRect(0,0,g,h),c.forEach((function(e){!function(e,t){console.log("attempting to draw"),e.fillStyle="red",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d),e.translate(t.x/d-0,t.y/d-0),e.rotate(225*Math.PI/180),e.fill(f),e.restore()}(t,e)}))})),[c,a,e,g,h]}var b=n(8),p=n(9),w=n(5),m=n(12),v=n(10);o.Component,n(19);var O=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),n=(t[0],t[1],j()),a=Object(l.a)(n,5),i=a[0],r=a[1],f=a[2],d=a[3],g=a[4],h=function(e){console.log(e),"click"===e.type?console.log("Left click"):"contextmenu"===e.type&&console.log("Right click");var t={x:e.clientX,y:e.clientY};r([].concat(Object(s.a)(i),[t]))};return Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:u,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:f,width:d,height:g,onClick:h,onContextMenu:h})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.788e5c37.chunk.js.map