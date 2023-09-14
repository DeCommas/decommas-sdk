"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nftMetadataDataMapper = void 0;
const nftMetadataDataMapper = (responseRaw) => {
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
exports.nftMetadataDataMapper = nftMetadataDataMapper;
