import { ChainName, TAddress } from "@lib/types";
import { ApiResponse } from "@infrastructure/network";
import { TToken, TTokenRaw } from "@business/domains/tokens/types";

export type TGetTokenMetadataRequest = {
  chainName: ChainName;
  contractAddress: TAddress;
};

export type TGetTokenMetadataResponseRaw = ApiResponse<TTokenRaw>;

export type TGetTokenMetadata = (
  request: TGetTokenMetadataRequest
) => Promise<TToken>;
