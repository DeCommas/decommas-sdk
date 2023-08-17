import { ChainName, TAddress } from "@lib/types";
import { ApiResponse } from "@infrastructure/network";

export type TNftMetadataRaw = {
  chain_name: ChainName;
  chain_id: number;
  contract_address: TAddress;
  token_id: string;
  name: string | null;
  image_url: string | null;
  animation_url: string | null;
  contract_type: string;
  collection_name: string | null;
  collection_verified: boolean;
};

export type TNftMetadata = {
  chainName: ChainName;
  chainId: number;
  contractAddress: TAddress;
  tokenId: string;
  name: string;
  imageUrl: string;
  animationUrl: string;
  contractType: string;
  collectionName: string;
  collectionVerified: boolean;
};

export type TGetNftMetadataRequest = {
  chainName: ChainName;
  contractAddress: TAddress;
  tokenId: string;
};

export type TGetNftMetadataResponseRaw = ApiResponse<TNftMetadataRaw>;

export type TGetNftMetadataResponse = TNftMetadata;

export type TGetNftMetadata = (
  request: TGetNftMetadataRequest
) => Promise<TGetNftMetadataResponse>;
