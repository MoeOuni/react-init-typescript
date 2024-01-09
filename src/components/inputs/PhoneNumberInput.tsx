import React from "react";
import PhoneInput from "antd-phone-input";
import { Form } from "antd";

type Props = {
  name: string;
  label: string | React.ReactNode;
};

const validator = (_: any, { valid }: { valid: any }) => {
  if (valid()) return Promise.resolve(); // non-strict validation
  return Promise.reject("Veuillez valider le numéro de téléphone.");
};

const PhoneNumberInput = ({ name, label }: Props) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        { required: true, message: "Veuillez remplir le champ." },
        { validator },
      ]}
    >
      <PhoneInput enableSearch />
    </Form.Item>
  );
};

export default PhoneNumberInput;
