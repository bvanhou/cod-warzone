(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{113:function(e,n,t){},114:function(e,n,t){"use strict";t.r(n);var o=t(5),a=t(8),i=t.n(a),s=t(44),c=t.n(s),r=(t(50),t(23)),u=t(10),l=t(14),d=t(15),h=t(9),b=t(17),j=t(16),f=window.innerWidth,v=window.innerHeight,M=function(e){Object(b.a)(t,e);var n=Object(j.a)(t);function t(e){var o;return Object(l.a)(this,t),o=n.call(this,e),console.log(e),o.state={isMouseInside:!1},o.handleMouseEnter=o.handleMouseEnter.bind(Object(h.a)(o)),o.handleMouseLeave=o.handleMouseLeave.bind(Object(h.a)(o)),o}return Object(d.a)(t,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this contract"),this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(o.jsx)(o.Fragment,{children:this.props.coordinates.map((function(n,t){var a=f*n.x/100,i=v*n.y/100;return Object(o.jsx)(u.Circle,{id:"contract-".concat(t),x:a,y:i,radius:10,fill:"yellow",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(n)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),t}(i.a.Component),O=window.innerWidth,g=window.innerHeight,k=function(e){Object(b.a)(t,e);var n=Object(j.a)(t);function t(e){var o;return Object(l.a)(this,t),o=n.call(this,e),console.log(e),o.state={isMouseInside:!1},o.handleMouseEnter=o.handleMouseEnter.bind(Object(h.a)(o)),o.handleMouseLeave=o.handleMouseLeave.bind(Object(h.a)(o)),o}return Object(d.a)(t,[{key:"handleClick",value:function(e){console.log(e),console.log("clicked this recon")}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(o.jsx)(o.Fragment,{children:this.props.coordinates.map((function(n,t){var a=O*n.x/100,i=g*n.y/100;return Object(o.jsx)(u.Circle,{id:"recon-".concat(t),x:a,y:i,radius:10,fill:"blue",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:function(){return e.handleClick(n)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),t}(i.a.Component),p=t(45),w=t.n(p),m=(t(112),t.p+"static/media/map-overview-bg.ccfc7476.jpg"),y=(t(113),w.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"})),x=window.innerWidth,C=window.innerHeight;var L=function(){var e=Object(a.useState)([]),n=Object(r.a)(e,2),t=n[0],i=n[1],s=Object(a.useState)({}),c=Object(r.a)(s,2),l=(c[0],c[1]);return Object(a.useEffect)((function(){y.get().then((function(e){var n=e.data;i(n)}))}),[]),Object(o.jsxs)("main",{id:"container",className:"App-main",children:[Object(o.jsx)("img",{src:m,className:"img-warzone",alt:"logo"}),Object(o.jsx)(u.Stage,{width:x,height:C,children:Object(o.jsxs)(u.Layer,{children:[Object(o.jsx)(M,{coordinates:t.filter((function(e){return"contract"===e.type})),setContract:l}),Object(o.jsx)(k,{coordinates:t.filter((function(e){return"recons"===e.type}))})]})})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,115)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),o(e),a(e),i(e),s(e)}))};c.a.render(Object(o.jsx)(L,{}),document.getElementById("root")),E()},50:function(e,n,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.9c119171.chunk.js.map