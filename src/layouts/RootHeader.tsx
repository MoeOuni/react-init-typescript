import { Button, Flex, Layout } from "antd";
import React from "react";

const { Header } = Layout;
const RootHeader: React.FC = () => {
  return (
    <Header
      style={{
        background: "#FFF",
        height: 92,
        paddingBottom: "2rem",
        borderBottom: "1px solid #F5F5F5",
      }}
    >
      <Flex align="center" justify="space-between">
        <div className="demo-logo" />
        <h1>Title</h1>
        <Button type="primary" size="large" shape="round">
          Optional Button
        </Button>
      </Flex>
    </Header>
  );
};

export default RootHeader;
