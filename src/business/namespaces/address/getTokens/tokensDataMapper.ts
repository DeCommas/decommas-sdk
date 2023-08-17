import { TGetTokensResponse, TGetTokensResponseRaw } from "./types";
import { tokenDataMapper } from "@business/domains/tokens/tokenDataMapper";

export const tokensDataMapper = (
  responseRaw: TGetTokensResponseRaw
): TGetTokensResponse => {
  return {
    count: responseRaw.count,
    result: responseRaw.result.map((tokenRaw) => ({
      ...tokenDataMapper(tokenRaw),
      amount: tokenRaw.amount,
    })),
  };
};
