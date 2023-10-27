import { Divider, Flex, Form } from "antd";
import { Space, Typography } from "antd";
import { useState } from "react";
import ContactDetails from "../Comp/Contact_Details";
import ReqDetails from "../Comp/Req_Details";
import ActionBtns from "../Comp/Action_Btn";

const { Text } = Typography;

const Paymt_Req_Form = () => {
  const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
  const COMPANY_NAMES = ["Google", "Apple", "Amazon", "vijaycreations"];
  const DEST_COMPANY_NAMES = ["ACC_1", "PAYPAL_ME", "STRIPE_ENT", "PAYME"];
  const [selectedCompany, setSelectedCompany] = useState(COMPANY_NAMES[0]);
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <Flex className="h-screen bg-sky-800 m-0" justify="center" align="center">
      <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2  mx-5 h-auto drop-shadow-lg bg-white rounded-md p-5">
        <Space direction="vertical" className="w-full">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
          >
            <Text className="font-medium text-2xl ">Payment Request</Text>
            <Divider className="Divider" />
            {/* * * *  Contact Details Input Fields * * * * */}
            <ContactDetails
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              filteredOptions={filteredOptions}
            />

            {/* * * *  Request Details Input Fields * * * * */}
            <ReqDetails
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
              selectedDestination={selectedDestination}
              setSelectedDestination={setSelectedDestination}
              COMPANY_NAMES={COMPANY_NAMES}
              DEST_COMPANY_NAMES={DEST_COMPANY_NAMES}
            />

            {/* * * *  Call To Action : Btm Buttons * * * * */}
            <ActionBtns />
          </Form>
        </Space>
      </div>
    </Flex>
  );
};

export default Paymt_Req_Form;
