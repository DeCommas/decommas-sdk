import { TGetTransactionsResponse, TGetTransactionsResponseRaw } from "./types";

export const transactionsDataMapper = (
  responseRaw: TGetTransactionsResponseRaw
): TGetTransactionsResponse => {
  return {
    result: responseRaw.result.map((raw) => ({
      chainName: raw.chain_name,
      chainId: raw.chain_id,
      hash: raw.hash,
      blockNumber: raw.block_number,
      blockTimestamp: raw.block_timestamp,
      fromAddress: raw.from_address,
      toAddress: raw.to_address,
      value: raw.value,
      fee: raw.fee,
      method: raw.method,
      methodHash: raw.method_hash,
      status: raw.status,
      transactionTags: raw.transaction_tags,
      deployedContract: raw.deployed_contract,
      gasPrice: raw.gas_price,
      gasUsed: raw.gas_used,
      blockBaseFeePerGas: raw.block_base_fee_per_gas,
    })),
  };
};
