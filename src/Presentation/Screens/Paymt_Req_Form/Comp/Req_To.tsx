import { Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

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
      <Select
        mode="multiple"
        className="mt-3 w-full"
        placeholder="Select your customer"
        value={selectedItems}
        onChange={setSelectedItems}
        options={filteredOptions.map((item) => ({
          value: item,
          label: item,
        }))}
      />
    </div>
  );
}

export default RequestTo;
