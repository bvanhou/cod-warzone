(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(7),o=n.n(a),i=n(48),s=n.n(i),r=(n(57),n(52)),u=n(26),l=n.n(u),d=n(49),h=n(50),j=n(12),b=n(10),f=n(17),v=n(18),p=n(9),O=n(20),x=n(19),y=(window.innerWidth,window.innerHeight,function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(f.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(p.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(p.a)(c)),c}return Object(v.a)(n,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this contract"),this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){this.state.isMouseInside;var e=this.props.coordinates;return console.log(e),Object(c.jsx)(b.Circle,{x:200,y:100,radius:50,fill:"green"})}}]),n}(o.a.Component)),g=window.innerWidth,M=window.innerHeight,k=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(f.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(p.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(p.a)(c)),c}return Object(v.a)(n,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this recon")}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:this.props.coordinates.map((function(t,n){var a=g*t.x/100,o=M*t.y/100;return Object(c.jsx)(b.Circle,{id:"recon-".concat(n),x:a,y:o,radius:10,fill:"blue",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(o.a.Component),m=n(51),w=n.n(m),C=n(27),I=n.n(C),E=n.p+"static/media/map-overview-bg.ccfc7476.jpg",L=(n(120),w.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var S=function(){var e=Object(a.useRef)(null),t=Object(a.useState)([]),n=Object(j.a)(t,2),o=(n[0],n[1]),i=Object(a.useState)([]),s=Object(j.a)(i,2),u=s[0],f=s[1],v=Object(a.useState)({}),p=Object(j.a)(v,2),O=p[0],x=p[1],g=Object(a.useState)(!1),M=Object(j.a)(g,2),m=M[0],w=M[1],C=Object(a.useState)(!1),S=Object(j.a)(C,2),N=S[0],z=S[1],F=window.innerWidth,R=window.innerHeight,W=function(){var e=Object(h.a)(l.a.mark((function e(){var t,n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u.length,n=Object(d.a)(u),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=12;break}if(!(a=c.value).id){e.next=9;break}return e.next=9,L.delete("".concat(a.id));case 9:--t||f([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){console.log(u)}),[u]),Object(a.useEffect)((function(){L.get().then((function(e){var t=e.data;console.log(t),f(t)}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:E,className:"img-warzone",alt:"logo"}),Object(c.jsx)(b.Stage,{width:F,height:R,onClick:function(t){t=t.evt?t.evt:t;var n={};n.x=100/(F/t.clientX),n.y=100/(R/t.clientY);var c={x:n.x,y:n.y,type:null};m&&!I.a.isEmpty(O)&&O.id&&(c.type="recon",c.parentId=O.id),t.createContract&&(c.type="contract"),function(t){var n=e.current,c=F*t.x/100,a=R*t.y/100;n.style.left="".concat(c,"px"),n.style.top="".concat(a,"px")}(n),o(c)},children:Object(c.jsxs)(b.Layer,{children:[I.a.isEmpty(O)?Object(c.jsx)(y,{coordinates:u.filter((function(e){return"contract"===e.type})),setContract:x}):Object(c.jsx)(y,{coordinates:u.filter((function(e){return"contract"===e.type&&e.id===O.id})),setContract:x}),Object(c.jsx)(k,{coordinates:u.filter((function(e){return"recons"===e.type&&e.parentId===O.id}))})]})}),Object(c.jsxs)("div",{ref:e,id:"contextMenu",children:[!N&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){z(!0);var t={x:100/(F/e.clientX),y:100/(R/e.clientY),type:"contract"};o(t),x(t),f([].concat(Object(r.a)(u),[t]))},children:"Create Contract"}),!m&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(e){w(!0);var t={parentId:O.id,x:100/(F/e.clientX),y:100/(R/e.clientY),type:"recon"};o(t),x({})},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{onClick:W,children:" Clear Map "})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};s.a.render(Object(c.jsx)(S,{}),document.getElementById("root")),N()},57:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.1633919d.chunk.js.map