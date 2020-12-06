(this["webpackJsonpcod-warzone"]=this["webpackJsonpcod-warzone"]||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(6),i=n.n(c),o=n(51),s=n.n(o),r=(n(59),n(52)),u=n(19),l=n.n(u),d=n(28),h=n(29),j=n(30),b=n(11),p=n(9),v=n(53),f=n(13),g=n(14),O=n(16),x=n(15),m=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={image:null},e.handleLoad=function(){e.setState({image:e.image})},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.loadImage()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&this.loadImage()}},{key:"componentWillUnmount",value:function(){this.image.removeEventListener("load",this.handleLoad)}},{key:"loadImage",value:function(){this.image=new window.Image,this.image.src=this.props.src,this.image.addEventListener("load",this.handleLoad),console.log(this.image)}},{key:"render",value:function(){var e=this;return Object(a.jsx)(p.Image,{x:this.props.x,y:this.props.y,width:this.props.width,height:this.props.height,image:this.state.image,ref:function(t){e.imageNode=t}})}}]),n}(i.a.Component),y=n(10),k=window.innerWidth,M=window.innerHeight,w=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(y.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(y.a)(a)),a}return Object(g.a)(n,[{key:"handleClick",value:function(e){this.props.setContract(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this,t=(this.state.isMouseInside,this.props.coordinates);return Object(a.jsx)(a.Fragment,{children:t.map((function(t,n){var c=k*t.x/100,i=M*t.y/100;return Object(a.jsx)(p.Circle,{id:"contract-".concat(n),x:c,y:i,radius:5,fill:"yellow",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(i.a.Component),C=window.innerWidth,S=window.innerHeight,E=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={isMouseInside:!1},a.handleMouseEnter=a.handleMouseEnter.bind(Object(y.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(y.a)(a)),a}return Object(g.a)(n,[{key:"handleClick",value:function(e){this.props.setRecon(e)}},{key:"handleMouseEnter",value:function(){this.setState({isMouseInside:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isMouseInside:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.coordinates.map((function(t,n){var c=C*t.x/100,i=S*t.y/100;return Object(a.jsx)(p.Circle,{id:"recon-".concat(n),x:c,y:i,radius:5,fill:"blue",stroke:"black",strokeWidth:1,onClick:function(){return e.handleClick(t)},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})}))})}}]),n}(i.a.Component),L=n(54),I=n.n(L),P=n(17),N=n.n(P),W=n.p+"static/media/map-overview-bg.ccfc7476.jpg",F=(n(122),I.a.create({baseURL:"https://3lg34173h3.execute-api.us-east-1.amazonaws.com/dev/recon"}));var R=function(){var e=this,t=Object(c.useRef)(null),n=Object(c.useState)([]),i=Object(b.a)(n,2),o=i[0],s=i[1],u=Object(c.useState)([]),f=Object(b.a)(u,2),g=f[0],O=f[1],x=Object(c.useState)({}),y=Object(b.a)(x,2),k=y[0],M=y[1],C=Object(c.useState)({}),S=Object(b.a)(C,2),L=S[0],I=S[1],P=Object(c.useState)(!0),R=Object(b.a)(P,2),X=(R[0],R[1],Object(c.useState)({stageScale:1,stageX:0,stageY:0})),Y=Object(b.a)(X,2),z=Y[0],D=(Y[1],window.innerWidth),A=window.innerHeight,B=Object(v.cover)(D,A,1920,1080),H=B.width,U=B.height,J=B.x,T=B.y,q=function(e,n){console.log("Show Menu: ".concat(e));var a=D*n.x/100+10,c=A*n.y/100+10,i=t.current;i.style.visibility=e?"visible":"hidden",i.style.left="".concat(a,"px"),i.style.top="".concat(c,"px")},G=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=g.filter((function(e){return e.x!==o.x&&e.y!==o.y})),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=g.length,n=Object(r.a)(g),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=12;break}if(!(c=a.value).id){e.next=9;break}return e.next=9,F.delete("".concat(c.id));case 9:--t||O([]);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){F.get().then((function(e){console.log(e.data),O(e.data)}))}),[]),Object(a.jsxs)("main",{id:"container",className:"App-main",children:[Object(a.jsx)(p.Stage,{width:D,height:A,onClick:function(e){e=e.evt?e.evt:e;var t={x:100/(D/e.clientX),y:100/(A/e.clientY)};console.log("clicking"),q(!0,t),s(t)},onWheel:function(t){t.evt.preventDefault();var n=t.target.getStage(),a=n.scaleX(),c=n.getPointerPosition().x/a-n.x()/a,i=n.getPointerPosition().y/a-n.y()/a,o=t.evt.deltaY>0?1.02*a:a/1.02;e.setStageState({stageScale:o,stageX:-(c-n.getPointerPosition().x/o)*o,stageY:-(i-n.getPointerPosition().y/o)*o})},scaleX:z.stageScale,scaleY:z.stageScale,x:z.stageX,y:z.stageY,children:Object(a.jsxs)(p.Layer,{children:[Object(a.jsx)(m,{src:W,alt:"logo",x:J,y:T,width:H,height:U}),(N.a.isEmpty(k),Object(a.jsx)(w,{coordinates:g.filter((function(e){return"contract"===e.type})),setContract:M})),Object(a.jsx)(E,{coordinates:g.filter((function(e){return"recon"===e.type&&e.parentId===k.id})),setRecon:I})]})}),Object(a.jsxs)("div",{ref:t,id:"contextMenu",children:[N.a.isEmpty(k)&&Object(a.jsx)("div",{className:"contextMenu--contract",onClick:function(){o.type="contract",F.post("",Object(j.a)({},o)).then((function(e){s(e.data),M(e.data),O([].concat(Object(h.a)(g),[e.data]))}))},children:"Create Contract"}),!N.a.isEmpty(k)&&Object(a.jsx)("div",{className:"contextMenu--recon",onClick:function(e){o.parentId=k.id,o.type="recon",F.post("",Object(j.a)({},o)).then((function(e){s(e.data),M({}),O([].concat(Object(h.a)(g),[e.data]))}))},children:"Add Recon"}),(!N.a.isEmpty(k)||!N.a.isEmpty(L))&&Object(a.jsx)("div",{className:"contextMenu--remove",onClick:G,children:"Remove"}),Object(a.jsx)("div",{className:"contextMenu--cancel",onClick:function(){M({}),s({}),q(!1,{})},children:"Cancel"})]}),Object(a.jsx)("div",{className:"clearButton",style:{zIndex:1e3},children:Object(a.jsx)("button",{onClick:K,children:" Clear Map "})})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),X()},59:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.62db941c.chunk.js.map