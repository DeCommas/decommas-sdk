import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { ChainName } from "@lib/types";
import {
  TTokenWithAmountRaw,
  TTokenWithAmount,
} from "@business/domains/tokens/types";

export type TGetTokensRequest = PaginatedRequest<{
  address: string;
  verified?: boolean;
  chains?: ChainName[];
}>;

export type TGetTokensResponseRaw = PaginatedResponseRaw<TTokenWithAmountRaw>;

export type TGetTokensResponse = PaginatedResponse<TTokenWithAmount>;

export type TGetTokens = (
  request: TGetTokensRequest
) => Promise<TGetTokensResponse>;
