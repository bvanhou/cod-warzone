(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),o=n.n(a),i=n(16),r=n.n(i),s=(n(23),n(5)),l=n(3),u=new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),d=.05,f=window.innerWidth,b=window.innerHeight;function j(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(l.a)(n,2),o=c[0],i=c[1],r=Object(a.useState)({}),s=Object(l.a)(r,2),j=s[0],h=s[1],v=Object(a.useState)(!1),x=Object(l.a)(v,2),O=x[0],p=x[1];return Object(a.useEffect)((function(){var n=e.current.getContext("2d"),c=t.current,a=o.length-1;O||void 0!==a.type||function(e,t){if(t){var n=f*t.x/100,c=b*t.y/100;e.style.left="".concat(n,"px"),e.style.top="".concat(c,"px")}}(c,o[o.length-1]),n.clearRect(0,0,f,b),o.forEach((function(e){!function(e,t,n,c){if(t.type){var a=f*t.x/100,o=b*t.y/100;e.fillStyle="contract"===t.type?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d),e.translate(a/d-80,o/d-80),e.rotate(225*Math.PI/180),e.fill(u),e.addEventListener("click",(function(e){var t=100/(f/e.clientX),a=100/(b/e.clientY),o=t,i=a,r=n.reduce((function(e,t){return Math.abs(t.x-o)<Math.abs(e.x-o)&&Math.abs(t.y-i)<Math.abs(e.y-i)?t:e}));console.log("click on Contract"),c(r)})),e.restore()}}(n,e,o,h)}))})),[t,o,i,e,f,b,p,j,h]}var h=n(17),v=n.n(h),x=n.p+"static/media/map-overview-bg.ccfc7476.jpg",O=(n(41),v.a.create({baseURL:"https://8vzcdy4su7.execute-api.us-east-1.amazonaws.com/dev/recon"}));var p=function(){var e=j(),t=Object(l.a)(e,9),n=t[0],o=t[1],i=t[2],r=t[3],u=t[4],d=t[5],f=t[6],b=t[7],h=t[8],v=Object(a.useState)({}),p=Object(l.a)(v,2),g=p[0],m=p[1],y=Object(a.useState)({}),w=Object(l.a)(y,2),C=w[0],M=w[1];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(a.useEffect)((function(){O.get().then((function(e){var t=e.data;f(!0),i(t)}))}),[i,f]),Object(a.useEffect)((function(){console.log(C)}),[C]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:x,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:r,width:u,height:d,onClick:function(e){f(!1);var t={x:100/(u/e.clientX),y:100/(d/e.clientY)};m(t),i([].concat(Object(s.a)(o),[t])),h({})}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){var t={parentId:null,x:100/(u/e.clientX),y:100/(d/e.clientY),type:"contract"};M(t),i([].concat(Object(s.a)(o),[t]))},children:"Start Contract"}),b.id&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){var e=g.x,t=g.y,n={parentId:b.id,x:e,y:t,type:"recon"},c=r.current.getContext("2d");c.canvas.addEventListener("mousemove",(function(e){c.clearRect(0,0,c.width,c.height);var t=e.clientX-c.offsetLeft,n=e.clientY-c.offsetTop;c.beginPath(),c.arc(t,n,10,0,2*Math.PI,!1),c.fillStyle="white",c.fill()})),console.log(n),i([].concat(Object(s.a)(o),[n]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=o.filter((function(e){return e.x!==g.x&&e.y!==g.y}));i(Object(s.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){i([])},children:" Clear Map "})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),g()}},[[42,1,2]]]);
//# sourceMappingURL=main.87aa8ebf.chunk.js.map