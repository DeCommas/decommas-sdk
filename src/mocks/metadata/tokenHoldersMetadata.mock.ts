import {
  TGetTokenHoldersResponse,
  TGetTokenHoldersResponseRaw,
} from "@business/namespaces/metadata/getTokenHolders/types";
import { EvmChainName } from "@lib/chains";

export const mockTokenHoldersMetadataResponseRaw: TGetTokenHoldersResponseRaw =
  {
    status: 200,
    result: [
      {
        holder_address: "0xcee284f754e854890e311e3280b767f80797180d",
        amount: "660923098076049",
        decimals: "6",
        actual_price: "1.001",
        chain_id: "1",
        chain_name: EvmChainName.MAINNET,
      },
    ],
  };

export const mockTokenHoldersMetadataResponse: TGetTokenHoldersResponse = [
  {
    holderAddress: "0xcee284f754e854890e311e3280b767f80797180d",
    amount: "660923098076049",
    decimals: 6,
    actualPrice: "1.001",
    chainId: 1,
    chainName: EvmChainName.MAINNET,
  },
];
