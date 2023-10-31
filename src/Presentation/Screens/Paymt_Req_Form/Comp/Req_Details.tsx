import {
  Form,
  Input,
  DatePicker,
  Typography,
  Alert,
  Select,
  Divider,
  InputNumber,
} from "antd";
import { CaretDownOutlined, BellOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

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
  date: string;
  amount: string;
  companyName: string;
  DestAccnt: string;
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
                  message: "Please enter the amount",
                },
              ]}
            >
              <InputNumber
                controls={false}
                prefix="$"
                suffix="USD"
                className="text-gray-400 font-light w-full"
              />
            </Form.Item>
          </div>
          <div className="flex flex-col lg:w-1/2 md:w-full sm:mb-2 mb-0 ">
            <p>Due Date</p>
            <Form.Item
              className="mt-1 mb-0 pb-0"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please enter due date",
                },
              ]}
            >
              <DatePicker className="mb-0 w-full" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="">Company name to show on request</p>
        <FormItem<FieldType>
          name="companyName"
          rules={[
            {
              required: true,
              message: "Please enter company name",
            },
          ]}
        >
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
        </FormItem>
      </div>
      <div className="mt-4">
        <p className="">Destination Account</p>
        <FormItem<FieldType>
          name="DestAccnt"
          rules={[
            {
              required: true,
              message: "Please enter destination account",
            },
          ]}
        >
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
        </FormItem>
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
