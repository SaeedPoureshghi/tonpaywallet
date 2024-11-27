import { BellFilled, CaretDownFilled, CopyFilled, EyeFilled, ScanOutlined } from "@ant-design/icons"
import { Flex, Typography } from "antd"

interface Props {
    wallet_title : string;
    balance: string;
}

const BalanceBar = (props:Props) => {
  return (
    <Flex  justify="space-between" style={{padding:"5px 0"}}>
        <Flex vertical>
            <Flex gap={5}>
                <EyeFilled style={{color:"gray"}}/>
                <Typography.Text>{props.wallet_title}</Typography.Text>
                <CaretDownFilled style={{color:"gray"}}/>
            </Flex>
            <Flex>
                <Typography.Text style={{fontWeight:500, fontSize:24}}><b>₺</b>{props.balance} </Typography.Text>
            </Flex>
        </Flex>
        <Flex gap={10}>
            <Flex style={{backgroundColor:"#f1f1f1", borderRadius:"5px", padding:"4px", alignSelf:"flex-start"}} >
                <CopyFilled style={{color:"gray", fontSize:12}}/>
            </Flex>
            <Flex style={{backgroundColor:"#f1f1f1", borderRadius:"5px", padding:"4px", alignSelf:"flex-start"}} >
                <ScanOutlined style={{color:"gray", fontSize:12}}/>
            </Flex>
            <Flex style={{backgroundColor:"#f1f1f1", borderRadius:"5px", padding:"4px", alignSelf:"flex-start"}} >
                <BellFilled style={{color:"gray", fontSize:12}}/>
            </Flex>
      
        </Flex>
    </Flex>
  )
}

export default BalanceBar