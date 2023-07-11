import { TGetCoinsResponse, TGetCoinsResponseRaw } from "./types";

export const coinsDataMapper = (
  responseRaw: TGetCoinsResponseRaw
): TGetCoinsResponse => {
  return {
    count: responseRaw.count,
    result: responseRaw.result.map((raw) => ({
      chainName: raw.chain_name,
      chainId: raw.chain_id,
      name: raw.name,
      symbol: raw.symbol,
      logoUrl: raw.logo_url,
      decimals: raw.decimals,
      amount: raw.amount,
      actualPrice: raw.actual_price,
    })),
  };
};
