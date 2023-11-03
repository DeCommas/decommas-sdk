import {
  TGetNftHoldersResponse,
  TGetNftHoldersResponseRaw,
} from "@business/namespaces/metadata/getNftHolders/types";

export const nftHoldersDataMapper = (
  raw: TGetNftHoldersResponseRaw
): TGetNftHoldersResponse => {
  return raw.result.map((holder) => {
    return {
      amount: holder.amount,
      holderAddress: holder.holder_address,
      chainId: holder.chain_id,
      chainName: holder.chain_name,
    };
  });
};
