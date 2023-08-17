import { ChainName, TAddress, TWithAmount } from "@lib/types";

export type TTokenRaw = {
  chain_name: ChainName;
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
};

export type TToken = {
  chainName: ChainName;
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
};

export type TTokenWithAmountRaw = TWithAmount<TTokenRaw>;

export type TTokenWithAmount = TWithAmount<TToken>;
