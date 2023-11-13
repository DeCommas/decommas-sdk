import { TAddress, TWithAmount } from "@lib/types";
import { EvmChainName } from "@lib/chains";

export type TTokenRaw = {
  chain_name: EvmChainName;
  chain_id: number;
  address: TAddress;
  name: string | null;
  decimals: number;
  symbol: string;
  logo_url: string | null;
  actual_price: string | null;
  is_verified: boolean;
  is_stable: boolean;
  is_protocol_token: boolean;
  total_supply: string;
};

export type TToken = {
  chainName: EvmChainName;
  chainId: number;
  address: TAddress;
  name: string;
  decimals: number;
  symbol: string;
  logoUrl: string;
  actualPrice: string;
  isVerified: boolean;
  isStable: boolean;
  isProtocolToken: boolean;
  totalSupply?: string;
};

export type TTokenWithAmountRaw = TWithAmount<TTokenRaw>;

export type TTokenWithAmount = TWithAmount<TToken>;
