import { EvmChainName } from "@lib/chains";
import {
  TGetNftCollectionMetadataResponse,
  TGetNftCollectionMetadataResponseRaw,
} from "@business/namespaces/metadata/getNftCollection/types";

export const mockNftCollectionMetadataResponseRaw: TGetNftCollectionMetadataResponseRaw = {
  status: 200,
  result: {
    chain_name: EvmChainName.MAINNET,
    chain_id: 1,
    contract_address: "0x76be3b62873462d2142405439777e971754e8e77",
    collection_name: "parallel",
    collection_verified: false,
    floor_price_usd: "2.4",
    market_cap_usd: "7307032",
    contract_type: "ERC-721",
  },
};

export const mockNftCollectionMetadataResponse: TGetNftCollectionMetadataResponse = {
  chainName: EvmChainName.MAINNET,
  chainId: 1,
  contractAddress: "0x76be3b62873462d2142405439777e971754e8e77",
  collectionName: "parallel",
  collectionVerified: false,
  floorPriceUsd: "2.4",
  marketCapUsd: "7307032",
  contractType: "ERC-721",
};
