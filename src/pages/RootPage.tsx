import CustomForm from "@/components/forms/CustomForm";
import { Breadcrumb, Flex, Tag, Typography } from "antd";

type Props = {};

const RootPage = (props: Props) => {
  return (
    <div>
      <span>
        Toutes les entrées de données (inputs) présentées peuvent être trouvées
        sur{" "}
        <Tag color="blue">
          <Breadcrumb
            items={[
              {
                title: <Typography.Text strong>src</Typography.Text>,
              },
              {
                title: <Typography.Text strong>components</Typography.Text>,
              },
              {
                title: <Typography.Text strong>inputs</Typography.Text>,
              },
            ]}
          />
        </Tag>
      </span>

      <Flex align="center" justify="center">
        <CustomForm />
      </Flex>
    </div>
  );
};

export default RootPage;
