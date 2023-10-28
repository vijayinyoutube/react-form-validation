import { ConfigProvider } from "antd";
import Paymt_Req_Form from "./Presentation/Screens/Paymt_Req_Form/UI/Paymt_Req_Form";

const App = () => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgb(249 115 22)",
          },
        }}
      >
        <Paymt_Req_Form />
      </ConfigProvider>
    </div>
  );
};

export default App;
