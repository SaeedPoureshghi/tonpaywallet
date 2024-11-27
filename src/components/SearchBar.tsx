import { SearchOutlined } from "@ant-design/icons"
import { Flex, Input } from "antd"

const SearchBar = () => {
  return (
    <Flex style={{padding:"5px 0"}}>
        <Input style={{backgroundColor:"#f5f5f5", border:"none", borderRadius:"20px"}} placeholder="Search..." prefix={<SearchOutlined style={{color:"gray"}} />}/>
    </Flex>
  )
}

export default SearchBar