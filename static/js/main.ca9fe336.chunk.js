(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),a=n.n(o),i=n(16),l=n.n(i),r=(n(23),n(5)),s=n(3),u=new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),d=.05,f=window.innerWidth,j=window.innerHeight;function b(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(o.useState)([]),c=Object(s.a)(n,2),a=c[0],i=c[1],l=Object(o.useState)({}),r=Object(s.a)(l,2),b=r[0],v=r[1],h=Object(o.useState)(!1),x=Object(s.a)(h,2),O=x[0],g=x[1];return Object(o.useEffect)((function(){var n=e.current.getContext("2d"),c=t.current,o=a.length-1;O||void 0!==o.type||function(e,t){if(t){var n=f*t.x/100,c=j*t.y/100;e.style.left="".concat(n,"px"),e.style.top="".concat(c,"px")}}(c,a[a.length-1]),n.clearRect(0,0,f,j),a.forEach((function(e){!function(e,t,n,c){if(void 0!==t.type){var o=f*t.x/100,a=j*t.y/100;e.fillStyle="contract"===t.type?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(d,d),e.translate(o/d-80,a/d-80),e.rotate(225*Math.PI/180),e.fill(u),e.canvas.addEventListener("click",(function(e){var t=100/(f/e.clientX),c=100/(j/e.clientY);n.forEach((function(e){void 0!==e.type&&(console.log(c>=e.y&&c<=e.y+10),console.log(e.y),console.log(c),console.log(t>e.x&&t<=e.x+10),console.log(e.x),console.log(t),c>=e.y&&c<=e.y+10&&t>=e.x&&t<=e.x+10&&console.log("clicked an element"))}))})),e.restore()}}(n,e,a)}))})),[t,a,i,e,f,j,g,b,v]}var v=n(17),h=n.n(v),x=n.p+"static/media/map-overview-bg.ccfc7476.jpg",O=(n(41),h.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var g=function(){var e=b(),t=Object(s.a)(e,9),n=t[0],a=t[1],i=t[2],l=t[3],u=t[4],d=t[5],f=t[6],j=t[7],v=t[8],h=Object(o.useState)({}),g=Object(s.a)(h,2),p=g[0],y=g[1],m=Object(o.useState)({}),w=Object(s.a)(m,2),C=w[0],S=w[1];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(o.useEffect)((function(){O.get().then((function(e){var t=e.data;f(!0),i(t)}))}),[i,f]),Object(o.useEffect)((function(){console.log(C)}),[C]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:x,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:l,width:u,height:d,onClick:function(e){f(!1);var t={x:100/(u/e.clientX),y:100/(d/e.clientY)};y(t),i([].concat(Object(r.a)(a),[t])),v({})}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){var t={parentId:null,x:100/(u/e.clientX),y:100/(d/e.clientY),type:"contract"};S(t),i([].concat(Object(r.a)(a),[t]))},children:"Start Contract"}),j.id&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){var e=p.x,t=p.y,n={parentId:j.id,x:e,y:t,type:"recon"},c=l.current.getContext("2d");c.canvas.addEventListener("mousemove",(function(e){c.clearRect(0,0,c.width,c.height);var t=e.clientX-c.offsetLeft,n=e.clientY-c.offsetTop;c.beginPath(),c.arc(t,n,10,0,2*Math.PI,!1),c.fillStyle="white",c.fill()})),console.log(n),i([].concat(Object(r.a)(a),[n]))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=a.filter((function(e){return e.x!==p.x&&e.y!==p.y}));i(Object(r.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){i([])},children:" Clear Map "})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),p()}},[[42,1,2]]]);
//# sourceMappingURL=main.ca9fe336.chunk.js.map