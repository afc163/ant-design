"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[29878],{181632:function(p,s,t){t.d(s,{Z:function(){return Y}});var g=t(9783),r=t.n(g),e=t(805574),n=t.n(e),d=t(97857),i=t.n(d),f=t(513769),E=t.n(f),c=t(667294),b=t(777602),P=t(294184),m=t.n(P),M=t(73287),W=t(548073),_=t(141035),I=t(986943),T=function(o){var a,v=o.componentCls,u=o.antCls,h=o.carouselArrowSize,A=o.carouselDotOffset,D=o.marginXXS,S=-h*1.25,j=D;return r()({},v,i()(i()({},(0,W.Wf)(o)),{},{".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":(a={pointerEvents:"none"},r()(a,"input".concat(u,"-radio-input, input").concat(u,"-checkbox-input"),{visibility:"hidden"}),r()(a,"&.slick-active",r()({pointerEvents:"auto"},"input".concat(u,"-radio-input, input").concat(u,"-checkbox-input"),{visibility:"visible"})),r()(a,"> div > div",{verticalAlign:"bottom"}),a)},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"},".slick-arrow.slick-hidden":{display:"none"},".slick-prev, .slick-next":{position:"absolute",top:"50%",display:"block",width:h,height:h,marginTop:-h/2,padding:0,color:"transparent",fontSize:0,lineHeight:0,background:"transparent",border:0,outline:"none",cursor:"pointer","&:hover, &:focus":{color:"transparent",background:"transparent",outline:"none","&::before":{opacity:1}},"&.slick-disabled::before":{opacity:.25}},".slick-prev":{insetInlineStart:S,"&::before":{content:'"\u2190"'}},".slick-next":{insetInlineEnd:S,"&::before":{content:'"\u2192"'}},".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,margin:0,listStyle:"none","&-bottom":{bottom:A},"&-top":{top:A,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:o.dotWidth,height:o.dotHeight,marginInline:j,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:"all ".concat(o.motionDurationSlow),button:{position:"relative",display:"block",width:"100%",height:o.dotHeight,padding:0,color:"transparent",fontSize:0,background:o.colorBgContainer,border:0,borderRadius:1,outline:"none",cursor:"pointer",opacity:.3,transition:"all ".concat(o.motionDurationSlow),"&: hover, &:focus":{opacity:.75},"&::after":{position:"absolute",inset:-j,content:'""'}},"&.slick-active":{width:o.dotActiveWidth,"& button":{background:o.colorBgContainer,opacity:1},"&: hover, &:focus":{opacity:1}}}}}))},X=function(o){var a=o.componentCls,v=o.carouselDotOffset,u=o.marginXXS,h={width:o.dotHeight,height:o.dotWidth};return r()({},"".concat(a,"-vertical"),{".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:o.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-left":{insetInlineEnd:"auto",insetInlineStart:v},"&-right":{insetInlineEnd:v,insetInlineStart:"auto"},li:i()(i()({},h),{},{margin:"".concat(u,"px 0"),verticalAlign:"baseline",button:h,"&.slick-active":i()(i()({},h),{},{button:h})})}})},$=function(o){var a=o.componentCls;return[r()({},"".concat(a,"-rtl"),{direction:"rtl",".slick-dots":r()({},"".concat(a,"-rtl&"),{flexDirection:"row-reverse"})}),r()({},"".concat(a,"-vertical"),{".slick-dots":r()({},"".concat(a,"-rtl&"),{flexDirection:"column"})})]},F=(0,_.Z)("Carousel",function(l){var o=l.controlHeightLG,a=l.controlHeightSM,v=(0,I.TS)(l,{carouselArrowSize:o/2,carouselDotOffset:a/2});return[T(v),X(v),$(v)]},function(){var l=24;return{dotWidth:16,dotHeight:3,dotWidthActive:l,dotActiveWidth:l}},{deprecatedTokens:[["dotWidthActive","dotActiveWidth"]]}),L=t(785893),G=["dots","arrows","draggable","waitForAnimate","dotPosition","vertical","rootClassName","className","style","id"],V=c.forwardRef(function(l,o){var a,v=l.dots,u=v===void 0?!0:v,h=l.arrows,A=h===void 0?!1:h,D=l.draggable,S=D===void 0?!1:D,j=l.waitForAnimate,J=j===void 0?!1:j,H=l.dotPosition,R=H===void 0?"bottom":H,K=l.vertical,U=K===void 0?R==="left"||R==="right":K,Q=l.rootClassName,w=l.className,q=l.style,tt=l.id,et=E()(l,G),B=c.useContext(M.E_),nt=B.getPrefixCls,it=B.direction,y=B.carousel,x=c.useRef(),Z=function(ct){var ut=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;x.current.slickGoTo(ct,ut)};c.useImperativeHandle(o,function(){return{goTo:Z,autoPlay:x.current.innerSlider.autoPlay,innerSlider:x.current.innerSlider,prev:x.current.slickPrev,next:x.current.slickNext}},[x.current]);var N=c.useRef(c.Children.count(l.children));c.useEffect(function(){N.current!==c.Children.count(l.children)&&(Z(l.initialSlide||0,!1),N.current=c.Children.count(l.children))},[l.children]);var C=i()({vertical:U,className:m()(w,y==null?void 0:y.className),style:i()(i()({},y==null?void 0:y.style),q)},et);C.effect==="fade"&&(C.fade=!0);var O=nt("carousel",C.prefixCls),z="slick-dots",ot=!!u,lt=m()(z,"".concat(z,"-").concat(R),typeof u=="boolean"?!1:u==null?void 0:u.className),rt=F(O),k=n()(rt,2),at=k[0],st=k[1],dt=m()(O,(a={},r()(a,"".concat(O,"-rtl"),it==="rtl"),r()(a,"".concat(O,"-vertical"),C.vertical),a),st,Q);return at((0,L.jsx)("div",{className:dt,id:tt,children:(0,L.jsx)(b.Z,i()(i()({ref:x},C),{},{dots:ot,dotsClass:lt,arrows:A,draggable:S,verticalSwiping:U,waitForAnimate:J}))}))}),Y=V},161672:function(p,s,t){t.r(s);var g=t(667294),r=t(181632),e=t(785893),n={height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},d=function(){return(0,e.jsxs)(r.Z,{autoplay:!0,children:[(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"1"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"2"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"3"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"4"})})]})};s.default=d},57037:function(p,s,t){t.r(s);var g=t(667294),r=t(181632),e=t(785893),n={margin:0,height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},d=function(){var f=function(c){console.log(c)};return(0,e.jsxs)(r.Z,{afterChange:f,children:[(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"1"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"2"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"3"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"4"})})]})};s.default=d},233741:function(p,s,t){t.r(s);var g=t(667294),r=t(773036),e=t(181632),n=t(785893),d={margin:0,height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"};s.default=function(){return(0,n.jsx)(r.ZP,{theme:{components:{Carousel:{dotWidth:50,dotHeight:50,dotActiveWidth:80}}},children:(0,n.jsxs)(e.Z,{children:[(0,n.jsx)("div",{children:(0,n.jsx)("h3",{style:d,children:"1"})}),(0,n.jsx)("div",{children:(0,n.jsx)("h3",{style:d,children:"2"})}),(0,n.jsx)("div",{children:(0,n.jsx)("h3",{style:d,children:"3"})}),(0,n.jsx)("div",{children:(0,n.jsx)("h3",{style:d,children:"4"})})]})})}},321871:function(p,s,t){t.r(s);var g=t(667294),r=t(181632),e=t(785893),n={height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},d=function(){return(0,e.jsxs)(r.Z,{effect:"fade",children:[(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"1"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"2"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"3"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:n,children:"4"})})]})};s.default=d},520181:function(p,s,t){t.r(s);var g=t(805574),r=t.n(g),e=t(667294),n=t(371707),d=t(181632),i=t(785893),f={height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},E=function(){var b=(0,e.useState)("top"),P=r()(b,2),m=P[0],M=P[1],W=function(I){var T=I.target.value;M(T)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ZP.Group,{onChange:W,value:m,style:{marginBottom:8},children:[(0,i.jsx)(n.ZP.Button,{value:"top",children:"Top"}),(0,i.jsx)(n.ZP.Button,{value:"bottom",children:"Bottom"}),(0,i.jsx)(n.ZP.Button,{value:"left",children:"Left"}),(0,i.jsx)(n.ZP.Button,{value:"right",children:"Right"})]}),(0,i.jsxs)(d.Z,{dotPosition:m,children:[(0,i.jsx)("div",{children:(0,i.jsx)("h3",{style:f,children:"1"})}),(0,i.jsx)("div",{children:(0,i.jsx)("h3",{style:f,children:"2"})}),(0,i.jsx)("div",{children:(0,i.jsx)("h3",{style:f,children:"3"})}),(0,i.jsx)("div",{children:(0,i.jsx)("h3",{style:f,children:"4"})})]})]})};s.default=E}}]);
