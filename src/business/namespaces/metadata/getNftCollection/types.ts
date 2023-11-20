import { TAddress } from "@lib/types";
import { ApiResponse } from "@infrastructure/network";
import { EvmChainName } from "@lib/chains";

export type TNftCollectionMetadataRaw = {
  chain_name: EvmChainName;
  chain_id: number;
  contract_address: TAddress;
  collection_name: string | null;
  collection_verified: boolean;
  floor_price_usd: string;
  market_cap_usd: string;
  contract_type: string;
};

export type TNftCollectionMetadata = {
  chainName: EvmChainName;
  chainId: number;
  contractAddress: TAddress;
  collectionName: string;
  collectionVerified: boolean;
  floorPriceUsd: string;
  marketCapUsd: string;
  contractType: string;
};

export type TGetNftCollectionMetadataRequest = {
  chainName: EvmChainName;
  contractAddress: TAddress;
};

export type TGetNftCollectionMetadataResponseRaw = ApiResponse<TNftCollectionMetadataRaw>;

export type TGetNftCollectionMetadataResponse = TNftCollectionMetadata;

export type TGetNftMetadata = (
  request: TGetNftCollectionMetadataRequest
) => Promise<TGetNftCollectionMetadataResponse>;
