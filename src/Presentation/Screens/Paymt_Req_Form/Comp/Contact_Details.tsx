import { Divider, Form, Input, Select, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";

import React from "react";
const { Text } = Typography;

interface Props {
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  filteredOptions: string[];
}
type FieldType = {
  requestTo: string;
  name: string;
  email: string;
};

const ContactDetails = ({
  selectedItems,
  setSelectedItems,
  filteredOptions,
}: Props) => {
  return (
    <div>
      <div className="pt-1">
        <Text className="font-medium text-lg">Contact Details</Text>
      </div>{" "}
      <Divider className="Divider" />
      {RequestTo(selectedItems, setSelectedItems, filteredOptions)}
      {NameEmail()}
    </div>
  );
};

function RequestTo(
  selectedItems: string[],
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>,

  filteredOptions: string[]
) {
  return (
    <div className="mt-3">
      <div className="flex w-full justify-between">
        <p className="">Send Payment Request to</p>
        <InfoCircleOutlined />
      </div>
      <Form.Item<FieldType>
        name="requestTo"
        rules={[{ required: true, message: "Please select your customer" }]}
      >
        <Select
          suffixIcon={<CaretDownOutlined />}
          mode="multiple"
          className="mt-2 w-full"
          placeholder="Select your customer"
          value={selectedItems}
          onChange={setSelectedItems}
          options={filteredOptions.map((item) => ({
            value: item,
            label: item,
          }))}
        />
      </Form.Item>
    </div>
  );
}

function NameEmail() {
  return (
    <div className="flex lg:flex-row md:flex-col flex-col mt-3">
      <div className="flex  flex-col lg:w-1/2 md:w-full  lg:mr-2 sm:mb-2 mb-0">
        <p className="">Name</p>

        <Form.Item<FieldType>
          name="name"
          className="mt-1 mb-0"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>
      <div className="flex flex-col lg:w-1/2 md:w-full lg:ml-2sm:mb-2 mb-0">
        <p>Email</p>
        <Form.Item<FieldType>
          name="email"
          className="mt-1 mb-0"
          rules={[
            { type: "email" },
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>
    </div>
  );
}

export default ContactDetails;
