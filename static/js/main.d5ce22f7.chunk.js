(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),i=n(6),r=n.n(i),s=(n(14),n(8)),l=n(4),u=n(7),d=n.n(u),f=new Path2D("M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"),j=.05,b=window.innerWidth,h=window.innerHeight;function v(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(o.useState)([]),c=Object(l.a)(n,2),a=c[0],i=c[1];return Object(o.useEffect)((function(){var n=e.current.getContext("2d");n.clearRect(0,0,b,h),function(e){if(e){var n=t.current;d()(n).css({left:"".concat(e.x,"px"),top:"".concat(e.y,"px")})}}(a.pop()),a.forEach((function(e){(e.contract||e.recon)&&function(e,t){console.log("attempting to draw"),e.fillStyle=t.contract?"red":"blue",e.shadowColor="blue",e.shadowBlur=15,e.save(),e.scale(j,j),e.translate(t.x/j-80,t.y/j-80),e.rotate(225*Math.PI/180),e.fill(f),e.restore()}(n,e)}))})),[t,a,i,e,b,h]}var x=n.p+"static/media/map-overview-bg.ccfc7476.jpg";n(15);var p=function(){var e=v(),t=Object(l.a)(e,6),n=t[0],o=t[1],a=t[2],i=t[3],r=t[4],u=t[5];return window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:x,className:"img-warzone",alt:"logo"}),Object(c.jsx)("canvas",{className:"App-canvas",ref:i,width:r,height:u,onContextMenu:function(e){var t={x:e.clientX,y:e.clientY};a([].concat(Object(s.a)(o),[t]))}}),Object(c.jsxs)("div",{ref:n,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){console.log("test"),console.log(e)},children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(e){},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",onClick:function(e){},children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",children:Object(c.jsx)("button",{onClick:function(e){a([])},children:" Clear Map "})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.d5ce22f7.chunk.js.map