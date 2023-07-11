import { TGetNftsResponse, TGetNftsResponseRaw } from "./types";

export const nftsDataMapper = (
  responseRaw: TGetNftsResponseRaw
): TGetNftsResponse => {
  return {
    count: responseRaw.count,
    result: responseRaw.result.map((raw) => ({
      chainName: raw.chain_name,
      chainId: raw.chain_id,
      contractAddress: raw.contract_address,
      tokenId: Number(raw.token_id),
      amount: Number(raw.amount),
    })),
  };
};
