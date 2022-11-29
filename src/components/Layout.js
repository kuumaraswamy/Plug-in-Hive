import {  UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';
import Navbar from './Navbar'
import classes from "./Layout.module.css"
import UI from "./ui"
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;



const App = () => (
  <>
   

    <Layout>
     
      <h1 className={classes.h1} >Plug In Live</h1>
      <Avatar className={classes.avatar}
        size={{ xs: 24, sm: 32, md: 30, lg: 64, xl: 60, xxl: 100 }}
        icon={<UserOutlined /> }
       />

    <Layout>
        <Sider>
            <Navbar/>
        </Sider>
        <Content>
            <UI/>
        </Content>
      </Layout>
      <Footer className={classes.footer}> CopyRight ©2022 Created Kumara swamy</Footer>
    </Layout>

   
  </>
);
export default App;