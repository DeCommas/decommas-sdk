import {
  TGetNftTransfersByTxResponse,
  TGetNftTransfersByTxResponseRaw,
} from "./types";

export const nftTransfersByTxDataMapper = (
  responseRaw: TGetNftTransfersByTxResponseRaw
): TGetNftTransfersByTxResponse => {
  return {
    result: responseRaw.result.map((raw) => ({
      blockNumber: raw.block_number,
      blockTimestamp: raw.block_timestamp,
      fromAddress: raw.from_address,
      toAddress: raw.to_address,
      tokenAddress: raw.token_address,
      tokenId: raw.token_id,
      amount: raw.amount,
      logIndex: raw.log_index,
      contractType: raw.contract_type,
    })),
  };
};
