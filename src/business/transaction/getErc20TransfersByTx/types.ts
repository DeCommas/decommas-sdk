import { ChainName, TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";

export type TErc20TransferByTxRaw = {
  block_number: number;
  block_timestamp: number;
  from_address: TAddress;
  to_address: TAddress;
  token_address: TAddress;
  amount: string;
  log_index: number;
};

export type TErc20TransferByTx = {
  blockNumber: number;
  blockTimestamp: number;
  fromAddress: TAddress;
  toAddress: TAddress;
  tokenAddress: TAddress;
  amount: string;
  logIndex: number;
};

export type TGetErc20TransferByTxsRequest = PaginatedRequest<{
  txHash: string;
  chainName: ChainName;
}>;

export type TGetErc20TransferByTxsResponseRaw = Omit<
  PaginatedResponseRaw<TErc20TransferByTxRaw>,
  "count"
>;

export type TGetErc20TransferByTxsResponse = Omit<
  PaginatedResponse<TErc20TransferByTx>,
  "count"
>;

export type TGetErc20TransferByTxs = (
  request: TGetErc20TransferByTxsRequest
) => Promise<TGetErc20TransferByTxsResponse>;
