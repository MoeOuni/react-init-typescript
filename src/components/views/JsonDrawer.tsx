import React, { useState } from "react";
import { AppContextProps } from "@/types";
import AppContext from "@/contexts/AppContext";
import type { DrawerProps } from "antd/es/drawer";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Drawer, FloatButton, Space, Typography } from "antd";

const JsonDrawer: React.FC = () => {
  const { formValues, open, setOpen } = useContext(
    AppContext
  ) as AppContextProps;

  const [size, setSize] = useState<DrawerProps["size"]>();

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FloatButton
        onClick={showLargeDrawer}
        icon={<QuestionCircleOutlined />}
        type="primary"
      />

      <Drawer
        title={`Form Values`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <Typography.Paragraph
          copyable={{ text: JSON.stringify(formValues, null, 2) }}
        >
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </Typography.Paragraph>
      </Drawer>
    </>
  );
};

export default JsonDrawer;
