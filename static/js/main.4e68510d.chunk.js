(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(6),i=n.n(c),o=n(52),s=n.n(o),r=(n(59),n(53)),l=n(15),u=n.n(l),d=n(28),h=n(30),j=n(31),b=n(13),f=n(29),v=n(10),x=n(19),p=n(20),O=n(9),y=n(22),M=n(21),m=window.innerWidth,k=window.innerHeight,w=function(e){Object(y.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(O.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(O.a)(a)),a}return Object(p.a)(n,[{key:"handleClick",value:function(e){this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=(this.state.isMouseInside,this.props.coordinates);return Object(a.jsx)(a.Fragment,{children:t.map((function(t,n){var c=m*t.x/100,i=k*t.y/100;return Object(a.jsx)(v.Circle,{id:"contract-".concat(n),x:c,y:i,radius:5,fill:"yellow",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(i.a.Component),g=window.innerWidth,C=window.innerHeight,E=function(e){Object(y.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(O.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(O.a)(a)),a}return Object(p.a)(n,[{key:"handleClick",value:function(e){this.props.setRecon(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(t,n){var c=g*t.x/100,i=C*t.y/100;return Object(a.jsx)(v.Circle,{id:"recon-".concat(n),x:c,y:i,radius:5,fill:"blue",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(i.a.Component),L=n(54),S=n.n(L),I=n(12),N=n.n(I),R=n.p+"static/media/map-overview-bg.ccfc7476.jpg",F=(n(122),S.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"})),z=function(e,t,n){var a=e.current;console.log(a.style.width);var c={w:a.style.width,h:a.style.height};console.log(c);var i={x:0,y:0},o={x:0,y:0},s={x:0,y:0},r=1;a.css("transform-origin","0 0"),a.on("mousewheel DOMMouseScroll",(function(l){var u=e.offset();s.x=l.pageX-u.left,s.y=l.pageY-u.top,l.preventDefault();var d=l.delta||l.originalEvent.wheelDelta;void 0===d&&(d=l.originalEvent.detail);d=Math.max(-1,Math.min(1,d)),o.x=(s.x-i.x)/r,o.y=(s.y-i.y)/r,r+=(Object(f.a)("scale"),d*n*r),Object(f.a)("scale"),r=Math.max(1,Math.min(t,r)),i.x=-o.x*r+s.x,i.y=-o.y*r+s.y,i.x>0&&(i.x=0);i.x+c.w*r<c.w&&(i.x=-c.w*(r-1));i.y>0&&(i.y=0);i.y+c.h*r<c.h&&(i.y=-c.h*(r-1));a.css("transform","translate("+i.x+"px,"+i.y+"px) scale("+r+","+r+")")}))};var W=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useState)([]),i=Object(b.a)(n,2),o=i[0],s=i[1],l=Object(c.useState)([]),f=Object(b.a)(l,2),x=f[0],p=f[1],O=Object(c.useState)({}),y=Object(b.a)(O,2),M=y[0],m=y[1],k=Object(c.useState)({}),g=Object(b.a)(k,2),C=g[0],L=g[1],S=Object(c.useState)(!0),I=Object(b.a)(S,2),W=(I[0],I[1],window.innerWidth),D=window.innerHeight,B=function(t,n){console.log("Show Menu: ".concat(t));var a=W*n.x/100+10,c=D*n.y/100+10,i=e.current;i.style.visibility=t?"visible":"hidden",i.style.left="".concat(a,"px"),i.style.top="".concat(c,"px")},H=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=x.filter((function(e){return e.x!==o.x&&e.y!==o.y})),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=x.length,n=Object(r.a)(x),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=12;break}if(!(c=a.value).id){e.next=9;break}return e.next=9,F.delete("".concat(c.id));case 9:--t||p([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){F.get().then((function(e){console.log(e.data),p(e.data),new z(t,4,.5)}))}),[]),Object(a.jsxs)("main",{id:"container",className:"App-main",children:[Object(a.jsx)("img",{ref:t,src:R,className:"img-warzone",alt:"logo"}),Object(a.jsx)(v.Stage,{width:W,height:D,onClick:function(e){e=e.evt?e.evt:e;var t={x:100/(W/e.clientX),y:100/(D/e.clientY)};console.log("clicking"),B(!0,t),s(t)},children:Object(a.jsxs)(v.Layer,{children:[(N.a.isEmpty(M),Object(a.jsx)(w,{coordinates:x.filter((function(e){return"contract"===e.type})),setContract:m})),Object(a.jsx)(E,{coordinates:x.filter((function(e){return"recon"===e.type&&e.parentId===M.id})),setRecon:L})]})}),Object(a.jsxs)("div",{ref:e,id:"contextMenu",children:[N.a.isEmpty(M)&&Object(a.jsx)("div",{className:"contextMenu--contract",onClick:function(){o.type="contract",F.post("",Object(j.a)({},o)).then((function(e){s(e.data),m(e.data),p([].concat(Object(h.a)(x),[e.data]))}))},children:"Create Contract"}),!N.a.isEmpty(M)&&Object(a.jsx)("div",{className:"contextMenu--recon",onClick:function(e){o.parentId=M.id,o.type="recon",F.post("",Object(j.a)({},o)).then((function(e){s(e.data),m({}),p([].concat(Object(h.a)(x),[e.data]))}))},children:"Add Recon"}),(!N.a.isEmpty(M)||!N.a.isEmpty(C))&&Object(a.jsx)("div",{className:"contextMenu--remove",onClick:H,children:"Remove"}),Object(a.jsx)("div",{className:"contextMenu--cancel",onClick:function(){m({}),s({}),B(!1,{})},children:"Cancel"})]}),Object(a.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(a.jsx)("button",{onClick:A,children:" Clear Map "})})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(W,{})}),document.getElementById("root")),D()},59:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.4e68510d.chunk.js.map