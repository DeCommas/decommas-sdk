import { TCoin, TCoinRaw } from "./types";

export const coinDataMapper = (raw: TCoinRaw): TCoin => {
  return {
    chainName: raw.chain_name,
    chainId: raw.chain_id,
    name: raw.name,
    symbol: raw.symbol,
    logoUrl: raw.logo_url,
    decimals: raw.decimals,
    actualPrice: raw.actual_price,
  };
};
