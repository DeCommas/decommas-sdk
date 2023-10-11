import {
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { TCoin, TCoinRaw } from "@business/domains/coins/types";
import { EvmChainName } from "@lib/chains";

export type TGetCoinsMetadataRequest = {
  chains?: EvmChainName[];
};

export type TGetCoinsMetadataResponseRaw = PaginatedResponseRaw<TCoinRaw>;

export type TGetCoinsMetadataResponse = PaginatedResponse<TCoin>;

export type TGetCoinsMetadata = (
  request?: TGetCoinsMetadataRequest
) => Promise<TGetCoinsMetadataResponse>;
