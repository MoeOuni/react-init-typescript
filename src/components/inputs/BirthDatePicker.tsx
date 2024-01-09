import { validBirthDate } from "@/utils/funcs/validators";
import { DatePicker, Form } from "antd";
import React from "react";

type Props = {
  name: string;
  label: string | React.ReactNode;
};

const BirthDatePicker = ({ name, label }: Props) => {
  return (
    <Form.Item
      tooltip="Date de naissance avec un age inférieur à 18 ans."
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: "Veuillez remplir ce champ.",
        },
      ]}
    >
      <DatePicker
        disabledDate={(current) => validBirthDate(current)}
        format={"DD/MM/YYYY"}
        placeholder="jj/mm/aaaa"
        style={{ width: "100%" }}
        size="large"
      />
    </Form.Item>
  );
};

export default BirthDatePicker;
