import { validFirstName } from "@/utils/funcs/validators";
import { Input, Form } from "antd";
import React from "react";

type Props = {
  name: string;
  label: string | React.ReactNode;
};

const FirstNameInput = ({ name, label }: Props) => (
  <Form.Item
    label={label}
    name={name}
    rules={[
      {
        required: true,
        whitespace: true,
        message: "Please input your First Name!",
      },
      {
        validator: (_: any, value: string) => {
          if (!validFirstName(value)) {
            return Promise.reject(new Error("Veuillez vérifier ce champ."));
          }
          return Promise.resolve();
        },
      },
    ]}
  >
    <Input />
  </Form.Item>
);

export default FirstNameInput;
