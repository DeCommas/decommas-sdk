import { TToken, TTokenRaw } from "@business/domains/tokens/types";

export const tokenDataMapper = (raw: TTokenRaw): TToken => {
  const commonData = {
    chainName: raw.chain_name,
    chainId: raw.chain_id,
    address: raw.address,
    name: raw.name ?? "",
    decimals: raw.decimals,
    symbol: raw.symbol,
    logoUrl: raw.logo_url ?? "",
    actualPrice: raw.actual_price ?? "",
    isVerified: raw.is_verified,
    isStable: raw.is_stable,
    isProtocolToken: raw.is_protocol_token,
  };
  return raw.total_supply
    ? {
        ...commonData,
        totalSupply: raw.total_supply,
      }
    : commonData;
};
