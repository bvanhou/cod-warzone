(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),o=n.n(a),r=n(17),i=n.n(r),s=(n(27),n(21)),l=n(6),u=n(8),d=n.n(u),f=n(18),b=n(19),j=n(3),p=new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),v=.05,h=window.innerWidth,x=window.innerHeight;function O(e,t,n,c){if(t.type){var a=h*t.x/100,o=x*t.y/100;e.fillStyle="contract"===t.type?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(v,v),e.translate(a/v-80,o/v-80),e.rotate(225*Math.PI/180),e.fill(p),e.canvas.addEventListener("click",(function(e){var t=100/(h/e.clientX),a=100/(x/e.clientY),o=n.find((function(e){return e.type&&(n={x:t,y:a},c=e,Math.sqrt(Math.pow(n.x-c.x,2)+Math.pow(n.y-c.y,2))<10);var n,c}));o&&c(o)})),e.restore()}}function g(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(j.a)(n,2),o=c[0],r=c[1],i=Object(a.useState)({}),s=Object(j.a)(i,2),l=s[0],u=s[1],d=Object(a.useState)(!1),f=Object(j.a)(d,2),b=f[0],p=f[1];return Object(a.useEffect)((function(){var n=e.current.getContext("2d"),c=t.current,a=o[o.length-1];console.log(a),b||!a||a.type||function(e,t){if(t){var n=h*t.x/100,c=x*t.y/100;e.style.left="".concat(n,"px"),e.style.top="".concat(c,"px")}}(c,o[o.length-1]),n.clearRect(0,0,h,x),o.forEach((function(e){console.log(a),console.log(e),O(n,e,o,u),O(n,e,o,u)}))})),[t,o,r,e,h,x,p,l,u]}var y=n(20),m=n.n(y),w=n.p+"static/media/map-overview-bg.ccfc7476.jpg",k=(n(46),m.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var C=function(){var e=g(),t=Object(j.a)(e,8),n=t[0],o=t[1],r=t[2],i=t[3],u=t[4],p=t[5],v=t[6],h=t[7],x=Object(a.useState)({}),O=Object(j.a)(x,2),y=O[0],m=O[1],C=Object(a.useState)({}),M=Object(j.a)(C,2),S=(M[0],M[1]),N=Object(a.useState)(!1),z=Object(j.a)(N,2),E=z[0],R=z[1];window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1);var I=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.length,n=Object(f.a)(o),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=12;break}if(!(a=c.value).id){e.next=9;break}return e.next=9,k.delete("".concat(a.id));case 9:--t||r([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k.get().then((function(e){var t=e.data;v(!0),r(t)}))}),[r,v]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:w,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:u,height:p,onClick:function(e){v(!1);var t=100/(u/e.clientX),n=100/(p/e.clientY),c={parentId:h.id,x:t,y:n,type:null};Object.assign(c,E?{type:"recon"}:null),E&&R(!1),m(c),r([].concat(Object(l.a)(o),[c])),console.log(c)}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[!E&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){y.type="contract",console.log(y),k.post("",Object(s.a)({},y)).then((function(e){S(e.data),r([].concat(Object(l.a)(o),[e.data]))}))},children:"Start Contract"}),"contract"===h.type&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){R(!0)},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var e=o.filter((function(e){return e.x!==y.x&&e.y!==y.y}));"recon"===y.type&&R(!1),r(Object(l.a)(e))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{onClick:function(e){I()},children:" Clear Map "})})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),M()}},[[47,1,2]]]);
//# sourceMappingURL=main.1140a4a4.chunk.js.map