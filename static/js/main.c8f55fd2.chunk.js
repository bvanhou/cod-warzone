(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(7),o=n.n(a),i=n(50),s=n.n(i),r=(n(58),n(28)),u=n(29),l=n(26),d=n.n(l),j=n(51),h=n(52),b=n(12),f=n(10),v=n(17),p=n(18),O=n(9),x=n(20),y=n(19),g=window.innerWidth,k=window.innerHeight,M=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var c;return Object(v.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(O.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(O.a)(c)),c}return Object(p.a)(n,[{key:"handleClick",value:function(e){this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){this.state.isMouseInside;var e=this.props.coordinates;return console.log(e),Object(c.jsx)(c.Fragment,{children:e.map((function(e,t){var n=g*e.x/100,a=k*e.y/100;return console.log(e),Object(c.jsx)(f.Circle,{x:n,y:a,radius:10,fill:"yellow",stroke:"black"},"contract-".concat(t))}))})}}]),n}(o.a.Component),m=window.innerWidth,w=window.innerHeight,C=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var c;return Object(v.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(O.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(O.a)(c)),c}return Object(p.a)(n,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this recon")}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:this.props.coordinates.map((function(t,n){var a=m*t.x/100,o=w*t.y/100;return Object(c.jsx)(f.Circle,{id:"recon-".concat(n),x:a,y:o,radius:10,fill:"blue",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(o.a.Component),I=n(53),E=n.n(I),L=n(27),S=n.n(L),F=n.p+"static/media/map-overview-bg.ccfc7476.jpg",N=(n(121),E.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var z=function(){var e=Object(a.useRef)(null),t=Object(a.useState)([]),n=Object(b.a)(t,2),o=(n[0],n[1]),i=Object(a.useState)([]),s=Object(b.a)(i,2),l=s[0],v=s[1],p=Object(a.useState)({}),O=Object(b.a)(p,2),x=O[0],y=O[1],g=Object(a.useState)(!1),k=Object(b.a)(g,2),m=k[0],w=k[1],I=Object(a.useState)(!1),E=Object(b.a)(I,2),L=E[0],z=E[1],R=window.innerWidth,W=window.innerHeight,B=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.length,n=Object(j.a)(l),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=12;break}if(!(a=c.value).id){e.next=9;break}return e.next=9,N.delete("".concat(a.id));case 9:--t||v([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){console.log(x),console.log(l.filter((function(e){return"contract"===e.type&&e.id===x.id})))}),[x,l]),Object(a.useEffect)((function(){N.get().then((function(e){var t=e.data;console.log(t),v(t)}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:F,className:"img-warzone",alt:"logo"}),Object(c.jsx)(f.Stage,{width:R,height:W,onClick:function(t){t=t.evt?t.evt:t;var n={};n.x=100/(R/t.clientX),n.y=100/(W/t.clientY);var c={x:n.x,y:n.y,type:null};m&&!S.a.isEmpty(x)&&x.id&&(c.type="recon",c.parentId=x.id),t.createContract&&(c.type="contract"),function(t){var n=e.current,c=R*t.x/100,a=W*t.y/100;n.style.left="".concat(c,"px"),n.style.top="".concat(a,"px")}(n),o(c)},children:Object(c.jsxs)(f.Layer,{children:[S.a.isEmpty(x)?Object(c.jsx)(M,{coordinates:l.filter((function(e){return"contract"===e.type})),setContract:y}):Object(c.jsx)(M,{coordinates:l.filter((function(e){return"contract"===e.type&&e.id===x.id})),setContract:y}),Object(c.jsx)(C,{coordinates:l.filter((function(e){return"recons"===e.type&&e.parentId===x.id}))})]})}),Object(c.jsxs)("div",{ref:e,id:"contextMenu",children:[!L&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){z(!0);var t={x:100/(R/e.clientX),y:100/(W/e.clientY),type:"contract"};N.post("",Object(u.a)({},t)).then((function(e){o(e.data),y(e.data),v([].concat(Object(r.a)(l),[e.data]))}))},children:"Create Contract"}),!m&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(e){w(!0);var t={parentId:x.id,x:100/(R/e.clientX),y:100/(W/e.clientY),type:"recon"};N.post("",Object(u.a)({},t)).then((function(e){o(e.data),y({}),v([].concat(Object(r.a)(l),[e.data]))}))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{onClick:B,children:" Clear Map "})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};s.a.render(Object(c.jsx)(z,{}),document.getElementById("root")),R()},58:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.c8f55fd2.chunk.js.map