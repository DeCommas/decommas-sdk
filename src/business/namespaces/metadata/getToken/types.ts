import { TAddress } from "@lib/types";
import { ApiResponse } from "@infrastructure/network";
import { TToken, TTokenRaw } from "@business/domains/tokens/types";
import { EvmChainName } from "@lib/chains";

export type TGetTokenMetadataRequest = {
  chainName: EvmChainName;
  contractAddress: TAddress;
};

export type TGetTokenMetadataResponseRaw = ApiResponse<TTokenRaw>;

export type TGetTokenMetadata = (
  request: TGetTokenMetadataRequest
) => Promise<TToken>;
