(self.webpackChunkantd=self.webpackChunkantd||[]).push([[58863],{49313:function(p,x,n){"use strict";n.d(x,{Z:function(){return f},f:function(){return a}});var u=n(667294),a=u.createContext(!1);function f(){return u.useContext(a)}},902316:function(p,x,n){"use strict";n.d(x,{X:function(){return M}});var u=n(97857),a=n.n(u),f=n(667294),i=n(185209),o=n(65630),j=n(438199),c=n(785893),M=function(g){var b=g.children,W=g.style,N=g.disabled,B=g.onMouseMove,l=g.onMouseEnter,v=g.onMouseLeave,h=N?{}:{position:"relative",zIndex:1};return(0,c.jsx)("div",{className:"site-mask",style:a()(a()({position:"relative"},W),h),onMouseMove:B,onMouseEnter:l,onMouseLeave:v,children:b})},F=function(g){var b=g.id,W=g.title,N=g.titleColor,B=g.description,l=g.children,v=g.decoration,h=g.background,r=g.collapse,s=(0,o.Fg)(),d=(0,f.useContext)(j.Z),T=d.isMobile,e=r?{}:{maxWidth:1208,marginInline:"auto",boxSizing:"border-box",paddingInline:T?s.margin:s.marginXXL},t=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{style:{textAlign:"center"},children:[(0,c.jsx)(i.Z.Title,{id:b,level:1,style:{fontWeight:900,color:N,fontFamily:"AliPuHui, ".concat(s.fontFamily),fontSize:T?s.fontSizeHeading2:s.fontSizeHeading1},children:W}),(0,c.jsx)(i.Z.Paragraph,{style:{color:N,marginBottom:T?s.marginXXL:s.marginFarXS},children:B})]}),(0,c.jsx)("div",{style:e,children:l?(0,c.jsx)("div",{children:l}):(0,c.jsx)("div",{style:{borderRadius:s.borderRadiusLG,minHeight:300,background:"#e9e9e9"}})})]});return(0,c.jsxs)("div",{style:{position:"relative",background:h,transition:"all ".concat(s.motionDurationSlow)},children:[(0,c.jsx)("div",{style:{position:"absolute",inset:0},children:v}),(0,c.jsx)(M,{disabled:!!h,style:{paddingBlock:s.marginFarSM},children:t})]})};x.Z=F},759941:function(p,x,n){"use strict";n.r(x),n.d(x,{default:function(){return cn}});var u=n(805574),a=n.n(u),f=n(168400),i=n.n(f),o=n(667294),j=n(965516),c=n(773036),M=n(65630),F=n(49313),Z=n(302559),g=n(97857),b=n.n(g),W=n(185209),N=n(945016),B=n(988872),l=n(385956),v=n(438199),h=n(373638),r=n(902316),s=function(O,E,S,A){var m=E==null?void 0:E.getBoundingClientRect(),L=-(O.clientY-m.y-m.height/2)/S,D=(O.clientX-m.x-m.width/2)/S;return A?"rotate3d(".concat(24+L,", ").concat(83+D,", -45, 57deg)"):"rotate3d(".concat(24+L,", ").concat(-83+D,", 45, 57deg)")},d=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=O.transitionDuration,S=E===void 0?500:E,A=O.multiple,m=A===void 0?36:A,L=o.useState({}),D=a()(L,2),G=D[0],R=D[1],J=o.useContext(c.ZP.ConfigContext),H=J.direction,Y=H==="rtl",U=function(I){var Q=I.currentTarget;(0,o.startTransition)(function(){R(function(dn){return b()(b()({},dn),{},{transform:s(I,Q,m,Y)})})})},$=function(){(0,o.startTransition)(function(){R(function(I){return b()(b()({},I),{},{transition:"transform ".concat(S/1e3,"s")})})}),setTimeout(function(){(0,o.startTransition)(function(){R(function(I){return b()(b()({},I),{},{transition:""})})})},S)},V=function(){(0,o.startTransition)(function(){R(function(I){return b()(b()({},I),{},{transition:"transform ".concat(S/1e3,"s"),transform:""})})})};return[G,{onMouseMove:U,onMouseEnter:$,onMouseLeave:V}]},T=d,e=n(785893),t,y,P,z,C,w=o.lazy(function(){return Promise.all([n.e(15560),n.e(77226),n.e(29573),n.e(27211),n.e(59372),n.e(37934)]).then(n.bind(n,237934))}),q={cn:{slogan:"\u52A9\u529B\u8BBE\u8BA1\u5F00\u53D1\u8005\u300C\u66F4\u7075\u6D3B\u300D\u5730\u642D\u5EFA\u51FA\u300C\u66F4\u7F8E\u300D\u7684\u4EA7\u54C1\uFF0C\u8BA9\u7528\u6237\u300C\u5FEB\u4E50\u5DE5\u4F5C\u300D\uFF5E",start:"\u5F00\u59CB\u4F7F\u7528",designLanguage:"\u8BBE\u8BA1\u8BED\u8A00"},en:{slogan:"Help designers/developers building beautiful products more flexible and working with happiness",start:"Getting Started",designLanguage:"Design Language"}},_=function(){var O=o.useContext(c.ZP.ConfigContext),E=O.direction,S=E==="rtl";return(0,M.kc)(function(A){var m=A.token,L=A.css,D=A.cx,G="0 0 3px ".concat(m.colorBgContainer),R=D(L(t||(t=i()([`
      position: absolute;
      inset: 0;
      backdrop-filter: blur(4px);
      opacity: 1;
      transition: opacity 1s ease;
    `]))));return{holder:L(y||(y=i()([`
        height: 520px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        perspective: 800px;
        /* fix safari bug by removing blur style */
        transform: translateZ(1000px);
        row-gap: `,`px;

        &:hover .`,` {
          opacity: 0;
        }
      `])),m.marginXL,R),mask:R,typography:L(P||(P=i()([`
        text-align: center;
        position: relative;
        z-index: 1;
        padding-inline: `,`px;
        text-shadow: `,`;

        h1 {
          font-family: AliPuHui, `,` !important;
          font-weight: 900 !important;
          font-size: `,`px !important;
          line-height: `,` !important;
        }

        p {
          font-size: `,`px !important;
          font-weight: normal !important;
          margin-bottom: 0;
        }
      `])),m.paddingXL,new Array(5).fill(null).map(function(){return G}).join(", "),m.fontFamily,m.fontSizeHeading2*2,m.lineHeightHeading2,m.fontSizeLG),block:L(z||(z=i()([`
        position: absolute;
        inset-inline-end: 0;
        top: -38px;
        transform: `,`;
      `])),S?"rotate3d(24, 83, -45, 57deg)":"rotate3d(24, -83, 45, 57deg)"),child:L(C||(C=i()([`
        position: relative;
        z-index: 1;
      `])))}})()},nn=function(O){var E=O.children,S=(0,Z.Z)(q),A=a()(S,1),m=A[0],L=_(),D=L.styles,G=o.useContext(v.Z),R=G.isMobile,J=(0,M.Fg)(),H=(0,l.useLocation)(),Y=H.pathname,U=H.search,$=h.KE(Y),V=T(),K=a()(V,2),I=K[0],Q=K[1];return(0,e.jsxs)(r.X,b()(b()({},Q),{},{children:[(0,e.jsx)("img",{style:{position:"absolute",left:R?-120:0,top:0,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg",alt:"bg"}),(0,e.jsx)("img",{style:{position:"absolute",right:R?0:"40%",bottom:120,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg",alt:"bg"}),(0,e.jsxs)("div",{className:D.holder,children:[(0,e.jsx)(o.Suspense,{fallback:null,children:!R&&(0,e.jsx)(w,{className:D.block,style:I})}),(0,e.jsx)("div",{className:D.mask}),(0,e.jsxs)(W.Z,{className:D.typography,children:[(0,e.jsx)("h1",{children:"Ant Design 5.0"}),(0,e.jsx)("p",{children:m.slogan})]}),(0,e.jsxs)(N.Z,{size:"middle",style:{marginBottom:J.marginXL},children:[(0,e.jsx)(l.Link,{to:h.J1("/components/overview/",$,U),children:(0,e.jsx)(B.ZP,{size:"large",type:"primary",children:m.start})}),(0,e.jsx)(l.Link,{to:h.J1("/docs/spec/introduce/",$,U),children:(0,e.jsx)(B.ZP,{size:"large",children:m.designLanguage})})]}),(0,e.jsx)("div",{className:D.child,children:E})]})]}))},tn=nn,k,en=o.lazy(function(){return Promise.all([n.e(49941),n.e(77602),n.e(75387),n.e(7898),n.e(98313),n.e(50060),n.e(27211),n.e(39838),n.e(14137),n.e(35793)]).then(n.bind(n,235793))}),on=o.lazy(function(){return n.e(20332).then(n.bind(n,820332))}),rn=o.lazy(function(){return Promise.all([n.e(15560),n.e(77602),n.e(34318),n.e(6380),n.e(29573),n.e(69032)]).then(n.bind(n,169032))}),sn=(0,M.kc)(function(){return{image:(0,M.iv)(k||(k=i()([`
    position: absolute;
    left: 0;
    top: -50px;
    height: 160px;
  `])))}}),an={cn:{assetsTitle:"\u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982",assetsDesc:"\u5927\u91CF\u5B9E\u7528\u7EC4\u4EF6\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u7075\u6D3B\u5B9A\u5236\u4E0E\u62D3\u5C55",designTitle:"\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B6",designDesc:"\u914D\u5957\u751F\u6001\uFF0C\u8BA9\u4F60\u5FEB\u901F\u642D\u5EFA\u7F51\u7AD9\u5E94\u7528"},en:{assetsTitle:"Rich components",assetsDesc:"Practical components to meet your needs, flexible customization and expansion",designTitle:"Design and framework",designDesc:"Supporting ecology, allowing you to quickly build website applications"}},ln=function(){var O=(0,Z.Z)(an),E=a()(O,1),S=E[0],A=sn(),m=A.styles,L=j.Z.useToken(),D=L.token,G=(0,F.Z)();return(0,e.jsxs)("section",{children:[(0,e.jsx)(tn,{}),(0,e.jsxs)("div",{children:[(0,e.jsx)(c.ZP,{theme:{algorithm:j.Z.defaultAlgorithm},children:(0,e.jsx)(o.Suspense,{fallback:null,children:(0,e.jsx)(rn,{})})}),(0,e.jsx)(r.Z,{background:D.colorBgElevated,collapse:!0,title:S.assetsTitle,description:S.assetsDesc,id:"design",children:(0,e.jsx)(o.Suspense,{fallback:null,children:(0,e.jsx)(en,{})})}),(0,e.jsx)(r.Z,{title:S.designTitle,description:S.designDesc,background:G?"rgb(57, 63, 74)":"#F5F8FF",decoration:(0,e.jsx)("img",{className:m.image,src:"https://gw.alipayobjects.com/zos/bmw-prod/ba37a413-28e6-4be4-b1c5-01be1a0ebb1c.svg",alt:""}),children:(0,e.jsx)(o.Suspense,{fallback:null,children:(0,e.jsx)(on,{})})})]})]})},cn=ln},373638:function(p,x,n){"use strict";n.d(x,{J1:function(){return Z},Is:function(){return B},Fy:function(){return b},KE:function(){return F},qE:function(){return g}});var u=n(661227),a=n(805574),f=n(97857),i=n(385564),o=n(842348),j=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),c={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":j?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function M(l,v,h,r){var s=l.map(function(t){return t.meta}).filter(function(t){return!t.skip}),d=[],T=function(y,P){return(y.order||0)-(P.order||0)};s.sort(T).forEach(function(t){if(t.category&&(t.category=t.category[v]||t.category),t.type&&(t.type=t.type[v]||t.type),t!=null&&t.title&&(t.title=t.title[v]||t.title),!t.category){d.push(t);return}if(t.category==="Components"&&t.type){var y=d.find(function(C){return(C==null?void 0:C.title)===t.type});y||(y={type:"type",title:t.type,children:[],order:r[t.type]},d.push(y)),y.children=y.children||[],y.children.push(t);return}var P=d.find(function(C){return(C==null?void 0:C.title)===t.category});if(P||(P={type:"category",title:t.category,children:[],order:h[t.category]},d.push(P)),P.children=P.children||[],t.type){var z=P.children.filter(function(C){return(C==null?void 0:C.title)===t.type})[0];z||(z={type:"type",title:t.type,children:[],order:r[t.type]},P.children.push(z)),z.children=z.children||[],z.children.push(t)}else P.children.push(t)});function e(t){return t.sort(T).map(function(y){return y.children?_objectSpread(_objectSpread({},y),{},{children:e(y.children)}):y})}return e(d)}function F(l){return/-cn\/?$/.test(l)}function Z(l,v,h,r){var s=l.startsWith("/")?l:"/".concat(l),d;if(v?s==="/"?d="/index-cn":s.endsWith("/")?d=s.replace(/\/$/,"-cn/"):(d="".concat(s,"-cn"),d=d.replace(/(-cn)+/,"-cn")):d=/\/?index-cn/.test(s)?"/":s.replace("-cn",""),r){var T=r[v?"zhCN":"enUS"];d+="#".concat(T)}return{pathname:d,search:h}}function g(l){var v="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",h=new Image,r,s=function(T){r||(r=!0,h.src="",l(T))};return h.onload=function(){return s("responded")},h.onerror=function(){return s("error")},h.src=v,setTimeout(function(){return s("timeout")},1500)}function b(){var l="test",v=window.localStorage;try{return v.setItem(l,"1"),v.removeItem(l),!0}catch(h){return!1}}function W(l){return new Promise(function(v,h){var r=document.createElement("script");r.type="text/javascript",r.src=l,r.onload=v,r.onerror=h,document.head.appendChild(r)})}function N(l){var v=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(l))return"";var h=flattenDeep(l.filter(function(r){if(Array.isArray(r)){var s=_slicedToArray(r,1),d=s[0];return d==="p"}return!1}).map(function(r){var s=flatten(r),d=_toArray(s),T=d[0],e=d.slice(1),t=e.filter(function(y){return typeof y=="string"&&!v.includes(y)}).join("");return[T,t]})).find(function(r){return r&&typeof r=="string"&&!v.includes(r)});return h}var B=function(){return c}},862488:function(p){function x(n,u){for(var a=-1,f=u.length,i=n.length;++a<f;)n[i+a]=u[a];return n}p.exports=x},121078:function(p,x,n){var u=n(862488),a=n(137285);function f(i,o,j,c,M){var F=-1,Z=i.length;for(j||(j=a),M||(M=[]);++F<Z;){var g=i[F];o>0&&j(g)?o>1?f(g,o-1,j,c,M):u(M,g):c||(M[M.length]=g)}return M}p.exports=f},909454:function(p,x,n){var u=n(644239),a=n(637005),f="[object Arguments]";function i(o){return a(o)&&u(o)==f}p.exports=i},137285:function(p,x,n){var u=n(562705),a=n(135694),f=n(701469),i=u?u.isConcatSpreadable:void 0;function o(j){return f(j)||a(j)||!!(i&&j&&j[i])}p.exports=o},385564:function(p,x,n){var u=n(121078);function a(f){var i=f==null?0:f.length;return i?u(f,1):[]}p.exports=a},842348:function(p,x,n){var u=n(121078),a=1/0;function f(i){var o=i==null?0:i.length;return o?u(i,a):[]}p.exports=f},135694:function(p,x,n){var u=n(909454),a=n(637005),f=Object.prototype,i=f.hasOwnProperty,o=f.propertyIsEnumerable,j=u(function(){return arguments}())?u:function(c){return a(c)&&i.call(c,"callee")&&!o.call(c,"callee")};p.exports=j},701469:function(p){var x=Array.isArray;p.exports=x}}]);
