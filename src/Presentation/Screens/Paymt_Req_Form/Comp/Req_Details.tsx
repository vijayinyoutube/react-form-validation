import {
  Form,
  Input,
  DatePicker,
  Typography,
  Alert,
  Select,
  Divider,
} from "antd";
import { CaretDownOutlined, BellOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Props {
  selectedCompany: string;
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
  selectedDestination: string;
  setSelectedDestination: React.Dispatch<React.SetStateAction<string>>;
  COMPANY_NAMES: string[];
  DEST_COMPANY_NAMES: string[];
}

type FieldType = {
  requestTo: string;
  name: string;
  email: string;
  amount: string;
};

function ReqDetails({
  selectedCompany,
  setSelectedCompany,
  DEST_COMPANY_NAMES,
  COMPANY_NAMES,
  selectedDestination,
  setSelectedDestination,
}: Props) {
  return (
    <>
      <div className="">
        <Text className="font-medium text-lg">Request Details</Text>
        <Divider className="Divider mb-3" />
        <div className="flex lg:flex-row md:flex-col flex-col mt-2">
          <div className="flex  flex-col lg:w-1/2 md:w-full  lg:mr-2 sm:mb-2 mb-0">
            <p className="">Amount</p>
            <Form.Item<FieldType>
              name="amount"
              className="mt-1 mb-0"
              rules={[
                {
                  required: true,
                  message: "Please input amount!",
                },
              ]}
            >
              <Input
                prefix="$"
                suffix="USD"
                className="text-gray-400 font-light"
              />
            </Form.Item>
          </div>
          <div className="flex flex-col lg:w-1/2 md:w-full sm:mb-2 mb-0 ">
            <p>Due Date</p>
            <Form.Item className="mt-1 mb-0 pb-0">
              <DatePicker className="mb-0 w-full" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="">Company name to show on request</p>
        <Select
          suffixIcon={<CaretDownOutlined />}
          className="mt-2 w-full"
          placeholder="Company name"
          value={selectedCompany}
          onChange={setSelectedCompany}
          options={COMPANY_NAMES.map((item) => ({
            value: item,
            label: item,
          }))}
        />
      </div>
      <div className="mt-4">
        <p className="">Destination Account</p>
        <Select
          suffixIcon={<CaretDownOutlined />}
          className="mt-2 w-full"
          placeholder="Select account..."
          value={selectedDestination}
          onChange={setSelectedDestination}
          options={DEST_COMPANY_NAMES.map((item) => ({
            value: item,
            label: item,
          }))}
        />
        <p className="text-xs text-gray-400 mt-1 font-[240]">
          Incoming payments are placed in a seperate secure account to keep
          destination account information ananymous.
        </p>
      </div>
      <div className="mt-4">
        <Alert
          message="Payment link will be valid for 3 days"
          type="success"
          showIcon
          icon={<BellOutlined style={{ fontSize: 16.9 }} />}
        />
      </div>
    </>
  );
}

export default ReqDetails;
