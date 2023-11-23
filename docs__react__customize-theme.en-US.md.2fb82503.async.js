"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[80345],{671549:function(u,l,i){i.r(l);var x=i(863942),m=i(502143),j=i(968521),t=i(702951),v=i(521587),d=i(199100),o=i(828089),p=i(825673),g=i(902068),k=i(574399),f=i(316073),P=i(24628),C=i(719260),E=i(956140),T=i(127179),D=i(905388),y=i(245583),I=i(606965),A=i(268696),b=i(587302),s=i(424128),M=i(249706),O=i(795127),R=i(116846),a=i(720538),B=i(212039),r=i(73024),Z=i(553913),c=i(385956),S=i(667294),e=i(785893);function _(){var h=(0,c.useRouteMeta)(),n=h.texts;return(0,e.jsx)(c.DumiPage,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsx)("p",{children:n[1].value}),(0,e.jsxs)("ol",{children:[(0,e.jsx)("li",{children:n[2].value}),(0,e.jsx)("li",{children:n[3].value}),(0,e.jsx)("li",{children:n[4].value}),(0,e.jsx)("li",{children:n[5].value})]}),(0,e.jsxs)("h2",{id:"basic-usage",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Basic Usage"]}),(0,e.jsxs)("p",{children:[n[6].value,(0,e.jsx)("strong",{children:n[7].value}),n[8].value,(0,e.jsx)("code",{children:n[9].value}),n[10].value]})]}),(0,e.jsxs)(t.Z,{type:"warning",children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[11].value}),n[12].value,(0,e.jsx)("code",{children:n[13].value}),n[14].value,(0,e.jsx)("code",{children:n[15].value}),n[16].value,(0,e.jsx)("code",{children:n[17].value}),n[18].value,(0,e.jsx)("code",{children:n[19].value}),n[20].value]}),(0,e.jsxs)("p",{children:[n[21].value,(0,e.jsx)("code",{children:n[22].value}),n[23].value,(0,e.jsx)(s.Z,{to:"/components/app",sourceType:"Link",children:n[24].value}),n[25].value]})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"customize-design-token",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#customize-design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Customize Design Token"]}),(0,e.jsxs)("p",{children:[n[26].value,(0,e.jsx)("code",{children:n[27].value}),n[28].value,(0,e.jsx)("code",{children:n[29].value}),n[30].value]}),(0,e.jsx)(a.Z,{autorun:!0,children:`import { Button, ConfigProvider, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
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

export default App;`}),(0,e.jsxs)("h3",{id:"use-preset-algorithms",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#use-preset-algorithms",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Use Preset Algorithms"]}),(0,e.jsxs)("p",{children:[n[32].value,(0,e.jsx)("code",{children:n[33].value}),n[34].value]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n[35].value,(0,e.jsx)("code",{children:n[36].value})]}),(0,e.jsxs)("li",{children:[n[37].value,(0,e.jsx)("code",{children:n[38].value})]}),(0,e.jsxs)("li",{children:[n[39].value,(0,e.jsx)("code",{children:n[40].value})]})]}),(0,e.jsxs)("p",{children:[n[41].value,(0,e.jsx)("code",{children:n[42].value}),n[43].value,(0,e.jsx)("code",{children:n[44].value}),n[45].value]}),(0,e.jsx)(a.Z,{dark:!0,children:`import React from 'react';
import { Button, ConfigProvider, Input, Space, theme } from 'antd';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      // 1. Use dark algorithm
      algorithm: theme.darkAlgorithm,

      // 2. Combine dark algorithm and compact algorithm
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
  >
    <Space>
      <Input placeholder="Please Input" />
      <Button type="primary">Submit</Button>
    </Space>
  </ConfigProvider>
);

export default App;`}),(0,e.jsxs)("h3",{id:"customize-component-token",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#customize-component-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Customize Component Token"]}),(0,e.jsx)("p",{children:n[47].value})]}),(0,e.jsxs)(t.Z,{type:"info",title:"Algorithm",of:"",component:"",token:"",children:[(0,e.jsx)("p",{children:n[48].value}),(0,e.jsxs)("p",{children:[n[49].value,(0,e.jsx)("code",{children:n[50].value}),n[51].value,(0,e.jsx)("code",{children:n[52].value}),n[53].value]})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)(a.Z,{children:`import React from 'react';
import { ConfigProvider, Button, Space, Input, Divider } from 'antd';

const App: React.FC = () => (
  <>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#00b96b',
            algorithm: true, // Enable algorithm
          },
          Input: {
            colorPrimary: '#eb2f96',
            algorithm: true, // Enable algorithm
          }
        },
      }}
    >
      <Space>
        <div style={{ fontSize: 14 }}>Enable algorithm: </div>
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
        <div style={{ fontSize: 14 }}>Disable algorithm: </div>
        <Input placeholder="Please Input" />
        <Button type="primary">Submit</Button>
      </Space>
    </ConfigProvider>
  </>
);

export default App;`}),(0,e.jsxs)("h3",{id:"disable-motion",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#disable-motion",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Disable Motion"]}),(0,e.jsxs)("p",{children:[n[55].value,(0,e.jsx)("code",{children:n[56].value}),n[57].value,(0,e.jsx)("code",{children:n[58].value}),n[59].value,(0,e.jsx)("code",{children:n[60].value}),n[61].value]}),(0,e.jsx)(a.Z,{children:`import React from 'react';
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
};`}),(0,e.jsxs)("h2",{id:"advanced",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#advanced",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Advanced"]}),(0,e.jsxs)("h3",{id:"switch-themes-dynamically",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#switch-themes-dynamically",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Switch Themes Dynamically"]}),(0,e.jsxs)("p",{children:[n[63].value,(0,e.jsx)("code",{children:n[64].value}),n[65].value,(0,e.jsx)("code",{children:n[66].value}),n[67].value]}),(0,e.jsx)(a.Z,{children:`import { Button, ConfigProvider, Space, Input, ColorPicker, Divider } from 'antd';
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

export default App;`}),(0,e.jsxs)("h3",{id:"nested-theme",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#nested-theme",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Nested Theme"]}),(0,e.jsxs)("p",{children:[n[69].value,(0,e.jsx)("code",{children:n[70].value}),n[71].value]}),(0,e.jsx)(a.Z,{children:`import React from 'react';
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

export default App;`}),(0,e.jsxs)("h3",{id:"consume-design-token",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#consume-design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Consume Design Token"]}),(0,e.jsxs)("p",{children:[n[73].value,(0,e.jsx)("code",{children:n[74].value}),n[75].value]}),(0,e.jsx)(a.Z,{children:`import React from 'react';
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
      Consume Design Token
    </div>
  );
};

export default App;`}),(0,e.jsxs)("h3",{id:"static-consume-eg-less",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#static-consume-eg-less",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Static consume (e.g. less)"]}),(0,e.jsx)("p",{children:n[77].value}),(0,e.jsx)(d.Z,{lang:"jsx",children:n[78].value}),(0,e.jsxs)("p",{children:[n[79].value,(0,e.jsx)("code",{children:n[80].value}),n[81].value,(0,e.jsx)("code",{children:n[82].value}),n[83].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[84].value}),(0,e.jsx)("p",{children:n[85].value}),(0,e.jsx)(d.Z,{lang:"jsx",children:n[86].value}),(0,e.jsxs)("p",{children:[n[87].value,(0,e.jsx)(s.Z,{to:"/docs/react/migration-v5",sourceType:"Link",children:n[88].value}),n[89].value]}),(0,e.jsxs)("h3",{id:"theme-editor",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#theme-editor",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Theme editor"]}),(0,e.jsxs)("p",{children:[n[90].value,(0,e.jsx)(s.Z,{to:"/theme-editor",sourceType:"Link",children:n[91].value})]}),(0,e.jsx)("p",{children:n[92].value}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]}),(0,e.jsx)("p",{children:n[93].value}),(0,e.jsxs)("h3",{id:"life-of-design-token",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#life-of-design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Life of Design Token"]}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*uF3kTrY4InUAAAAAAAAAAAAAARQnAQ",alt:"token"})}),(0,e.jsxs)("h3",{id:"seed-token",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#seed-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Seed Token"]}),(0,e.jsxs)("p",{children:[n[94].value,(0,e.jsx)("code",{children:n[95].value}),n[96].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[97].value}),(0,e.jsxs)("h3",{id:"map-token",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#map-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Map Token"]}),(0,e.jsxs)("p",{children:[n[98].value,(0,e.jsx)("code",{children:n[99].value}),n[100].value,(0,e.jsx)("code",{children:n[101].value}),n[102].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[103].value}),(0,e.jsxs)("h3",{id:"alias-token",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#alias-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Alias Token"]}),(0,e.jsx)("p",{children:n[104].value}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[105].value}),(0,e.jsxs)("h3",{id:"algorithm",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#algorithm",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Algorithm"]}),(0,e.jsx)("p",{children:n[106].value}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[107].value}),(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"theme",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#theme",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Theme"]}),(0,e.jsxs)(o.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[108].value}),(0,e.jsx)("th",{children:n[109].value}),(0,e.jsx)("th",{children:n[110].value}),(0,e.jsx)("th",{children:n[111].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[112].value}),(0,e.jsx)("td",{children:n[113].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[114].value})}),(0,e.jsx)("td",{children:n[115].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[116].value}),(0,e.jsx)("td",{children:n[117].value}),(0,e.jsx)("td",{children:n[118].value}),(0,e.jsx)("td",{children:n[119].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[120].value}),(0,e.jsx)("td",{children:n[121].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[122].value}),n[123].value,(0,e.jsx)("code",{children:n[124].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[125].value})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[126].value}),(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[128].value})}),(0,e.jsx)("td",{children:n[129].value})]})]})]}),(0,e.jsxs)("h3",{id:"componentsconfig",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#componentsconfig",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ComponentsConfig"]}),(0,e.jsxs)(o.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[130].value}),(0,e.jsx)("th",{children:n[131].value}),(0,e.jsx)("th",{children:n[132].value}),(0,e.jsx)("th",{children:n[133].value})]})}),(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[134].value}),n[135].value,(0,e.jsx)("code",{children:n[136].value}),n[137].value]}),(0,e.jsx)("td",{children:n[138].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[139].value}),n[140].value,(0,e.jsx)("code",{children:n[141].value})]}),(0,e.jsx)("td",{children:n[142].value})]})})]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[143].value}),n[144].value,(0,e.jsx)("code",{children:n[145].value}),n[146].value,(0,e.jsx)("code",{children:n[147].value}),n[148].value]})}),(0,e.jsxs)("h3",{id:"seedtoken",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#seedtoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"SeedToken"]})]}),(0,e.jsx)(r.Z,{type:"seed"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"maptoken",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#maptoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"MapToken"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:n[149].value})})]}),(0,e.jsx)(r.Z,{type:"map"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"aliastoken",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#aliastoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"AliasToken"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:n[150].value})})]}),(0,e.jsx)(r.Z,{type:"alias"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"why-component-re-mounted-when-theme-changed-from-undefined-to-some-object-or-to-undefined",children:[(0,e.jsx)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-component-re-mounted-when-theme-changed-from-undefined-to-some-object-or-to-undefined",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why component re-mounted when ",(0,e.jsx)("code",{children:n[151].value})," changed from ",(0,e.jsx)("code",{children:n[152].value})," to some object or to ",(0,e.jsx)("code",{children:n[153].value}),"?"]}),(0,e.jsxs)("p",{children:[n[154].value,(0,e.jsx)("code",{children:n[155].value}),n[156].value,(0,e.jsx)("code",{children:n[157].value}),n[158].value,(0,e.jsx)("code",{children:n[159].value}),n[160].value,(0,e.jsx)("code",{children:n[161].value}),n[162].value,(0,e.jsx)("code",{children:n[163].value}),n[164].value]})]})]})})}l.default=_}}]);
