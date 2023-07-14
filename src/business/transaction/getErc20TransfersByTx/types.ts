import { ChainName, TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";

export type TErc20TransfersByTxRaw = {
  block_number: number;
  block_timestamp: number;
  from_address: TAddress;
  to_address: TAddress;
  token_address: TAddress;
  amount: string;
  log_index: number;
};

export type TErc20TransfersByTx = {
  blockNumber: number;
  blockTimestamp: number;
  fromAddress: TAddress;
  toAddress: TAddress;
  tokenAddress: TAddress;
  amount: string;
  logIndex: number;
};

export type TGetErc20TransfersByTxRequest = PaginatedRequest<{
  txHash: string;
  chainName: ChainName;
}>;

export type TGetErc20TransfersByTxResponseRaw = Omit<
  PaginatedResponseRaw<TErc20TransfersByTxRaw>,
  "count"
>;

export type TGetErc20TransfersByTxResponse = Omit<
  PaginatedResponse<TErc20TransfersByTx>,
  "count"
>;

export type TGetErc20TransfersByTxs = (
  request: TGetErc20TransfersByTxRequest
) => Promise<TGetErc20TransfersByTxResponse>;
