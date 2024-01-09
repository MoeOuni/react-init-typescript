import { validLastName } from "@/utils/funcs/validators";
import { Form, Input } from "antd";
import React from "react";

type Props = {
  name: string;
  label: string | React.ReactNode;
};

const LastNameInput = ({ name, label }: Props) => (
  <Form.Item
    label={label}
    name={name}
    rules={[
      {
        required: true,
        whitespace: true,
        message: "Veuillez saisir votre nom !",
      },
      {
        validator: (_, value) => {
          if (!validLastName(value)) {
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

export default LastNameInput;
