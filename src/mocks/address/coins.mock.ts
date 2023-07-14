import { ChainName } from "@lib/types";
import {
  TGetCoinsResponse,
  TGetCoinsResponseRaw,
} from "@business/address/getCoins/types";

export const mockCoinsResponseRaw: TGetCoinsResponseRaw = {
  count: 22,
  status: 200,
  result: [
    {
      chain_name: ChainName.MAINNET,
      chain_id: 1,
      name: "ethereum",
      symbol: "ETH",
      logo_url:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      decimals: 18,
      amount: "38368326268114187",
      actual_price: "1869.17",
    },
  ],
};

export const mockCoinsResponse: TGetCoinsResponse = {
  count: 22,
  result: [
    {
      chainName: ChainName.MAINNET,
      chainId: 1,
      name: "ethereum",
      symbol: "ETH",
      logoUrl:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      decimals: 18,
      amount: "38368326268114187",
      actualPrice: "1869.17",
    },
  ],
};
