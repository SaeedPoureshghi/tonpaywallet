import {Flex, Result, Skeleton, Tabs, TabsProps, Typography } from "antd"
import useTokens, { IToken } from "../hooks/useTokens";


function groupDigits(num: number): string {
    const parts = num.toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    if (parts[1]) {
        parts[1] = parts[1].replace(/(\d{3})(?=\d)/g, '$1,');
    }
    return parts.join(',');
}



const TokenList = () => {

    const {tokens} = useTokens();

    if (!tokens) {
        return(<Skeleton/>)
    }
    return (
        <Flex vertical style={{gap:10}}>
            {tokens.map((token: IToken, index:number) => (
                <Flex key={index} align="center" justify="space-between" style={{gap:10}}>
                    <Flex flex={1} align="center" style={{gap:10}}>
                        <img src={token.icon} alt={token.symbol} style={{width:30, height:30, borderRadius:"50%"}}/>
                        <Flex vertical>
                            <Flex align="center">

                            <Typography.Text style={{fontWeight:500}}>{token.symbol}</Typography.Text>   
                            <Typography.Text style={{color:"gray", fontSize:10,padding:"1px 2px", marginLeft:5, backgroundColor:"#f1f1f1"}}>{token.network}</Typography.Text>
                            </Flex>
                            <Flex>
                                
                                <Typography.Text style={{color:"gray", fontSize:12}}>₺{groupDigits(parseFloat(token.price ?? "0"))}</Typography.Text>
                                <Typography.Text type={(parseFloat(token.change) >= 0)? "success":"danger"} style={{fontSize:12, marginLeft:5}}>{token.change}%</Typography.Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex vertical align="flex-end">
                        <Typography.Text style={{color:"black", fontSize:14, fontWeight:500}}>{groupDigits(parseFloat(token.balance))}</Typography.Text>
                        <Typography.Text style={{color:"gray", fontSize:12}}>₺{groupDigits(parseFloat(token.price ?? "0") * parseFloat(token.balance))}</Typography.Text>
                </Flex>
                </Flex>
            ))}
        </Flex>
    )
}

const Tokens = () => {


    const items : TabsProps["items"] = [
        {key:"1", label:"Crypo", children: <TokenList/>},
        {key:"2", label:"NFTs",
            children: <Flex vertical flex={1}><Result subTitle="No NFTs yet. Purchased or received NFTs will show up here" /></Flex>
        }
     
    ]


  return (
    <Flex vertical style={{padding:"10px 0"}}>

        <Tabs items={items}/>

    </Flex>
  )
}

export default Tokens