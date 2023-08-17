import { ChainName, TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";

export type TTransactionRaw = {
  chain_name: ChainName;
  chain_id: number;
  hash: string;
  block_number: number;
  block_timestamp: number;
  from_address: string;
  to_address: string;
  value: string;
  fee: string;
  method: string | null;
  method_hash: string | null;
  status: boolean;
  transaction_tags: string[];
  deployed_contract: string | null;
  gas_price: string;
  gas_used: string;
  block_base_fee_per_gas: string;
};

export type TTransaction = {
  chainName: ChainName;
  chainId: number;
  hash: string;
  blockNumber: number;
  blockTimestamp: number;
  fromAddress: string;
  toAddress: string;
  value: string;
  fee: string;
  method: string;
  methodHash: string;
  status: boolean;
  transactionTags: string[];
  deployedContract: string;
  gasPrice: string;
  gasUsed: string;
  blockBaseFeePerGas: string;
};

export type TGetTransactionsRequest = PaginatedRequest<{
  address: TAddress;
  chains?: ChainName[];
}>;

export type TGetTransactionsResponseRaw = Omit<
  PaginatedResponseRaw<TTransactionRaw>,
  "count"
>;

export type TGetTransactionsResponse = Omit<
  PaginatedResponse<TTransaction>,
  "count"
>;

export type TGetTransactions = (
  request: TGetTransactionsRequest
) => Promise<TGetTransactionsResponse>;
