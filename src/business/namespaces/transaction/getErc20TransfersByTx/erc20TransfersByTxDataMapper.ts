import {
  TGetErc20TransfersByTxResponse,
  TGetErc20TransfersByTxResponseRaw,
} from "./types";

export const erc20TransfersByTxDataMapper = (
  responseRaw: TGetErc20TransfersByTxResponseRaw
): TGetErc20TransfersByTxResponse => {
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
