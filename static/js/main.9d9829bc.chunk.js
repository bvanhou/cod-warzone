(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(6),c=n.n(i),o=n(51),s=n.n(o),r=(n(58),n(52)),u=n(19),l=n.n(u),d=n(28),h=n(29),v=n(30),f=n(17),p=n(9),j=n(12),b=n(13),x=n(15),m=n(14),y=(n(104),function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={image:null},e.handleLoad=function(){e.setState({image:e.image})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.loadImage()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&this.loadImage()}},{key:"componentWillUnmount",value:function(){this.image.removeEventListener("load",this.handleLoad)}},{key:"loadImage",value:function(){this.image=new window.Image,this.image.src=this.props.src;var e,t,n,a=this.width,i=this.height;a/i>=this.image.outerWidth()/this.image.outerHeight()?e=a*(n=(t=this.image.outerHeight())/i):t=i*(n=(e=this.image.outerWidth())/a);var c=e+"px "+t+"px";console.log("scale: "+n+", width: "+e+", height: "+t+", cover property: "+c),this.image.addEventListener("load",this.handleLoad),console.log(this.image)}},{key:"render",value:function(){var e=this;window.innerWidth,window.innerHeight;return Object(a.jsx)(p.Image,{x:this.props.x,y:this.props.y,image:this.state.image,ref:function(t){e.imageNode=t}})}}]),n}(c.a.Component)),g=n(10),O=window.innerWidth,w=window.innerHeight,M=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(g.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(g.a)(a)),a}return Object(b.a)(n,[{key:"handleClick",value:function(e){this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=(this.state.isMouseInside,this.props.coordinates);return Object(a.jsx)(a.Fragment,{children:t.map((function(t,n){var i=O*t.x/100,c=w*t.y/100;return Object(a.jsx)(p.Circle,{id:"contract-".concat(n),x:i,y:c,radius:5,fill:"yellow",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(c.a.Component),k=window.innerWidth,C=window.innerHeight,E=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(g.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(g.a)(a)),a}return Object(b.a)(n,[{key:"handleClick",value:function(e){this.props.setRecon(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(t,n){var i=k*t.x/100,c=C*t.y/100;return Object(a.jsx)(p.Circle,{id:"recon-".concat(n),x:i,y:c,radius:5,fill:"blue",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(c.a.Component),L=n(53),I=n.n(L),S=n(16),W=n.n(S),N=n.p+"static/media/map-overview-bg.ccfc7476.jpg",R=(n(122),I.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var D=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),n=Object(i.useState)([]),c=Object(f.a)(n,2),o=c[0],s=c[1],u=Object(i.useState)([]),j=Object(f.a)(u,2),b=j[0],x=j[1],m=Object(i.useState)({}),g=Object(f.a)(m,2),O=g[0],w=g[1],k=Object(i.useState)({}),C=Object(f.a)(k,2),L=C[0],I=C[1],S=Object(i.useState)(!0),D=Object(f.a)(S,2),F=(D[0],D[1],window.innerWidth),H=window.innerHeight,z=function(e,t,n){var a=e.current,i={w:F,h:H};console.log(i);var c={x:0,y:0},o={x:0,y:0},s={x:0,y:0},r=1;function u(u){console.log(u);var l=e.offset();s.x=u.pageX-l.left,s.y=u.pageY-l.top,u.preventDefault();var d=u.delta||u.originalEvent.wheelDelta;void 0===d&&(d=u.originalEvent.detail),d=Math.max(-1,Math.min(1,d)),o.x=(s.x-c.x)/r,o.y=(s.y-c.y)/r,r+=d*n*r,r=Math.max(1,Math.min(t,r)),c.x=-o.x*r+s.x,c.y=-o.y*r+s.y,c.x>0&&(c.x=0),c.x+i.w*r<i.w&&(c.x=-i.w*(r-1)),c.y>0&&(c.y=0),c.y+i.h*r<i.h&&(c.y=-i.h*(r-1)),a.css("transform","translate("+c.x+"px,"+c.y+"px) scale("+r+","+r+")")}a.style.transformOrigin="0 0",a.addEventListener?(a.addEventListener("mousewheel",u,!1),a.addEventListener("DOMMouseScroll",u,!1)):a.attachEvent("onmousewheel",u)},A=function(t,n){console.log("Show Menu: ".concat(t));var a=F*n.x/100+10,i=H*n.y/100+10,c=e.current;c.style.visibility=t?"visible":"hidden",c.style.left="".concat(a,"px"),c.style.top="".concat(i,"px")},B=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=b.filter((function(e){return e.x!==o.x&&e.y!==o.y})),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=b.length,n=Object(r.a)(b),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=12;break}if(!(i=a.value).id){e.next=9;break}return e.next=9,R.delete("".concat(i.id));case 9:--t||x([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){R.get().then((function(e){console.log(e.data),x(e.data);new z(t,4,.5)}))}),[]),Object(a.jsxs)("main",{id:"container",className:"App-main",children:[Object(a.jsx)(p.Stage,{width:F,height:H,onClick:function(e){e=e.evt?e.evt:e;var t={x:100/(F/e.clientX),y:100/(H/e.clientY)};console.log("clicking"),A(!0,t),s(t)},children:Object(a.jsxs)(p.Layer,{children:[Object(a.jsx)(y,{src:N,alt:"logo",x:0,y:0}),(W.a.isEmpty(O),Object(a.jsx)(M,{coordinates:b.filter((function(e){return"contract"===e.type})),setContract:w})),Object(a.jsx)(E,{coordinates:b.filter((function(e){return"recon"===e.type&&e.parentId===O.id})),setRecon:I})]})}),Object(a.jsxs)("div",{ref:e,id:"contextMenu",children:[W.a.isEmpty(O)&&Object(a.jsx)("div",{className:"contextMenu--contract",onClick:function(){o.type="contract",R.post("",Object(v.a)({},o)).then((function(e){s(e.data),w(e.data),x([].concat(Object(h.a)(b),[e.data]))}))},children:"Create Contract"}),!W.a.isEmpty(O)&&Object(a.jsx)("div",{className:"contextMenu--recon",onClick:function(e){o.parentId=O.id,o.type="recon",R.post("",Object(v.a)({},o)).then((function(e){s(e.data),w({}),x([].concat(Object(h.a)(b),[e.data]))}))},children:"Add Recon"}),(!W.a.isEmpty(O)||!W.a.isEmpty(L))&&Object(a.jsx)("div",{className:"contextMenu--remove",onClick:B,children:"Remove"}),Object(a.jsx)("div",{className:"contextMenu--cancel",onClick:function(){w({}),s({}),A(!1,{})},children:"Cancel"})]}),Object(a.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(a.jsx)("button",{onClick:U,children:" Clear Map "})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),F()},58:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.9d9829bc.chunk.js.map