import { ChainName } from "@lib/types";
import {
  TGetNftMetadataResponse,
  TGetNftMetadataResponseRaw,
} from "@business/namespaces/metadata/getNft/types";

export const mockNftMetadataResponseRaw: TGetNftMetadataResponseRaw = {
  status: 200,
  result: {
    chain_name: ChainName.MAINNET,
    chain_id: 1,
    contract_address: "0x76be3b62873462d2142405439777e971754e8e77",
    token_id: "10709",
    name: "Combat Veteran",
    image_url:
      "https://nftmedia.parallelnft.com/parallel-alpha/QmenK9MVkxwfNDay4LHpsQBZg2rxtMa9HiYhkf9pWMiE4k/image.png",
    animation_url: null,
    contract_type: "ERC-1155",
    collection_name: "parallel",
    collection_verified: false,
  },
};

export const mockNftMetadataResponse: TGetNftMetadataResponse = {
  chainName: ChainName.MAINNET,
  chainId: 1,
  contractAddress: "0x76be3b62873462d2142405439777e971754e8e77",
  tokenId: "10709",
  name: "Combat Veteran",
  imageUrl:
    "https://nftmedia.parallelnft.com/parallel-alpha/QmenK9MVkxwfNDay4LHpsQBZg2rxtMa9HiYhkf9pWMiE4k/image.png",
  animationUrl: "",
  contractType: "ERC-1155",
  collectionName: "parallel",
  collectionVerified: false,
};
