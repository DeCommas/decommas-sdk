import { TGetCoinsResponse, TGetCoinsResponseRaw } from "./types";
import { coinDataMapper } from "@business/domains/coins/coinDataMapper";

export const coinsDataMapper = (
  responseRaw: TGetCoinsResponseRaw
): TGetCoinsResponse => {
  return {
    count: responseRaw.count,
    result: responseRaw.result.map((raw) => {
      return {
        ...coinDataMapper(raw),
        amount: raw.amount,
      };
    }),
  };
};
