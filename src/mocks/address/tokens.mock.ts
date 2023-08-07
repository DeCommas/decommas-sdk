import {
  TGetTokensResponse,
  TGetTokensResponseRaw,
} from "@business/namespaces/address/getTokens/types";
import { ChainName } from "@lib/types";

export const mockTokensResponseRaw: TGetTokensResponseRaw = {
  count: 22,
  status: 200,
  result: [
    {
      chain_name: ChainName.MAINNET,
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
      is_protocol_token: true,
    },
  ],
};

export const mockTokensResponse: TGetTokensResponse = {
  count: 22,
  result: [
    {
      chainName: ChainName.MAINNET,
      chainId: 1,
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      name: "Tether USD",
      decimals: 6,
      symbol: "USDT",
      logoUrl:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
      actualPrice: "0.999985",
      isVerified: true,
      isStable: true,
      amount: "10000000",
      isProtocolToken: true,
    },
  ],
};
