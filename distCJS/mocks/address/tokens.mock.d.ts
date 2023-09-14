import { TGetTokensResponse, TGetTokensResponseRaw } from "../../business/namespaces/address/getTokens/types";
import { PaginatedResponse, PaginatedResponseRaw } from "../../infrastructure/network";
import { TToken, TTokenRaw } from "../../business/domains/tokens/types";
export declare const mockTokensResponseRaw: PaginatedResponseRaw<TTokenRaw>;
export declare const mockTokensResponse: PaginatedResponse<TToken>;
export declare const mockTokensWithAmountResponseRaw: TGetTokensResponseRaw;
export declare const mockTokensWithAmountResponse: TGetTokensResponse;
