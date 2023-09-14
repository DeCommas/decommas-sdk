import { PaginatedResponseRaw } from "../../../../infrastructure/network";
import { TToken, TTokenRaw } from "../../../domains/tokens/types";
import { EvmChainName } from "../../../../lib/chains";
export type TGetTokensMetadataRequest = {
    chains?: EvmChainName[];
};
export type TGetTokensMetadataResponseRaw = PaginatedResponseRaw<TTokenRaw>;
export type TGetTokensMetadata = (request?: TGetTokensMetadataRequest) => Promise<TToken[]>;
