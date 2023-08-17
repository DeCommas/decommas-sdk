import { TGetNftTransfersResponse, TGetNftTransfersResponseRaw } from "./types";

export const nftTransfersDataMapper = (
  responseRaw: TGetNftTransfersResponseRaw
): TGetNftTransfersResponse => {
  return {
    result: responseRaw.result.map((raw) => ({
      chainName: raw.chain_name,
      chainId: raw.chain_id,
      blockNumber: raw.block_number,
      blockTimestamp: raw.block_timestamp,
      logIndex: raw.log_index,
      fromAddress: raw.from_address,
      toAddress: raw.to_address,
      contractAddress: raw.contract_address,
      tokenId: raw.token_id,
      contractType: raw.contract_type,
      amount: raw.amount,
      transactionHash: raw.transaction_hash,
      method: raw.method ?? "",
      methodHash: raw.method_hash ?? "",
    })),
  };
};
