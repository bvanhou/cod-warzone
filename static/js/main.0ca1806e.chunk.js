(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(6),i=n.n(c),o=n(52),s=n.n(o),r=(n(59),n(53)),l=n(19),u=n.n(l),d=n(28),h=n(30),v=n(31),f=n(17),j=n(9),b=n(12),p=n(13),x=n(15),y=n(14),O=n(29),m=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={image:null},e.handleLoad=function(){e.setState({image:e.image})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.loadImage()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&this.loadImage()}},{key:"componentWillUnmount",value:function(){this.image.removeEventListener("load",this.handleLoad)}},{key:"loadImage",value:function(){this.image=new window.Image,this.image.src=this.props.src,this.image.addEventListener("load",this.handleLoad),console.log(this.image)}},{key:"render",value:function(){var e=this,t=window.innerWidth,n=window.innerHeight,c=Object(O.cover)(t,n,0,0),i=c.width,o=c.height,s=Object(O.cover)(100,200,50,50),r=s.width,l=s.height;return console.log(t,n),console.log(i,o),console.log(r,l),Object(a.jsx)(j.Image,{x:this.props.x,y:this.props.y,width:i,height:o,image:this.state.image,ref:function(t){e.imageNode=t}})}}]),n}(i.a.Component),g=n(10),w=window.innerWidth,M=window.innerHeight,k=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(g.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(g.a)(a)),a}return Object(p.a)(n,[{key:"handleClick",value:function(e){this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=(this.state.isMouseInside,this.props.coordinates);return Object(a.jsx)(a.Fragment,{children:t.map((function(t,n){var c=w*t.x/100,i=M*t.y/100;return Object(a.jsx)(j.Circle,{id:"contract-".concat(n),x:c,y:i,radius:5,fill:"yellow",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(i.a.Component),C=window.innerWidth,E=window.innerHeight,L=function(e){Object(x.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(g.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(g.a)(a)),a}return Object(p.a)(n,[{key:"handleClick",value:function(e){this.props.setRecon(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(t,n){var c=C*t.x/100,i=E*t.y/100;return Object(a.jsx)(j.Circle,{id:"recon-".concat(n),x:c,y:i,radius:5,fill:"blue",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(i.a.Component),I=n(54),S=n.n(I),N=n(16),R=n.n(N),W=n.p+"static/media/map-overview-bg.ccfc7476.jpg",D=(n(122),S.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var F=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useState)([]),i=Object(f.a)(n,2),o=i[0],s=i[1],l=Object(c.useState)([]),b=Object(f.a)(l,2),p=b[0],x=b[1],y=Object(c.useState)({}),O=Object(f.a)(y,2),g=O[0],w=O[1],M=Object(c.useState)({}),C=Object(f.a)(M,2),E=C[0],I=C[1],S=Object(c.useState)(!0),N=Object(f.a)(S,2),F=(N[0],N[1],window.innerWidth),z=window.innerHeight,H=function(e,t,n){var a=e.current,c={w:F,h:z};console.log(c);var i={x:0,y:0},o={x:0,y:0},s={x:0,y:0},r=1;function l(l){console.log(l);var u=e.offset();s.x=l.pageX-u.left,s.y=l.pageY-u.top,l.preventDefault();var d=l.delta||l.originalEvent.wheelDelta;void 0===d&&(d=l.originalEvent.detail),d=Math.max(-1,Math.min(1,d)),o.x=(s.x-i.x)/r,o.y=(s.y-i.y)/r,r+=d*n*r,r=Math.max(1,Math.min(t,r)),i.x=-o.x*r+s.x,i.y=-o.y*r+s.y,i.x>0&&(i.x=0),i.x+c.w*r<c.w&&(i.x=-c.w*(r-1)),i.y>0&&(i.y=0),i.y+c.h*r<c.h&&(i.y=-c.h*(r-1)),a.css("transform","translate("+i.x+"px,"+i.y+"px) scale("+r+","+r+")")}a.style.transformOrigin="0 0",a.addEventListener?(a.addEventListener("mousewheel",l,!1),a.addEventListener("DOMMouseScroll",l,!1)):a.attachEvent("onmousewheel",l)},A=function(t,n){console.log("Show Menu: ".concat(t));var a=F*n.x/100+10,c=z*n.y/100+10,i=e.current;i.style.visibility=t?"visible":"hidden",i.style.left="".concat(a,"px"),i.style.top="".concat(c,"px")},B=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=p.filter((function(e){return e.x!==o.x&&e.y!==o.y})),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=p.length,n=Object(r.a)(p),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=12;break}if(!(c=a.value).id){e.next=9;break}return e.next=9,D.delete("".concat(c.id));case 9:--t||x([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){D.get().then((function(e){console.log(e.data),x(e.data);new H(t,4,.5)}))}),[]),Object(a.jsxs)("main",{id:"container",className:"App-main",children:[Object(a.jsx)(j.Stage,{width:F,height:z,onClick:function(e){e=e.evt?e.evt:e;var t={x:100/(F/e.clientX),y:100/(z/e.clientY)};console.log("clicking"),A(!0,t),s(t)},children:Object(a.jsxs)(j.Layer,{children:[Object(a.jsx)(m,{src:W,alt:"logo",x:0,y:0}),(R.a.isEmpty(g),Object(a.jsx)(k,{coordinates:p.filter((function(e){return"contract"===e.type})),setContract:w})),Object(a.jsx)(L,{coordinates:p.filter((function(e){return"recon"===e.type&&e.parentId===g.id})),setRecon:I})]})}),Object(a.jsxs)("div",{ref:e,id:"contextMenu",children:[R.a.isEmpty(g)&&Object(a.jsx)("div",{className:"contextMenu--contract",onClick:function(){o.type="contract",D.post("",Object(v.a)({},o)).then((function(e){s(e.data),w(e.data),x([].concat(Object(h.a)(p),[e.data]))}))},children:"Create Contract"}),!R.a.isEmpty(g)&&Object(a.jsx)("div",{className:"contextMenu--recon",onClick:function(e){o.parentId=g.id,o.type="recon",D.post("",Object(v.a)({},o)).then((function(e){s(e.data),w({}),x([].concat(Object(h.a)(p),[e.data]))}))},children:"Add Recon"}),(!R.a.isEmpty(g)||!R.a.isEmpty(E))&&Object(a.jsx)("div",{className:"contextMenu--remove",onClick:B,children:"Remove"}),Object(a.jsx)("div",{className:"contextMenu--cancel",onClick:function(){w({}),s({}),A(!1,{})},children:"Cancel"})]}),Object(a.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(a.jsx)("button",{onClick:U,children:" Clear Map "})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),z()},59:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.0ca1806e.chunk.js.map