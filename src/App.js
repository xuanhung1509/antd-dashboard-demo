import logo from './assets/logo.png';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Sider } = Layout;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState(1);
  const handleSelectMenuItem = ({ key, keyPath }) => {
    setContent(key);
  };

  return (
    <Layout>
      <Header className='flex justify-start items-center gap-4 h-20 px-0 bg-white shadow-lg z-10'>
        <div className='h-full w-72 px-12 py-2 pb-4 bg-slate-50'>
          <img src={logo} alt='' className='h-full' />
        </div>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          }
        )}
      </Header>
      <Layout className='h-screen'>
        <Sider
          width={288}
          trigger={null}
          collapsible
          collapsed={collapsed}
          className='site-layout-background'
        >
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
            onClick={handleSelectMenuItem}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {content}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;

// click on the menu item => get the id to fetch content, get the label including icon
