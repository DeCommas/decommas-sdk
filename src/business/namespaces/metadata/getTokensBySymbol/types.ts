import { PaginatedResponse } from "@infrastructure/network";
import { TToken } from "@business/domains/tokens/types";
import { EvmChainName } from "@lib/chains";

export type TGetTokensMetadataBySymbolRequest = {
  symbol: string;
  chains?: EvmChainName[];
};

export type TGetTokensMetadataBySymbol = (
  request: TGetTokensMetadataBySymbolRequest
) => Promise<PaginatedResponse<TToken>>;
