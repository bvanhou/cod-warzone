(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var c=n(4),o=n(7),s=n.n(o),a=n(45),i=n.n(a),r=(n(51),n(11)),l=n(10),u=n(15),d=n(16),h=n(9),j=n(18),b=n(17),v=window.innerWidth,f=window.innerHeight,O=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(h.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(h.a)(c)),c}return Object(d.a)(n,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this contract"),this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:this.props.coordinates.map((function(t,n){var o=v*t.x/100,s=f*t.y/100;return Object(c.jsx)(l.Circle,{id:"contract-".concat(n),x:o,y:s,radius:10,fill:"yellow",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(s.a.Component),p=window.innerWidth,g=window.innerHeight,x=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),c=t.call(this,e),console.log(e),c.state={isMouseInside:!1},c.handleMouseEnter=c.handleMouseEnter.bind(Object(h.a)(c)),c.handleMouseLeave=c.handleMouseLeave.bind(Object(h.a)(c)),c}return Object(d.a)(n,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this recon")}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:this.props.coordinates.map((function(t,n){var o=p*t.x/100,s=g*t.y/100;return Object(c.jsx)(l.Circle,{id:"recon-".concat(n),x:o,y:s,radius:10,fill:"blue",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(s.a.Component),M=n(46),y=n.n(M),k=n(24),m=n.n(k),w=n.p+"static/media/map-overview-bg.ccfc7476.jpg",C=(n(113),y.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var E=function(){var e=Object(o.useRef)(null),t=Object(o.useState)([]),n=Object(r.a)(t,2),s=n[0],a=n[1],i=Object(o.useState)({}),u=Object(r.a)(i,2),d=u[0],h=u[1],j=Object(o.useState)(!1),b=Object(r.a)(j,2),v=b[0],f=(b[1],Object(o.useState)(!1)),p=Object(r.a)(f,2),g=p[0],M=(p[1],window.innerWidth),y=window.innerHeight;return Object(o.useEffect)((function(){console.log(d)}),[d]),Object(o.useEffect)((function(){C.get().then((function(e){var t=e.data;a(t)}))}),[]),Object(c.jsxs)("main",{id:"container",className:"App-main",children:[Object(c.jsx)("img",{src:w,className:"img-warzone",alt:"logo"}),Object(c.jsx)(l.Stage,{width:M,height:y,onClick:function(t){console.log(t.evt),console.log(window),console.log(100/(M/t.clientX));var n={x:100/(M/t.clientX),y:100/(y/t.clientY)},c={x:n.x,y:n.y};v&&!m.a.isEmpty(d)&&d.id?(c.type="recon",c.parentId=d.id):g?c.type="recon":function(t){var n=e.current;console.log(n),console.log(e);var c=M*t.x/100,o=y*t.y/100;n.style.left="".concat(c,"px"),n.style.top="".concat(o,"px")}(n),console.log(c),console.log("click")},children:Object(c.jsxs)(l.Layer,{children:[m.a.isEmpty(d)?Object(c.jsx)(O,{coordinates:s.filter((function(e){return"contract"===e.type})),setContract:h}):Object(c.jsx)(O,{coordinates:s.filter((function(e){return"contract"===e.type&&e.id===d.id})),setContract:h}),Object(c.jsx)(x,{coordinates:s.filter((function(e){return"recons"===e.type&&e.parentId===d.id}))})]})}),Object(c.jsxs)("div",{ref:e,id:"contextMenu",children:[Object(c.jsx)("div",{className:"contextMenu--contract",children:"Start Contract"}),Object(c.jsx)("div",{className:"contextMenu--recon",children:"Add Recon"}),Object(c.jsx)("div",{className:"contextMenu--remove",children:"Remove"})]}),Object(c.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(c.jsx)("button",{children:" Clear Map "})})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(E,{}),document.getElementById("root")),L()},51:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.35c41e9d.chunk.js.map