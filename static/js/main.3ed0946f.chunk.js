(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{113:function(e,n,t){},114:function(e,n,t){"use strict";t.r(n);var a=t(5),i=t(8),s=t.n(i),o=t(43),c=t.n(o),r=(t(50),t(45)),u=t(10),d=t(14),l=t(15),h=t(9),b=t(17),j=t(16),v=window.innerWidth,f=window.innerHeight,M=function(e){Object(b.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(d.a)(this,t),a=n.call(this,e),console.log(e),a.state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(h.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(h.a)(a)),a}return Object(l.a)(t,[{key:"handleClick",value:function(){console.log("clicked this contract")}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(n,t){var i=v*n.x/100,s=f*n.y/100;return Object(a.jsx)(u.Circle,{id:"contract-".concat(t),x:i,y:s,radius:10,fill:"yellow",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onClick:e.handleClick,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),t}(s.a.Component),O=window.innerWidth,g=window.innerHeight,p=function(e){Object(b.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(d.a)(this,t),a=n.call(this,e),console.log(e),a.state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(h.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(h.a)(a)),a}return Object(l.a)(t,[{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(n,t){var i=O*n.x/100,s=g*n.y/100;return Object(a.jsx)(u.Circle,{x:i,y:s,radius:10,fill:"blue",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),t}(s.a.Component),w=t(44),k=t.n(w),m=(t(112),t.p+"static/media/map-overview-bg.ccfc7476.jpg"),x=(t(113),k.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"})),y=window.innerWidth,L=window.innerHeight;var E=function(){var e=Object(i.useState)([]),n=Object(r.a)(e,2),t=n[0],s=n[1];return Object(i.useEffect)((function(){x.get().then((function(e){var n=e.data;s(n)}))}),[]),Object(a.jsxs)("main",{id:"container",className:"App-main",children:[Object(a.jsx)("img",{src:m,className:"img-warzone",alt:"logo"}),Object(a.jsx)(u.Stage,{width:y,height:L,children:Object(a.jsxs)(u.Layer,{children:[Object(a.jsx)(M,{coordinates:t.filter((function(e){return"contract"===e.type}))}),Object(a.jsx)(p,{coordinates:t.filter((function(e){return"recons"===e.type}))})]})})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,115)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,s=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),s(e),o(e)}))};c.a.render(Object(a.jsx)(E,{}),document.getElementById("root")),C()},50:function(e,n,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.3ed0946f.chunk.js.map