import { ChainName, TAddress } from "@lib/types";
import { ApiResponse } from "@infrastructure/network";

export type TTxDetailRaw = {
  chain_name: ChainName;
  chain_id: number;
  block_number: number;
  block_timestamp: number;
  hash: string;
  transaction_index: number;
  from_address: TAddress;
  to_address: TAddress;
  value: string;
  fee: string;
  status: boolean;
  gas_price: string;
  gas_used: string;
  block_base_fee_per_gas: string;
  method_hash: string;
  method: string;
  transaction_tags: string[];
};

export type TTxDetail = {
  chainName: ChainName;
  chainId: number;
  blockNumber: number;
  blockTimestamp: number;
  hash: string;
  transactionIndex: number;
  fromAddress: TAddress;
  toAddress: TAddress;
  value: string;
  fee: string;
  status: boolean;
  gasPrice: string;
  gasUsed: string;
  blockBaseFeePerGas: string;
  methodHash: string;
  method: string;
  transactionTags: string[];
};

export type TGetTxDetailRequest = {
  chainName: ChainName;
  txHash: string;
};

export type TGetTxDetailResponseRaw = ApiResponse<TTxDetailRaw>;

export type TGetTxDetailResponse = TTxDetail;

export type TGetTxDetail = (
  request: TGetTxDetailRequest
) => Promise<TGetTxDetailResponse>;
