import { Form, InputNumber as AntdInputNumber } from "antd";

import React from "react";

type Props = {
  name: string;
  label: string | React.ReactNode;
};

const InputNumberSeparator = ({ name, label }: Props) => {
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
        addonAfter={"€"}
        style={{ width: "100%", height: "100%" }}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        parser={(value) => value?.replace(/\$\s?|( )/g, "") ?? ""}
      />
    </Form.Item>
  );
};

export default InputNumberSeparator;
