import {
  TGetNftMetadataResponse,
  TGetNftMetadataResponseRaw,
} from "@business/namespaces/metadata/getNft/types";

export const nftMetadataDataMapper = (
  responseRaw: TGetNftMetadataResponseRaw
): TGetNftMetadataResponse => {
  const raw = responseRaw.result;
  return {
    chainName: raw.chain_name,
    chainId: raw.chain_id,
    contractAddress: raw.contract_address,
    tokenId: raw.token_id,
    name: raw.name ?? "",
    imageUrl: raw.image_url ?? "",
    animationUrl: raw.animation_url ?? "",
    contractType: raw.contract_type,
    collectionName: raw.collection_name ?? "",
    collectionVerified: raw.collection_verified,
  };
};
