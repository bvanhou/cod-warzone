(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(6),o=n.n(c),i=n(52),s=n.n(i),r=(n(59),n(53)),l=n(15),u=n.n(l),d=n(28),h=n(30),j=n(31),b=n(29),f=n(13),v=n(10),x=n(19),p=n(20),y=n(9),O=n(22),M=n(21),m=window.innerWidth,g=window.innerHeight,k=function(e){Object(O.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(y.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(y.a)(a)),a}return Object(p.a)(n,[{key:"handleClick",value:function(e){this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=(this.state.isMouseInside,this.props.coordinates);return Object(a.jsx)(a.Fragment,{children:t.map((function(t,n){var c=m*t.x/100,o=g*t.y/100;return Object(a.jsx)(v.Circle,{id:"contract-".concat(n),x:c,y:o,radius:5,fill:"yellow",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(o.a.Component),w=window.innerWidth,C=window.innerHeight,E=function(e){Object(O.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(y.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(y.a)(a)),a}return Object(p.a)(n,[{key:"handleClick",value:function(e){this.props.setRecon(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(t,n){var c=w*t.x/100,o=C*t.y/100;return Object(a.jsx)(v.Circle,{id:"recon-".concat(n),x:c,y:o,radius:5,fill:"blue",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(o.a.Component),L=n(54),S=n.n(L),I=n(12),N=n.n(I),R=n.p+"static/media/map-overview-bg.ccfc7476.jpg",F=(n(122),S.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var z=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useState)([]),o=Object(f.a)(n,2),i=o[0],s=o[1],l=Object(c.useState)([]),x=Object(f.a)(l,2),p=x[0],y=x[1],O=Object(c.useState)({}),M=Object(f.a)(O,2),m=M[0],g=M[1],w=Object(c.useState)({}),C=Object(f.a)(w,2),L=C[0],S=C[1],I=Object(c.useState)(!0),z=Object(f.a)(I,2),W=(z[0],z[1],window.innerWidth),D=window.innerHeight,B=function(e,t,n){var a=e.current;console.log(a),console.log(e),console.log(a.style),console.log(e.style);var c={w:a.style.width,h:a.style.height};console.log(c);var o={x:0,y:0},i={x:0,y:0},s={x:0,y:0},r=1;a.css("transform-origin","0 0"),a.on("mousewheel DOMMouseScroll",(function(l){var u=e.offset();s.x=l.pageX-u.left,s.y=l.pageY-u.top,l.preventDefault();var d=l.delta||l.originalEvent.wheelDelta;void 0===d&&(d=l.originalEvent.detail);d=Math.max(-1,Math.min(1,d)),i.x=(s.x-o.x)/r,i.y=(s.y-o.y)/r,r+=(Object(b.a)("scale"),d*n*r),Object(b.a)("scale"),r=Math.max(1,Math.min(t,r)),o.x=-i.x*r+s.x,o.y=-i.y*r+s.y,o.x>0&&(o.x=0);o.x+c.w*r<c.w&&(o.x=-c.w*(r-1));o.y>0&&(o.y=0);o.y+c.h*r<c.h&&(o.y=-c.h*(r-1));a.css("transform","translate("+o.x+"px,"+o.y+"px) scale("+r+","+r+")")}))},H=function(t,n){console.log("Show Menu: ".concat(t));var a=W*n.x/100+10,c=D*n.y/100+10,o=e.current;o.style.visibility=t?"visible":"hidden",o.style.left="".concat(a,"px"),o.style.top="".concat(c,"px")},A=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=p.filter((function(e){return e.x!==i.x&&e.y!==i.y})),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=p.length,n=Object(r.a)(p),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=12;break}if(!(c=a.value).id){e.next=9;break}return e.next=9,F.delete("".concat(c.id));case 9:--t||y([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){F.get().then((function(e){console.log(e.data),y(e.data);new B(t,4,.5)}))}),[]),Object(a.jsxs)("main",{id:"container",className:"App-main",children:[Object(a.jsx)("img",{ref:t,src:R,className:"img-warzone",alt:"logo"}),Object(a.jsx)(v.Stage,{width:W,height:D,onClick:function(e){e=e.evt?e.evt:e;var t={x:100/(W/e.clientX),y:100/(D/e.clientY)};console.log("clicking"),H(!0,t),s(t)},children:Object(a.jsxs)(v.Layer,{children:[(N.a.isEmpty(m),Object(a.jsx)(k,{coordinates:p.filter((function(e){return"contract"===e.type})),setContract:g})),Object(a.jsx)(E,{coordinates:p.filter((function(e){return"recon"===e.type&&e.parentId===m.id})),setRecon:S})]})}),Object(a.jsxs)("div",{ref:e,id:"contextMenu",children:[N.a.isEmpty(m)&&Object(a.jsx)("div",{className:"contextMenu--contract",onClick:function(){i.type="contract",F.post("",Object(j.a)({},i)).then((function(e){s(e.data),g(e.data),y([].concat(Object(h.a)(p),[e.data]))}))},children:"Create Contract"}),!N.a.isEmpty(m)&&Object(a.jsx)("div",{className:"contextMenu--recon",onClick:function(e){i.parentId=m.id,i.type="recon",F.post("",Object(j.a)({},i)).then((function(e){s(e.data),g({}),y([].concat(Object(h.a)(p),[e.data]))}))},children:"Add Recon"}),(!N.a.isEmpty(m)||!N.a.isEmpty(L))&&Object(a.jsx)("div",{className:"contextMenu--remove",onClick:A,children:"Remove"}),Object(a.jsx)("div",{className:"contextMenu--cancel",onClick:function(){g({}),s({}),H(!1,{})},children:"Cancel"})]}),Object(a.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(a.jsx)("button",{onClick:J,children:" Clear Map "})})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root")),W()},59:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.b6439d40.chunk.js.map