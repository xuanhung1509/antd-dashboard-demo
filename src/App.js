import { useState } from 'react';
import { Layout, Menu, Space, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import logo from './assets/logo.png';
import { menuItems, content } from './data';

const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState(menuItems[0]);

  const handleSelectMenuItem = ({ key, keyPath }) => {
    let currentItem;

    if (keyPath.length === 1) {
      currentItem = menuItems.find((item) => item.key === key);
    } else if (keyPath.length === 2) {
      currentItem = menuItems
        .find((item) => item.key === keyPath[1])
        .children.find((item) => item.key === keyPath[0]);
    }

    setCurrentMenuItem(currentItem);
  };

  return (
    <Layout>
      <Header className='flex justify-start items-center gap-4 h-20 px-0 bg-white shadow-lg z-10'>
        <div className='bg-slate-50 h-full w-72 px-12 py-2 pb-4 '>
          <img src={logo} alt='' className='h-full' />
        </div>
        <Button
          type='text'
          className='trigger'
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
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
            items={menuItems}
            defaultSelectedKeys={['dashboard']}
            onClick={handleSelectMenuItem}
            className='h-full border-r-0'
          />
        </Sider>
        <Layout>
          <Space className='bg-white w-full p-6'>
            <span>{currentMenuItem.icon}</span>
            <span>{currentMenuItem.label}</span>
          </Space>
          <Content className='bg-white m-6 p-4'>
            <p>
              {content.find((item) => item.id === currentMenuItem.key)?.value ??
                'No content yet.'}
            </p>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
