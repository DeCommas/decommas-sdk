import {
  TGetNftsResponse,
  TGetNftsResponseRaw,
} from "@business/namespaces/address/getNnfts/types";
import { EvmChainName } from "@lib/chains";

export const mockNftsResponseRaw: TGetNftsResponseRaw = {
  count: 22,
  status: 200,
  result: [
    {
      chain_name: EvmChainName.MAINNET,
      chain_id: 1,
      contract_address: "0x76be3b62873462d2142405439777e971754e8e77",
      token_id: "10397",
      amount: "1",
      contract_type: "ERC-1155",
    },
  ],
};

export const mockNftsResponse: TGetNftsResponse = {
  count: 22,
  result: [
    {
      chainName: EvmChainName.MAINNET,
      chainId: 1,
      contractAddress: "0x76be3b62873462d2142405439777e971754e8e77",
      tokenId: "10397",
      amount: "1",
      contractType: "ERC-1155",
    },
  ],
};
