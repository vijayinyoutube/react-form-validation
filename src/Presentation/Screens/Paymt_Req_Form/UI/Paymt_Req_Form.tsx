import { Card, ConfigProvider, Flex, Form, Input, Select } from "antd";
import { Space, Typography } from "antd";
import { useState } from "react";
import RequestTo from "../Comp/Req_To";

const { Text, Link } = Typography;

const Paymt_Req_Form = () => {
  const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  type FieldType = {
    requestTo?: string;
    name?: string;
    email?: string;
  };

  return (
    <Flex className="h-screen bg-sky-800" justify="center" align="center">
      <div className="lg:w-1/4 md:w-1/2 h-96 drop-shadow-lg bg-white rounded-md p-5">
        <Space direction="vertical" className="w-full">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
          >
            <Text className="font-medium text-2xl">Payment Request</Text>
            <div className="pt-2">
              <Text className="font-medium text-lg">Contact Details</Text>
            </div>
            {/* First Dropdown Input Field */}
            {RequestTo(selectedItems, setSelectedItems, filteredOptions)}
            {/* START: Second input field */}
            <div className="flex lg:flex-row md:flex-col flex-col mt-3">
              <div className="flex  flex-col lg:w-1/2 md:w-full  lg:mr-1 sm:mb-2 mb-0">
                <p className="">Name</p>

                <Form.Item<FieldType>
                  name="name"
                  className="mt-1 mb-0"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="flex flex-col lg:w-1/2 md:w-full lg:ml-1">
                <p>Email</p>
                <Form.Item<FieldType>
                  name="email"
                  className="mt-1 mb-0"
                  rules={[{ type: "email" }]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            {/* END: Second input field */}

            <div className="pt-4">
              <Text className="font-medium text-lg">Request Details</Text>
            </div>
          </Form>
        </Space>
      </div>
    </Flex>
  );
};

export default Paymt_Req_Form;
