import React from "react";
import { Outlet } from "react-router-dom";
import { getToken } from "@utils/auth";
import RootHeader from "./RootHeader";
import RootFooter from "./RootFooter";
import { Layout } from "antd";
import JsonDrawer from "@/components/views/JsonDrawer";

const { Content } = Layout;
const Root: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();

    // if (!token) {
    //   navigate("/login");
    // }
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <RootHeader />
      <Content
        style={{
          minHeight: "calc(100vh - 92px - 69px - 3rem)",
          width: "90%",
          border: "1px solid #F5F5F5",
          padding: "1rem 1.5rem",
          borderRadius: 13,
          margin: "1.5rem auto",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
      >
        <Outlet />
      </Content>
      <JsonDrawer />
      <RootFooter />
    </div>
  );
};

export default Root;
