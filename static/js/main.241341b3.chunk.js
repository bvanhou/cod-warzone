(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),o=n(17),i=n.n(o),s=(n(27),n(21)),u=n(6),l=n(8),j=n.n(l),d=n(18),b=n(19),f=n(3),O=(new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),window.innerWidth),v=window.innerHeight;var p=n(20),h=n.n(p),x=n.p+"static/media/map-overview-bg.ccfc7476.jpg",g=(n(46),h.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var m=function(){var e=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(f.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)({}),s=Object(f.a)(i,2),u=s[0],l=s[1],j=Object(a.useState)(!1),d=Object(f.a)(j,2),b=(d[0],d[1]);return Object(a.useEffect)((function(){e.current.getContext("2d"),t.current;var n=r[r.length-1];console.log(n)})),[t,r,o,e,O,v,b,u,l]}(),t=Object(f.a)(e,8),n=t[0],r=t[1],o=t[2],i=t[3],l=t[4],p=t[5],h=t[6],m=t[7],w=Object(a.useState)({}),y=Object(f.a)(w,2),k=y[0],C=y[1],S=Object(a.useState)({}),M=Object(f.a)(S,2),N=(M[0],M[1]),z=Object(a.useState)(!1),I=Object(f.a)(z,2),R=I[0],E=I[1];window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1);var F=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(d.a)(r),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=11;break}return c=n.value,e.next=7,g.delete("".concat(c.id));case 7:a=e.sent,console.log(a);case 9:e.next=3;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t.e(e.t0);case 16:return e.prev=16,t.f(),e.finish(16);case 19:o([]);case 20:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g.get().then((function(e){var t=e.data;h(!0),o(t)}))}),[o,h]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:x,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:l,height:p,onClick:function(e){h(!1);var t=100/(l/e.clientX),n=100/(p/e.clientY),c={parentId:m.id,x:t,y:n,type:null};Object.assign(c,R?{type:"recon"}:null),R&&E(!1),C(c),o([].concat(Object(u.a)(r),[c])),console.log(c)}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[!R&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){var t={parentId:null,x:100/(l/e.clientX),y:100/(p/e.clientY),type:"contract"};g.post("",Object(s.a)({},t)).then((function(e){N(e.data),o([].concat(Object(u.a)(r),[e.data]))}))},children:"Start Contract"}),"contract"===m.type&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){E(!0)},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=r.filter((function(e){return e.x!==k.x&&e.y!==k.y}));"recon"===k.type&&E(!1),o(Object(u.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{onClick:function(e){F()},children:" Clear Map "})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),w()}},[[47,1,2]]]);
//# sourceMappingURL=main.241341b3.chunk.js.map