import {
  Form,
  FormInstance,
  Slider,
  InputNumber as AntdInputNumber,
} from "antd";
import React from "react";

type Props = {
  form: FormInstance;
  name: string;
  label: string | React.ReactNode;
  min: number;
  max: number;
};

const InputNumberSlider = ({ form, name, label, min, max }: Props) => {
  const [inputValue, setInputValue] = useState<number | undefined | null>(
    form?.getFieldsValue()[name] ?? null
  );

  const handleChangeValue = (newValue: number | undefined | null) => {
    setInputValue(newValue);
    form.setFieldValue(name, newValue);
  };
  return (
    <>
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            required: true,
            message: "Veuillez remplir ce champ.",
          },
          () => ({
            validator(_, value) {
              if (value > max || value < min) {
                return Promise.reject(
                  new Error(`Value must be between ${min} and ${max}`)
                );
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <AntdInputNumber
          controls={false}
          style={{ width: "100%" }}
          onChange={(newValue) =>
            handleChangeValue(newValue as number | undefined | null)
          }
          onKeyPress={(event: React.KeyboardEvent) => {
            if (event.which < 48 || event.which > 57) {
              event.preventDefault();
            }
          }}
        />
      </Form.Item>
      <Slider
        onChange={(newValue) =>
          handleChangeValue(newValue as number | undefined | null)
        }
        value={inputValue ?? min}
        min={min}
        max={max}
      />
    </>
  );
};

export default InputNumberSlider;
