import { validAdultBirthDate } from "@/utils/funcs/validators";
import { DatePicker, Form } from "antd";
import React from "react";

type Props = {
  name: string;
  label: string | React.ReactNode;
};

const AdultBirthDatePicker = ({ name, label }: Props) => {
  return (
    <Form.Item
      tooltip="Date de naissance avec un âge supérieur à 18 ans."
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
        disabledDate={(current) => validAdultBirthDate(current)}
        format={"DD/MM/YYYY"}
        placeholder="jj/mm/aaaa"
        style={{ width: "100%" }}
        size="large"
      />
    </Form.Item>
  );
};

export default AdultBirthDatePicker;
