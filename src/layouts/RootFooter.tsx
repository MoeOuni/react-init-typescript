import { Layout } from "antd";
import React from "react";

type Props = {};

const { Footer } = Layout;
const RootFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Website ©{new Date().getFullYear()} Created by Neopolis Team
    </Footer>
  );
};

export default RootFooter;
