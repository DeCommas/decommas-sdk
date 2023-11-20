import { EvmChainName } from "@lib/chains";
import {
  TGetProtocolsResponse,
  TGetProtocolsResponseRaw,
} from "@business/namespaces/address/getProtocols/types";

export const mockProtocolsResponseRaw: TGetProtocolsResponseRaw = {
  count: 2,
  status: 200,
  result: [
    {
      chain_name: EvmChainName.MAINNET,
      chain_id: 137,
      protocol_id: "aave_v2",
      protocol_name: "Aave V2",
      protocol_logo: null,
      position: {
        asset_usd_value: "2.04045871341",
        debt_usd_value: "0",
        net_usd_value: "2.04045871341"
      }
    },
    {
      chain_name: EvmChainName.MAINNET,
      chain_id: 137,
      protocol_id: "aave_v3",
      protocol_name: "Aave V3",
      protocol_logo: null,
      position: {
        asset_usd_value: "1.0090216719749998",
        debt_usd_value: "0",
        net_usd_value: "1.0090216719749998"
      }
    }
  ],
};

export const mockProtocolsResponse: TGetProtocolsResponse = {
  count: 2,
  result: [
    {
      chainName: EvmChainName.MAINNET,
      chainId: 137,
      protocolId: "aave_v2",
      protocolName: "Aave V2",
      protocolLogo: null,
      position: {
        assetUsdValue: "2.04045871341",
        debtUsdValue: "0",
        netUsdValue: "2.04045871341"
      }
    },
    {
      chainName: EvmChainName.MAINNET,
      chainId: 137,
      protocolId: "aave_v3",
      protocolName: "Aave V3",
      protocolLogo: null,
      position: {
        assetUsdValue: "1.0090216719749998",
        debtUsdValue: "0",
        netUsdValue: "1.0090216719749998"
      }
    },
  ],
};
