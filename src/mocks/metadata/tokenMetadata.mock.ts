import { ChainName } from "@lib/types";
import {
  TGetTokenMetadataResponse,
  TGetTokenMetadataResponseRaw,
} from "@business/metadata/getToken/types";

export const mockTokenMetadataResponseRaw: TGetTokenMetadataResponseRaw = {
  status: 200,
  result: {
    chain_name: ChainName.MAINNET,
    chain_id: 1,
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    name: "Tether USD",
    decimals: 6,
    symbol: "USDT",
    logo_url:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    actual_price: "1",
    is_verified: true,
    is_stable: true,
  },
};

export const mockTokenMetadataResponse: TGetTokenMetadataResponse = {
  chainName: ChainName.MAINNET,
  chainId: 1,
  address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  name: "Tether USD",
  decimals: 6,
  symbol: "USDT",
  logoUrl:
    "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
  actualPrice: "1",
  isVerified: true,
  isStable: true,
};
