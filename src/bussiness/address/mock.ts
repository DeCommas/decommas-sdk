import { TGetTokensResponseRaw, TGetTokensResponse } from "./getTokens/types";

export const mockResponseRaw: TGetTokensResponseRaw = {
  count: 22,
  status: 200,
  result: [
    {
      chain_name: "mainnet",
      chain_id: 1,
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      name: "Tether USD",
      decimals: 6,
      symbol: "USDT",
      logo_url:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
      actual_price: "0.999985",
      is_verified: true,
      is_stable: true,
      amount: "10000000",
    },
  ],
};

export const mockResponse: TGetTokensResponse = {
  count: 22,
  status: 200,
  result: [
    {
      chainName: "mainnet",
      chainId: 1,
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      name: "Tether USD",
      decimals: 6,
      symbol: "USDT",
      logoUrl:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
      actualPrice: 0.999985,
      isVerified: true,
      isStable: true,
      amount: 10000000,
    },
  ],
};
