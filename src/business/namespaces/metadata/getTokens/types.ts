import { ChainName } from "@lib/types";
import { ApiResponse } from "@infrastructure/network";
import { TToken, TTokenRaw } from "@business/domains/tokens/types";

export type TGetTokensMetadataRequest = {
  chains?: ChainName[];
};

export type TGetTokensMetadataResponseRaw = ApiResponse<TTokenRaw[]>;

export type TGetTokensMetadata = (
  request?: TGetTokensMetadataRequest
) => Promise<TToken[]>;
