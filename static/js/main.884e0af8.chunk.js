(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(7),o=n.n(a),i=n(49),s=n.n(i),r=(n(58),n(53)),u=n(26),l=n.n(u),d=n(50),h=n(51),j=n(12),b=n(11),f=n(28),v=n(17),p=n(18),O=n(9),x=n(20),y=n(19),g=(window.innerWidth,window.innerHeight,function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var c;return Object(v.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1,coordinates:null},c.handleMouseEnter=c.handleMouseEnter.bind(Object(O.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(O.a)(c)),c}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState(Object(f.a)(Object(f.a)({},this.state),{},{coordinates:this.props.coordinates}))}},{key:"handleClick",value:function(e){console.log(e),console.log("clicked this contract"),this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this.state,t=e.coordinates;e.isMouseInside;return Object(c.jsx)(c.Fragment,{children:t&&t.length&&t.map((function(e,t){e.x,e.y;return{}}))})}}]),n}(o.a.Component)),M=window.innerWidth,k=window.innerHeight,m=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var c;return Object(v.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(O.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(O.a)(c)),c}return Object(p.a)(n,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this recon")}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:this.props.coordinates.map((function(t,n){var a=M*t.x/100,o=k*t.y/100;return Object(c.jsx)(b.Circle,{id:"recon-".concat(n),x:a,y:o,radius:10,fill:"blue",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(o.a.Component),w=n(52),C=n.n(w),I=n(27),E=n.n(I),L=n.p+"static/media/map-overview-bg.ccfc7476.jpg",S=(n(121),C.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var F=function(){var e=Object(a.useRef)(null),t=Object(a.useState)([]),n=Object(j.a)(t,2),o=(n[0],n[1]),i=Object(a.useState)([]),s=Object(j.a)(i,2),u=s[0],f=s[1],v=Object(a.useState)({}),p=Object(j.a)(v,2),O=p[0],x=p[1],y=Object(a.useState)(!1),M=Object(j.a)(y,2),k=M[0],w=M[1],C=Object(a.useState)(!1),I=Object(j.a)(C,2),F=I[0],N=I[1],z=window.innerWidth,R=window.innerHeight,W=function(){var e=Object(h.a)(l.a.mark((function e(){var t,n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u.length,n=Object(d.a)(u),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=12;break}if(!(a=c.value).id){e.next=9;break}return e.next=9,S.delete("".concat(a.id));case 9:--t||f([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){console.log(O)}),[O]),Object(a.useEffect)((function(){S.get().then((function(e){var t=e.data;console.log(t),f(t)}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:L,className:"img-warzone",alt:"logo"}),Object(c.jsx)(b.Stage,{width:z,height:R,onClick:function(t){t=t.evt?t.evt:t;var n={};n.x=100/(z/t.clientX),n.y=100/(R/t.clientY);var c={x:n.x,y:n.y,type:null};k&&!E.a.isEmpty(O)&&O.id&&(c.type="recon",c.parentId=O.id),t.createContract&&(c.type="contract"),function(t){var n=e.current,c=z*t.x/100,a=R*t.y/100;n.style.left="".concat(c,"px"),n.style.top="".concat(a,"px")}(n),o(c)},children:Object(c.jsxs)(b.Layer,{children:[E.a.isEmpty(O)?Object(c.jsx)(g,{coordinates:u.filter((function(e){return"contract"===e.type})),setContract:x}):Object(c.jsx)(g,{coordinates:u.filter((function(e){return"contract"===e.type&&e.id===O.id})),setContract:x}),Object(c.jsx)(m,{coordinates:u.filter((function(e){return"recons"===e.type&&e.parentId===O.id}))})]})}),Object(c.jsxs)("div",{ref:e,id:"contextMenu",children:[!F&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){N(!0);var t={x:100/(z/e.clientX),y:100/(R/e.clientY),type:"contract"};o(t),x(t),f([].concat(Object(r.a)(u),[t]))},children:"Create Contract"}),!k&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(e){w(!0);var t={parentId:O.id,x:100/(z/e.clientX),y:100/(R/e.clientY),type:"recon"};o(t),x({})},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{onClick:W,children:" Clear Map "})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};s.a.render(Object(c.jsx)(F,{}),document.getElementById("root")),N()},58:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.884e0af8.chunk.js.map