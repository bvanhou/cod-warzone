(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{113:function(e,n,t){},114:function(e,n,t){"use strict";t.r(n);var a=t(6),i=t(8),s=t.n(i),o=t(39),c=t.n(o),r=(t(50),t(43)),u=t(9),d=t(40),l=t(41),h=t(10),j=t(45),b=t(44),g=window.innerWidth,v=window.innerHeight,f=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(e){var a;return Object(d.a)(this,t),a=n.call(this,e),console.log(e),a.state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(h.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(h.a)(a)),a}return Object(l.a)(t,[{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(n,t){console.log(n);var i=g*n.x/100,s=v*n.y/100;return Object(a.jsx)(u.Circle,{x:i,y:s,radius:5,fill:"yellow",stroke:"black",strokeWidth:e.state.isMouseInside?5:1,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),t}(s.a.Component),w=t(42),O=t.n(w),p=(t(112),t.p+"static/media/map-overview-bg.ccfc7476.jpg"),m=(t(113),O.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"})),M=window.innerWidth,x=window.innerHeight;var L=function(){var e=Object(i.useState)([]),n=Object(r.a)(e,2),t=n[0],s=n[1];return Object(i.useEffect)((function(){m.get().then((function(e){var n=e.data;s(n)}))}),[]),Object(a.jsxs)("main",{id:"container",className:"App-main",children:[Object(a.jsx)("img",{src:p,className:"img-warzone",alt:"logo"}),Object(a.jsx)(u.Stage,{width:M,height:x,children:Object(a.jsx)(u.Layer,{children:Object(a.jsx)(f,{coordinates:t})})})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,115)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,s=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),s(e),o(e)}))};c.a.render(Object(a.jsx)(L,{}),document.getElementById("root")),k()},50:function(e,n,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.9867d001.chunk.js.map