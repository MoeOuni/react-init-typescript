import { validIban } from "@/utils/funcs/validators";
import { Form, Input } from "antd";
import React from "react";

type Props = {
  name: string;
  label: string | React.ReactNode;
};
const IbanInput = ({ name, label }: Props) => (
  <Form.Item
    label={label}
    name={name}
    rules={[
      {
        required: true,
        whitespace: true,
        message: "Veuillez saisir l'IBAN.",
      },
      {
        validator: (_, value) => {
          if (!validIban(value)) {
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

export default IbanInput;
