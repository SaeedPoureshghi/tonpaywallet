import { Flex } from "antd"
import "./App.css"
import Home from "./pages/Home"
import WebApp from "@twa-dev/sdk"
const App = () => {

  WebApp.ready();

  return (
    <Flex vertical
    style={{
      paddingTop: WebApp?.contentSafeAreaInset.top,
      paddingBottom: WebApp?.contentSafeAreaInset.bottom,
      paddingLeft: WebApp?.contentSafeAreaInset.left,
      paddingRight: WebApp?.contentSafeAreaInset.right,
    }}
    >
      <Home/>

    </Flex>

  )
}

export default App