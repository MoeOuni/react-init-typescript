import { Form, InputNumber as AntdInputNumber } from "antd";
import React from "react";

type Props = {
  name: string;
  label: string | React.ReactNode;
};

const InputNumber = ({ name, label }: Props) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: "Veuillez remplir ce champ.",
        },
      ]}
    >
      <AntdInputNumber
        controls={false}
        onKeyPress={(event: React.KeyboardEvent) => {
          if (event.which < 48 || event.which > 57) {
            event.preventDefault();
          }
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </Form.Item>
  );
};

export default InputNumber;
