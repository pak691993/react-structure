import React, { Suspense } from 'react';
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';

import { Layout, Spin } from 'antd';
const { Content, Footer } = Layout;

export const PrivateLayout = props => (
  <>
    <Header />
    <Layout style={{ minHeight: '100vh' }} className="app-layout">
      <SideBar />
      <Layout>
        <Content style={{ margin: '15px' }}>
          <Suspense
            fallback={
              <Spin>
                <div className="is-spining" />
              </Spin>
            }
          >
            <div className="main-content">{props.children}</div>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
    <Footer style={{ textAlign: 'center' }}>©2020 ABC</Footer>
  </>
);
