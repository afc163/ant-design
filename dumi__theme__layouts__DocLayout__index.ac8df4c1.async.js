"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[40367],{148050:function(me,kn,r){r.d(kn,{Z:function(){return K}});var Ln=r(168400),C=r.n(Ln),Dn=r(667294),w=r(186548),Rn=r(65630),dn=r(879587),bn=r(785893),u,c="https://github.com/ant-design/ant-design/edit/master/",W=(0,Rn.kc)(function(b){var fn=b.token,Hn=b.css,m=fn.colorIcon,A=fn.colorText,P=fn.iconCls;return{editButton:Hn(u||(u=C()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),P,m,A)}});function K(b){var fn=b.title,Hn=b.filename,m=W(),A=m.styles;return(0,bn.jsx)(dn.Z,{title:fn,children:(0,bn.jsx)("a",{className:A.editButton,href:"".concat(c).concat(Hn),target:"_blank",rel:"noopener noreferrer",children:(0,bn.jsx)(w.Z,{})})})}},847740:function(me,kn,r){r.r(kn),r.d(kn,{default:function(){return Pr}});var Ln=r(805574),C=r.n(Ln),Dn=r(294184),w=r.n(Dn),Rn=r(727484),dn=r.n(Rn),bn=r(533852),u=r(385956),c=r(667294),W=r(715778),K=r(773036),b=r(302559),fn=r(438746),Hn=r(168400),m=r.n(Hn),A=r(370917),P=r(65630),n=r(785893),Gn,zn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},_n=function(){var e=(0,P.Fg)(),t=function s(p){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return f<=10?`
.palette-`.concat(p,"-").concat(f,` {
  background: `).concat(e["".concat(p,"-").concat(f)],`;
}
`).concat(s(p,f+1),`
    `):""},a=function s(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return p<=13?`
.palette-gray-`.concat(p,` {
  background: `).concat(zn[p],`;
}
`).concat(s(p+1),`
    `):""};return(0,n.jsx)(A.xB,{styles:(0,A.iv)(Gn||(Gn=m()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),a())})},ne=_n,Kn,ee=function(){return(0,n.jsx)(A.xB,{styles:(0,A.iv)(Kn||(Kn=m()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},On,se=function(){var i=(0,P.Fg)();return(0,n.jsx)(A.xB,{styles:(0,A.iv)(On||(On=m()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),i.colorText,i.fontSize,i.fontFamily,i.lineHeight,i.colorBgContainer)})},te,Vn=function(){var i=(0,P.Fg)(),e=i.anchorTop;return(0,n.jsx)(A.xB,{styles:(0,A.iv)(te||(te=m()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),e)})},Tn=r(510274),Jn,oe=function(){var e=(0,P.Fg)(),t=e.antCls,a=e.colorPrimary;return(0,n.jsx)(A.xB,{styles:(0,A.iv)(Jn||(Jn=m()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.colorText,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,a,new Tn.C(a).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new Tn.C(a).setAlpha(.75).toHexString(),t,t,new Tn.C(a).setAlpha(.75).toHexString(),t,t,t,t,new Tn.C(a).setAlpha(.6).toHexString(),t,t,t)})},ce=oe,re,ae=function(){var i=(0,P.Fg)();return(0,n.jsx)(A.xB,{styles:(0,A.iv)(re||(re=m()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),i.colorText,i.fontSize,i.borderRadius)})},Yn,$n=function(){var e=(0,P.Fg)(),t=e.antCls,a=e.iconCls;return(0,n.jsx)(A.xB,{styles:(0,A.iv)(Yn||(Yn=m()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,a,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,a,e.colorBgContainer,a,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},F=$n,o,l=function(){var i=(0,P.Fg)(),e=i.antCls,t=i.iconCls;return(0,n.jsx)(A.xB,{styles:(0,A.iv)(o||(o=m()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,i.colorPrimary,t,e)})},d,v=function(){var i=(0,P.Fg)(),e=i.iconCls;return(0,n.jsx)(A.xB,{styles:(0,A.iv)(d||(d=m()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),i.colorIcon,i.colorIconHover,i.colorBorder,i.colorTextSecondary,e,i.colorLinkHover)})},y,k=function(){return(0,n.jsx)(A.xB,{styles:(0,A.iv)(y||(y=m()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},M,h=function(){var i=(0,P.Fg)();return(0,n.jsx)(A.xB,{styles:(0,A.iv)(M||(M=m()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),i.screenLG,i.colorBgContainer,i.colorSplit,i.colorLink,i.colorBgContainer)})},U,O=function(){var i=(0,P.Fg)();return(0,n.jsx)(A.xB,{styles:(0,A.iv)(U||(U=m()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),i.colorPrimary,i.colorPrimary,i.colorPrimary,i.colorPrimary,i.colorPrimary)})},J,an=function(){var i=(0,P.Fg)();return(0,n.jsx)(A.xB,{styles:(0,A.iv)(J||(J=m()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),i.colorPrimary,i.colorError,i.colorText,i.colorTextSecondary,i.colorBgContainer,i.borderRadius,i.colorBgContainer,i.colorBgContainer)})},un,ln="dumi-default-",tn=function(){var i=(0,P.Fg)();return(0,n.jsx)(A.xB,{styles:(0,A.iv)(un||(un=m()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),ln,i.colorText,i.colorBgContainer,i.colorBgContainer,i.colorTextPlaceholder,ln,i.colorBgElevated,i.colorBgElevated,ln,i.controlItemBgActive,i.controlItemBgHover,i.colorText,i.colorText)})},$,xn=function(){return(0,n.jsx)(A.xB,{styles:(0,A.iv)($||($=m()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},on=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se,{}),(0,n.jsx)(Vn,{}),(0,n.jsx)(ce,{}),(0,n.jsx)(ae,{}),(0,n.jsx)(F,{}),(0,n.jsx)(l,{}),(0,n.jsx)(v,{}),(0,n.jsx)(k,{}),(0,n.jsx)(h,{}),(0,n.jsx)(O,{}),(0,n.jsx)(an,{}),(0,n.jsx)(xn,{}),(0,n.jsx)(ne,{}),(0,n.jsx)(ee,{}),(0,n.jsx)(tn,{})]})},pn=on,Mn=r(97857),S=r.n(Mn),sn=r(9783),En=r.n(sn),An=r(301210),Xn=r(660532),Q=r(469181),vn=r(344682),In=r(11739),de=r(664095),Wn=r(883458),Pn=r(722449),Qn=r(316165),ue="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Ne="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",ye=function(e){return(0,n.jsx)(Qn.Z,S()(S()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?ue:Ne})})}))},ge=ye,we=r(562925),yn=r(373638),ie=r(438199),qn,le,je=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.headerHeight,s=e.colorTextHeading,p=e.fontFamily,f=e.mobileMaxWidth;return{logo:t(qn||(qn=m()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),a,s,p,a,s,f),title:t(le||(le=m()([`
      line-height: 32px;
    `])))}}),He=function(e){var t=e.isZhCN,a=(0,u.useLocation)(),s=a.search,p=je(),f=p.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(u.Link,{to:yn.J1("/",t,s),className:f.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:f.title,children:"Ant Design"})]})})},Oe=He,$e=r(280882),We=r(963918),Fn=r(988872),he,Ce,Le,Te,Me=(0,P.kc)(function(i){var e=i.css,t=i.token;return{smallStyle:e(he||(he=m()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(Ce||(Ce=m()([`
    color: `,`;
  `])),t.colorTextQuaternary),downOutlined:e(Le||(Le=m()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(Te||(Te=m()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),Ee=function(){var e=Me(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(u.FormattedMessage,{id:"app.implementation.community"}),")"]})},Ae=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(u.FormattedMessage,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(u.FormattedMessage,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(u.FormattedMessage,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(Ee,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(Ee,{})]}),key:"vue"}]},Pe=function(e){var t=e.isRTL,a=Me(),s=a.styles;return(0,n.jsx)(We.Z,{menu:{items:Ae()},placement:"bottomRight",children:(0,n.jsxs)(Fn.ZP,{size:"small",children:[(0,n.jsx)(u.FormattedMessage,{id:"app.header.menu.more"}),(0,n.jsx)($e.Z,{className:w()(t?s.downOutlinedRTL:s.downOutlined,s.down)})]})})},Ve=Pe,V=r(719632),G=r.n(V),cn=r(923232),mn=r(472638),Bn,fe,xe={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},Un=(0,P.kc)(function(i){var e=i.token,t=e.antCls,a=e.iconCls,s=e.fontFamily,p=e.headerHeight,f=e.menuItemBorder,x=e.colorPrimary,j=e.colorText;return{nav:(0,P.iv)(Bn||(Bn=m()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),s,t,t,t,40+12*2,p,p,f,j,t,a,t,x,t,t),popoverMenuNav:(0,P.iv)(fe||(fe=m()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),pe=function(i){var e,t,a=i.isZhCN,s=i.isMobile,p=i.responsive,f=i.directionText,x=i.onLangChange,j=i.onDirectionChange,g=(0,u.useLocation)(),B=g.pathname,L=g.search,T=(0,b.Z)(xe),Z=C()(T,1),R=Z[0],H=(0,u.useFullSidebarData)(),I=((e=H["/docs/blog"])===null||e===void 0||(e=e[0])===null||e===void 0?void 0:e.children)||[],D=Un(),N=D.styles,z=s?"inline":"horizontal",q=B.split("/").filter(function(Nn){return Nn}).slice(0,-1).join("/"),hn=q||"home";B.startsWith("/changelog")?hn="docs/react":B.startsWith("/docs/resources")&&(hn="docs/resources");var nn,wn=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(u.FormattedMessage,{id:"app.header.lang"}),onClick:x,key:"switch-lang"},{label:f,onClick:j,key:"switch-direction"}].concat(G()(Ae()));s?nn=wn:p==="crowded"&&(nn=[{label:(0,n.jsx)(Xn.Z,{}),key:"additional",children:G()(wn)}]);var jn=[{label:(0,n.jsx)(mn.Z,{to:yn.J1("/docs/spec/introduce",a,L),children:R.design}),key:"docs/spec"},{label:(0,n.jsx)(mn.Z,{to:yn.J1("/docs/react/introduce",a,L),children:R.development}),key:"docs/react"},{label:(0,n.jsx)(mn.Z,{to:yn.J1("/components/overview/",a,L),children:R.components}),key:"components"},I.length?{label:(0,n.jsx)(mn.Z,{to:yn.J1(I.sort(function(Nn,E){var _,en;return((_=Nn.frontmatter)===null||_===void 0?void 0:_.date)>((en=E.frontmatter)===null||en===void 0?void 0:en.date)?-1:1})[0].link,a,L),children:R.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(mn.Z,{to:yn.J1("/docs/resources",a,L),children:R.resources}),key:"docs/resources"},a?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(G()((t=nn)!==null&&t!==void 0?t:[]));return(0,n.jsx)(cn.Z,{mode:z,selectedKeys:[hn],className:N.nav,disabledOverflow:!0,items:jn,style:{borderRight:0}})},Se=r(879587),ke,et,tt,ot,rt,ve="1.2em",so=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.colorText,s=e.colorBorder,p=e.colorBgContainer,f=e.colorBgTextHover,x=e.borderRadius,j=e.controlHeight,g=e.motionDurationMid;return{btn:t(ke||(ke=m()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),a,s,j,j,x,g,g,f,ve,ve,ve),innerDiv:t(et||(et=m()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),ve,ve),labelStyle:t(tt||(tt=m()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),ve,a,a),label1Style:t(ot||(ot=m()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),a,p),label2Style:t(rt||(rt=m()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),co=function(e){var t=e.label1,a=e.label2,s=e.tooltip1,p=e.tooltip2,f=e.value,x=e.pure,j=e.onClick,g=so(),B=g.styles,L=B.btn,T=B.innerDiv,Z=B.labelStyle,R=B.label1Style,H=B.label2Style,I=(0,n.jsx)("button",{onClick:j,className:L,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[x&&(f===1?t:a),!x&&(0,n.jsxs)("div",{className:T,children:[(0,n.jsx)("span",{className:w()(Z,f===1?R:H),children:t}),(0,n.jsx)("span",{className:w()(Z,f===1?H:R),children:a})]})]})},"lang-button");return s||p?(0,n.jsx)(Se.Z,{title:f===1?s:p,children:I}):I},Xe=co,at,it,lt,st,ct,dt,ut=1120,pt=1200,uo={cn:{message:"\u8BED\u96C0\u516C\u76CA\u8BA1\u5212\uFF1A\u5927\u5B66\u751F\u8BA4\u8BC1\u6559\u80B2\u90AE\u7BB1\uFF0C\u5373\u53EF\u514D\u8D39\u83B7\u5F97\u8BED\u96C0\u4F1A\u5458\u3002\u8BED\u96C0\uFF0C\u652F\u4ED8\u5B9D\u5320\u5FC3\u6253\u9020\u7684\u5728\u7EBF\u6587\u6863\u5E73\u53F0\u3002",shortMessage:"\u652F\u4ED8\u5B9D\u8BED\u96C0 \xB7 \u5927\u5B66\u751F\u516C\u76CA\u8BA1\u5212\u706B\u70ED\u8FDB\u884C\u4E2D\uFF01",more:"\u4E86\u89E3\u66F4\u591A"},en:{message:"",shortMessage:"",more:""}},po=(0,P.kc)(function(i){var e=i.token,t=i.css,a="#ced4d9";return{header:t(at||(at=m()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,a,a,a),menuRow:t(it||(it=m()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(lt||(lt=m()([`
      width: 16px;
    `]))),popoverMenu:En()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:t(st||(st=m()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:t(ct||(ct=m()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),e.mobileMaxWidth),icon:t(dt||(dt=m()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),mo=function(){var e=(0,b.Z)(uo),t=C()(e,2),a=t[0],s=t[1],p=(0,u.useSiteData)(),f=p.pkg,x=(0,yn.Is)(),j=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),g=C()(j,2),B=g[0],L=g[1],T=(0,c.useContext)(ie.Z),Z=T.direction,R=T.isMobile,H=T.bannerVisible,I=T.updateSiteConfig,D=(0,c.useRef)(null),N=(0,u.useLocation)(),z=N.pathname,q=N.search,hn=po(),nn=hn.styles,wn=(0,c.useCallback)(function(){L(function(rn){return S()(S()({},rn),{},{menuVisible:!1})})},[]),jn=(0,c.useCallback)(function(){L(function(rn){return S()(S()({},rn),{},{windowWidth:window.innerWidth})})},[]),Nn=(0,c.useCallback)(function(){L(function(rn){return S()(S()({},rn),{},{menuVisible:!0})})},[]),E=(0,c.useCallback)(function(rn){L(function(Zn){return S()(S()({},Zn),{},{menuVisible:rn})})},[]),_=function(){I({direction:Z!=="rtl"?"rtl":"ltr"})},en=function(){I({bannerVisible:!1}),yn.Fy()&&localStorage.setItem(we.ANT_DESIGN_NOT_SHOW_BANNER,dn()().toISOString())};(0,c.useEffect)(function(){wn()},[N]),(0,c.useEffect)(function(){return jn(),window.addEventListener("resize",jn),function(){window.removeEventListener("resize",jn),D.current&&clearTimeout(D.current)}},[]);var Cn=(0,c.useCallback)(function(rn){var Zn=window.location.href,Re=window.location.pathname;if(/overview/.test(Re)&&/0?[1-39][0-3]?x/.test(rn)){window.location.href=Zn.replace(window.location.origin,rn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(rn)?"":"/react","/introduce")).replace(/\/$/,"");return}var nt=new URL(Zn.replace(window.location.origin,rn));nt.host.includes("antgroup")&&(window.location.href="".concat(nt.href.replace(/\/$/,""),"/")),window.location.href=nt.href.replace(/\/$/,"")},[]),Sn=(0,c.useCallback)(function(){var rn="".concat(window.location.protocol,"//"),Zn=window.location.href.slice(rn.length);yn.Fy()&&localStorage.setItem("locale",yn.KE(z)?"en-US":"zh-CN"),window.location.href=rn+Zn.replace(window.location.pathname,yn.J1(z,!yn.KE(z),q).pathname)},[N]),Qe=(0,c.useMemo)(function(){return Z!=="rtl"?"RTL":"LTR"},[Z]),X=(0,c.useMemo)(function(){return Z==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[Z]),Y=B.menuVisible,gn=B.windowWidth,be=B.searching,oo=S()(En()({},f.version,f.version),x==null?void 0:x.docVersions),Ir=Object.keys(oo).map(function(rn){return{value:oo[rn],label:rn}}),ro=["","index","index-cn"].includes(z),ao=s==="cn",Fr=Z==="rtl",qe=null;gn<ut?qe="crowded":gn<pt&&(qe="narrow");var Zr=w()(nn.header,"clearfix",{"home-header":ro}),_e={isZhCN:ao,isRTL:Fr},io=(0,n.jsx)(pe,S()(S()({},_e),{},{responsive:qe,isMobile:R,directionText:Qe,onLangChange:Sn,onDirectionChange:_}),"nav"),Be=[io,(0,n.jsx)(Q.Z,{className:"version",size:"small",defaultValue:f.version,onChange:Cn,dropdownStyle:X,popupMatchSelectWidth:!1,getPopupContainer:function(Zn){return Zn.parentNode},options:Ir},"version"),(0,n.jsx)(Ve,S()({},_e),"more"),(0,n.jsx)(Xe,{onClick:Sn,value:yn.KE(z)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(Xe,{onClick:_,value:Z==="rtl"?2:1,label1:(0,n.jsx)(ge,{className:nn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(ge,{className:nn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(Xe,{value:1,label1:(0,n.jsx)(An.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];gn<ut?Be=be?[]:[io]:gn<pt&&(Be=be?[]:Be);var lo=ro?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Zr,children:[R&&(0,n.jsx)(vn.Z,{overlayClassName:nn.popoverMenu,placement:"bottomRight",content:Be,trigger:"click",open:Y,arrow:{arrowPointAtCenter:!0},onOpenChange:E,children:(0,n.jsx)(Xn.Z,{className:"nav-phone-icon",onClick:Nn})}),ao&&H&&(0,n.jsx)(K.ZP,{theme:{token:{colorInfoBg:"#daf5eb",colorTextBase:"#000"}},children:(0,n.jsx)(In.Z,{className:nn.banner,message:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{className:nn.icon,src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),(0,n.jsx)("span",{children:R?a.shortMessage:a.message}),(0,n.jsx)("a",{className:nn.link,href:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd",target:"_blank",rel:"noreferrer",onClick:function(){var Zn,Re;(Zn=(Re=window).gtag)===null||Zn===void 0||Zn.call(Re,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd"})},children:a.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:en})}),(0,n.jsxs)(de.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(Wn.Z,S()(S()({},lo[0]),{},{children:(0,n.jsx)(Oe,S()(S()({},_e),{},{location:N}))})),(0,n.jsxs)(Wn.Z,S()(S()({},lo[1]),{},{className:nn.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Pn.ZP,{})}),!R&&Be]}))]})]})},go=mo,Dr=r(945462),ho=r(513769),fo=r.n(ho),xo=r(857278),vo=r(430932),bo=r(985093),Ie=r(115668),yo=r(642207),mt=r(13923),Ue=r(825035),wo=r(937993),jo=r(448118),Co=r(938545),So=r(569980),ko=r(391298),zo=r(630770),gt=r(693399),Fe="ant-where-checker",Bo={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function No(){var i=(0,b.Z)(Bo),e=C()(i,1),t=e[0],a=c.useState(!0),s=C()(a,2),p=s[0],f=s[1];return c.useEffect(function(){var x=document.createElement("p");x.className=Fe,x.style.position="fixed",x.style.pointerEvents="none",x.style.visibility="hidden",x.style.width="0",document.body.appendChild(x),(0,gt.updateCSS)(`
:where(.`.concat(Fe,`) {
  content: "__CHECK__";
}
    `),Fe);var j=getComputedStyle(x),g=j.content;f(String(g).includes("CHECK")),document.body.removeChild(x),(0,gt.removeCSS)(Fe)},[]),p?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var ht,ft,Lo={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},To=function(){var e=(0,c.useContext)(ie.Z),t=e.isMobile;return(0,P.kc)(function(a){var s=a.token,p=a.css,f=new Tn.C((0,zo.Z)("#f0f3fa","#fff")).onBackground(s.colorBgContainer).toHexString();return{holder:p(ht||(ht=m()([`
      background: `,`;
    `])),f),footer:p(ft||(ft=m()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),f,s.colorTextSecondary,s.colorText,t?60:0,t?20:0,s.marginXXL,s.fontSize)}})()},Mo=function(){var e=(0,fn.Z)(),t=(0,b.Z)(Lo),a=C()(t,2),s=a[0],p=a[1],f=To(),x=f.styles,j=e.getLink,g=c.useMemo(function(){var B=p==="cn",L={title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:B?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:B?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:B?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},T={title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(xo.Z,{}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(vo.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(bo.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(Ie.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(Ie.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};B&&T.items.push({icon:(0,n.jsx)(yo.Z,{}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.work_with_us"}),url:j("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:u.Link});var Z={title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(An.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(mt.Z,{}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.change-log"}),url:j("/changelog"),LinkComponent:u.Link},{icon:(0,n.jsx)(Ue.Z,{}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.faq"}),url:j("/docs/react/faq"),LinkComponent:u.Link},{icon:(0,n.jsx)(wo.Z,{}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(jo.Z,{}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(Co.Z,{}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(Ue.Z,{}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(Ue.Z,{}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},R={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(So.Z,{}),title:(0,n.jsx)(u.FormattedMessage,{id:"app.footer.theme"}),url:j("/theme-editor"),LinkComponent:u.Link}]};return[L,T,Z,R]},[p,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ko.Z,{columns:g,className:x.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:s.owner})]})}),(0,n.jsx)(No,{})]})},Ge=Mo,Eo=["children"],Ao=function(e){var t=e.children,a=fo()(e,Eo);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.Helmet,{children:[(0,n.jsx)("title",{children:a.title}),(0,n.jsx)("meta",{property:"og:title",content:a.title}),a.desc&&(0,n.jsx)("meta",{name:"description",content:a.desc})]}),(0,n.jsx)("div",{style:{minHeight:"100vh"},children:t}),(0,n.jsx)(Ge,{})]})},Po=Ao,Io=r(86198),Ze=r(185209),Fo=function(){var e=(0,u.useRouteMeta)(),t=(0,c.useMemo)(function(){var f;if(!e.frontmatter.subtitle&&!e.frontmatter.title)f="404 Not Found - Ant Design";else{var x;f="".concat(e.frontmatter.subtitle||""," ").concat(((x=e.frontmatter)===null||x===void 0?void 0:x.title)||""," - Ant Design")}var j=e.frontmatter.description||"";return[f,j]},[e]),a=C()(t,2),s=a[0],p=a[1];return(0,n.jsxs)(u.Helmet,{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("meta",{property:"og:title",content:s}),p&&(0,n.jsx)("meta",{name:"description",content:p})]})},xt=Fo,vt=r(148050),Zo=r(823493),Do=r.n(Zo),Ro=r(468990),Ho=r(658192),bt,yt,wt,jt=["scroll","resize"],Oo=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.boxShadowSecondary,s=e.antCls;return{affixTabs:t(bt||(bt=m()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),a,s,s,s),affixTabsFixed:t(yt||(yt=m()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(wt||(wt=m()([`
      text-transform: capitalize;
    `])))}}),Ct=32,$o=function(){var e=c.useRef(null),t=c.useRef([]),a=c.useState(!1),s=C()(a,2),p=s[0],f=s[1],x=c.useState(void 0),j=C()(x,2),g=j[0],B=j[1],L=Oo(),T=L.styles,Z=T.affixTabs,R=T.affixTabsFixed,H=T.span;function I(N){var z=document.getElementById(N);if(z){var q=z.offsetTop-e.current.offsetHeight-Ct;(0,Ho.Z)(q)}}c.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(N){var z=N.id;return z}),f(!0)},[]),c.useEffect(function(){var N=decodeURIComponent((location.hash||"").slice(1));N&&I(N)},[p]);var D=c.useMemo(function(){function N(){for(var z=window,q=z.scrollY,hn=e.current.offsetHeight,nn=t.current.length-1;nn>=0;nn-=1){var wn=t.current[nn],jn=document.getElementById(wn),Nn=jn.offsetTop-hn-Ct;if(Nn<=q){B(wn);return}}B(void 0)}return Do()(N)},[]);return c.useEffect(function(){return jt.forEach(function(N){return window.addEventListener(N,D)}),D(),function(){jt.forEach(function(N){return window.removeEventListener(N,D)})}},[]),(0,n.jsx)("div",{className:w()(Z,g&&R),ref:e,children:(0,n.jsx)(Ro.Z,{activeKey:g,onChange:I,items:t.current.map(function(N){return{key:N,label:(0,n.jsx)("span",{className:H,children:N.replace(/-/g," ")})}})})})},Wo=$o,St,kt,zt,Bt=40,De=1208,Ke=24,Vo=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.antCls;return{resourcePage:t(St||(St=m()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),De),resourceContent:t(kt||(kt=m()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Bt,De,Ke,a),banner:t(zt||(zt=m()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Bt,De,De,Ke,Ke)}}),Xo=function(e){var t,a=e.children,s=Vo(),p=s.styles,f=(0,u.useRouteMeta)();return(0,n.jsx)(K.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(Io.Z,{children:[(0,n.jsx)(xt,{}),(0,n.jsxs)("div",{id:"resources-page",className:p.resourcePage,children:[(0,n.jsx)(Wo,{}),(0,n.jsxs)("div",{className:p.banner,children:[(0,n.jsxs)(Ze.Z.Title,{style:{fontSize:30},children:[(t=f.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(vt.Z,{title:(0,n.jsx)(u.FormattedMessage,{id:"app.content.edit-page"}),filename:f.frontmatter.filename})]}),(0,n.jsx)("section",{children:f.frontmatter.description})]}),(0,n.jsx)("div",{className:p.resourceContent,children:a}),(0,n.jsx)(Ge,{})]})]})})},Uo=Xo,Go=r(720841),Ko=r(538294),Nt=r(575054),Lt=r(796586),Jo=r(605071),Je=r(945016),Yo=r(217187),ze=r(618073),Tt=r(206171),Qo=r(844183),qo=r(566254),_o=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,u.useFullSidebarData)(),a=(0,fn.Z)(),s=a.pathname,p=a.search,f=(0,u.useSidebarData)(),x=e.before,j=e.after,g=(0,c.useMemo)(function(){var B,L=G()(f!=null?f:[]);if(s.startsWith("/docs/spec")){var T=L.splice(0,1);L.push.apply(L,G()(T))}if(s.startsWith("/docs/react")){var Z,R=(Z=Object.entries(t).find(function(N){var z=C()(N,1),q=z[0];return q.startsWith("/changelog")}))===null||Z===void 0?void 0:Z[1];R&&L.splice(1,0,R[0])}if(s.startsWith("/changelog")){var H,I=(H=Object.entries(t).find(function(N){var z=C()(N,1),q=z[0];return q.startsWith("/docs/react")}))===null||H===void 0?void 0:H[1];I&&(L.unshift(I[0]),L.push.apply(L,G()(I.slice(1))))}var D=function(z){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return z&&q&&(0,n.jsx)(Qo.Z,{color:z==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:z.replace("VERSION",qo.Z)})};return(B=L==null?void 0:L.reduce(function(N,z){if(z!=null&&z.title)if(s.startsWith("/docs/spec")){var q,hn,nn=z.children.reduce(function(E,_){var en,Cn,Sn=(en=(Cn=_.frontmatter)===null||Cn===void 0?void 0:Cn.type)!==null&&en!==void 0?en:"default";return E[Sn]||(E[Sn]=[]),E[Sn].push(_),E},{}),wn=[];wn.push.apply(wn,G()((q=(hn=nn.default)===null||hn===void 0?void 0:hn.map(function(E){return{label:(0,n.jsxs)(mn.Z,{to:"".concat(E.link).concat(p),children:[x,E==null?void 0:E.title,j]}),key:E.link.replace(/(-cn$)/g,"")}}))!==null&&q!==void 0?q:[])),Object.entries(nn).forEach(function(E){var _=C()(E,2),en=_[0],Cn=_[1];en!=="default"&&wn.push({type:"group",label:en,key:en,children:Cn==null?void 0:Cn.map(function(Sn){return{label:(0,n.jsxs)(mn.Z,{to:"".concat(Sn.link).concat(p),children:[x,Sn==null?void 0:Sn.title,j]}),key:Sn.link.replace(/(-cn$)/g,"")}})})}),N.push({label:z==null?void 0:z.title,key:z==null?void 0:z.title,children:wn})}else{var jn;N.push({type:"group",label:z==null?void 0:z.title,key:z==null?void 0:z.title,children:(jn=z.children)===null||jn===void 0?void 0:jn.map(function(E){var _,en;return{label:(0,n.jsxs)(mn.Z,{to:"".concat(E.link).concat(p),style:{display:"flex",alignItems:"center"},children:[x,(0,n.jsx)("span",{children:E==null?void 0:E.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(_=E.frontmatter)===null||_===void 0?void 0:_.subtitle},"chinese"),D((en=E.frontmatter)===null||en===void 0?void 0:en.tag,!x&&!j),j]}),key:E.link.replace(/(-cn$)/g,"")}})})}else{var Nn=z.children||[];Nn.every(function(E){var _;return E==null||(_=E.frontmatter)===null||_===void 0?void 0:_.date})&&Nn.sort(function(E,_){var en,Cn;return((en=E.frontmatter)===null||en===void 0?void 0:en.date)>((Cn=_.frontmatter)===null||Cn===void 0?void 0:Cn.date)?-1:1}),N.push.apply(N,G()(Nn.map(function(E){return{label:(0,n.jsxs)(mn.Z,{to:"".concat(E.link).concat(p),style:{display:"flex",alignItems:"center"},children:[x,E==null?void 0:E.title,D(E.frontmatter.tag,!x&&!j),j]}),key:E.link.replace(/(-cn$)/g,"")}})))}return N},[]))!==null&&B!==void 0?B:[]},[f,t,s,p,e]);return[g,s]},Mt=_o,Et,At,Pt,It,nr=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.colorSplit,s=e.iconCls,p=e.fontSizeIcon;return{prevNextNav:t(Et||(Et=m()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),a),pageNav:t(At||(At=m()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),s,p),prevNav:t(Pt||(Pt=m()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(It||(It=m()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),er=function i(e){return Array.isArray(e)?e.reduce(function(t,a){if(!a)return t;if("children"in a&&a.children){var s;return t.concat((s=i(a.children))!==null&&s!==void 0?s:[])}return t.concat(a)},[]):null},tr=function(e){var t=e.rtl,a=nr(),s=a.styles,p={className:"footer-nav-icon-before"},f={className:"footer-nav-icon-after"},x=t?(0,n.jsx)(ze.Z,S()({},p)):(0,n.jsx)(Tt.Z,S()({},p)),j=t?(0,n.jsx)(Tt.Z,S()({},f)):(0,n.jsx)(ze.Z,S()({},f)),g=Mt({before:x,after:j}),B=C()(g,2),L=B[0],T=B[1],Z=(0,c.useContext)(ie.Z),R=Z.isMobile,H=(0,c.useMemo)(function(){var z=er(L);if(!z)return[null,null];var q=-1;return z.forEach(function(hn,nn){hn&&hn.key===T&&(q=nn)}),[z[q-1],z[q+1]]},[L,T]),I=C()(H,2),D=I[0],N=I[1];return R?null:(0,n.jsxs)("section",{className:s.prevNextNav,children:[D&&c.cloneElement(D.label,{className:w()(s.pageNav,s.prevNav,D.className)}),N&&c.cloneElement(N.label,{className:w()(s.pageNav,s.nextNav,N.className)})]})},or=tr,rr=r(302281),ar=r(15060),ir=r(889812),Ft,Zt,Dt,lr=(0,P.kc)(function(i){var e=i.token,t=i.css;return{history:t(Ft||(Ft=m()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:t(Zt||(Zt=m()([`
    // white-space: pre;
  `]))),ref:t(Dt||(Dt=m()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),sr={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function cr(i){var e=i.changelog,t=e===void 0?"":e,a=i.refs,s=a===void 0?[]:a,p=i.styles,f=c.useMemo(function(){for(var x=[],j=!1,g="",B=0;B<t.length;B+=1){var L=t[B];if(L!=="`")g+=L;else{var T=g;j&&(T=(0,n.jsx)("code",{children:T})),x.push(T),g="",j=!j}}return x.push(g),x},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:f}),s==null?void 0:s.map(function(x){var j;return(0,n.jsxs)("a",{className:p.ref,href:x,target:"_blank",rel:"noreferrer",children:["#",(j=x.match(/^.*\/(\d+)$/))===null||j===void 0?void 0:j[1]]},x)})]})}function dr(i,e){var t=(0,ir.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return r.e(32104).then(r.t.bind(r,332104,19))}}:{key:"component-changelog-en",request:function(){return r.e(65212).then(r.t.bind(r,365212,19))}});return(0,c.useMemo)(function(){var a=i.replace(/-/g,""),s=Object.keys(t).find(function(p){return p.toLowerCase()===a.toLowerCase()});return t[s]},[t,i])}function ur(i){var e,t=i.pathname,a=t===void 0?"":t,s=(0,b.Z)(sr),p=C()(s,2),f=p[0],x=p[1],j=c.useState(!1),g=C()(j,2),B=g[0],L=g[1],T=lr(),Z=T.styles,R=((e=a.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",H=dr(R,x),I=c.useMemo(function(){var D={};return H==null||H.forEach(function(N){D[N.version]=D[N.version]||[],D[N.version].push(N)}),Object.keys(D).map(function(N){var z=D[N];return{children:(0,n.jsxs)(Ze.Z,{children:[(0,n.jsx)("h4",{children:N}),(0,n.jsx)("ul",{children:z.map(function(q,hn){return(0,n.jsx)("li",{className:Z.li,children:(0,n.jsx)(cr,S()(S()({},q),{},{styles:Z}))},hn)})})]})}})},[H]);return!H||!H.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Fn.ZP,{className:Z.history,icon:(0,n.jsx)(mt.Z,{}),onClick:function(){L(!0)},children:f.changelog}),(0,n.jsx)(rr.Z,{title:f.changelog,extra:(0,n.jsx)(mn.Z,{style:{fontSize:14},to:"/changelog".concat(x==="cn"?"-cn":""),children:f.full}),open:B,width:"40vw",onClose:function(){L(!1)},destroyOnClose:!0,children:(0,n.jsx)(ar.Z,{items:I})})]})}var pr=function(i){return(0,n.jsx)(c.Suspense,{fallback:null,children:(0,n.jsx)(ur,S()({},i))})},mr=r(524229),Rt=r(211646),gr=r(294047),Ht=r(315816),hr=function(e){var t=e.className,a=e.style;return(0,n.jsx)("svg",{className:t,style:a,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Ot=hr,$t,Wt,Vt,Xt,Ut,Gt,Kt,Ye="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",fr=(0,P.kc)(function(i){var e=i.token,t=i.css;return{card:t($t||($t=m()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Wt||(Wt=m()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Vt||(Vt=m()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Xt||(Xt=m()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Ut||(Ut=m()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Gt||(Gt=m()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(Kt||(Kt=m()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),xr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},vr=function(e){var t=e.zhihuLink,a=e.yuqueLink,s=e.juejinLink,p=(0,b.Z)(xr),f=C()(p,1),x=f[0],j=fr(),g=j.styles,B=g.card,L=g.bigTitle,T=g.cardBody,Z=g.left,R=g.title,H=g.subTitle,I=g.btn;return!t&&!a&&!s?null:(0,n.jsxs)(gr.Z,{className:B,bordered:!1,children:[(0,n.jsx)("h3",{className:L,children:x.bigTitle}),t&&(0,n.jsxs)("div",{className:T,children:[(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)(Ie.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(ze.Z,{className:"arrowIcon"}),(0,n.jsx)(Fn.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:x.zhiHu})]})]})]}),(0,n.jsx)(Fn.ZP,{type:"primary",className:I,icon:(0,n.jsx)(Ie.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:x.buttonText})]}),a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ht.Z,{}),(0,n.jsxs)("div",{className:T,children:[(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)(Rt.Z,{className:"logo yuque-logo"}),(0,n.jsx)(ze.Z,{className:"arrowIcon"}),(0,n.jsx)(Fn.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:x.yuQue})]})]})]}),(0,n.jsx)(Fn.ZP,{type:"primary",className:I,icon:(0,n.jsx)(Rt.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:a,children:x.buttonText})]})]}),s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ht.Z,{}),(0,n.jsxs)("div",{className:T,children:[(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)(Ot,{className:"logo juejin-logo"}),(0,n.jsx)(ze.Z,{className:"arrowIcon"}),(0,n.jsx)(Fn.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:x.junjin})]})]})]}),(0,n.jsx)(Fn.ZP,{type:"primary",className:I,icon:(0,n.jsx)(Ot,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:s,children:x.buttonText})]})]})]})},br=vr,Jt,Yt,Qt,qt,_t,yr=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.antCls;return{contributorsList:t(Jt||(Jt=m()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),a,a,e.motionDurationSlow,a),listMobile:t(Yt||(Yt=m()([`
      margin: 1em 0 !important;
    `]))),toc:t(Qt||(Qt=m()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),a,a),tocWrapper:t(qt||(qt=m()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(_t||(_t=m()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),wr=function(e){var t=e.num,a=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:a}).map(function(s,p){return(0,n.jsx)(Nt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:p===0?0:-8}},p)})})},jr=function(e){var t=e.name,a=e.avatar,s=(0,c.useState)(!0),p=C()(s,2),f=p[0],x=p[1],j=(0,c.useState)(!1),g=C()(j,2),B=g[0],L=g[1];return(0,c.useLayoutEffect)(function(){var T=new Image;T.src=a,T.onload=function(){return x(!1)},T.onerror=function(){return L(!0)}},[]),B?null:f?(0,n.jsx)(Nt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(Lt.C,{size:"small",src:a,alt:t,children:t})},Cr=function(e){var t,a,s,p,f,x,j=e.children,g=(0,u.useRouteMeta)(),B=(0,u.useTabMeta)(),L=(0,fn.Z)(),T=L.pathname,Z=L.hash,R=(0,u.useIntl)(),H=R.formatMessage,I=yr(),D=I.styles,N=(0,P.Fg)(),z=(0,c.useContext)(ie.Z),q=z.direction,hn=z.isMobile,nn=(0,Yo.Z)(!1),wn=C()(nn,2),jn=wn[0],Nn=wn[1],E=(0,c.useMemo)(function(){var X;return((X=g.toc)===null||X===void 0?void 0:X.filter(function(Y){return Y._debug_demo}).map(function(Y){return Y.id}))||[]},[g]),_=E.includes(Z.slice(1));(0,c.useLayoutEffect)(function(){Nn(_)},[]);var en=(0,c.useMemo)(function(){return{showDebug:jn,setShowDebug:Nn}},[jn,E]),Cn=(0,c.useMemo)(function(){return((B==null?void 0:B.toc)||g.toc).reduce(function(X,Y){if(Y.depth===2)X.push(S()({},Y));else if(Y.depth===3){var gn=X[X.length-1];gn&&(gn.children=gn.children||[],gn.children.push(S()({},Y)))}return X},[])},[B==null?void 0:B.toc,g.toc]),Sn=q==="rtl",Qe=(0,c.useMemo)(function(){var X=g.frontmatter.author;return X?typeof X=="string"?X.split(",").map(function(Y){return{name:Y,avatar:"https://github.com/".concat(Y,".png")}}):Array.isArray(X)?X:[]:[]},[g.frontmatter.author]);return(0,n.jsx)(mr.Z.Provider,{value:en,children:(0,n.jsxs)(Wn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!g.frontmatter.toc&&(0,n.jsx)("section",{className:D.tocWrapper,children:(0,n.jsx)(Jo.Z,{className:D.toc,affix:!1,targetOffset:N.anchorTop,showInkInFixed:!0,items:Cn.map(function(X){var Y;return{href:"#".concat(X.id),title:X.title,key:X.id,children:(Y=X.children)===null||Y===void 0?void 0:Y.filter(function(gn){return jn||!E.includes(gn.id)}).map(function(gn){return{key:gn.id,href:"#".concat(gn.id),title:(0,n.jsx)("span",{className:w()(E.includes(gn.id)&&"toc-debug"),children:gn==null?void 0:gn.title})}})}})})}),(0,n.jsxs)("article",{className:w()(D.articleWrapper,{rtl:Sn}),children:[(t=g.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(Ze.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(Je.Z,{size:"small",children:[(a=g.frontmatter)===null||a===void 0?void 0:a.title,(s=g.frontmatter)===null||s===void 0?void 0:s.subtitle,!T.startsWith("/components/overview")&&(0,n.jsx)(vt.Z,{title:(0,n.jsx)(u.FormattedMessage,{id:"app.content.edit-page"}),filename:g.frontmatter.filename})]}),T.startsWith("/components/")&&(0,n.jsx)(pr,{pathname:T})]}):null,g.frontmatter.date||g.frontmatter.author?(0,n.jsx)(Ze.Z.Paragraph,{children:(0,n.jsxs)(Je.Z,{children:[g.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Go.Z,{})," ",dn()(g.frontmatter.date).format("YYYY-MM-DD")]}),Qe.map(function(X){return(0,n.jsx)("a",{href:"https://github.com/".concat(X.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Je.Z,{size:3,children:[(0,n.jsx)(jr,{name:X.name,avatar:X.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",X.name]})]})},X.name)})]})}):null,!g.frontmatter.__autoDescription&&g.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:j}),(((p=g.frontmatter)===null||p===void 0?void 0:p.zhihu_url)||((f=g.frontmatter)===null||f===void 0?void 0:f.yuque_url)||((x=g.frontmatter)===null||x===void 0?void 0:x.juejin_url))&&(0,n.jsx)(br,{zhihuLink:g.frontmatter.zhihu_url,yuqueLink:g.frontmatter.yuque_url,juejinLink:g.frontmatter.juejin_url}),g.frontmatter.filename&&(0,n.jsx)(Ko.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:w()(D.contributorsList,En()({},D.listMobile,hn)),fileName:g.frontmatter.filename,renderItem:function(Y,gn){var be;return!Y||gn?(0,n.jsx)(wr,{}):(be=Y.username)!==null&&be!==void 0&&be.includes("github-actions")?null:(0,n.jsx)(Se.Z,{mouseEnterDelay:.3,title:"".concat(H({id:"app.content.contributors"}),": ").concat(Y.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(Y.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(Lt.C,{size:"small",src:Y.url,alt:Y.username,children:Y.username})})})},Y.username)}})]}),(0,n.jsx)(or,{rtl:Sn}),(0,n.jsx)(Ge,{})]})})},Sr=Cr,kr=r(650010),no,eo,zr=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.antCls,s=e.fontFamily,p=e.colorSplit;return{asideContainer:t(no||(no=m()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),s,a,a,a,a,a,a,p,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),mainMenu:t(eo||(eo=m()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),Br=function(){var e=(0,u.useSidebarData)(),t=(0,c.useContext)(ie.Z),a=t.isMobile,s=t.theme,p=zr(),f=p.styles,x=Mt(),j=C()(x,2),g=j[0],B=j[1],L=s.includes("dark"),T=(0,P.Fg)(),Z=T.colorBgContainer,R=(0,n.jsx)(K.ZP,{theme:{components:{Menu:{itemBg:Z,darkItemBg:Z}}},children:(0,n.jsx)(cn.Z,{items:g,inlineIndent:30,className:f.asideContainer,mode:"inline",theme:L?"dark":"light",selectedKeys:[B],defaultOpenKeys:e==null?void 0:e.map(function(H){var I=H.title;return I}).filter(function(H){return H})})});return a?(0,n.jsx)(kr.Z,{children:R},"Mobile-menu"):(0,n.jsx)(Wn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:f.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:R})})},Nr=Br,to,Lr=(0,P.kc)(function(i){var e=i.css,t=i.token;return{main:e(to||(to=m()([`
    display: flex;
    margin-top: `,`px;
  `])),t.contentMarginTop)}}),Tr=function(e){var t=e.children,a=Lr(),s=a.styles;return(0,n.jsxs)("main",{className:s.main,children:[(0,n.jsx)(xt,{}),(0,n.jsx)(Nr,{}),(0,n.jsx)(Sr,{children:t})]})},Mr=Tr,Er={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Ar=function(){var e=(0,u.useOutlet)(),t=(0,fn.Z)(),a=t.pathname,s=t.search,p=t.hash,f=(0,b.Z)(Er),x=C()(f,2),j=x[0],g=x[1],B=(0,c.useRef)(null),L=(0,c.useContext)(ie.Z),T=L.direction,Z=(0,u.useSiteData)(),R=Z.loading;(0,c.useLayoutEffect)(function(){g==="cn"?dn().locale("zh-cn"):dn().locale("en")},[]),(0,c.useEffect)(function(){var I=document.getElementById("nprogress-style");I&&(B.current=setTimeout(function(){var D;(D=I.parentNode)===null||D===void 0||D.removeChild(I)},0))},[]),(0,c.useEffect)(function(){var I,D=p.replace("#","");D&&((I=document.getElementById(decodeURIComponent(D)))===null||I===void 0||I.scrollIntoView())},[R,p]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",a+s)},[t]);var H=(0,c.useMemo)(function(){return["","/"].some(function(I){return I===a})||["/index"].some(function(I){return a.startsWith(I)})?(0,n.jsx)(Po,{title:j.title,desc:j.description,children:e}):a.startsWith("/docs/resource")?(0,n.jsx)(Uo,{children:e}):a.startsWith("/theme-editor")?e:(0,n.jsx)(Mr,{children:e})},[a,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.Helmet,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:g==="cn"?"zh-CN":g,"data-direction":T,className:w()({rtl:T==="rtl"})}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{property:"og:description",content:j.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(K.ZP,{direction:T,locale:g==="cn"?W.Z:void 0,children:[(0,n.jsx)(pn,{}),(0,n.jsx)(go,{}),H]})]})},Pr=Ar},647727:function(me,kn,r){r.d(kn,{Z:function(){return Ln.Z}});var Ln=r(582485)},605071:function(me,kn,r){r.d(kn,{Z:function(){return $n}});var Ln=r(97857),C=r.n(Ln),Dn=r(9783),w=r.n(Dn),Rn=r(719632),dn=r.n(Rn),bn=r(805574),u=r.n(bn),c=r(667294),W=r(294184),K=r.n(W),b=r(656790),fn=r(517423),Hn=r(982673),m=r(658192),A=r(252901),P=r(73287),n=c.createContext(void 0),Gn=n,zn=r(785893),_n=function(o){var l=o.href,d=o.title,v=o.prefixCls,y=o.children,k=o.className,M=o.target,h=o.replace,U=c.useContext(Gn),O=U||{},J=O.registerLink,an=O.unregisterLink,un=O.scrollTo,ln=O.onClick,tn=O.activeLink,$=O.direction;c.useEffect(function(){return J==null||J(l),function(){an==null||an(l)}},[l]);var xn=function(Q){h&&(Q.preventDefault(),window.location.replace(l)),ln==null||ln(Q,{title:d,href:l}),un==null||un(l)};if(!1)var on;var pn=c.useContext(P.E_),Mn=pn.getPrefixCls,S=Mn("anchor",v),sn=tn===l,En=K()("".concat(S,"-link"),k,w()({},"".concat(S,"-link-active"),sn)),An=K()("".concat(S,"-link-title"),w()({},"".concat(S,"-link-title-active"),sn));return(0,zn.jsxs)("div",{className:En,children:[(0,zn.jsx)("a",{className:An,href:l,title:typeof d=="string"?d:"",target:M,onClick:xn,children:d}),$!=="horizontal"?y:null]})},ne=_n,Kn=r(548073),ee=r(141035),On=r(986943),se=function(o){var l,d,v=o.componentCls,y=o.holderOffsetBlock,k=o.motionDurationSlow,M=o.lineWidthBold,h=o.colorPrimary,U=o.lineType,O=o.colorSplit;return w()({},"".concat(v,"-wrapper"),(d={marginBlockStart:-y,paddingBlockStart:y},w()(d,v,C()(C()({},(0,Kn.Wf)(o)),{},w()({position:"relative",paddingInlineStart:M},"".concat(v,"-link"),(l={paddingBlock:o.linkPaddingBlock,paddingInline:"".concat(o.linkPaddingInlineStart,"px 0"),"&-title":C()(C()({},Kn.vS),{},{position:"relative",display:"block",marginBlockEnd:o.anchorTitleBlock,color:o.colorText,transition:"all ".concat(o.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},w()(l,"&-active > ".concat(v,"-link-title"),{color:o.colorPrimary}),w()(l,"".concat(v,"-link"),{paddingBlock:o.anchorPaddingBlockSecondary}),l)))),w()(d,"&:not(".concat(v,"-wrapper-horizontal)"),w()({},v,w()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(M,"px ").concat(U," ").concat(O),content:'" "'}},"".concat(v,"-ink"),w()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(k," ease-in-out"),width:M,backgroundColor:h},"&".concat(v,"-ink-visible"),{display:"inline-block"})))),w()(d,"".concat(v,"-fixed ").concat(v,"-ink ").concat(v,"-ink"),{display:"none"}),d))},te=function(o){var l,d=o.componentCls,v=o.motionDurationSlow,y=o.lineWidthBold,k=o.colorPrimary;return w()({},"".concat(d,"-wrapper-horizontal"),w()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(o.lineType," ").concat(o.colorSplit),content:'" "'}},d,(l={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},w()(l,"".concat(d,"-link:first-of-type"),{paddingInline:0}),w()(l,"".concat(d,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(v," ease-in-out, width ").concat(v," ease-in-out"),height:y,backgroundColor:k}),l)))},Vn=(0,ee.Z)("Anchor",function(F){var o=F.fontSize,l=F.fontSizeLG,d=F.paddingXXS,v=(0,On.TS)(F,{holderOffsetBlock:d,anchorPaddingBlockSecondary:d/2,anchorTitleBlock:o/14*3,anchorBallSize:l/2});return[se(v),te(v)]},function(F){return{linkPaddingBlock:F.paddingXXS,linkPaddingInlineStart:F.padding}});function Tn(){return window}function Jn(F,o){if(!F.getClientRects().length)return 0;var l=F.getBoundingClientRect();return l.width||l.height?o===window?(o=F.ownerDocument.documentElement,l.top-o.clientTop):l.top-o.getBoundingClientRect().top:l.top}var oe=/#([\S ]+)$/,ce=function(o){var l,d,v=o.rootClassName,y=o.anchorPrefixCls,k=o.className,M=o.style,h=o.offsetTop,U=o.affix,O=U===void 0?!0:U,J=o.showInkInFixed,an=J===void 0?!1:J,un=o.children,ln=o.items,tn=o.direction,$=tn===void 0?"vertical":tn,xn=o.bounds,on=o.targetOffset,pn=o.onClick,Mn=o.onChange,S=o.getContainer,sn=o.getCurrentAnchor,En=o.replace;if(!1)var An;var Xn=c.useState([]),Q=u()(Xn,2),vn=Q[0],In=Q[1],de=c.useState(null),Wn=u()(de,2),Pn=Wn[0],Qn=Wn[1],ue=c.useRef(Pn),Ne=c.useRef(null),ye=c.useRef(null),ge=c.useRef(!1),we=c.useContext(P.E_),yn=we.direction,ie=we.getTargetContainer,qn=we.anchor,le=(l=S!=null?S:ie)!==null&&l!==void 0?l:Tn,je=JSON.stringify(vn),He=(0,b.zX)(function(V){vn.includes(V)||In(function(G){return[].concat(dn()(G),[V])})}),Oe=(0,b.zX)(function(V){vn.includes(V)&&In(function(G){return G.filter(function(cn){return cn!==V})})}),$e=function(){var G,cn=(G=Ne.current)===null||G===void 0?void 0:G.querySelector(".".concat(y,"-link-title-active"));if(cn&&ye.current){var mn=ye.current.style,Bn=$==="horizontal";mn.top=Bn?"":"".concat(cn.offsetTop+cn.clientHeight/2,"px"),mn.height=Bn?"":"".concat(cn.clientHeight,"px"),mn.left=Bn?"".concat(cn.offsetLeft,"px"):"",mn.width=Bn?"".concat(cn.clientWidth,"px"):"",Bn&&(0,fn.Z)(cn,{scrollMode:"if-needed",block:"nearest"})}},We=function(G){var cn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,mn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,Bn=[],fe=le();if(G.forEach(function(Un){var pe=oe.exec(Un==null?void 0:Un.toString());if(pe){var Se=document.getElementById(pe[1]);if(Se){var ke=Jn(Se,fe);ke<cn+mn&&Bn.push({link:Un,top:ke})}}}),Bn.length){var xe=Bn.reduce(function(Un,pe){return pe.top>Un.top?pe:Un});return xe.link}return""},Fn=(0,b.zX)(function(V){if(ue.current!==V){var G=typeof sn=="function"?sn(V):V;Qn(G),ue.current=G,Mn==null||Mn(V)}}),he=c.useCallback(function(){if(!ge.current){var V=We(vn,on!==void 0?on:h||0,xn);Fn(V)}},[je,on,h]),Ce=c.useCallback(function(V){Fn(V);var G=oe.exec(V);if(G){var cn=document.getElementById(G[1]);if(cn){var mn=le(),Bn=(0,Hn.Z)(mn,!0),fe=Jn(cn,mn),xe=Bn+fe;xe-=on!==void 0?on:h||0,ge.current=!0,(0,m.Z)(xe,{getContainer:le,callback:function(){ge.current=!1}})}}},[on,h]),Le=K()(v,"".concat(y,"-wrapper"),(d={},w()(d,"".concat(y,"-wrapper-horizontal"),$==="horizontal"),w()(d,"".concat(y,"-rtl"),yn==="rtl"),d),k,qn==null?void 0:qn.className),Te=K()(y,w()({},"".concat(y,"-fixed"),!O&&!an)),Me=K()("".concat(y,"-ink"),w()({},"".concat(y,"-ink-visible"),Pn)),Ee=C()(C()({maxHeight:h?"calc(100vh - ".concat(h,"px)"):"100vh"},qn==null?void 0:qn.style),M),Ae=function V(G){return Array.isArray(G)?G.map(function(cn){return(0,c.createElement)(ne,C()(C()({replace:En},cn),{},{key:cn.key}),$==="vertical"&&V(cn.children))}):null},Pe=(0,zn.jsx)("div",{ref:Ne,className:Le,style:Ee,children:(0,zn.jsxs)("div",{className:Te,children:[(0,zn.jsx)("span",{className:Me,ref:ye}),"items"in o?Ae(ln):un]})});c.useEffect(function(){var V=le();return he(),V==null||V.addEventListener("scroll",he),function(){V==null||V.removeEventListener("scroll",he)}},[je]),c.useEffect(function(){typeof sn=="function"&&Fn(sn(ue.current||""))},[sn]),c.useEffect(function(){$e()},[$,sn,je,Pn]);var Ve=c.useMemo(function(){return{registerLink:He,unregisterLink:Oe,scrollTo:Ce,activeLink:Pn,onClick:pn,direction:$}},[Pn,pn,Ce,$]);return(0,zn.jsx)(Gn.Provider,{value:Ve,children:O?(0,zn.jsx)(A.Z,{offsetTop:h,target:le,children:Pe}):Pe})},re=function(o){var l=o.prefixCls,d=o.rootClassName,v=c.useContext(P.E_),y=v.getPrefixCls,k=y("anchor",l),M=Vn(k),h=u()(M,2),U=h[0],O=h[1];return U((0,zn.jsx)(ce,C()(C()({},o),{},{rootClassName:K()(O,d),anchorPrefixCls:k})))},ae=re,Yn=ae;Yn.Link=ne;var $n=Yn},86198:function(me,kn,r){r.d(kn,{Z:function(){return F}});var Ln=r(719632),C=r.n(Ln),Dn=r(9783),w=r.n(Dn),Rn=r(805574),dn=r.n(Rn),bn=r(513769),u=r.n(bn),c=r(97857),W=r.n(c),K=r(667294),b=r(294184),fn=r.n(b),Hn=r(518475),m=r(73287),A=r(121790),P=r(45598),n=r(296708);function Gn(o,l,d){if(typeof d=="boolean")return d;if(o.length)return!0;var v=(0,P.default)(l);return v.some(function(y){return y.type===n.Z})}var zn=r(141035),_n=function(l){var d,v=l.componentCls,y=l.bodyBg,k=l.lightSiderBg,M=l.lightTriggerBg,h=l.lightTriggerColor;return w()({},"".concat(v,"-sider-light"),(d={background:k},w()(d,"".concat(v,"-sider-trigger"),{color:h,background:M}),w()(d,"".concat(v,"-sider-zero-width-trigger"),{color:h,background:M,border:"1px solid ".concat(y),borderInlineStart:0}),d))},ne=_n,Kn=function(l){var d,v,y=l.antCls,k=l.componentCls,M=l.colorText,h=l.triggerColor,U=l.footerBg,O=l.triggerBg,J=l.headerHeight,an=l.headerPadding,un=l.headerColor,ln=l.footerPadding,tn=l.triggerHeight,$=l.zeroTriggerHeight,xn=l.zeroTriggerWidth,on=l.motionDurationMid,pn=l.motionDurationSlow,Mn=l.fontSize,S=l.borderRadius,sn=l.bodyBg,En=l.headerBg,An=l.siderBg;return v={},w()(v,k,W()(W()((d={display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:sn,"&, *":{boxSizing:"border-box"}},w()(d,"&".concat(k,"-has-sider"),w()({flexDirection:"row"},"> ".concat(k,", > ").concat(k,"-content"),{width:0})),w()(d,"".concat(k,"-header, &").concat(k,"-footer"),{flex:"0 0 auto"}),w()(d,"".concat(k,"-sider"),{position:"relative",minWidth:0,background:An,transition:"all ".concat(on,", background 0s"),"&-children":w()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(y,"-menu").concat(y,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:tn},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:tn,color:h,lineHeight:"".concat(tn,"px"),textAlign:"center",background:O,cursor:"pointer",transition:"all ".concat(on)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:J,insetInlineEnd:-xn,zIndex:1,width:xn,height:$,color:h,fontSize:l.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:An,borderStartStartRadius:0,borderStartEndRadius:S,borderEndEndRadius:S,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(pn," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(pn),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-xn,borderStartStartRadius:S,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:S}}}}),d),ne(l)),{},{"&-rtl":{direction:"rtl"}})),w()(v,"".concat(k,"-header"),w()({height:J,padding:an,color:un,lineHeight:"".concat(J,"px"),background:En},"".concat(y,"-menu"),{lineHeight:"inherit"})),w()(v,"".concat(k,"-footer"),{padding:ln,color:M,fontSize:Mn,background:U}),w()(v,"".concat(k,"-content"),{flex:"auto",minHeight:0}),v},ee=(0,zn.Z)("Layout",function(o){return[Kn(o)]},function(o){var l=o.colorBgLayout,d=o.controlHeight,v=o.controlHeightLG,y=o.colorText,k=o.controlHeightSM,M=o.marginXXS,h=o.colorTextLightSolid,U=o.colorBgContainer,O=v*1.25;return{colorBgHeader:"#001529",colorBgBody:l,colorBgTrigger:"#002140",bodyBg:l,headerBg:"#001529",headerHeight:d*2,headerPadding:"0 ".concat(O,"px"),headerColor:y,footerPadding:"".concat(k,"px ").concat(O,"px"),footerBg:l,siderBg:"#001529",triggerHeight:v+M*2,triggerBg:"#002140",triggerColor:h,zeroTriggerWidth:v,zeroTriggerHeight:v,lightSiderBg:U,lightTriggerBg:U,lightTriggerColor:y}},{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),On=r(785893),se=["prefixCls","suffixCls","className","tagName"],te=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function Vn(o){var l=o.suffixCls,d=o.tagName,v=o.displayName;return function(y){var k=K.forwardRef(function(M,h){return(0,On.jsx)(y,W()({ref:h,suffixCls:l,tagName:d},M))});return k}}var Tn=K.forwardRef(function(o,l){var d=o.prefixCls,v=o.suffixCls,y=o.className,k=o.tagName,M=u()(o,se),h=K.useContext(m.E_),U=h.getPrefixCls,O=U("layout",d),J=ee(O),an=dn()(J,2),un=an[0],ln=an[1],tn=v?"".concat(O,"-").concat(v):O;return un((0,On.jsx)(k,W()({className:fn()(d||tn,y,ln),ref:l},M)))}),Jn=K.forwardRef(function(o,l){var d,v=K.useContext(m.E_),y=v.direction,k=K.useState([]),M=dn()(k,2),h=M[0],U=M[1],O=o.prefixCls,J=o.className,an=o.rootClassName,un=o.children,ln=o.hasSider,tn=o.tagName,$=o.style,xn=u()(o,te),on=(0,Hn.default)(xn,["suffixCls"]),pn=K.useContext(m.E_),Mn=pn.getPrefixCls,S=pn.layout,sn=Mn("layout",O),En=Gn(h,un,ln),An=ee(sn),Xn=dn()(An,2),Q=Xn[0],vn=Xn[1],In=fn()(sn,(d={},w()(d,"".concat(sn,"-has-sider"),En),w()(d,"".concat(sn,"-rtl"),y==="rtl"),d),S==null?void 0:S.className,J,an,vn),de=K.useMemo(function(){return{siderHook:{addSider:function(Pn){U(function(Qn){return[].concat(C()(Qn),[Pn])})},removeSider:function(Pn){U(function(Qn){return Qn.filter(function(ue){return ue!==Pn})})}}}},[]);return Q((0,On.jsx)(A.V.Provider,{value:de,children:(0,On.jsx)(tn,W()(W()({ref:l,className:In,style:W()(W()({},S==null?void 0:S.style),$)},on),{},{children:un}))}))}),oe=Vn({tagName:"div",displayName:"Layout"})(Jn),ce=Vn({suffixCls:"header",tagName:"header",displayName:"Header"})(Tn),re=Vn({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(Tn),ae=Vn({suffixCls:"content",tagName:"main",displayName:"Content"})(Tn),Yn=oe,$n=Yn;$n.Header=ce,$n.Footer=re,$n.Content=ae,$n.Sider=n.Z;var F=$n},715778:function(me,kn,r){r.d(kn,{Z:function(){return b}});var Ln=r(174219),C=r(97857),Dn=r.n(C),w=r(585369),Rn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},dn=Rn,bn={lang:Dn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},w.Z),timePickerLocale:Dn()({},dn)};bn.lang.ok="\u786E\u5B9A";var u=bn,c=u,W="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",K={locale:"zh-cn",Pagination:Ln.Z,DatePicker:u,TimePicker:dn,Calendar:c,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:W,method:W,array:W,object:W,number:W,date:W,boolean:W,integer:W,float:W,regexp:W,email:W,url:W,hex:W},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},b=K},15060:function(me,kn,r){r.d(kn,{Z:function(){return $n}});var Ln=r(97857),C=r.n(Ln),Dn=r(805574),w=r.n(Dn),Rn=r(513769),dn=r.n(Rn),bn=r(667294),u=r(294184),c=r.n(u),W=r(73287),K=r(9783),b=r.n(K),fn=r(548073),Hn=r(141035),m=r(986943),A=function(o){var l,d,v,y,k,M,h=o.componentCls;return b()({},h,C()(C()({},(0,fn.Wf)(o)),{},(M={margin:0,padding:0,listStyle:"none"},b()(M,"".concat(h,"-item"),{position:"relative",margin:0,paddingBottom:o.itemPaddingBottom,fontSize:o.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:o.itemHeadSize,insetInlineStart:(o.itemHeadSize-o.tailWidth)/2,height:"calc(100% - ".concat(o.itemHeadSize,"px)"),borderInlineStart:"".concat(o.tailWidth,"px ").concat(o.lineType," ").concat(o.tailColor)},"&-pending":(l={},b()(l,"".concat(h,"-item-head"),{fontSize:o.fontSizeSM,backgroundColor:"transparent"}),b()(l,"".concat(h,"-item-tail"),{display:"none"}),l),"&-head":{position:"absolute",width:o.itemHeadSize,height:o.itemHeadSize,backgroundColor:o.dotBg,border:"".concat(o.dotBorderWidth,"px ").concat(o.lineType," transparent"),borderRadius:"50%","&-blue":{color:o.colorPrimary,borderColor:o.colorPrimary},"&-red":{color:o.colorError,borderColor:o.colorError},"&-green":{color:o.colorSuccess,borderColor:o.colorSuccess},"&-gray":{color:o.colorTextDisabled,borderColor:o.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:o.itemHeadSize/2,insetInlineStart:o.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:o.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(o.fontSize*o.lineHeight-o.fontSize)+o.lineWidth,marginInlineStart:o.margin+o.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(d={},b()(d,"> ".concat(h,"-item-tail"),{display:"none"}),b()(d,"> ".concat(h,"-item-content"),{minHeight:o.controlHeightLG*1.2}),d)}),b()(M,"&".concat(h,`-alternate,
        &`).concat(h,`-right,
        &`).concat(h,"-label"),b()({},"".concat(h,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:"-".concat(o.marginXXS,"px"),"&-custom":{marginInlineStart:o.tailWidth/2}},"&-left":b()({},"".concat(h,"-item-content"),{insetInlineStart:"calc(50% - ".concat(o.marginXXS,"px)"),width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"start"}),"&-right":b()({},"".concat(h,"-item-content"),{width:"calc(50% - ".concat(o.marginSM,"px)"),margin:0,textAlign:"end"})})),b()(M,"&".concat(h,"-right"),b()({},"".concat(h,"-item-right"),(v={},b()(v,"".concat(h,`-item-tail,
            `).concat(h,`-item-head,
            `).concat(h,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((o.itemHeadSize+o.tailWidth)/2,"px)")}),b()(v,"".concat(h,"-item-content"),{width:"calc(100% - ".concat(o.itemHeadSize+o.marginXS,"px)")}),v))),b()(M,"&".concat(h,`-pending
        `).concat(h,`-item-last
        `).concat(h,"-item-tail"),{display:"block",height:"calc(100% - ".concat(o.margin,"px)"),borderInlineStart:"".concat(o.tailWidth,"px dotted ").concat(o.tailColor)}),b()(M,"&".concat(h,`-reverse
        `).concat(h,`-item-last
        `).concat(h,"-item-tail"),{display:"none"}),b()(M,"&".concat(h,"-reverse ").concat(h,"-item-pending"),(y={},b()(y,"".concat(h,"-item-tail"),{insetBlockStart:o.margin,display:"block",height:"calc(100% - ".concat(o.margin,"px)"),borderInlineStart:"".concat(o.tailWidth,"px dotted ").concat(o.tailColor)}),b()(y,"".concat(h,"-item-content"),{minHeight:o.controlHeightLG*1.2}),y)),b()(M,"&".concat(h,"-label"),(k={},b()(k,"".concat(h,"-item-label"),{position:"absolute",insetBlockStart:-(o.fontSize*o.lineHeight-o.fontSize)+o.tailWidth,width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"end"}),b()(k,"".concat(h,"-item-right"),b()({},"".concat(h,"-item-label"),{insetInlineStart:"calc(50% + ".concat(o.marginSM,"px)"),width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"start"})),k)),b()(M,"&-rtl",b()({direction:"rtl"},"".concat(h,"-item-head-custom"),{transform:"translate(50%, -50%)"})),M)))},P=(0,Hn.Z)("Timeline",function(F){var o=(0,m.TS)(F,{itemHeadSize:10,customHeadPaddingVertical:F.paddingXXS,paddingInlineEnd:2});return[A(o)]},function(F){return{tailColor:F.colorSplit,tailWidth:F.lineWidthBold,dotBorderWidth:F.wireframe?F.lineWidthBold:F.lineWidth*3,dotBg:F.colorBgContainer,itemPaddingBottom:F.padding*1.25}}),n=r(785893),Gn=["prefixCls","className","color","dot","pending","position","label","children"],zn=function(o){var l,d=o.prefixCls,v=o.className,y=o.color,k=y===void 0?"blue":y,M=o.dot,h=o.pending,U=h===void 0?!1:h,O=o.position,J=o.label,an=o.children,un=dn()(o,Gn),ln=bn.useContext(W.E_),tn=ln.getPrefixCls,$=tn("timeline",d),xn=c()("".concat($,"-item"),b()({},"".concat($,"-item-pending"),U),v),on=/blue|red|green|gray/.test(k||"")?void 0:k,pn=c()("".concat($,"-item-head"),(l={},b()(l,"".concat($,"-item-head-custom"),!!M),b()(l,"".concat($,"-item-head-").concat(k),!on),l));return(0,n.jsxs)("li",C()(C()({},un),{},{className:xn,children:[J&&(0,n.jsx)("div",{className:"".concat($,"-item-label"),children:J}),(0,n.jsx)("div",{className:"".concat($,"-item-tail")}),(0,n.jsx)("div",{className:pn,style:{borderColor:on,color:on},children:M}),(0,n.jsx)("div",{className:"".concat($,"-item-content"),children:an})]}))},_n=zn,ne=r(719632),Kn=r.n(ne),ee=r(100628),On=r.n(ee),se=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],te=["className"],Vn=function(o){var l,d=o.prefixCls,v=o.className,y=o.pending,k=y===void 0?!1:y,M=o.children,h=o.items,U=o.rootClassName,O=o.reverse,J=O===void 0?!1:O,an=o.direction,un=o.hashId,ln=o.pendingDot,tn=o.mode,$=tn===void 0?"":tn,xn=dn()(o,se),on=function(vn,In){return $==="alternate"?vn==="right"?"".concat(d,"-item-right"):vn==="left"||In%2===0?"".concat(d,"-item-left"):"".concat(d,"-item-right"):$==="left"?"".concat(d,"-item-left"):$==="right"||vn==="right"?"".concat(d,"-item-right"):""},pn=Kn()(h||[]),Mn=typeof k=="boolean"?null:k;k&&pn.push({pending:!!k,dot:ln||(0,n.jsx)(On(),{}),children:Mn}),J&&pn.reverse();var S=pn.length,sn="".concat(d,"-item-last"),En=pn.filter(function(Q){return!!Q}).map(function(Q,vn){var In,de=vn===S-2?sn:"",Wn=vn===S-1?sn:"",Pn=Q.className,Qn=dn()(Q,te);return(0,bn.createElement)(_n,C()(C()({},Qn),{},{className:c()([Pn,!J&&k?de:Wn,on((In=Q==null?void 0:Q.position)!==null&&In!==void 0?In:"",vn)]),key:(Q==null?void 0:Q.key)||vn}))}),An=pn.some(function(Q){return!!(Q!=null&&Q.label)}),Xn=c()(d,(l={},b()(l,"".concat(d,"-pending"),!!k),b()(l,"".concat(d,"-reverse"),!!J),b()(l,"".concat(d,"-").concat($),!!$&&!An),b()(l,"".concat(d,"-label"),An),b()(l,"".concat(d,"-rtl"),an==="rtl"),l),v,U,un);return(0,n.jsx)("ul",C()(C()({},xn),{},{className:Xn,children:En}))},Tn=Vn,Jn=r(45598);function oe(F,o){return F&&Array.isArray(F)?F:(0,Jn.default)(o).map(function(l){var d,v;return C()({children:(d=l==null||(v=l.props)===null||v===void 0?void 0:v.children)!==null&&d!==void 0?d:""},l.props)})}var ce=oe,re=["prefixCls","children","items","className","style"],ae=function(o){var l=bn.useContext(W.E_),d=l.getPrefixCls,v=l.direction,y=l.timeline,k=o.prefixCls,M=o.children,h=o.items,U=o.className,O=o.style,J=dn()(o,re),an=d("timeline",k);if(!1)var un;var ln=P(an),tn=w()(ln,2),$=tn[0],xn=tn[1],on=ce(h,M);return $((0,n.jsx)(Tn,C()(C()({},J),{},{className:c()(y==null?void 0:y.className,U),style:C()(C()({},y==null?void 0:y.style),O),prefixCls:an,direction:v,items:on,hashId:xn})))};ae.Item=_n;var Yn=ae,$n=Yn}}]);
