(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(6),c=n.n(i),o=n(51),s=n.n(o),r=(n(58),n(52)),u=n(19),l=n.n(u),d=n(28),h=n(29),v=n(30),f=n(17),p=n(9),b=n(12),j=n(13),x=n(15),y=n(14),m=StyleSheet.create({responsiveImage:{height:"auto",width:"auto",position:"absolute",top:"-100%",bottom:"-100%",left:"-100%",right:"-100%",margin:"auto"}}),O=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={image:null},e.handleLoad=function(){e.setState({image:e.image})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.loadImage()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&this.loadImage()}},{key:"componentWillUnmount",value:function(){this.image.removeEventListener("load",this.handleLoad)}},{key:"loadImage",value:function(){this.image=new window.Image,this.image.src=this.props.src,this.image.addEventListener("load",this.handleLoad)}},{key:"render",value:function(){var e=this;window.innerWidth,window.innerHeight;return Object(a.jsx)(p.Image,{x:this.props.x,y:this.props.y,style:m.responsiveImage,image:this.state.image,ref:function(t){e.imageNode=t}})}}]),n}(c.a.Component),g=n(10),w=window.innerWidth,M=window.innerHeight,k=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(g.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(g.a)(a)),a}return Object(j.a)(n,[{key:"handleClick",value:function(e){this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=(this.state.isMouseInside,this.props.coordinates);return Object(a.jsx)(a.Fragment,{children:t.map((function(t,n){var i=w*t.x/100,c=M*t.y/100;return Object(a.jsx)(p.Circle,{id:"contract-".concat(n),x:i,y:c,radius:5,fill:"yellow",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(c.a.Component),C=window.innerWidth,E=window.innerHeight,L=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(g.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(g.a)(a)),a}return Object(j.a)(n,[{key:"handleClick",value:function(e){this.props.setRecon(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(t,n){var i=C*t.x/100,c=E*t.y/100;return Object(a.jsx)(p.Circle,{id:"recon-".concat(n),x:i,y:c,radius:5,fill:"blue",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(c.a.Component),I=n(53),S=n.n(I),N=n(16),R=n.n(N),W=n.p+"static/media/map-overview-bg.ccfc7476.jpg",D=(n(121),S.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var F=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),n=Object(i.useState)([]),c=Object(f.a)(n,2),o=c[0],s=c[1],u=Object(i.useState)([]),b=Object(f.a)(u,2),j=b[0],x=b[1],y=Object(i.useState)({}),m=Object(f.a)(y,2),g=m[0],w=m[1],M=Object(i.useState)({}),C=Object(f.a)(M,2),E=C[0],I=C[1],S=Object(i.useState)(!0),N=Object(f.a)(S,2),F=(N[0],N[1],window.innerWidth),z=window.innerHeight,H=function(e,t,n){var a=e.current,i={w:F,h:z};console.log(i);var c={x:0,y:0},o={x:0,y:0},s={x:0,y:0},r=1;function u(u){console.log(u);var l=e.offset();s.x=u.pageX-l.left,s.y=u.pageY-l.top,u.preventDefault();var d=u.delta||u.originalEvent.wheelDelta;void 0===d&&(d=u.originalEvent.detail),d=Math.max(-1,Math.min(1,d)),o.x=(s.x-c.x)/r,o.y=(s.y-c.y)/r,r+=d*n*r,r=Math.max(1,Math.min(t,r)),c.x=-o.x*r+s.x,c.y=-o.y*r+s.y,c.x>0&&(c.x=0),c.x+i.w*r<i.w&&(c.x=-i.w*(r-1)),c.y>0&&(c.y=0),c.y+i.h*r<i.h&&(c.y=-i.h*(r-1)),a.css("transform","translate("+c.x+"px,"+c.y+"px) scale("+r+","+r+")")}a.style.transformOrigin="0 0",a.addEventListener?(a.addEventListener("mousewheel",u,!1),a.addEventListener("DOMMouseScroll",u,!1)):a.attachEvent("onmousewheel",u)},A=function(t,n){console.log("Show Menu: ".concat(t));var a=F*n.x/100+10,i=z*n.y/100+10,c=e.current;c.style.visibility=t?"visible":"hidden",c.style.left="".concat(a,"px"),c.style.top="".concat(i,"px")},B=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=j.filter((function(e){return e.x!==o.x&&e.y!==o.y})),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=j.length,n=Object(r.a)(j),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=12;break}if(!(i=a.value).id){e.next=9;break}return e.next=9,D.delete("".concat(i.id));case 9:--t||x([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){D.get().then((function(e){console.log(e.data),x(e.data);new H(t,4,.5)}))}),[]),Object(a.jsxs)("main",{id:"container",className:"App-main",children:[Object(a.jsx)(p.Stage,{width:F,height:z,onClick:function(e){e=e.evt?e.evt:e;var t={x:100/(F/e.clientX),y:100/(z/e.clientY)};console.log("clicking"),A(!0,t),s(t)},children:Object(a.jsxs)(p.Layer,{children:[Object(a.jsx)(O,{src:W,alt:"logo",x:0,y:0}),(R.a.isEmpty(g),Object(a.jsx)(k,{coordinates:j.filter((function(e){return"contract"===e.type})),setContract:w})),Object(a.jsx)(L,{coordinates:j.filter((function(e){return"recon"===e.type&&e.parentId===g.id})),setRecon:I})]})}),Object(a.jsxs)("div",{ref:e,id:"contextMenu",children:[R.a.isEmpty(g)&&Object(a.jsx)("div",{className:"contextMenu--contract",onClick:function(){o.type="contract",D.post("",Object(v.a)({},o)).then((function(e){s(e.data),w(e.data),x([].concat(Object(h.a)(j),[e.data]))}))},children:"Create Contract"}),!R.a.isEmpty(g)&&Object(a.jsx)("div",{className:"contextMenu--recon",onClick:function(e){o.parentId=g.id,o.type="recon",D.post("",Object(v.a)({},o)).then((function(e){s(e.data),w({}),x([].concat(Object(h.a)(j),[e.data]))}))},children:"Add Recon"}),(!R.a.isEmpty(g)||!R.a.isEmpty(E))&&Object(a.jsx)("div",{className:"contextMenu--remove",onClick:B,children:"Remove"}),Object(a.jsx)("div",{className:"contextMenu--cancel",onClick:function(){w({}),s({}),A(!1,{})},children:"Cancel"})]}),Object(a.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(a.jsx)("button",{onClick:U,children:" Clear Map "})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),z()},58:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.a5e125d0.chunk.js.map