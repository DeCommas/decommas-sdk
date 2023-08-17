import { coinDataMapper } from "@business/domains/coins/coinDataMapper";
import {
  TGetCoinsMetadataResponse,
  TGetCoinsMetadataResponseRaw,
} from "@business/namespaces/metadata/getCoins/types";

export const coinsMetadataDataMapper = (
  responseRaw: TGetCoinsMetadataResponseRaw
): TGetCoinsMetadataResponse => {
  return {
    count: responseRaw.count,
    result: responseRaw.result.map(coinDataMapper),
  };
};
