(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(7),o=n.n(a),i=n(49),s=n.n(i),r=(n(58),n(53)),l=n(26),u=n.n(l),d=n(50),h=n(51),j=n(12),b=n(10),f=n(28),v=n(17),p=n(18),O=n(9),x=n(20),y=n(19),k=window.innerWidth,M=window.innerHeight,g=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var c;return Object(v.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1,coordinates:null},c.handleMouseEnter=c.handleMouseEnter.bind(Object(O.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(O.a)(c)),c}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState(Object(f.a)(Object(f.a)({},this.state),{},{coordinates:this.props.coordinates}))}},{key:"handleClick",value:function(e){console.log(e),console.log("clicked this contract"),this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.coordinates,a=t.isMouseInside;return console.log(this.props),n&&n.length?Object(c.jsx)(c.Fragment,{children:n.map((function(t,n){var o=k*t.x/100,i=M*t.y/100;return Object(c.jsx)(b.Circle,{id:"contract-".concat(n),x:o,y:i,radius:10,fill:"yellow",stroke:"black",strokeWidth:a?3:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))}):Object(c.jsx)(c.Fragment,{})}}]),n}(o.a.Component),m=window.innerWidth,C=window.innerHeight,w=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var c;return Object(v.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(O.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(O.a)(c)),c}return Object(p.a)(n,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this recon")}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:this.props.coordinates.map((function(t,n){var a=m*t.x/100,o=C*t.y/100;return Object(c.jsx)(b.Circle,{id:"recon-".concat(n),x:a,y:o,radius:10,fill:"blue",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(o.a.Component),E=n(52),I=n.n(E),L=n(27),S=n.n(L),F=n.p+"static/media/map-overview-bg.ccfc7476.jpg",N=(n(121),I.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var z=function(){var e=Object(a.useRef)(null),t=Object(a.useState)([]),n=Object(j.a)(t,2),o=(n[0],n[1]),i=Object(a.useState)([]),s=Object(j.a)(i,2),l=s[0],f=s[1],v=Object(a.useState)({}),p=Object(j.a)(v,2),O=p[0],x=p[1],y=Object(a.useState)(!1),k=Object(j.a)(y,2),M=k[0],m=k[1],C=Object(a.useState)(!1),E=Object(j.a)(C,2),I=E[0],L=E[1],z=window.innerWidth,W=window.innerHeight,R=function(){var e=Object(h.a)(u.a.mark((function e(){var t,n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.length,n=Object(d.a)(l),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=12;break}if(!(a=c.value).id){e.next=9;break}return e.next=9,N.delete("".concat(a.id));case 9:--t||f([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){console.log(O)}),[O]),Object(a.useEffect)((function(){N.get().then((function(e){var t=e.data;console.log(t),f(t)}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:F,className:"img-warzone",alt:"logo"}),Object(c.jsx)(b.Stage,{width:z,height:W,onClick:function(t){t=t.evt?t.evt:t;var n={};n.x=100/(z/t.clientX),n.y=100/(W/t.clientY);var c={x:n.x,y:n.y,type:null};M&&!S.a.isEmpty(O)&&O.id&&(c.type="recon",c.parentId=O.id),t.createContract&&(c.type="contract"),function(t){var n=e.current,c=z*t.x/100,a=W*t.y/100;n.style.left="".concat(c,"px"),n.style.top="".concat(a,"px")}(n),o(c)},children:Object(c.jsxs)(b.Layer,{children:[S.a.isEmpty(O)?Object(c.jsx)(g,{coordinates:l.filter((function(e){return"contract"===e.type})),setContract:x}):Object(c.jsx)(g,{coordinates:l.filter((function(e){return"contract"===e.type&&e.id===O.id})),setContract:x}),Object(c.jsx)(w,{coordinates:l.filter((function(e){return"recons"===e.type&&e.parentId===O.id}))})]})}),Object(c.jsxs)("div",{ref:e,id:"contextMenu",children:[!I&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){L(!0);var t={x:100/(z/e.clientX),y:100/(W/e.clientY),type:"contract"};o(t),x(t),f([].concat(Object(r.a)(l),[t]))},children:"Create Contract"}),!M&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(e){m(!0);var t={parentId:O.id,x:100/(z/e.clientX),y:100/(W/e.clientY),type:"recon"};o(t),x({})},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{onClick:R,children:" Clear Map "})})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};s.a.render(Object(c.jsx)(z,{}),document.getElementById("root")),W()},58:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.bb05fe54.chunk.js.map