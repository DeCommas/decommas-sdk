import { EvmChainName } from "@lib/chains";
import { TGetTokenMetadataResponseRaw } from "@business/namespaces/metadata/getToken/types";
import { TToken } from "@business/domains/tokens/types";

export const mockTokenMetadataResponseRaw: TGetTokenMetadataResponseRaw = {
  status: 200,
  result: {
    chain_name: EvmChainName.MAINNET,
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
    is_protocol_token: true,
    total_supply: "22"
  },
};

export const mockTokenMetadataResponse: TToken = {
  chainName: EvmChainName.MAINNET,
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
  isProtocolToken: true,
  totalSupply: "22"
};
