import { ChainName, TWithAmount } from "@lib/types";

export type TCoinRaw = {
  chain_name: ChainName;
  chain_id: number;
  name: string;
  symbol: string;
  logo_url: string;
  decimals: number;
  actual_price: string;
};

export type TCoin = {
  chainName: ChainName;
  chainId: number;
  name: string;
  symbol: string;
  logoUrl: string;
  decimals: number;
  actualPrice: string;
};

export type TCoinWithAmountRaw = TWithAmount<TCoinRaw>;

export type TCoinWithAmount = TWithAmount<TCoin>;
