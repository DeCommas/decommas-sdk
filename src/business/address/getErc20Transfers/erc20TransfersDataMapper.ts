import {
  TGetErc20TransfersResponse,
  TGetErc20TransfersResponseRaw,
} from "./types";

export const erc20TransfersDataMapper = (
  responseRaw: TGetErc20TransfersResponseRaw
): TGetErc20TransfersResponse => {
  return {
    result: responseRaw.result.map((raw) => ({
      chainName: raw.chain_name,
      chainId: raw.chain_id,
      blockNumber: raw.block_number,
      blockTimestamp: raw.block_timestamp,
      logIndex: raw.log_index,
      fromAddress: raw.from_address,
      toAddress: raw.to_address,
      tokenAddress: raw.token_address,
      amount: raw.amount,
      transactionHash: raw.transaction_hash,
      method: raw.method,
      methodHash: raw.method_hash,
    })),
  };
};
