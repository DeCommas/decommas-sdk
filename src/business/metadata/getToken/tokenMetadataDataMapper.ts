import {
  TGetTokenMetadataResponse,
  TGetTokenMetadataResponseRaw,
} from "./types";

export const tokenMetadataDataMapper = (
  responseRaw: TGetTokenMetadataResponseRaw
): TGetTokenMetadataResponse => {
  const raw = responseRaw.result;
  return {
    chainName: raw.chain_name,
    chainId: raw.chain_id,
    address: raw.address,
    name: raw.name,
    decimals: raw.decimals,
    symbol: raw.symbol,
    logoUrl: raw.logo_url ?? "",
    actualPrice: raw.actual_price ?? "",
    isVerified: raw.is_verified,
    isStable: raw.is_stable,
    isProtocolToken: raw.is_protocol_token,
  };
};
