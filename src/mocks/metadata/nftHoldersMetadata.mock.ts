import { EvmChainName } from "@lib/chains";
import {
  TGetNftHoldersResponse,
  TGetNftHoldersResponseRaw,
} from "@business/namespaces/metadata/getNftHolders/types";

export const mockNftHoldersMetadataResponseRaw: TGetNftHoldersResponseRaw = {
  status: 200,
  result: [
    {
      holder_address: "0x81cf13164315186e4daf24e1ad94d1adbba925da",
      amount: "12",
      chain_id: 1,
      chain_name: EvmChainName.MAINNET,
    },
  ],
};

export const mockNftHoldersMetadataResponse: TGetNftHoldersResponse = [
  {
    holderAddress: "0x81cf13164315186e4daf24e1ad94d1adbba925da",
    amount: "12",
    chainId: 1,
    chainName: EvmChainName.MAINNET,
  },
];
