import React, { useState } from 'react';
import {SettingOutlined, BarcodeOutlined,DashboardOutlined,UserOutlined,PartitionOutlined,BuildOutlined} from '@ant-design/icons';
import { Menu} from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  
    getItem('Dashboard', '1',<DashboardOutlined />),
    getItem('Reports', '2', <DashboardOutlined /> ),
    getItem('Drives', '3',<BuildOutlined />),   
    getItem('Reports', '4',<DashboardOutlined />),
    getItem('Partners', '5', <PartitionOutlined /> ),
    getItem('Users', '6',<UserOutlined />),   
    getItem('Billing', '7', <BarcodeOutlined />),
    getItem('Setting', '8', <SettingOutlined />), 
]
const App = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      
      <br />
      <br />
      <Menu
       onChange={changeTheme}
        theme={theme}
        onClick={onClick}
        style={{
          width: 200,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};
export default App;