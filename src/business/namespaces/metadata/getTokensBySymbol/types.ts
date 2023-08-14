import { ChainName } from "@lib/types";
import { PaginatedResponse } from "@infrastructure/network";
import { TToken } from "@business/domains/tokens/types";

export type TGetTokensMetadataBySymbolRequest = {
  symbol: string;
  chains?: ChainName[];
};

export type TGetTokensMetadataBySymbol = (
  request: TGetTokensMetadataBySymbolRequest
) => Promise<PaginatedResponse<TToken>>;
