import { useEffect, useState } from "react";

export interface IToken {
    symbol: string;
    network: string;
    price?: string;
    change: string;
    balance: string;
    icon: string;
}

const mock_tokens : Partial<IToken[]> = [

    {
        symbol: "TON",
        network: "TON",
        change: "1.25",
        balance: "2301.65",
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png"

    },
    {
        symbol: "BNB",
        network: "BNB smart chain",
        change:"-3.80",
        balance: "0.633",
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"

    },
 
 



]


const useTokens = () => {

    const [tokens, setTokens] = useState<IToken[]>([]);


    useEffect(() => {

        async function getPrice(): Promise<IToken[]> {
            

            const tokenlist = await Promise.all(
                mock_tokens
                .filter((token): token is IToken => token !== undefined)
                .map(async (token: IToken) => {

                const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${token.symbol}TRY`);
                const data = await response.json();
                token.price = data.price;
                return token;

            }))

            return tokenlist;



        }

        getPrice().then((data) => setTokens(data));


    },[])

    return {tokens};


}

export default useTokens;