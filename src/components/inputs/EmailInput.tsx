import { Form, Input } from 'antd';
import React from 'react'

type Props = {
    name: string;
    label: string | React.ReactNode;
  };
const EmailInput = ({ name, label }: Props) => (
    <Form.Item
    label={label}
    name={name}
      rules={[
        {
          type: "email",
          message: "The input is not valid E-mail!",
        },
        {
          required: true,
          whitespace: true,
          message: "Please input your E-mail!",
        },
      ]}
     
    >
      <Input />
    </Form.Item>
  );

export default EmailInput