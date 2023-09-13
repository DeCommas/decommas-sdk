import { EvmChainName } from "@lib/chains";
import {
  TGetCoinsResponse,
  TGetCoinsResponseRaw,
} from "@business/namespaces/address/getCoins/types";
import {
  TGetCoinsMetadataResponse,
  TGetCoinsMetadataResponseRaw,
} from "@business/namespaces/metadata/getCoins/types";

export const mockCoinsMetadataResponseRaw: TGetCoinsMetadataResponseRaw = {
  count: 22,
  status: 200,
  result: [
    {
      chain_name: EvmChainName.MAINNET,
      chain_id: 1,
      name: "ethereum",
      symbol: "ETH",
      logo_url:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      decimals: 18,
      actual_price: "1869.17",
    },
  ],
};

export const mockCoinsMetadataResponse: TGetCoinsMetadataResponse = {
  count: 22,
  result: [
    {
      chainName: EvmChainName.MAINNET,
      chainId: 1,
      name: "ethereum",
      symbol: "ETH",
      logoUrl:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      decimals: 18,
      actualPrice: "1869.17",
    },
  ],
};

export const mockCoinsResponseRaw: TGetCoinsResponseRaw = {
  count: 22,
  status: 200,
  result: mockCoinsMetadataResponseRaw.result.map((item) => {
    return {
      ...item,
      amount: "38368326268114187",
    };
  }),
};

export const mockCoinsResponse: TGetCoinsResponse = {
  count: 22,
  result: mockCoinsMetadataResponse.result.map((item) => {
    return {
      ...item,
      amount: "38368326268114187",
    };
  }),
};
