import { ChainName, TAddress } from "@lib/types";
import {
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";

export type TCoinRaw = {
  chain_name: ChainName;
  chain_id: number;
  name: string;
  symbol: string;
  logo_url: string;
  decimals: number;
  amount: string;
  actual_price: string;
};

export type TCoin = {
  chainName: ChainName;
  chainId: number;
  name: string;
  symbol: string;
  logoUrl: string;
  decimals: number;
  amount: string;
  actualPrice: string;
};

export type TGetCoinsRequest = {
  address: TAddress;
  chains?: ChainName[];
};

export type TGetCoinsResponseRaw = PaginatedResponseRaw<TCoinRaw>;

export type TGetCoinsResponse = PaginatedResponse<TCoin>;

export type TGetCoins = (
  request: TGetCoinsRequest
) => Promise<TGetCoinsResponse>;
