import { Button, Col, Divider, Form, Row, Typography } from "antd";

import BicInput from "@inputs/BicInput";
import IbanInput from "@inputs/IbanInput";
import EmailInput from "@inputs/EmailInput";
import InputNumber from "@inputs/InputNumber";
import LastNameInput from "@inputs/LastNameInput";
import FirstNameInput from "@inputs/FirstNameInput";
import BirthDatePicker from "@inputs/BirthDatePicker";
import InputNumberSlider from "@inputs/InputNumberSlider";
import AdultBirthDatePicker from "@inputs/AdultBirthDatePicker";
import InputNumberSeparator from "@inputs/InputNumberSeparator";
import PhoneNumberInput from "@inputs/PhoneNumberInput";
import React from "react";

const CustomForm = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = React.useState<any>({});

  const handleFinish = (values: any) => {
    setFormValues(values);
  };
  return (
    <div>
      <Form layout="vertical" form={form} size="large" onFinish={handleFinish}>
        <Divider orientation="center">Basic</Divider>
        <Row gutter={16}>
          <Col span={8}>
            <FirstNameInput name="first_name" label="Prénom" />
          </Col>
          <Col span={8}>
            <LastNameInput name="last_name" label="Nom" />
          </Col>
          <Col span={8}>
            <EmailInput name="email" label="Email" />
          </Col>
          <Col span={8}>
            <PhoneNumberInput name="phone" label="N° Télèphone" />
          </Col>
        </Row>
        <Divider orientation="center">Banque Information</Divider>
        <Row gutter={16} justify={"center"}>
          <Col span={10}>
            <BicInput name="bic" label="BIC" />
          </Col>
          <Col span={10}>
            <IbanInput name="iban" label="IBAN" />
          </Col>
        </Row>
        <Divider orientation="center">Dates</Divider>
        <Row gutter={16} justify={"center"}>
          <Col span={8}>
            <AdultBirthDatePicker
              name="adult_birth_date"
              label="Date naissance Adulte"
            />
          </Col>
          <Col span={8}>
            <BirthDatePicker name="birth_date" label="Date naissance" />
          </Col>
        </Row>
        <Divider orientation="center">Numbers</Divider>
        <Row gutter={16} justify={"center"}>
          <Col span={8}>
            <InputNumber name="number" label="Number" />
          </Col>
          <Col span={8}>
            <InputNumberSeparator name="Number" label="Number (Separateur)" />
          </Col>
          <Col span={8}>
            <InputNumberSlider
              form={form}
              name={"number_slider"}
              label={"Number (Slider)"}
              min={0}
              max={500}
            />
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col span={4}>
            <Button type="primary" htmlType="submit" block>
              Soumettre
            </Button>
          </Col>
        </Row>
      </Form>
      <Typography.Title level={4}>Form Values :</Typography.Title>
      <Typography>
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </Typography>
    </div>
  );
};

export default CustomForm;
