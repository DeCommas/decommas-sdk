import { EvmChainName } from "@lib/chains";

export type TProtocolRaw = {
  chain_name: EvmChainName;
  chain_id: number;
  protocol_id: string;
  protocol_name: string;
  protocol_logo: string | null;
  position: {
    asset_usd_value: string,
    debt_usd_value: string,
    net_usd_value: string
  }
};

export type TProtocol = {
  chainName: EvmChainName;
  chainId: number;
  protocolId: string;
  protocolName: string;
  protocolLogo: string | null;
  position: {
    assetUsdValue: string,
    debtUsdValue: string,
    netUsdValue: string
  }
};

