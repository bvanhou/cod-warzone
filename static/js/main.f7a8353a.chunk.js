(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(8),s=n.n(i),o=n(39),c=n.n(o),r=(n(50),n(43)),u=n(9),d=n(40),h=n(41),l=n(10),j=n(45),b=n(44),f=window.innerWidth,v=window.innerHeight,g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),a=t.call(this,e),console.log(e),a.state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(l.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(l.a)(a)),a}return Object(h.a)(n,[{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(t,n){var i=f*t.x/100,s=v*t.y/100;return Object(a.jsx)(u.Circle,{x:i,y:s,radius:10,fill:"yellow",stroke:"black",strokeWidth:e.state.isMouseInside?3:1,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(s.a.Component),p=n(42),w=n.n(p),O=(n(112),n.p+"static/media/map-overview-bg.ccfc7476.jpg"),m=(n(113),w.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"})),M=window.innerWidth,x=window.innerHeight;var y=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(i.useEffect)((function(){m.get().then((function(e){var t=e.data;s(t)}))}),[]),Object(a.jsxs)("main",{id:"container",className:"App-main",children:[Object(a.jsx)("img",{src:O,className:"img-warzone",alt:"logo"}),Object(a.jsx)(u.Stage,{width:M,height:x,children:Object(a.jsx)(u.Layer,{children:Object(a.jsx)(g,{coordinates:n.filter((function(e){return"contract"===e.type}))})})})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};c.a.render(Object(a.jsx)(y,{}),document.getElementById("root")),L()},50:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.f7a8353a.chunk.js.map