(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(7),o=n.n(a),i=n(48),s=n.n(i),r=(n(57),n(52)),l=n(26),u=n.n(l),d=n(49),h=n(50),j=n(12),b=n(10),f=n(17),v=n(18),p=n(9),O=n(20),x=n(19),y=window.innerWidth,k=window.innerHeight,M=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(f.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(p.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(p.a)(c)),c}return Object(v.a)(n,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this contract"),this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=this.state.isMouseInside,n=this.props.coordinates;return console.log(n),Object(c.jsx)(c.Fragment,{children:n.map((function(n,a){var o=y*n.x/100,i=k*n.y/100;return Object(c.jsx)(b.Circle,{id:"contract-".concat(a),x:o,y:i,radius:10,fill:"yellow",stroke:"black",strokeWidth:t?3:1,onClick:function(){return e.handleClick(n)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(o.a.Component),g=window.innerWidth,m=window.innerHeight,C=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(f.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(p.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(p.a)(c)),c}return Object(v.a)(n,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this recon")}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:this.props.coordinates.map((function(t,n){var a=g*t.x/100,o=m*t.y/100;return Object(c.jsx)(b.Circle,{id:"recon-".concat(n),x:a,y:o,radius:10,fill:"blue",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(o.a.Component),w=n(51),E=n.n(w),I=n(27),L=n.n(I),S=n.p+"static/media/map-overview-bg.ccfc7476.jpg",F=(n(120),E.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var N=function(){var e=Object(a.useRef)(null),t=Object(a.useState)([]),n=Object(j.a)(t,2),o=(n[0],n[1]),i=Object(a.useState)([]),s=Object(j.a)(i,2),l=s[0],f=s[1],v=Object(a.useState)({}),p=Object(j.a)(v,2),O=p[0],x=p[1],y=Object(a.useState)(!1),k=Object(j.a)(y,2),g=k[0],m=k[1],w=Object(a.useState)(!1),E=Object(j.a)(w,2),I=E[0],N=E[1],z=window.innerWidth,W=window.innerHeight,R=function(){var e=Object(h.a)(u.a.mark((function e(){var t,n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.length,n=Object(d.a)(l),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=12;break}if(!(a=c.value).id){e.next=9;break}return e.next=9,F.delete("".concat(a.id));case 9:--t||f([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){console.log(l)}),[l]),Object(a.useEffect)((function(){F.get().then((function(e){var t=e.data;console.log(t),f(t)}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:S,className:"img-warzone",alt:"logo"}),Object(c.jsx)(b.Stage,{width:z,height:W,onClick:function(t){t=t.evt?t.evt:t;var n={};n.x=100/(z/t.clientX),n.y=100/(W/t.clientY);var c={x:n.x,y:n.y,type:null};g&&!L.a.isEmpty(O)&&O.id&&(c.type="recon",c.parentId=O.id),t.createContract&&(c.type="contract"),function(t){var n=e.current,c=z*t.x/100,a=W*t.y/100;n.style.left="".concat(c,"px"),n.style.top="".concat(a,"px")}(n),o(c)},children:Object(c.jsxs)(b.Layer,{children:[L.a.isEmpty(O)?Object(c.jsx)(M,{coordinates:l.filter((function(e){return"contract"===e.type})),setContract:x}):Object(c.jsx)(M,{coordinates:l.filter((function(e){return"contract"===e.type&&e.id===O.id})),setContract:x}),Object(c.jsx)(C,{coordinates:l.filter((function(e){return"recons"===e.type&&e.parentId===O.id}))})]})}),Object(c.jsxs)("div",{ref:e,id:"contextMenu",children:[!I&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){N(!0);var t={x:100/(z/e.clientX),y:100/(W/e.clientY),type:"contract"};o(t),x(t),f([].concat(Object(r.a)(l),[t]))},children:"Create Contract"}),!g&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(e){m(!0);var t={parentId:O.id,x:100/(z/e.clientX),y:100/(W/e.clientY),type:"recon"};o(t),x({})},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{onClick:R,children:" Clear Map "})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};s.a.render(Object(c.jsx)(N,{}),document.getElementById("root")),z()},57:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.6d883cdb.chunk.js.map