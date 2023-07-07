import { PaginatedRequest } from "../../../infrastracture/network/types";

export type TGetTokensRequest = PaginatedRequest<{
  address: string;
  verified: boolean;
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
};

export type TGetTokensResponseRaw = {
  count: number;
  status: number;
  result: TTokenRaw[];
};

export type TGetTokenResponse = {
  chainName: string;
  chainId: number;
  address: string;
  name: string;
  decimals: number;
  symbol: string;
  logoUrl: string;
  actualPrice: number;
  isVerified: boolean;
  isStable: boolean;
  amount: number;
};

export type TGetTokensResponse = {
  count: number;
  status: number;
  result: TGetTokenResponse[];
};

export type TGetTokens = (
  request: TGetTokensRequest
) => Promise<TGetTokensResponse>;
