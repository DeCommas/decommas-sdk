import {
  TGetErc20TransferByTxsResponse,
  TGetErc20TransferByTxsResponseRaw,
} from "./types";

export const erc20TransfersByTxDataMapper = (
  responseRaw: TGetErc20TransferByTxsResponseRaw
): TGetErc20TransferByTxsResponse => {
  return {
    result: responseRaw.result.map((raw) => ({
      blockNumber: raw.block_number,
      blockTimestamp: raw.block_timestamp,
      fromAddress: raw.from_address,
      toAddress: raw.to_address,
      tokenAddress: raw.token_address,
      amount: raw.amount,
      logIndex: raw.log_index,
    })),
  };
};
