"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[20332],{820332:function(F,v,e){e.r(v),e.d(v,{default:function(){return Z}});var T=e(805574),k=e.n(T),C=e(168400),h=e.n(C),f=e(667294),R=e(664095),D=e(883458),l=e(185209),E=e(65630),M=e(385956),I=e(49313),B=e(302559),K=e(438199),_=e(373638),n=e(785893),y,O,S=[{img:"https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",key:"mobile",url:"https://mobile.ant.design/",imgScale:1.5},{img:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",key:"antv",url:"https://antv.vision/"},{img:"https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg",key:"kitchen",url:"https://kitchen.alipay.com/"}],U={cn:{values:"\u8BBE\u8BA1\u4EF7\u503C\u89C2",valuesDesc:"\u786E\u5B9A\u6027\u3001\u610F\u4E49\u611F\u3001\u751F\u957F\u6027\u3001\u81EA\u7136",guide:"\u8BBE\u8BA1\u6307\u5F15",guideDesc:"\u5168\u5C40\u6837\u5F0F\u3001\u8BBE\u8BA1\u6A21\u5F0F",lib:"\u7EC4\u4EF6\u5E93",libDesc:"Ant Design of React / Angular / Vue",mobile:"Ant Design Mobile",mobileDesc:"Ant Design \u79FB\u52A8\u7AEF UI \u7EC4\u4EF6\u5E93",antv:"AntV",antvDesc:"\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848",kitchen:"Kitchen",kitchenDesc:"\u4E00\u6B3E\u4E3A\u8BBE\u8BA1\u8005\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\u7684 Sketch \u5DE5\u5177\u96C6"},en:{values:"Design values",valuesDesc:"Certainty, Meaningfulness, Growth, Naturalness",guide:"Design guide",guideDesc:"Global style and design pattern",lib:"Components Libraries",libDesc:"Ant Design of React / Angular / Vue",mobile:"Ant Design Mobile",mobileDesc:"Mobile UI component library",antv:"AntV",antvDesc:"New generation of data visualization solutions",kitchen:"Kitchen",kitchenDesc:"Sketch Tool set for designers"}},W=function(){var i=(0,I.Z)();return(0,E.kc)(function(t){var a=t.token,d=t.css;return{card:d(y||(y=h()([`
      padding: `,`px;
      border-radius: `,`px;
      background: `,`;
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.03),
        0 1px 6px -1px rgba(0, 0, 0, 0.02),
        0 2px 4px rgba(0, 0, 0, 0.02);

      img {
        width: 100%;
        vertical-align: top;
        border-radius: `,`px;
      }
    `])),a.paddingSM,a.borderRadius*2,i?"rgba(0,0,0,0.45)":a.colorBgElevated,a.borderRadius),cardMini:d(O||(O=h()([`
      display: block;
      border-radius: `,`px;
      padding: `,"px ",`px;
      background: `,`;
      border: 1px solid `,`;

      img {
        height: 48px;
      }
    `])),a.borderRadius*2,a.paddingMD,a.paddingLG,i?"rgba(0,0,0,0.25)":"rgba(0, 0, 0, 0.02)",i?"rgba(255,255,255, 0.45)":"rgba(0, 0, 0, 0.06)")}})()};function Z(){var P=(0,B.Z)(U),i=k()(P,1),t=i[0],a=(0,E.Fg)(),d=W(),x=d.styles,L=(0,M.useLocation)(),N=L.pathname,c=L.search,g=_.KE(N),z=(0,f.useContext)(K.Z),w=z.isMobile,j=w?24:8,V=[{img:"https://gw.alipayobjects.com/zos/bmw-prod/36a89a46-4224-46e2-b838-00817f5eb364.svg",key:"values",path:_.J1("/docs/spec/values/",g,c)},{img:"https://gw.alipayobjects.com/zos/bmw-prod/8379430b-e328-428e-8a67-666d1dd47f7d.svg",key:"guide",path:_.J1("/docs/spec/colors/",g,c)},{img:"https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg",key:"lib",path:_.J1("/docs/react/introduce/",g,c)}];return(0,n.jsxs)(R.Z,{gutter:[a.marginXL,a.marginXL],children:[V.map(function(s,m){var u=s.img,r=s.key,b=s.path,o=t[r],p=t["".concat(r,"Desc")];return(0,n.jsx)(D.Z,{span:j,children:(0,n.jsx)(M.Link,{to:b,children:(0,n.jsxs)("div",{className:x.card,children:[(0,n.jsx)("img",{alt:o,src:u}),(0,n.jsx)(l.Z.Title,{level:4,style:{marginTop:a.margin,marginBottom:a.marginXS},children:o}),(0,n.jsx)(l.Z.Paragraph,{type:"secondary",style:{margin:0},children:p})]})})},m)}),S.map(function(s,m){var u=s.img,r=s.key,b=s.url,o=s.imgScale,p=o===void 0?1:o,A=t[r],X=t["".concat(r,"Desc")];return(0,n.jsx)(D.Z,{span:j,children:(0,n.jsxs)("a",{className:x.cardMini,target:"_blank",href:b,rel:"noreferrer",children:[(0,n.jsx)("img",{alt:A,src:u,style:{transform:"scale(".concat(p,")")}}),(0,n.jsx)(l.Z.Title,{level:4,style:{marginTop:a.margin,marginBottom:a.marginXS},children:A}),(0,n.jsx)(l.Z.Paragraph,{type:"secondary",style:{margin:0},children:X})]})},m)})]})}}}]);
