(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(7),o=n.n(a),i=n(49),s=n.n(i),r=(n(58),n(27)),u=n(28),l=n(26),d=n.n(l),h=n(50),b=n(51),j=n(12),f=n(10),v=n(17),O=n(18),p=n(9),x=n(20),y=n(19),M=n(124),k=window.innerWidth,g=window.innerHeight,m=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var c;return Object(v.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(p.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(p.a)(c)),c}return Object(O.a)(n,[{key:"handleClick",value:function(e){this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=this.state.isMouseInside,n=this.props.coordinate,a=k*n.x/100,o=g*n.y/100;return Object(c.jsx)(f.Circle,{id:Object(M.a)(),x:a,y:o,radius:10,fill:"yellow",stroke:"black",strokeWidth:t?3:1,onClick:function(){return e.handleClick(n)},onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave})}}]),n}(o.a.Component),w=window.innerWidth,C=window.innerHeight,E=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var c;return Object(v.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(p.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(p.a)(c)),c}return Object(O.a)(n,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this recon")}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:this.props.coordinates.map((function(t,n){var a=w*t.x/100,o=C*t.y/100;return Object(c.jsx)(f.Circle,{id:"recon-".concat(n),x:a,y:o,radius:10,fill:"blue",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(o.a.Component),I=n(52),L=n.n(I),S=n(53),N=n.n(S),z=n.p+"static/media/map-overview-bg.ccfc7476.jpg",F=(n(121),L.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var W=function(){var e=Object(a.useRef)(null),t=Object(a.useState)([]),n=Object(j.a)(t,2),o=(n[0],n[1]),i=Object(a.useState)([]),s=Object(j.a)(i,2),l=s[0],v=s[1],O=Object(a.useState)({}),p=Object(j.a)(O,2),x=p[0],y=p[1],M=Object(a.useState)(!1),k=Object(j.a)(M,2),g=k[0],w=k[1],C=Object(a.useState)(!1),I=Object(j.a)(C,2),L=I[0],S=I[1],W=window.innerWidth,R=window.innerHeight,B=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.length,n=Object(h.a)(l),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=12;break}if(!(a=c.value).id){e.next=9;break}return e.next=9,F.delete("".concat(a.id));case 9:--t||v([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){console.log(x),console.log(l),console.log(l.filter((function(e){return"contract"===e.type})))}),[x,l]),Object(a.useEffect)((function(){F.get().then((function(e){v(e.data)}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:z,className:"img-warzone",alt:"logo"}),Object(c.jsx)(f.Stage,{width:W,height:R,onClick:function(t){t=t.evt?t.evt:t;var n={};n.x=100/(W/t.clientX),n.y=100/(R/t.clientY);var c={x:n.x,y:n.y,type:null};g&&!N.a.isEmpty(x)&&x.id&&(c.type="recon",c.parentId=x.id),t.createContract&&(c.type="contract"),function(t){var n=e.current,c=W*t.x/100,a=R*t.y/100;n.style.left="".concat(c,"px"),n.style.top="".concat(a,"px")}(n),o(c)},children:Object(c.jsxs)(f.Layer,{children:[l.map((function(e){return Object(c.jsx)(m,{coordinate:e,setContract:y})})),Object(c.jsx)(E,{coordinates:l.filter((function(e){return"recons"===e.type&&e.parentId===x.id}))})]})}),Object(c.jsxs)("div",{ref:e,id:"contextMenu",children:[!L&&Object(c.jsx)("div",{className:"contextMenu--contract",onClick:function(e){S(!0);var t={x:100/(W/e.clientX),y:100/(R/e.clientY),type:"contract"};F.post("",Object(u.a)({},t)).then((function(e){o(e.data),y(e.data),v([].concat(Object(r.a)(l),[e.data]))}))},children:"Create Contract"}),!g&&Object(c.jsx)("div",{className:"contextMenu--recon",onClick:function(e){w(!0);var t={parentId:x.id,x:100/(W/e.clientX),y:100/(R/e.clientY),type:"recon"};F.post("",Object(u.a)({},t)).then((function(e){o(e.data),y({}),v([].concat(Object(r.a)(l),[e.data]))}))},children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{onClick:B,children:" Clear Map "})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};s.a.render(Object(c.jsx)(W,{}),document.getElementById("root")),R()},58:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.3b3bd3af.chunk.js.map