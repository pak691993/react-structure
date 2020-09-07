import { Layout, Menu } from "antd";
import React from "react";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}></Menu>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
