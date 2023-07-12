import { ChainName, TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";

export type TErc20TransferRaw = {
  chain_name: ChainName;
  chain_id: number;
  block_number: number;
  block_timestamp: number;
  log_index: number;
  from_address: TAddress;
  to_address: TAddress;
  token_address: TAddress;
  amount: string;
  transaction_hash: string;
  method: string;
  method_hash: string;
};

export type TErc20Transfer = {
  chainName: ChainName;
  chainId: number;
  blockNumber: number;
  blockTimestamp: number;
  logIndex: number;
  fromAddress: TAddress;
  toAddress: TAddress;
  tokenAddress: TAddress;
  amount: string;
  transactionHash: string;
  method: string;
  methodHash: string;
};

export type TGetErc20TransfersRequest = PaginatedRequest<{
  address: TAddress;
  chains?: ChainName[];
}>;

export type TGetErc20TransfersResponseRaw = Omit<
  PaginatedResponseRaw<TErc20TransferRaw>,
  "count"
>;

export type TGetErc20TransfersResponse = Omit<
  PaginatedResponse<TErc20Transfer>,
  "count"
>;

export type TGetErc20Transfers = (
  request: TGetErc20TransfersRequest
) => Promise<TGetErc20TransfersResponse>;
