(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(7),i=n.n(a),s=n(50),o=n.n(s),r=(n(58),n(28)),u=n(29),l=n(27),d=n.n(l),h=n(51),j=n(52),b=n(13),f=n(10),v=n(18),p=n(19),O=n(9),x=n(21),M=n(20),k=window.innerWidth,y=window.innerHeight,m=function(e){Object(x.a)(n,e);var t=Object(M.a)(n);function n(e){var c;return Object(v.a)(this,n),(c=t.call(this,e)).state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(O.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(O.a)(c)),c}return Object(p.a)(n,[{key:"handleClick",value:function(e){this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=this.state.isMouseInside,n=this.props.coordinates;return Object(c.jsx)(c.Fragment,{children:n.map((function(n,a){var i=k*n.x/100,s=y*n.y/100;return Object(c.jsx)(f.Circle,{id:"contract-".concat(a),x:i,y:s,radius:10,fill:"yellow",stroke:"black",strokeWidth:t?3:1,onClick:function(){return e.handleClick(n)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(i.a.Component),g=window.innerWidth,w=window.innerHeight,C=function(e){Object(x.a)(n,e);var t=Object(M.a)(n);function n(e){var c;return Object(v.a)(this,n),(c=t.call(this,e)).state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(O.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(O.a)(c)),c}return Object(p.a)(n,[{key:"handleClick",value:function(e){this.props.setRecon(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:this.props.coordinates.map((function(t,n){var a=g*t.x/100,i=w*t.y/100;return Object(c.jsx)(f.Circle,{id:"recon-".concat(n),x:a,y:i,radius:10,fill:"blue",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(i.a.Component),E=n(53),L=n.n(E),I=n(12),S=n.n(I),N=n.p+"static/media/map-overview-bg.ccfc7476.jpg",F=(n(121),L.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var R=function(){var e=Object(a.useRef)(null),t=Object(a.useState)([]),n=Object(b.a)(t,2),i=n[0],s=n[1],o=Object(a.useState)([]),l=Object(b.a)(o,2),v=l[0],p=l[1],O=Object(a.useState)({}),x=Object(b.a)(O,2),M=x[0],k=x[1],y=Object(a.useState)({}),g=Object(b.a)(y,2),w=g[0],E=g[1],L=Object(a.useState)(!0),I=Object(b.a)(L,2),R=(I[0],I[1],window.innerWidth),z=window.innerHeight,W=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=v.length,n=Object(h.a)(v),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=12;break}if(!(a=c.value).id){e.next=9;break}return e.next=9,F.delete("".concat(a.id));case 9:--t||p([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}(),B=function(t,n){console.log("Show Menu: ".concat(t));var c=R*n.x/100+10,a=z*n.y/100+10,i=e.current;i.style.visibility=t?"show":"hidden",i.style.left="".concat(c,"px"),i.style.top="".concat(a,"px")};return Object(a.useEffect)((function(){F.get().then((function(e){console.log(e.data),p(e.data)}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:N,className:"img-warzone",alt:"logo"}),Object(c.jsx)(f.Stage,{width:R,height:z,onClick:function(e){e=e.evt?e.evt:e;var t={x:100/(R/e.clientX),y:100/(z/e.clientY)};console.log("clicking"),B(!0,t),s(t)},children:Object(c.jsxs)(f.Layer,{children:[(S.a.isEmpty(M),Object(c.jsx)(m,{coordinates:v.filter((function(e){return"contract"===e.type})),setContract:k})),Object(c.jsx)(C,{coordinates:v.filter((function(e){return"recon"===e.type&&e.parentId===M.id})),setRecon:E})]})}),Object(c.jsxs)("div",{ref:e,id:"contextMenu",children:[S.a.isEmpty(M)&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(){i.type="contract",F.post("",Object(u.a)({},i)).then((function(e){s(e.data),k(e.data),p([].concat(Object(r.a)(v),[e.data]))}))},children:"Create Contract"}),!S.a.isEmpty(M)&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(e){i.parentId=M.id,i.type="recon",F.post("",Object(u.a)({},i)).then((function(e){s(e.data),k({}),p([].concat(Object(r.a)(v),[e.data]))}))},children:"Add Recon"}),(!S.a.isEmpty(M)||!S.a.isEmpty(w))&&Object(c.jsx)("div",{className:"contextMenu--remove",children:"Remove"}),Object(c.jsx)("div",{className:"contextMenu--cancel",onClick:function(){k({}),s({}),B(!1,{})},children:"Cancel"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{onClick:W,children:" Clear Map "})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root")),z()},58:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.ee221a49.chunk.js.map