import { Flex } from "antd"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import BalanceBar from "../components/BalanceBar"
import ActionsBar from "../components/ActionsBar"
import Tokens from "../components/Tokens"

const Home = () => {
  return (
    <Flex vertical style={{padding:"0 10px"}}>
      <Header title="Home"/>
      <SearchBar/>
      <BalanceBar wallet_title="invest" balance="1.965.225,35"/>
      <ActionsBar/>
      <Tokens/>
    </Flex>
  )
}

export default Home