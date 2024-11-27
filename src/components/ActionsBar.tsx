import { ArrowDownOutlined, ArrowUpOutlined, BankFilled, CreditCardFilled, HistoryOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";

const ActionsBar = () => {
  return (
    <Flex align="center" justify="space-around" style={{ padding: "10px 0px" }}>
      <Flex vertical gap={5} align="center">
        <Flex
          style={{
            borderRadius: "50%",
            backgroundColor: "#f1f1f1",
            padding: "10px",
          }}
        >
          <ArrowUpOutlined style={{ color: "black", fontSize: 16 }} />
        </Flex>
        <Flex>
          <Typography.Text style={{ fontWeight: 400, fontSize: 14 }}>
            Send
          </Typography.Text>
        </Flex>
      </Flex>

      <Flex vertical gap={5} align="center">
        <Flex
          style={{
            borderRadius: "50%",
            backgroundColor: "#f1f1f1",
            padding: "10px",
          }}
        >
          <ArrowDownOutlined style={{ color: "black", fontSize: 16 }} />
        </Flex>
        <Flex>
          <Typography.Text style={{ fontWeight: 400, fontSize: 14 }}>
            Receive
          </Typography.Text>
        </Flex>
      </Flex>


      <Flex vertical gap={5} align="center">
        <Flex
          style={{
            borderRadius: "50%",
            backgroundColor: "#f1f1f1",
            padding: "10px",
          }}
        >
          <CreditCardFilled style={{ color: "black", fontSize: 16 }} />
        </Flex>
        <Flex>
          <Typography.Text style={{ fontWeight: 400, fontSize: 14 }}>
            Buy
          </Typography.Text>
        </Flex>
      </Flex>

      <Flex vertical gap={5} align="center">
        <Flex
          style={{
            borderRadius: "50%",
            backgroundColor: "#f1f1f1",
            padding: "10px",
          }}
        >
          <BankFilled style={{ color: "black", fontSize: 16 }} />
        </Flex>
        <Flex>
          <Typography.Text style={{ fontWeight: 400, fontSize: 14 }}>
            Sell
          </Typography.Text>
        </Flex>
      </Flex>

      <Flex vertical gap={5} align="center">
        <Flex
          style={{
            borderRadius: "50%",
            backgroundColor: "#f1f1f1",
            padding: "10px",
          }}
        >
          <HistoryOutlined style={{ color: "black", fontSize: 16 }} />
        </Flex>
        <Flex>
          <Typography.Text style={{ fontWeight: 400, fontSize: 14 }}>
            History
          </Typography.Text>
        </Flex>
      </Flex>

      
    </Flex>
  );
};

export default ActionsBar;
