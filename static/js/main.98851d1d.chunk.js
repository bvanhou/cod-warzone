(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{27:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),o=n(17),i=n.n(o),s=(n(27),n(6)),l=n(8),u=n.n(l),d=n(18),f=n(19),b=n(3),j=new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),p=.05,v=window.innerWidth,h=window.innerHeight;function x(e,t,n,c){if(t.type){var a=v*t.x/100,r=h*t.y/100;e.fillStyle="contract"===t.type?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(p,p),e.translate(a/p-80,r/p-80),e.rotate(225*Math.PI/180),e.fill(j),e.canvas.addEventListener("click",(function(e){var t=100/(v/e.clientX),a=100/(h/e.clientY),r=n.find((function(e){return e.type&&(n={x:t,y:a},c=e,Math.sqrt(Math.pow(n.x-c.x,2)+Math.pow(n.y-c.y,2))<10);var n,c}));c(r||{})})),e.restore()}}function O(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(b.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)({}),s=Object(b.a)(i,2),l=s[0],u=s[1],d=Object(a.useState)(!1),f=Object(b.a)(d,2),j=f[0],p=f[1];return Object(a.useEffect)((function(){var n=e.current.getContext("2d"),c=t.current,a=r[r.length-1];j||!a||a.type||function(e,t){if(t){var n=v*t.x/100,c=h*t.y/100;e.style.left="".concat(n,"px"),e.style.top="".concat(c,"px")}}(c,r[r.length-1]),n.clearRect(0,0,v,h),r.forEach((function(e){"recon"!==e.type?x(n,e,r,u):e.parentId!==a.id&&e.id!==a.id||(x(n,e,r,u),console.log(e))}))})),[t,r,o,e,v,h,p,l,u]}var y=n(20),g=n.n(y),m=n(21),w=n.n(m),k=n.p+"static/media/map-overview-bg.ccfc7476.jpg",C=(n(48),g.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var M=function(){var e=O(),t=Object(b.a)(e,8),n=t[0],r=t[1],o=t[2],i=t[3],l=t[4],j=t[5],p=t[6],v=t[7],h=Object(a.useState)({}),x=Object(b.a)(h,2),y=x[0],g=x[1],m=Object(a.useState)({}),M=Object(b.a)(m,2),S=(M[0],M[1],Object(a.useState)(!1)),E=Object(b.a)(S,2),I=E[0],N=E[1];window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1);var z=function(){var e=Object(f.a)(u.a.mark((function e(){var t,n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.length,n=Object(d.a)(r),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=12;break}if(!(a=c.value).id){e.next=9;break}return e.next=9,C.delete("".concat(a.id));case 9:--t||o([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){C.get().then((function(e){var t=e.data;p(!0),o(t)}))}),[o,p]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:k,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:l,height:j,onClick:function(e){p(!1);var t={id:null,parentId:null,x:100/(l/e.clientX),y:100/(j/e.clientY),type:null};console.log(v),console.log(t),w.a.isEmpty(v)?(g(t),o([].concat(Object(s.a)(r),[t]))):"contract"===v.type&&(t.parentId=v.id,g(v),o(Object(s.a)(r)))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[!I&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){},children:"Start Contract"}),"contract"===v.type&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){N(!0)},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=r.filter((function(e){return e.x!==y.x&&e.y!==y.y}));"recon"===y.type&&N(!1),o(Object(s.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{onClick:function(e){z()},children:" Clear Map "})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),S()}},[[49,1,2]]]);
//# sourceMappingURL=main.98851d1d.chunk.js.map