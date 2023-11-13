import { TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { EvmChainName } from "@lib/chains";

export type TNftRaw = {
  chain_name: EvmChainName;
  chain_id: number;
  contract_address: TAddress;
  token_id: string;
  amount: string;
  contract_type: string;
  collection_verified: boolean;
};

export type TNft = {
  chainName: EvmChainName;
  chainId: number;
  contractAddress: TAddress;
  tokenId: string;
  amount: string;
  contractType: string;
  collectionVerified: boolean;
};

export type TGetNftsRequest = PaginatedRequest<{
  address: TAddress;
  chains?: EvmChainName[];
  verified?: boolean;
}>;

export type TGetNftsResponseRaw = PaginatedResponseRaw<TNftRaw>;

export type TGetNftsResponse = PaginatedResponse<TNft>;

export type TGetNfts = (request: TGetNftsRequest) => Promise<TGetNftsResponse>;
