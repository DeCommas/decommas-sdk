import {
  TGetTokenHoldersResponse,
  TGetTokenHoldersResponseRaw,
} from "@business/namespaces/metadata/getTokenHolders/types";

export const tokenHoldersDataMapper = (
  raw: TGetTokenHoldersResponseRaw
): TGetTokenHoldersResponse => {
  return raw.result.map((holder) => {
    return {
      amount: holder.amount,
      holderAddress: holder.holder_address,
      decimals: holder.decimals,
      actualPrice: holder.actual_price,
      chainId: holder.chain_id,
      chainName: holder.chain_name,
    };
  });
};
