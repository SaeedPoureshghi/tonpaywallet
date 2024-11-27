import { PlusCircleFilled, SettingFilled } from "@ant-design/icons"
import { Flex, Typography } from "antd"


interface Props {
    title : string
}
const Header = (props:Props) => {
  return (
    <Flex align="center" justify="space-between" style={{padding:"10px 0px"}}>
        <SettingFilled style={{color:"gray"}}/>
        <Typography.Text style={{fontWeight:500}}>{props.title}</Typography.Text>
        <PlusCircleFilled style={{color:"gray"}}/>
    </Flex>
  )
}

export default Header