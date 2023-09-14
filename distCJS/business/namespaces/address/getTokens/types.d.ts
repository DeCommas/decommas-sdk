import { PaginatedRequest, PaginatedResponse, PaginatedResponseRaw } from "../../../../infrastructure/network";
import { TTokenWithAmountRaw, TTokenWithAmount } from "../../../domains/tokens/types";
import { EvmChainName } from "../../../../lib/chains";
export type TGetTokensRequest = PaginatedRequest<{
    address: string;
    verified?: boolean;
    chains?: EvmChainName[];
}>;
export type TGetTokensResponseRaw = PaginatedResponseRaw<TTokenWithAmountRaw>;
export type TGetTokensResponse = PaginatedResponse<TTokenWithAmount>;
export type TGetTokens = (request: TGetTokensRequest) => Promise<TGetTokensResponse>;
