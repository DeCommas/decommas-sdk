import { TGetTokensResponse, TGetTokensResponseRaw } from "./types";

export const tokensDataMapper = (
  responseRaw: TGetTokensResponseRaw
): TGetTokensResponse => {
  const tokens = responseRaw.result.map((raw) => ({
    chainName: raw.chain_name,
    chainId: raw.chain_id,
    address: raw.address,
    name: raw.name,
    decimals: raw.decimals,
    symbol: raw.symbol,
    logoUrl: raw.logo_url,
    actualPrice: raw.actual_price,
    isVerified: raw.is_verified,
    isStable: raw.is_stable,
    amount: raw.amount,
  }));

  return {
    count: responseRaw.count,
    result: tokens,
  };
};
