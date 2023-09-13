import { TAddress } from "@lib/types";
import { ApiResponse } from "@infrastructure/network";
import { EvmChainName } from "@lib/chains";

export type TTxDetailRaw = {
  chain_name: EvmChainName;
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
  method_hash: string | null;
  method: string | null;
  transaction_tags: string[];
  deployed_contract: string | null;
};

export type TTxDetail = {
  chainName: EvmChainName;
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
  deployedContract: string;
};

export type TGetTxDetailRequest = {
  chainName: EvmChainName;
  txHash: string;
};

export type TGetTxDetailResponseRaw = ApiResponse<TTxDetailRaw>;

export type TGetTxDetailResponse = TTxDetail;

export type TGetTxDetail = (
  request: TGetTxDetailRequest
) => Promise<TGetTxDetailResponse>;
