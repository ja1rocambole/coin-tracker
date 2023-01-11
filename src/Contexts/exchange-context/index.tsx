import React, { createContext, useState, SetStateAction } from "react";
import { awesomeApi } from "../../Services/awesome-api";
import { coinRankingApi } from "../../Services/coinranking-api";

interface iExchangeContextProps {
  children: React.ReactNode;
}

interface iExchangeContext {
  allCoins: [] | iCoin[]; 
  favoriteCoins: iCoin[]; 
  setFavoriteCoins: React.Dispatch<SetStateAction<[] | iCoin[]>>; 
  dollarPrice: number | null;
}

interface iCoin {
  name: string;
  price: string;
  iconUrl: string;
  rank: string;
  symbol: string;
}


export const ExchangeContext = createContext({} as iExchangeContext);

export const ExchangeProvider = ({ children }: iExchangeContextProps) => {

  const [allCoins, setAllCoins]   = useState<[] | iCoin[]>([])
  const [favoriteCoins, setFavoriteCoins]   = useState<[] | iCoin[]>([])
  const [dollarPrice, setDollarPrice]   = useState<number | null>(null)
  

  async function fetchAllCoins() {
    try {
      const fetch = await coinRankingApi.get(`/coins?scopeLimit=20`, {
        headers: {
          'x-access-token': 'coinranking4b49976245587b192ea41f41cb9c2d69147a79a9bb66f6d4'       
        },
      });
      console.log(fetch.data.data.coins);
      setAllCoins(fetch.data.data.coins);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchDollarPricing() {
    try {
      const fetch = await awesomeApi.get(``);
      console.log(fetch.data.USDBRL.ask);
      setDollarPrice(fetch.data.USDBRL.ask);
    } catch (err) {
      console.log(err);
    }
  }

  fetchAllCoins()
  fetchDollarPricing()
  
  return <ExchangeContext.Provider value={{allCoins, favoriteCoins, setFavoriteCoins, dollarPrice}}>{children}</ExchangeContext.Provider>;
};
