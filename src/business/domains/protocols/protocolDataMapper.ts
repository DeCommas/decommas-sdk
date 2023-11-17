import { TProtocol, TProtocolRaw } from "./types";

export const protocolDataMapper = (raw: TProtocolRaw): TProtocol => {
  return {
    chainName: raw.chain_name,
    chainId: raw.chain_id,
    protocolId: raw.protocol_id,
    protocolName: raw.protocol_name,
    protocolLogo: raw.protocol_logo ?? "",
    position: {
      assetUsdValue: raw.position.asset_usd_value,
      debtUsdValue: raw.position.debt_usd_value,
      netUsdValue: raw.position.net_usd_value
    }
  };
};
