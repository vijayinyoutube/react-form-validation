import { Button, ConfigProvider } from "antd";
import "../CSS/custom.css";

function ActionBtns() {
  return (
    <div className="flex justify-between mt-5">
      <div>
        <Button>Cancel</Button>
      </div>

      <div className="min-w-[5px]"></div>
      <div>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                // paddingInline:20, //  * * * button width * * *
                // controlHeight:35  //  * * * button height * * *
              },
            },
          }}
        >
          <Button className="ReqPaymentBtn">
            <div className="">Request Payment</div>
          </Button>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default ActionBtns;
