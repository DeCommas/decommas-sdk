import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { ChainName } from "@lib/types";

export type TGetTokensRequest = PaginatedRequest<{
  address: string;
  verified?: boolean;
  chains?: ChainName[];
}>;

export type TTokenRaw = {
  chain_name: string;
  chain_id: number;
  address: string;
  name: string;
  decimals: number;
  symbol: string;
  logo_url: string;
  actual_price: string;
  is_verified: boolean;
  is_stable: boolean;
  amount: string;
  is_protocol_token: boolean;
};

export type TToken = {
  chainName: string;
  chainId: number;
  address: string;
  name: string;
  decimals: number;
  symbol: string;
  logoUrl: string;
  actualPrice: string;
  isVerified: boolean;
  isStable: boolean;
  amount: string;
  isProtocolToken: boolean;
};

export type TGetTokensResponseRaw = PaginatedResponseRaw<TTokenRaw>;

export type TGetTokensResponse = PaginatedResponse<TToken>;

export type TGetTokens = (
  request: TGetTokensRequest
) => Promise<TGetTokensResponse>;
