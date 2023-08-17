import { ChainName } from "@lib/types";
import {
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { TCoin, TCoinRaw } from "@business/domains/coins/types";

export type TGetCoinsMetadataRequest = {
  chains?: ChainName[];
};

export type TGetCoinsMetadataResponseRaw = PaginatedResponseRaw<TCoinRaw>;

export type TGetCoinsMetadataResponse = PaginatedResponse<TCoin>;

export type TGetCoinsMetadata = (
  request?: TGetCoinsMetadataRequest
) => Promise<TGetCoinsMetadataResponse>;
