import { createContext, useEffect, useState } from "react";
export const CoinContext= createContext()

const CoinContextprovider=(props)=>{
    const[allCoin, setAllCoin]=useState([])
    const[currency,setcurrency]=useState({
        name:"usd",
        Symbol:"$",
    })

    const fetchAllcoin=async()=>{

        const options = {
            method: 'GET',
            
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-yQuMqVjDJzyxAERViTRDUCqy'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllcoin()
    },[currency])
  
 const contextValue={
    allCoin,currency,setcurrency

 }
    return(
        <CoinContext.Provider value={contextValue}> 
{props.children}
        </CoinContext.Provider>
    )

}
export default CoinContextprovider