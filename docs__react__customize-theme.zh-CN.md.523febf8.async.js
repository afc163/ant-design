"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[42106],{967527:function(h,l,i){i.r(l);var x=i(863942),j=i(502143),m=i(968521),u=i(702951),v=i(521587),s=i(199100),t=i(828089),p=i(825673),E=i(902068),C=i(574399),g=i(316073),P=i(24628),D=i(719260),f=i(956140),k=i(127179),A=i(905388),B=i(245583),T=i(606965),I=i(268696),y=i(587302),d=i(424128),M=i(249706),F=i(795127),O=i(116846),r=i(720538),R=i(212039),a=i(73024),b=i(553913),o=i(385956),Z=i(667294),e=i(785893);function c(){var _=(0,o.useRouteMeta)(),n=_.texts;return(0,e.jsx)(o.DumiPage,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsx)("p",{children:n[1].value}),(0,e.jsxs)("ol",{children:[(0,e.jsx)("li",{children:n[2].value}),(0,e.jsx)("li",{children:n[3].value}),(0,e.jsx)("li",{children:n[4].value}),(0,e.jsx)("li",{children:n[5].value})]}),(0,e.jsxs)("h2",{id:"\u914D\u7F6E\u4E3B\u9898",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u914D\u7F6E\u4E3B\u9898",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u914D\u7F6E\u4E3B\u9898"]}),(0,e.jsxs)("p",{children:[n[6].value,(0,e.jsx)("strong",{children:n[7].value}),n[8].value,(0,e.jsx)("code",{children:n[9].value}),n[10].value,(0,e.jsx)("code",{children:n[11].value}),n[12].value]})]}),(0,e.jsxs)(u.Z,{type:"warning",children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[13].value}),n[14].value,(0,e.jsx)("code",{children:n[15].value}),n[16].value,(0,e.jsx)("code",{children:n[17].value}),n[18].value,(0,e.jsx)("code",{children:n[19].value}),n[20].value,(0,e.jsx)("code",{children:n[21].value}),n[22].value]}),(0,e.jsxs)("p",{children:[n[23].value,(0,e.jsx)("code",{children:n[24].value}),n[25].value,(0,e.jsx)(d.Z,{to:"/components/app-cn",sourceType:"Link",children:n[26].value}),n[27].value]})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"\u4FEE\u6539\u4E3B\u9898\u53D8\u91CF",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4FEE\u6539\u4E3B\u9898\u53D8\u91CF",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4FEE\u6539\u4E3B\u9898\u53D8\u91CF"]}),(0,e.jsxs)("p",{children:[n[28].value,(0,e.jsx)("code",{children:n[29].value}),n[30].value,(0,e.jsx)("code",{children:n[31].value}),n[32].value]}),(0,e.jsx)(r.Z,{autorun:!0,children:`import { Button, ConfigProvider, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token\uFF0C\u5F71\u54CD\u8303\u56F4\u5927
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // \u6D3E\u751F\u53D8\u91CF\uFF0C\u5F71\u54CD\u8303\u56F4\u5C0F
        colorBgContainer: '#f6ffed',
      },
    }}
  >
    <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
    </Space>
  </ConfigProvider>
);

export default App;`}),(0,e.jsxs)("h3",{id:"\u4F7F\u7528\u9884\u8BBE\u7B97\u6CD5",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528\u9884\u8BBE\u7B97\u6CD5",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528\u9884\u8BBE\u7B97\u6CD5"]}),(0,e.jsx)("p",{children:n[34].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n[35].value,(0,e.jsx)("code",{children:n[36].value})]}),(0,e.jsxs)("li",{children:[n[37].value,(0,e.jsx)("code",{children:n[38].value})]}),(0,e.jsxs)("li",{children:[n[39].value,(0,e.jsx)("code",{children:n[40].value})]})]}),(0,e.jsxs)("p",{children:[n[41].value,(0,e.jsx)("code",{children:n[42].value}),n[43].value,(0,e.jsx)("code",{children:n[44].value}),n[45].value]}),(0,e.jsx)(r.Z,{dark:!0,children:`import React from 'react';
import { Button, ConfigProvider, Input, Space, theme } from 'antd';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      // 1. \u5355\u72EC\u4F7F\u7528\u6697\u8272\u7B97\u6CD5
      algorithm: theme.darkAlgorithm,

      // 2. \u7EC4\u5408\u4F7F\u7528\u6697\u8272\u7B97\u6CD5\u4E0E\u7D27\u51D1\u7B97\u6CD5
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
  >
    <Space>
      <Input placeholder="Please Input" />
      <Button type="primary">Submit</Button>
    </Space>
  </ConfigProvider>
);

export default App;`}),(0,e.jsxs)("h3",{id:"\u4FEE\u6539\u7EC4\u4EF6\u53D8\u91CF",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4FEE\u6539\u7EC4\u4EF6\u53D8\u91CF",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4FEE\u6539\u7EC4\u4EF6\u53D8\u91CF"]}),(0,e.jsx)("p",{children:n[47].value})]}),(0,e.jsxs)(u.Z,{type:"info",title:"\u7EC4\u4EF6\u7EA7\u522B\u7684\u4E3B\u9898\u7B97\u6CD5",children:[(0,e.jsx)("p",{children:n[48].value}),(0,e.jsxs)("p",{children:[n[49].value,(0,e.jsx)("code",{children:n[50].value}),n[51].value,(0,e.jsx)("code",{children:n[52].value}),n[53].value]})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)(r.Z,{children:`import React from 'react';
import { ConfigProvider, Button, Space, Input, Divider } from 'antd';

const App: React.FC = () => (
  <>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#00b96b',
            algorithm: true, // \u542F\u7528\u7B97\u6CD5
          },
          Input: {
            colorPrimary: '#eb2f96',
            algorithm: true, // \u542F\u7528\u7B97\u6CD5
          }
        },
      }}
    >
      <Space>
        <div style={{ fontSize: 14 }}>\u5F00\u542F\u7B97\u6CD5\uFF1A</div>
        <Input placeholder="Please Input" />
        <Button type="primary">Submit</Button>
      </Space>
    </ConfigProvider>
    <Divider />
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#00b96b',
          },
          Input: {
            colorPrimary: '#eb2f96',
          }
        },
      }}
    >
      <Space>
        <div style={{ fontSize: 14 }}>\u7981\u7528\u7B97\u6CD5\uFF1A</div>
        <Input placeholder="Please Input" />
        <Button type="primary">Submit</Button>
      </Space>
    </ConfigProvider>
  </>
);

export default App;`}),(0,e.jsxs)("h3",{id:"\u7981\u7528\u52A8\u753B",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u7981\u7528\u52A8\u753B",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u7981\u7528\u52A8\u753B"]}),(0,e.jsxs)("p",{children:[n[55].value,(0,e.jsx)("code",{children:n[56].value}),n[57].value,(0,e.jsx)("code",{children:n[58].value}),n[59].value,(0,e.jsx)("code",{children:n[60].value}),n[61].value]}),(0,e.jsx)(r.Z,{children:`import React from 'react';
import { Switch, ConfigProvider, Space, Checkbox, Radio, Row, Col } from 'antd';

export default () => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    const id = setInterval(() => {
      setChecked((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const nodes = (
    <Space>
      <Checkbox checked={checked}>Checkbox</Checkbox>
      <Radio checked={checked}>Radio</Radio>
      <Switch checked={checked} />
    </Space>
  );

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>{nodes}</Col>

      <Col span={24}>
        <ConfigProvider
          theme={{
            token: {
              motion: false,
            },
          }}
        >
          {nodes}
        </ConfigProvider>
      </Col>
    </Row>
  );
};`}),(0,e.jsxs)("h2",{id:"\u8FDB\u9636\u4F7F\u7528",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u8FDB\u9636\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8FDB\u9636\u4F7F\u7528"]}),(0,e.jsxs)("h3",{id:"\u52A8\u6001\u5207\u6362",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u52A8\u6001\u5207\u6362",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u52A8\u6001\u5207\u6362"]}),(0,e.jsxs)("p",{children:[n[63].value,(0,e.jsx)("code",{children:n[64].value}),n[65].value,(0,e.jsx)("code",{children:n[66].value}),n[67].value]}),(0,e.jsx)(r.Z,{children:`import { Button, ConfigProvider, Space, Input, ColorPicker, Divider } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const [primary, setPrimary] = React.useState('#1677ff');

  return (
    <>
      <ColorPicker showText value={primary} onChangeComplete={(color) => setPrimary(color.toHexString())} />
      <Divider />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: primary,
          },
        }}
      >
        <Space>
          <Input placeholder="Please Input" />
          <Button type="primary">Submit</Button>
        </Space>
      </ConfigProvider>
    </>
  );
}

export default App;`}),(0,e.jsxs)("h3",{id:"\u5C40\u90E8\u4E3B\u9898\u5D4C\u5957\u4E3B\u9898",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5C40\u90E8\u4E3B\u9898\u5D4C\u5957\u4E3B\u9898",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5C40\u90E8\u4E3B\u9898\uFF08\u5D4C\u5957\u4E3B\u9898\uFF09"]}),(0,e.jsxs)("p",{children:[n[69].value,(0,e.jsx)("code",{children:n[70].value}),n[71].value]}),(0,e.jsx)(r.Z,{children:`import React from 'react';
import { Button, ConfigProvider, Space } from 'antd';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#1677ff',
      },
    }}
  >
    <Space>
      <Button type="primary">Theme 1</Button>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <Button type="primary">Theme 2</Button>
      </ConfigProvider>
    </Space>
  </ConfigProvider>
);

export default App;`}),(0,e.jsxs)("h3",{id:"\u4F7F\u7528-design-token",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528-design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528 Design Token"]}),(0,e.jsxs)("p",{children:[n[73].value,(0,e.jsx)("code",{children:n[74].value}),n[75].value]}),(0,e.jsx)(r.Z,{children:`import React from 'react';
import { Button, theme } from 'antd';

const { useToken } = theme;

const App: React.FC = () => {
  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorPrimaryBg,
        padding: token.padding,
        borderRadius: token.borderRadius,
        color: token.colorPrimaryText,
        fontSize: token.fontSize,
      }}
    >
      \u4F7F\u7528 Design Token
    </div>
  );
};

export default App;`}),(0,e.jsxs)("h3",{id:"\u9759\u6001\u6D88\u8D39\u5982-less",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u9759\u6001\u6D88\u8D39\u5982-less",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u9759\u6001\u6D88\u8D39\uFF08\u5982 less\uFF09"]}),(0,e.jsxs)("p",{children:[n[77].value,(0,e.jsx)("code",{children:n[78].value}),n[79].value]}),(0,e.jsx)(s.Z,{lang:"jsx",children:n[80].value}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[81].value}),n[82].value,(0,e.jsx)("code",{children:n[83].value}),n[84].value]}),(0,e.jsx)(s.Z,{lang:"tsx",children:n[85].value}),(0,e.jsx)("p",{children:n[86].value}),(0,e.jsx)(s.Z,{lang:"jsx",children:n[87].value}),(0,e.jsxs)("p",{children:[n[88].value,(0,e.jsx)(d.Z,{to:"/docs/react/migration-v5",sourceType:"Link",children:n[89].value}),n[90].value]}),(0,e.jsxs)("h3",{id:"\u8C03\u8BD5\u4E3B\u9898",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u8C03\u8BD5\u4E3B\u9898",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8C03\u8BD5\u4E3B\u9898"]}),(0,e.jsxs)("p",{children:[n[91].value,(0,e.jsx)(d.Z,{to:"/theme-editor-cn",sourceType:"Link",children:n[92].value})]}),(0,e.jsx)("p",{children:n[93].value}),(0,e.jsxs)("h2",{id:"\u57FA\u672C\u6982\u5FF5",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u672C\u6982\u5FF5",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u6982\u5FF5"]}),(0,e.jsx)("p",{children:n[94].value}),(0,e.jsxs)("h3",{id:"\u6F14\u53D8\u8FC7\u7A0B",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u6F14\u53D8\u8FC7\u7A0B",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6F14\u53D8\u8FC7\u7A0B"]}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*uF3kTrY4InUAAAAAAAAAAAAAARQnAQ",alt:"token"})}),(0,e.jsxs)("h3",{id:"\u57FA\u7840\u53D8\u91CFseed-token",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u53D8\u91CFseed-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u53D8\u91CF\uFF08Seed Token\uFF09"]}),(0,e.jsxs)("p",{children:[n[95].value,(0,e.jsx)("code",{children:n[96].value}),n[97].value]}),(0,e.jsx)(s.Z,{lang:"tsx",children:n[98].value}),(0,e.jsxs)("h3",{id:"\u68AF\u5EA6\u53D8\u91CFmap-token",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u68AF\u5EA6\u53D8\u91CFmap-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u68AF\u5EA6\u53D8\u91CF\uFF08Map Token\uFF09"]}),(0,e.jsxs)("p",{children:[n[99].value,(0,e.jsx)("code",{children:n[100].value}),n[101].value,(0,e.jsx)("code",{children:n[102].value}),n[103].value]}),(0,e.jsx)(s.Z,{lang:"tsx",children:n[104].value}),(0,e.jsxs)("h3",{id:"\u522B\u540D\u53D8\u91CFalias-token",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u522B\u540D\u53D8\u91CFalias-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u522B\u540D\u53D8\u91CF\uFF08Alias Token\uFF09"]}),(0,e.jsx)("p",{children:n[105].value}),(0,e.jsx)(s.Z,{lang:"tsx",children:n[106].value}),(0,e.jsxs)("h3",{id:"\u57FA\u672C\u7B97\u6CD5algorithm",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u672C\u7B97\u6CD5algorithm",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u7B97\u6CD5\uFF08algorithm)"]}),(0,e.jsx)("p",{children:n[107].value}),(0,e.jsx)(s.Z,{lang:"tsx",children:n[108].value}),(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"theme",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#theme",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Theme"]}),(0,e.jsxs)(t.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[109].value}),(0,e.jsx)("th",{children:n[110].value}),(0,e.jsx)("th",{children:n[111].value}),(0,e.jsx)("th",{children:n[112].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[113].value}),(0,e.jsx)("td",{children:n[114].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[115].value})}),(0,e.jsx)("td",{children:n[116].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[117].value}),(0,e.jsx)("td",{children:n[118].value}),(0,e.jsx)("td",{children:n[119].value}),(0,e.jsx)("td",{children:n[120].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[121].value}),(0,e.jsx)("td",{children:n[122].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[123].value}),n[124].value,(0,e.jsx)("code",{children:n[125].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[126].value})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{children:n[128].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[129].value})}),(0,e.jsx)("td",{children:n[130].value})]})]})]}),(0,e.jsxs)("h3",{id:"componentsconfig",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#componentsconfig",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ComponentsConfig"]}),(0,e.jsxs)(t.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[131].value}),(0,e.jsx)("th",{children:n[132].value}),(0,e.jsx)("th",{children:n[133].value}),(0,e.jsx)("th",{children:n[134].value})]})}),(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[135].value}),n[136].value,(0,e.jsx)("code",{children:n[137].value}),n[138].value]}),(0,e.jsx)("td",{children:n[139].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[140].value}),n[141].value,(0,e.jsx)("code",{children:n[142].value})]}),(0,e.jsx)("td",{children:n[143].value})]})})]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[n[144].value,(0,e.jsx)("code",{children:n[145].value}),n[146].value,(0,e.jsx)("code",{children:n[147].value}),n[148].value,(0,e.jsx)("code",{children:n[149].value}),n[150].value,(0,e.jsx)("code",{children:n[151].value}),n[152].value]})}),(0,e.jsxs)("h3",{id:"seedtoken",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#seedtoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"SeedToken"]})]}),(0,e.jsx)(a.Z,{type:"seed"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"maptoken",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#maptoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"MapToken"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:n[153].value})})]}),(0,e.jsx)(a.Z,{type:"map"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"aliastoken",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#aliastoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"AliasToken"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:n[154].value})})]}),(0,e.jsx)(a.Z,{type:"alias"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"\u4E3A\u4EC0\u4E48-theme-\u4ECE-undefined-\u53D8\u4E3A\u5BF9\u8C61\u6216\u8005\u53D8\u4E3A-undefined-\u65F6\u7EC4\u4EF6\u91CD\u65B0-mount-\u4E86",children:[(0,e.jsx)(d.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48-theme-\u4ECE-undefined-\u53D8\u4E3A\u5BF9\u8C61\u6216\u8005\u53D8\u4E3A-undefined-\u65F6\u7EC4\u4EF6\u91CD\u65B0-mount-\u4E86",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4EC0\u4E48 ",(0,e.jsx)("code",{children:n[155].value})," \u4ECE ",(0,e.jsx)("code",{children:n[156].value})," \u53D8\u4E3A\u5BF9\u8C61\u6216\u8005\u53D8\u4E3A ",(0,e.jsx)("code",{children:n[157].value})," \u65F6\u7EC4\u4EF6\u91CD\u65B0 mount \u4E86\uFF1F"]}),(0,e.jsxs)("p",{children:[n[158].value,(0,e.jsx)("code",{children:n[159].value}),n[160].value,(0,e.jsx)("code",{children:n[161].value}),n[162].value,(0,e.jsx)("code",{children:n[163].value}),n[164].value,(0,e.jsx)("code",{children:n[165].value}),n[166].value,(0,e.jsx)("code",{children:n[167].value}),n[168].value]})]})]})})}l.default=c}}]);
