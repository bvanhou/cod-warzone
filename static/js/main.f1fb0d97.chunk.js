(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n(6),c=n.n(o),i=n(51),s=n.n(i),r=(n(58),n(52)),l=n(19),u=n.n(l),d=n(28),h=n(29),v=n(30),f=n(17),p=n(9),j=n(12),b=n(13),g=n(15),x=n(14),m=(n(104),function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={image:null},e.handleLoad=function(){var t=window.innerWidth,n=window.innerHeight,a=t/n,o=e.image.outerWidth/e.image.outerHeight;if(console.log(a,o),a>=o){console.log(2);var c=t*(i=(s=e.image.outerHeight)/n);console.log(a)}else{console.log(3);var i,s=n*(i=(c=e.image.offsetWidth)/t);console.log(i),console.log(c),console.log(s)}var r=c+"px "+s+"px";console.log("scale: "+i+", width: "+c+", height: "+s+", cover property: "+r),e.image.style.width=c,e.image.style.height=s,e.image.style.scale=i,e.setState({image:e.image})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.loadImage()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&this.loadImage()}},{key:"componentWillUnmount",value:function(){this.image.removeEventListener("load",this.handleLoad)}},{key:"loadImage",value:function(){this.image=new window.Image,this.image.src=this.props.src,this.image.addEventListener("load",this.handleLoad),console.log(this.image)}},{key:"render",value:function(){var e=this;return Object(a.jsx)(p.Image,{x:this.props.x,y:this.props.y,image:this.state.image,ref:function(t){e.imageNode=t}})}}]),n}(c.a.Component)),y=n(10),O=window.innerWidth,w=window.innerHeight,M=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(y.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(y.a)(a)),a}return Object(b.a)(n,[{key:"handleClick",value:function(e){this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=(this.state.isMouseInside,this.props.coordinates);return Object(a.jsx)(a.Fragment,{children:t.map((function(t,n){var o=O*t.x/100,c=w*t.y/100;return Object(a.jsx)(p.Circle,{id:"contract-".concat(n),x:o,y:c,radius:5,fill:"yellow",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(c.a.Component),k=window.innerWidth,C=window.innerHeight,E=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(y.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(y.a)(a)),a}return Object(b.a)(n,[{key:"handleClick",value:function(e){this.props.setRecon(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(t,n){var o=k*t.x/100,c=C*t.y/100;return Object(a.jsx)(p.Circle,{id:"recon-".concat(n),x:o,y:c,radius:5,fill:"blue",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(c.a.Component),L=n(53),I=n.n(L),S=n(16),W=n.n(S),N=n.p+"static/media/map-overview-bg.ccfc7476.jpg",R=(n(122),I.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var D=function(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(o.useState)([]),c=Object(f.a)(n,2),i=c[0],s=c[1],l=Object(o.useState)([]),j=Object(f.a)(l,2),b=j[0],g=j[1],x=Object(o.useState)({}),y=Object(f.a)(x,2),O=y[0],w=y[1],k=Object(o.useState)({}),C=Object(f.a)(k,2),L=C[0],I=C[1],S=Object(o.useState)(!0),D=Object(f.a)(S,2),F=(D[0],D[1],window.innerWidth),H=window.innerHeight,z=function(e,t,n){var a=e.current,o={w:F,h:H};console.log(o);var c={x:0,y:0},i={x:0,y:0},s={x:0,y:0},r=1;function l(l){console.log(l);var u=e.offset();s.x=l.pageX-u.left,s.y=l.pageY-u.top,l.preventDefault();var d=l.delta||l.originalEvent.wheelDelta;void 0===d&&(d=l.originalEvent.detail),d=Math.max(-1,Math.min(1,d)),i.x=(s.x-c.x)/r,i.y=(s.y-c.y)/r,r+=d*n*r,r=Math.max(1,Math.min(t,r)),c.x=-i.x*r+s.x,c.y=-i.y*r+s.y,c.x>0&&(c.x=0),c.x+o.w*r<o.w&&(c.x=-o.w*(r-1)),c.y>0&&(c.y=0),c.y+o.h*r<o.h&&(c.y=-o.h*(r-1)),a.css("transform","translate("+c.x+"px,"+c.y+"px) scale("+r+","+r+")")}a.style.transformOrigin="0 0",a.addEventListener?(a.addEventListener("mousewheel",l,!1),a.addEventListener("DOMMouseScroll",l,!1)):a.attachEvent("onmousewheel",l)},A=function(t,n){console.log("Show Menu: ".concat(t));var a=F*n.x/100+10,o=H*n.y/100+10,c=e.current;c.style.visibility=t?"visible":"hidden",c.style.left="".concat(a,"px"),c.style.top="".concat(o,"px")},B=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=b.filter((function(e){return e.x!==i.x&&e.y!==i.y})),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=b.length,n=Object(r.a)(b),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=12;break}if(!(o=a.value).id){e.next=9;break}return e.next=9,R.delete("".concat(o.id));case 9:--t||g([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){R.get().then((function(e){console.log(e.data),g(e.data);new z(t,4,.5)}))}),[]),Object(a.jsxs)("main",{id:"container",className:"App-main",children:[Object(a.jsx)(p.Stage,{width:F,height:H,onClick:function(e){e=e.evt?e.evt:e;var t={x:100/(F/e.clientX),y:100/(H/e.clientY)};console.log("clicking"),A(!0,t),s(t)},children:Object(a.jsxs)(p.Layer,{children:[Object(a.jsx)(m,{src:N,alt:"logo",x:0,y:0}),(W.a.isEmpty(O),Object(a.jsx)(M,{coordinates:b.filter((function(e){return"contract"===e.type})),setContract:w})),Object(a.jsx)(E,{coordinates:b.filter((function(e){return"recon"===e.type&&e.parentId===O.id})),setRecon:I})]})}),Object(a.jsxs)("div",{ref:e,id:"contextMenu",children:[W.a.isEmpty(O)&&Object(a.jsx)("div",{className:"contextMenu--contract",onClick:function(){i.type="contract",R.post("",Object(v.a)({},i)).then((function(e){s(e.data),w(e.data),g([].concat(Object(h.a)(b),[e.data]))}))},children:"Create Contract"}),!W.a.isEmpty(O)&&Object(a.jsx)("div",{className:"contextMenu--recon",onClick:function(e){i.parentId=O.id,i.type="recon",R.post("",Object(v.a)({},i)).then((function(e){s(e.data),w({}),g([].concat(Object(h.a)(b),[e.data]))}))},children:"Add Recon"}),(!W.a.isEmpty(O)||!W.a.isEmpty(L))&&Object(a.jsx)("div",{className:"contextMenu--remove",onClick:B,children:"Remove"}),Object(a.jsx)("div",{className:"contextMenu--cancel",onClick:function(){w({}),s({}),A(!1,{})},children:"Cancel"})]}),Object(a.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(a.jsx)("button",{onClick:U,children:" Clear Map "})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),F()},58:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.f1fb0d97.chunk.js.map