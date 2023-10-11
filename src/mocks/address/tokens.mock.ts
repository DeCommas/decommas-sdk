import {
  TGetTokensResponse,
  TGetTokensResponseRaw,
} from "@business/namespaces/address/getTokens/types";
import { EvmChainName } from "@lib/chains";
import {
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { TToken, TTokenRaw } from "@business/domains/tokens/types";

export const mockTokensResponseRaw: PaginatedResponseRaw<TTokenRaw> = {
  count: 22,
  status: 200,
  result: [
    {
      chain_name: EvmChainName.MAINNET,
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
      is_protocol_token: true,
    },
  ],
};

export const mockTokensResponse: PaginatedResponse<TToken> = {
  count: 22,
  result: [
    {
      chainName: EvmChainName.MAINNET,
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
      isProtocolToken: true,
    },
  ],
};

export const mockTokensWithAmountResponseRaw: TGetTokensResponseRaw = {
  count: 22,
  status: 200,
  result: mockTokensResponseRaw.result.map((r) => {
    return {
      ...r,
      amount: "10000000",
    };
  }),
};

export const mockTokensWithAmountResponse: TGetTokensResponse = {
  count: 22,
  result: mockTokensResponse.result.map((r) => {
    return {
      ...r,
      amount: "10000000",
    };
  }),
};
