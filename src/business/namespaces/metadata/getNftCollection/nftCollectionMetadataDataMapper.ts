import {
  TGetNftCollectionMetadataResponse,
  TGetNftCollectionMetadataResponseRaw,
} from "./types";

export const nftCollectionMetadataDataMapper = (
  responseRaw: TGetNftCollectionMetadataResponseRaw
): TGetNftCollectionMetadataResponse => {
  const raw = responseRaw.result;
  return {
    chainName: raw.chain_name,
    chainId: raw.chain_id,
    contractAddress: raw.contract_address,
    collectionName: raw.collection_name ?? "",
    collectionVerified: raw.collection_verified,
    floorPriceUsd: raw.floor_price_usd,
    marketCapUsd: raw.market_cap_usd,
    contractType: raw.contract_type,
  };
};
