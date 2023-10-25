import { Card, Flex, Select } from "antd";
import { Space, Typography } from "antd";
import { useState } from "react";

const { Text, Link } = Typography;

const Paymt_Req_Form = () => {
  const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <Flex
      className="h-screen bg-sky-800 bg-[#f5f5f5]"
      justify="center"
      align="center"
    >
      <div className="w-1/4 h-96 drop-shadow-lg bg-white rounded-md p-5">
        <Space direction="vertical">
          <Text className="font-medium text-2xl">Payment Request</Text>
          <div className="pt-2">
            <Text className="font-medium text-lg">Contact Details</Text>
          </div>
          <div className="flex bg-red-100 w-auto">
            <Select
              mode="multiple"
              placeholder="Select your customer"
              value={selectedItems}
              onChange={setSelectedItems}
              options={filteredOptions.map((item) => ({
                value: item,
                label: item,
              }))}
            />
          </div>
        </Space>
      </div>
    </Flex>
  );
};

export default Paymt_Req_Form;
