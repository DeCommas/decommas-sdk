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
  method: string;
  method_hash: string;
  status: boolean;
  transaction_tags: string[];
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
