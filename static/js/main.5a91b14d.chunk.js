(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{24:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),o=n.n(a),i=n(16),r=n.n(i),s=(n(24),n(18)),l=n(6),u=n(3),d=new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),j=.05,f=window.innerWidth,b=window.innerHeight;function v(t,e,n,c){if(void 0!==e.type){var a=f*e.x/100,o=b*e.y/100;t.fillStyle="contract"===e.type?"red":"blue",t.shadowColor="blue",t.shadowBlur=15,t.save(),t.scale(j,j),t.translate(a/j-80,o/j-80),t.rotate(225*Math.PI/180),t.fill(d),t.canvas.addEventListener("click",(function(t){var e=100/(f/t.clientX),a=100/(b/t.clientY),o=n.find((function(t){return t.type&&(n={x:e,y:a},c=t,Math.sqrt(Math.pow(n.x-c.x,2)+Math.pow(n.y-c.y,2))<10);var n,c}));console.log(o),o&&c(o)})),t.restore()}}function h(){var t=Object(a.useRef)(null),e=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(u.a)(n,2),o=c[0],i=c[1],r=Object(a.useState)({}),s=Object(u.a)(r,2),l=s[0],d=s[1],j=Object(a.useState)(!1),h=Object(u.a)(j,2),O=h[0],p=h[1];return Object(a.useEffect)((function(){var n=t.current.getContext("2d"),c=e.current,a=o.length-1;O||void 0!==a.type||function(t,e){if(e){var n=f*e.x/100,c=b*e.y/100;t.style.left="".concat(n,"px"),t.style.top="".concat(c,"px")}}(c,o[o.length-1]),n.clearRect(0,0,f,b),o.forEach((function(t){v(n,t,o,d)}))})),[e,o,i,t,f,b,p,l,d]}var O=n(17),p=n.n(O),x=n.p+"static/media/map-overview-bg.ccfc7476.jpg",g=(n(42),p.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var m=function(){var t=h(),e=Object(u.a)(t,8),n=e[0],o=e[1],i=e[2],r=e[3],d=e[4],j=e[5],f=e[6],b=e[7],v=Object(a.useState)({}),O=Object(u.a)(v,2),p=O[0],m=O[1],y=Object(a.useState)({}),w=Object(u.a)(y,2),C=(w[0],w[1]),M=Object(a.useState)(!1),S=Object(u.a)(M,2),k=S[0],N=S[1];return window.addEventListener("contextmenu",(function(t){t.preventDefault()}),!1),Object(a.useEffect)((function(){g.get().then((function(t){var e=t.data;f(!0),i(e)}))}),[i,f]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:x,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:r,width:d,height:j,onClick:function(t){f(!1);var e=100/(d/t.clientX),n=100/(j/t.clientY),c={parentId:b.id,x:e,y:n,type:null};Object.assign(c,k?{type:"recon"}:null),console.log(c),console.log(b),m(c),i([].concat(Object(l.a)(o),[c]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[!k&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(t){var e={parentId:null,x:100/(d/t.clientX),y:100/(j/t.clientY),type:"contract"};g.post("",Object(s.a)({},e)).then((function(t){C(t.data),i([].concat(Object(l.a)(o),[t.data]))}))},children:"Start Contract"}),b.id&&!k&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(){N(!0)},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(){var t=o.filter((function(t){return t.x!==p.x&&t.y!==p.y}));i(Object(l.a)(t))},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(t){i([])},children:" Clear Map "})})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),o(t),i(t)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.5a91b14d.chunk.js.map